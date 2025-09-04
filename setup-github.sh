#!/bin/bash

# GitHub Repository Setup Script
# Run this after creating your GitHub repository

echo "Setting up GitHub repository..."

# Check if repository URL is provided
if [ -z "$1" ]; then
    echo "Usage: ./setup-github.sh https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
    echo "Please provide your GitHub repository URL"
    exit 1
fi

REPO_URL=$1

# Remove the original remote
echo "Removing original remote..."
git remote remove origin

# Add your new repository as the origin
echo "Adding your repository as origin..."
git remote add origin $REPO_URL

# Push to your repository
echo "Pushing to your repository..."
git push -u origin main

echo "✅ GitHub repository setup complete!"
echo "Now you can go to Vercel and import this repository."
