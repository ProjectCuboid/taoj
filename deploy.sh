#!/bin/bash
# deploy.sh - multi-worker deploy with Wrangler OAuth

workers=("uptime" "home")

git pull origin main

for w in "${workers[@]}"; do
    echo "Deploying $w..."
    cd "$w"
    npx wrangler deploy
    cd ..
done

echo "All Workers deployed!"
