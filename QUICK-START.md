# ⚡ QUICK START - For Non-Coders

**Never edited code before? No problem!** Follow these simple steps.

---

## 🎯 What You Need to Know

You'll be editing **text files** on GitHub (like editing a Google Doc). The files end in `.json` and they just contain information about your listings, contact info, and website text.

**You CANNOT break anything permanently.** GitHub saves every change, so you can always undo.

---

## 🏠 Most Common Task: Add a New Listing

### Step 1: Get Your Info Ready

Write down:
- Address
- Price
- Number of bedrooms
- Number of bathrooms
- Square footage
- Short description

### Step 2: Upload Photos First

1. **Go to GitHub** and open your website project
2. Click on the `public` folder
3. Click on `images` folder
4. Click on `listings` folder
5. Click **"Add file"** → **"Create new file"**
6. In the name box, type your address (lowercase, use dashes instead of spaces) then `/main.jpg`
   - Example: `8424-stonewall-rd/main.jpg`
   - This creates a folder automatically!
7. Click **"Choose your files"** and select your main photo
8. Scroll down and click **"Commit changes"**
9. Repeat for more photos: `1.jpg`, `2.jpg`, `3.jpg`, etc.

**Photo naming rules:**
- `main.jpg` = the main listing photo (required)
- `1.jpg`, `2.jpg`, `3.jpg` = additional photos
- Always lowercase
- No spaces (use dashes: `main-street` not `Main Street`)

### Step 3: Add the Listing

1. Go back to your main project page
2. Click on the `content` folder
3. Click on the `listings` folder  
4. Click on `listings.json`
5. Click the **pencil icon (✏️)** in the top right to edit
6. Scroll to the **very bottom**
7. Find the last `}` before the final `]`
8. Add a **comma** after that `}`
9. Press Enter to make a new line
10. Copy this template and paste it:

```json
  {
    "id": "your-address-here",
    "status": "active",
    "featured": true,
    "title": "Your Property Title",
    "address": "123 Main Street, City, State",
    "price": "$425,000",
    "beds": 4,
    "baths": 3,
    "sqft": "2,840",
    "description": "Beautiful home with great features",
    "mainImage": "/public/images/listings/your-address-here/main.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    "gallery": [
      "/public/images/listings/your-address-here/1.jpg",
      "/public/images/listings/your-address-here/2.jpg"
    ]
  }
```

11. **Replace the text** with your property info (keep the quotes!)
12. Scroll down and click **"Commit changes"**
13. Click **"Commit changes"** again in the popup

**Done!** Wait 2-3 minutes and refresh your website to see the new listing.

---

## 💰 Change a Price

1. Open `content/listings/listings.json` (click the pencil ✏️ to edit)
2. Find your listing
3. Find the line that says `"price": "$725,000",`
4. Change the number (keep the quotes and comma!)
5. Click "Commit changes"

**Example:**
```
BEFORE: "price": "$725,000",
AFTER:  "price": "$699,000",
```

---

## ✅ Mark a Listing as SOLD

1. Open `content/listings/listings.json`
2. Find your listing
3. Find the line that says `"status": "active",`
4. Change it to `"status": "sold",`
5. Click "Commit changes"

The listing will disappear from the website automatically.

**Example:**
```
BEFORE: "status": "active",
AFTER:  "status": "sold",
```

---

## 📞 Update Your Phone Number

1. Open `content/site/contact.json` (click the pencil ✏️)
2. Find the section that looks like this:

```json
"contact": {
  "cell": "(202) 975-5981",
  "cellLink": "tel:+12029755981",
```

3. Change BOTH lines:
   - `"cell"` = what people see on the website
   - `"cellLink"` = the clickable link (no spaces, parentheses, or dashes)

**Example:**
```json
"cell": "(555) 123-4567",
"cellLink": "tel:+15551234567",
```

4. Click "Commit changes"

---

## 🚨 IMPORTANT RULES

### ✅ DO:
- Keep all **quotes** `" "`
- Keep all **commas** `,` at the end of lines
- Use **lowercase** folder names
- Use **dashes** instead of spaces (`main-street`, not `Main Street`)

### ❌ DON'T:
- Don't delete commas
- Don't delete quotes
- Don't delete brackets `[ ]` or braces `{ }`
- Don't use spaces in file names

---

## 😰 "Help! I Broke Something!"

**Don't panic!** You can undo any change:

1. Go to the file you edited
2. Click **"History"** at the top
3. Find your recent change
4. Click the **"..."** menu
5. Click **"Revert"**

Everything goes back to how it was before!

---

## 📖 Need More Help?

For detailed instructions with more examples, see:
- **[Full Instructions Guide](content/instructions/README.md)** - Complete guide with examples

For technical questions, see:
- **[Developer README](README.md)** - Technical documentation

---

## 📝 Quick Checklist for Adding a Listing

- [ ] Write down property info
- [ ] Rename photos: `main.jpg`, `1.jpg`, `2.jpg`
- [ ] Upload photos to `public/images/listings/PROPERTY-NAME/`
- [ ] Open `content/listings/listings.json`
- [ ] Copy an existing listing
- [ ] Replace with your property info
- [ ] Add a comma before your new listing
- [ ] Commit changes
- [ ] Wait 2-3 minutes
- [ ] Check your website!

---

## 🎉 You've Got This!

Remember: 
- Take it slow
- Make one change at a time
- You can't break anything permanently
- Every change can be undone

**Good luck!** 🚀
