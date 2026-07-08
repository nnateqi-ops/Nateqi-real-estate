# 📸 Visual Guide: How to Edit on GitHub

This guide shows you exactly what to click on GitHub to update your website.

---

## 🎯 How to Find the Right File

### To Edit Listings:
1. Go to your GitHub repository
2. Click `content` folder
3. Click `listings` folder
4. Click `listings.json`
5. Click the **pencil icon (✏️)** in the top right corner

### To Edit Homepage:
1. Click `content` folder
2. Click `site` folder
3. Click `homepage.json`
4. Click the **pencil icon (✏️)**

### To Edit Contact Info:
1. Click `content` folder
2. Click `site` folder
3. Click `contact.json`
4. Click the **pencil icon (✏️)**

---

## 🖼️ How to Upload Photos

### Step-by-Step:

1. **Navigate to the listings folder:**
   - Click `public` folder
   - Click `images` folder
   - Click `listings` folder

2. **Create a new property folder:**
   - Click **"Add file"** button
   - Select **"Create new file"**
   - In the "Name your file..." box, type: `your-property-name/main.jpg`
   - This automatically creates a folder!

3. **Upload the photo:**
   - Click **"Choose your files"** button
   - Select your `main.jpg` photo from your computer
   - Scroll down to the bottom
   - Click the green **"Commit changes"** button

4. **Add more photos:**
   - Repeat the process for `1.jpg`, `2.jpg`, `3.jpg`, etc.

---

## ✏️ How to Edit a JSON File

### What You'll See:

When you open `listings.json`, you'll see something like this:

```json
[
  {
    "id": "8424-stonewall-rd",
    "status": "active",
    "title": "Beautiful Colonial-Style Home",
    "address": "8424 Stonewall Rd, Manassas, VA",
    "price": "$725,000",
    "beds": 4,
    "baths": 3,
    "sqft": "2,840"
  }
]
```

### To Edit:
1. Click the **pencil icon (✏️)** in the top right
2. Make your changes (change the text between the quotes)
3. Scroll to the bottom
4. In the "Commit changes" box, write what you changed (e.g., "Updated price")
5. Click **"Commit changes"**
6. Click **"Commit changes"** again in the popup window

---

## 🔍 Understanding the Structure

### Listings File Structure:

```json
[                                    ← Opening bracket (don't delete!)
  {                                  ← Opening brace for listing 1
    "id": "property-1",              ← Unique ID
    "price": "$500,000"              ← Property info
  },                                 ← Comma after listing 1
  {                                  ← Opening brace for listing 2
    "id": "property-2",
    "price": "$600,000"
  }                                  ← NO comma after last listing
]                                    ← Closing bracket (don't delete!)
```

**Key points:**
- Commas go between listings (but NOT after the last one)
- Each listing is wrapped in `{ }`
- The whole file is wrapped in `[ ]`
- Text must be in "quotes"

---

## 🎨 Where Things Appear on Your Website

### listings.json → Listings Section
- Shows all properties with `"status": "active"` or `"status": "pending"`
- Properties with `"status": "sold"` are hidden

### homepage.json → Multiple Sections
- `hero` section → Top of homepage (headline, main image)
- `stats` → The numbers (years experience, homes sold, etc.)
- `about` → About Me section
- `services` → Services cards
- `benefits` → Why Work With Me section
- `testimonials` → Client testimonial cards

### contact.json → Contact & Footer
- Contact details in the Contact section
- Footer information
- Agent name and company throughout the site

---

## 🚫 Common Mistakes to Avoid

### ❌ Missing Comma
```json
{
  "id": "property-1",
  "price": "$500,000"
}                           ← Missing comma here!
{
  "id": "property-2",
  "price": "$600,000"
}
```

### ✅ Correct:
```json
{
  "id": "property-1",
  "price": "$500,000"
},                          ← Comma added!
{
  "id": "property-2",
  "price": "$600,000"
}
```

### ❌ Missing Quote
```json
"price": $500,000           ← Missing quotes around price!
```

### ✅ Correct:
```json
"price": "$500,000"         ← Price has quotes!
```

### ❌ Extra Comma
```json
{
  "id": "property-2",
  "price": "$600,000"
}                           ← This is the last listing
,                           ← Extra comma - DELETE THIS!
]
```

### ✅ Correct:
```json
{
  "id": "property-2",
  "price": "$600,000"
}                           ← No comma after last listing
]
```

---

## 🎓 Practice Exercise

Try this simple change to get comfortable:

1. Open `content/site/homepage.json`
2. Click the pencil icon to edit
3. Find the line: `"eyebrow": "Your Trusted Real Estate Partner",`
4. Change it to: `"eyebrow": "TEST - I did it!",`
5. Commit changes
6. Wait 2 minutes and refresh your website
7. You should see "TEST - I did it!" at the top!
8. Change it back when you're done practicing

---

## 💡 Pro Tips

1. **Make small changes**: Edit one thing at a time, then commit
2. **Check the website**: After each change, wait 2-3 minutes and refresh your site
3. **Write good commit messages**: Instead of "Updated", write "Changed price on 123 Main St"
4. **Copy existing listings**: When adding a new listing, copy an existing one and just change the details
5. **Keep a backup**: Before making big changes, copy the file content to a text document on your computer

---

## 📞 Still Stuck?

If you're having trouble:

1. Check that you didn't delete any quotes, commas, or brackets
2. Look at other listings to see the correct format
3. Use the GitHub "History" feature to see what changed
4. Revert your changes if something broke
5. Try again with a smaller change

**Remember:** You can't permanently break anything. Every change is saved in history and can be undone!

---

## 📚 Other Helpful Guides

- **[Main README](../../README.md)** - Quick start guide
- **[Full Instructions](README.md)** - Detailed guide with examples  
- **[Cheat Sheet](../../CHEAT-SHEET.md)** - Quick reference
- **[Developer Docs](../../DEVELOPER.md)** - Technical documentation

---

## ✅ Checklist: Before You Commit

Before clicking "Commit changes", check:

- [ ] I didn't delete any commas
- [ ] I didn't delete any quotes `" "`
- [ ] I didn't delete any brackets `[ ]` or braces `{ }`
- [ ] All my text is in "quotes"
- [ ] I added commas between listings (but not after the last one)
- [ ] I wrote a description of what I changed

If you checked all boxes, you're good to commit!

---

**You've got this!** Take it slow and you'll be a pro in no time. 🌟
