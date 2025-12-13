#!/bin/bash
# newworker.sh

set -e

if [ -z "$1" ]; then
    echo "Usage: ./newworker.sh <WorkerName>"
    exit 1
fi

WORKER_NAME="$1"

npx wrangler init "$WORKER_NAME" --from-dash "$WORKER_NAME"

cd "$WORKER_NAME"

cat > .gitignore << 'EOF'
node_modules/
.dev.vars
.wrangler/
EOF

git add .
git commit -m "Initial commit for $WORKER_NAME Worker"

echo "$WORKER_NAME Worker initialized!"
