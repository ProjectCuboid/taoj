#!/bin/bash
# deploy.sh

set -e

echo "Pulling latest from GitHub..."
git pull origin main

echo "Deploying Worker..."
cd uptime
npx wrangler deploy
cd ..

echo "Deployment complete!"
