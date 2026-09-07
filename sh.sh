#!/usr/bin/env bash

set -euo pipefail

question="${1:-}"
project_root="$(cd "$(dirname "$0")" && pwd)"
source_dir="$project_root/src/assets/$question"
main_file="$project_root/src/main.jsx"

if [[ ! "$question" =~ ^q[1-9]$ ]]; then
    echo "Usage: ./switch-question.sh q1"
    echo "Choose a question from q1 to q9."
    exit 1
fi

if [[ ! -d "$source_dir" ]]; then
    echo "Question folder not found: $source_dir"
    exit 1
fi

temporary_dir="$(mktemp -d)"
trap 'rm -rf "$temporary_dir"' EXIT

cp -R "$source_dir/." "$temporary_dir/"

for folder in "$project_root/src"/q[1-9]; do
  [[ -d "$folder" ]] && rm -rf "$folder"
done

for file in App.jsx Body.jsx form.jsx Assignment.jsx Book.jsx Expense.jsx Appointment.jsx Order.jsx Student.jsx Application.jsx Registration.jsx Workout.jsx; do
  rm -f "$project_root/src/$file"
done

cp -R "$temporary_dir/." "$project_root/src/"

cat > "$main_file" <<EOF
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
EOF

echo "Now using $question."
echo "Run: npm run dev"