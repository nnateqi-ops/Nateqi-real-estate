# 📋 Quick Reference Cheat Sheet

**Print this page or keep it open while you work!**

---

## 📁 Which File to Edit?

| I want to... | Edit this file |
|-------------|----------------|
| Add/remove a listing | `content/listings/listings.json` |
| Change a price | `content/listings/listings.json` |
| Mark listing sold | `content/listings/listings.json` |
| Upload photos | `public/images/listings/PROPERTY-NAME/` |
| Change phone number | `content/site/contact.json` |
| Change email | `content/site/contact.json` |
| Change address | `content/site/contact.json` |
| Change homepage headline | `content/site/homepage.json` |
| Add testimonial | `content/site/homepage.json` |
| Update stats | `content/site/homepage.json` |

---

## 🎯 The 3 Most Common Tasks

### 1️⃣ Add a Listing

```
1. Upload photos to: public/images/listings/property-name/
2. Open: content/listings/listings.json
3. Copy an existing listing
4. Paste at the bottom (add comma before it!)
5. Change the details
6. Commit
```

### 2️⃣ Change Price

```
1. Open: content/listings/listings.json
2. Find: "price": "$500,000",
3. Change to: "price": "$450,000",
4. Commit
```

### 3️⃣ Mark as Sold

```
1. Open: content/listings/listings.json
2. Find: "status": "active",
3. Change to: "status": "sold",
4. Commit
```

---

## ⚠️ Golden Rules

### ✅ ALWAYS:
- Keep **quotes** around text: `"like this"`
- Keep **commas** between items
- Use **lowercase** for folder names
- Use **dashes** not spaces: `main-street` ✓ not `Main Street` ✗

### ❌ NEVER:
- Delete commas `,`
- Delete quotes `" "`
- Delete brackets `[ ]` or braces `{ }`
- Use spaces in file/folder names

---

## 📝 Listing Template (Copy This!)

```json
  {
    "id": "123-main-street",
    "status": "active",
    "featured": true,
    "title": "Beautiful Home Title",
    "address": "123 Main Street, City, State",
    "price": "$425,000",
    "beds": 4,
    "baths": 3,
    "sqft": "2,840",
    "description": "Beautiful home description",
    "mainImage": "/public/images/listings/123-main-street/main.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    "gallery": [
      "/public/images/listings/123-main-street/1.jpg",
      "/public/images/listings/123-main-street/2.jpg"
    ]
  }
```

**Remember:** Add a comma `,` before this if it's not the first listing!

---

## 📊 Listing Status Options

| Status | What it does |
|--------|--------------|
| `"status": "active"` | Shows on website normally |
| `"status": "pending"` | Shows with "Pending" badge |
| `"status": "sold"` | Hidden from website |

---

## 📸 Photo Naming

| File name | What it is |
|-----------|------------|
| `main.jpg` | Main listing photo (required) |
| `1.jpg` | Gallery photo 1 |
| `2.jpg` | Gallery photo 2 |
| `3.jpg` | Gallery photo 3 |

**Folder structure:**
```
public/images/listings/
  ├── 123-main-street/
  │   ├── main.jpg
  │   ├── 1.jpg
  │   └── 2.jpg
  └── 456-oak-avenue/
      └── main.jpg
```

---

## 🔧 How to Edit on GitHub

```
1. Find the file (see table above)
2. Click the pencil icon (✏️)
3. Make your changes
4. Scroll to bottom
5. Write what you changed
6. Click "Commit changes"
7. Click "Commit changes" again
8. Wait 2-3 minutes
9. Refresh your website
```

---

## 😰 "I Broke It!" - How to Undo

```
1. Open the file you edited
2. Click "History" at the top
3. Find your change
4. Click the "..." menu
5. Click "Revert"
6. Done! It's fixed.
```

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Changes not showing | Wait 2-3 min, hard refresh (Ctrl+Shift+R) |
| Website looks broken | You deleted a comma or quote - revert your change |
| Images not showing | Check file path matches exactly, check spelling |
| Listing not appearing | Check status is "active" or "pending" |

---

## 📞 Contact Info Example

**File:** `content/site/contact.json`

```json
"contact": {
  "cell": "(202) 555-1234",
  "cellLink": "tel:+12025551234",
  "office": "(703) 555-5678",
  "officeLink": "tel:+17035555678",
  "email": "you@email.com",
  "emailLink": "mailto:you@email.com"
}
```

**Note:** `cellLink` has no spaces, dashes, or parentheses!

---

## ⚡ Quick Tips

- 💡 Make ONE change at a time
- 💡 Copy existing listings as templates
- 💡 Check your website after each change
- 💡 Write clear commit messages
- 💡 When in doubt, revert and try again

---

## 📖 More Help

- **Main guide:** [README.md](README.md)
- **Detailed instructions:** [content/instructions/README.md](content/instructions/README.md)
- **Visual guide:** [content/instructions/SCREENSHOT-GUIDE.md](content/instructions/SCREENSHOT-GUIDE.md)
- **Technical docs:** [DEVELOPER.md](DEVELOPER.md)

---

**Save this page!** Bookmark it or print it for quick reference. 🔖
