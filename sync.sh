#!/bin/bash

# ./sync.sh [remote|push|pull]

REMOTE_URL="https://github.com/ProjectCuboid/taoj.git"

if [ "$1" == "remote" ]; then
    echo "Adding remote..."
    git remote add origin $REMOTE_URL
    git remote -v
elif [ "$1" == "push" ]; then
    echo "Pushing to remote..."
    git push -u origin main
elif [ "$1" == "pull" ]; then
    echo "Pulling from remote..."
    git pull origin main
else
    echo "Usage: ./sync.sh [remote|push|pull]"
fi
