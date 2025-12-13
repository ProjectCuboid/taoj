#!/bin/bash
# deploy.sh

set -e

echo "Pulling latest from GitHub..."
git pull origin main

workers=("uptime" "home")

for w in "${workers[@]}"; do
    echo "Deploying $w Worker..."
    cd "$w"
    npx wrangler deploy
    cd ..
done

echo "All Workers deployed!"
