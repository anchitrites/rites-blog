# ⚡ Quick Reference Card

## 🚀 Essential Commands

```bash
# Start development server
cd /Users/anchit/rites-blog && pnpm dev

# Add new blog post
mkdir app/(post)/2024/my-post-name
touch app/(post)/2024/my-post-name/page.mdx

# Deploy changes
git add . && git commit -m "Your message" && git push origin main

# Check deployment status
vercel ls
```

## 📝 Adding a Blog Post (5 Steps)

1. **Create folder:** `mkdir app/(post)/2024/my-post-name`
2. **Create file:** `touch app/(post)/2024/my-post-name/page.mdx`
3. **Write content** in `page.mdx`:
   ```mdx
   ---
   title: 'Your Post Title'
   date: '2024-01-15'
   id: 'your-post-id'
   ---
   
   # Your Post Title
   
   Your content here...
   ```
4. **Add to posts.json:**
   ```json
   {
     "id": "your-post-id",
     "title": "Your Post Title", 
     "date": "2024-01-15",
     "year": 2024
   }
   ```
5. **Deploy:** `git add . && git commit -m "Add new post" && git push origin main`

## 🎨 Quick Customizations

| What to Change | File Location |
|----------------|---------------|
| Site title/description | `app/layout.tsx` |
| Header navigation | `app/header.tsx` |
| Footer content | `app/footer.tsx` |
| About page | `app/about/page.mdx` |
| Global styles | `app/globals.css` |
| Post list | `app/posts.json` |

## 🔗 Important URLs

- **Local Development:** http://localhost:3001
- **Production:** https://rites-blog-bnx95ddh4-anchitrites-projects.vercel.app
- **GitHub:** https://github.com/anchitrites/rites-blog
- **Vercel Dashboard:** https://vercel.com/anchitrites-projects/rites-blog

## 🆘 Quick Fixes

**Server won't start?**
```bash
kill -9 $(lsof -ti:3000) && pnpm dev
```

**Build failing?**
```bash
rm -rf .next && pnpm build
```

**Dependencies issues?**
```bash
rm -rf node_modules pnpm-lock.yaml && pnpm install
```

**Need to check logs?**
```bash
vercel logs [deployment-url]
```
