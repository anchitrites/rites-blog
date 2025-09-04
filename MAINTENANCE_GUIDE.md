# 🚀 Rites Blog Maintenance Guide

## 📋 Table of Contents
1. [Quick Start](#quick-start)
2. [Development Environment](#development-environment)
3. [Adding New Blog Posts](#adding-new-blog-posts)
4. [Customizing Content](#customizing-content)
5. [Deployment Process](#deployment-process)
6. [Troubleshooting](#troubleshooting)
7. [Advanced Customization](#advanced-customization)

## 🚀 Quick Start

### Prerequisites
- Node.js (v22.19.0+)
- pnpm package manager
- Git
- Vercel CLI (optional, for direct deployment)

### Starting Development Server
```bash
cd /Users/anchit/rites-blog
pnpm dev
```
Your site will be available at: http://localhost:3001 (or 3000 if available)

## 🛠️ Development Environment

### Project Structure
```
rites-blog/
├── app/
│   ├── (post)/              # Blog posts organized by year
│   │   ├── 2020/           # Posts from 2020
│   │   ├── 2021/           # Posts from 2021
│   │   └── components/     # Post-specific components
│   ├── about/              # About page
│   ├── api/                # API routes (view counts, etc.)
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Main layout
│   ├── header.tsx          # Site header
│   ├── footer.tsx          # Site footer
│   └── posts.json          # Posts index
├── public/                 # Static assets
│   └── images/            # Blog post images
├── .env.local             # Environment variables
└── package.json           # Dependencies
```

### Key Commands
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Deploy to Vercel
vercel --prod
```

## 📝 Adding New Blog Posts

### Method 1: Create a New Post (Recommended)

1. **Navigate to the appropriate year folder:**
   ```bash
   cd /Users/anchit/rites-blog/app/(post)/2024
   ```

2. **Create a new folder for your post:**
   ```bash
   mkdir my-awesome-post
   cd my-awesome-post
   ```

3. **Create the post file:**
   ```bash
   touch page.mdx
   ```

4. **Write your post in `page.mdx`:**
   ```mdx
   ---
   title: 'My Awesome Post'
   date: '2024-01-15'
   id: 'my-awesome-post'
   ---

   # My Awesome Post

   This is the content of my blog post. I can use **markdown** and even JSX components!

   <Callout>
   This is a special callout component!
   </Callout>

   ## Code Examples

   ```javascript
   function hello() {
     console.log("Hello, world!");
   }
   ```

   ## Images

   ![My Image](/images/my-image.jpg)
   ```

5. **Add images to the public folder:**
   ```bash
   # Place images in the appropriate year folder
   cp my-image.jpg /Users/anchit/rites-blog/public/images/2024/
   ```

6. **Update the posts index:**
   Edit `/Users/anchit/rites-blog/app/posts.json`:
   ```json
   {
     "posts": [
       {
         "id": "my-awesome-post",
         "title": "My Awesome Post",
         "date": "2024-01-15",
         "year": 2024
       }
     ]
   }
   ```

### Method 2: Copy and Modify Existing Post

1. **Copy an existing post:**
   ```bash
   cp -r /Users/anchit/rites-blog/app/(post)/2020/vercel /Users/anchit/rites-blog/app/(post)/2024/my-new-post
   ```

2. **Edit the copied files:**
   - Update `page.mdx` with your content
   - Replace images in the folder
   - Update the posts.json entry

## 🎨 Customizing Content

### Updating Site Information

#### Header and Navigation
- **File:** `app/header.tsx`
- **Changes:** Update navigation links, social media links

#### Footer
- **File:** `app/footer.tsx`
- **Changes:** Update social links, remove/add footer elements

#### Site Metadata
- **File:** `app/layout.tsx`
- **Changes:** Update title, description, OpenGraph data, Twitter cards

### Styling and Theme

#### Global Styles
- **File:** `app/globals.css`
- **Changes:** Update CSS variables, add custom styles

#### Theme Toggle
- **File:** `app/theme-toggle.tsx`
- **Changes:** Customize theme behavior, add new themes

### About Page
- **File:** `app/about/page.mdx`
- **Changes:** Update your bio, add/remove sections, update social links

## 🚀 Deployment Process

### Automatic Deployment (Recommended)
Your site automatically deploys when you push to the main branch on GitHub.

1. **Make your changes locally**
2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Add new blog post: My Awesome Post"
   git push origin main
   ```
3. **Vercel automatically builds and deploys**

### Manual Deployment
```bash
# Deploy to production
vercel --prod

# Deploy to preview
vercel
```

### Checking Deployment Status
```bash
# List all deployments
vercel ls

# View deployment logs
vercel logs [deployment-url]
```

## 🔧 Troubleshooting

### Common Issues

#### 1. Development Server Won't Start
```bash
# Check if port is in use
lsof -ti:3000

# Kill process using port 3000
kill -9 $(lsof -ti:3000)

# Start server on different port
pnpm dev --port 3001
```

#### 2. Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Try building again
pnpm build
```

#### 3. TypeScript Errors
```bash
# Check TypeScript errors
pnpm tsc --noEmit

# Fix common issues
pnpm install @types/node
```

#### 4. Environment Variables
Make sure your `.env.local` file contains:
```env
UPSTASH_REDIS_REST_URL=your-redis-url
UPSTASH_REDIS_REST_TOKEN=your-redis-token
```

### Getting Help

1. **Check Vercel Dashboard:** https://vercel.com/anchitrites-projects/rites-blog
2. **View GitHub Repository:** https://github.com/anchitrites/rites-blog
3. **Check deployment logs:** `vercel logs`

## 🎯 Advanced Customization

### Adding New Components

1. **Create component file:**
   ```bash
   touch app/components/MyComponent.tsx
   ```

2. **Write your component:**
   ```tsx
   export function MyComponent() {
     return <div>Hello World!</div>;
   }
   ```

3. **Import and use in your posts:**
   ```mdx
   import { MyComponent } from '../components/MyComponent';

   <MyComponent />
   ```

### Custom Post Components

Available components in `app/(post)/components/`:
- `Callout` - Highlighted callout boxes
- `Code` - Code blocks with syntax highlighting
- `Figure` - Images with captions
- `Tweet` - Embedded tweets
- `YouTube` - Embedded YouTube videos

### Adding Analytics

1. **Vercel Analytics (already included):**
   - Automatically tracks page views
   - No additional setup needed

2. **Google Analytics:**
   - Add tracking code to `app/layout.tsx`
   - Update environment variables

### Custom Domain

1. **In Vercel Dashboard:**
   - Go to Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

2. **Update metadata:**
   - Update URLs in `app/layout.tsx`
   - Update any hardcoded URLs

## 📊 Monitoring and Analytics

### View Counts
- Posts automatically track view counts
- Data stored in Redis
- View counts update in real-time

### Performance
- Vercel provides built-in performance monitoring
- Check Vercel dashboard for insights

### SEO
- OpenGraph tags automatically generated
- Twitter cards included
- Sitemap available at `/sitemap.xml`

## 🔄 Regular Maintenance

### Weekly Tasks
- [ ] Check for broken links
- [ ] Review analytics
- [ ] Update dependencies if needed

### Monthly Tasks
- [ ] Backup your content
- [ ] Review and update about page
- [ ] Check site performance

### Quarterly Tasks
- [ ] Update dependencies
- [ ] Review and optimize images
- [ ] Update social media links if needed

## 📚 Useful Resources

- **Next.js Documentation:** https://nextjs.org/docs
- **MDX Documentation:** https://mdxjs.com/
- **Vercel Documentation:** https://vercel.com/docs
- **Tailwind CSS:** https://tailwindcss.com/docs

## 🆘 Emergency Procedures

### Site is Down
1. Check Vercel dashboard for deployment status
2. Check GitHub for any recent changes
3. Rollback to previous deployment if needed

### Content Recovery
1. All content is in Git - check commit history
2. Check Vercel deployment history
3. Restore from backup if available

---

## 🎉 You're All Set!

Your blog is now fully functional and ready for content. Start by creating your first blog post and customizing the about page to reflect your personal brand.

**Happy blogging! 🚀**
