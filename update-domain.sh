#!/bin/bash

# Script to update domain configuration
# Usage: ./update-domain.sh yourdomain.com

if [ -z "$1" ]; then
    echo "Usage: ./update-domain.sh yourdomain.com"
    echo "Example: ./update-domain.sh anchitrites.com"
    exit 1
fi

DOMAIN=$1

echo "Updating domain configuration to: $DOMAIN"

# Update layout.tsx
sed -i '' "s|https://rites-blog-.*\.vercel\.app|https://$DOMAIN|g" app/layout.tsx

# Update any other files that might have hardcoded URLs
find . -name "*.tsx" -o -name "*.ts" -o -name "*.mdx" | xargs grep -l "vercel\.app" | while read file; do
    echo "Updating $file"
    sed -i '' "s|https://rites-blog-.*\.vercel\.app|https://$DOMAIN|g" "$file"
done

echo "✅ Domain configuration updated!"
echo "Next steps:"
echo "1. Commit and push changes: git add . && git commit -m 'Update domain to $DOMAIN' && git push origin main"
echo "2. Wait for DNS propagation (can take up to 48 hours)"
echo "3. Test your domain: https://$DOMAIN"
