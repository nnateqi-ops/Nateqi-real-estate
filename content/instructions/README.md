# 📝 How to Update Your Real Estate Website

This guide will show you how to update your website content using GitHub. **No coding skills required!**

---

## 🗂️ Understanding the File Structure

Your website content is organized in these folders:

```
content/
├── listings/
│   └── listings.json          ← All property listings
├── site/
│   ├── homepage.json          ← Homepage text, images, and sections
│   └── contact.json           ← Contact info and agent details
└── instructions/
    └── README.md              ← This guide

public/
└── images/
    └── listings/              ← Property photos
        ├── 8424-stonewall-rd/
        │   ├── main.jpg
        │   ├── 1.jpg
        │   └── 2.jpg
        └── 4120-chain-bridge-rd/
            └── main.jpg
```

---

## 🏠 How to Add a New Listing

### Step 1: Upload Photos (if needed)

1. Go to the `public/images/listings/` folder
2. Click "Add file" → "Create new file"
3. Name your folder using the address (lowercase, dashes instead of spaces)
   - Example: `8424-stonewall-rd/main.jpg`
   - This creates the folder automatically
4. Click "Choose your files" to upload the photo
5. Click "Commit changes"
6. Repeat for all photos (main.jpg, 1.jpg, 2.jpg, etc.)

**⚠️ Photo Rules:**
- Use lowercase file names with dashes
- Main photo should be named `main.jpg`
- Additional photos: `1.jpg`, `2.jpg`, `3.jpg`, etc.
- NO SPACES in file names

### Step 2: Add the Listing to listings.json

1. Go to `content/listings/listings.json`
2. Click the pencil icon (✏️) to edit
3. Scroll to the bottom, BEFORE the last `]` bracket
4. Add a comma after the previous listing
5. Copy and paste this template:

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
    "description": "Beautiful home with updated finishes and modern kitchen",
    "mainImage": "/public/images/listings/123-main-street/main.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    "gallery": [
      "/public/images/listings/123-main-street/1.jpg",
      "/public/images/listings/123-main-street/2.jpg"
    ]
  }
```

6. Replace all the information with your property details
7. Scroll down and click "Commit changes"
8. Add a description like "Added new listing: 123 Main Street"
9. Click "Commit changes" again

**✅ Example of a complete listing:**

```json
  {
    "id": "456-oak-avenue",
    "status": "active",
    "featured": true,
    "title": "Spacious Family Home",
    "address": "456 Oak Avenue, Fairfax, VA",
    "price": "$595,000",
    "beds": 4,
    "baths": 2,
    "sqft": "2,200",
    "description": "Spacious family home with large backyard",
    "mainImage": "/public/images/listings/456-oak-avenue/main.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    "gallery": [
      "/public/images/listings/456-oak-avenue/1.jpg",
      "/public/images/listings/456-oak-avenue/2.jpg",
      "/public/images/listings/456-oak-avenue/3.jpg"
    ]
  }
```

---

## 📝 How to Edit an Existing Listing

1. Go to `content/listings/listings.json`
2. Click the pencil icon (✏️) to edit
3. Find the listing you want to change
4. Update the information you need to change
5. Click "Commit changes"

**Common edits:**

### Change a price:
Find: `"price": "$725,000",`  
Change to: `"price": "$699,000",`

### Update bedrooms/bathrooms:
Find: `"beds": 4,`  
Change to: `"beds": 3,`

### Change status to pending:
Find: `"status": "active",`  
Change to: `"status": "pending",`

### Mark as sold (remove from website):
Find: `"status": "active",` or `"status": "pending",`  
Change to: `"status": "sold",`

**Note:** Only listings with status "active" or "pending" show on the website.

---

## 🗑️ How to Remove a Listing

### Option 1: Mark it as sold (recommended)
1. Open `content/listings/listings.json`
2. Find the listing
3. Change `"status": "active"` to `"status": "sold"`
4. Commit changes

### Option 2: Delete it completely
1. Open `content/listings/listings.json`
2. Find the entire listing block (from `{` to `}`)
3. Delete it INCLUDING the comma before or after it
4. Make sure you don't break the JSON structure
5. Commit changes

**⚠️ Warning:** Deleting is permanent. Marking as "sold" is safer.

---

## 📷 How to Update Property Photos

### Add new photos:
1. Go to `public/images/listings/YOUR-PROPERTY-FOLDER/`
2. Click "Add file" → "Upload files"
3. Upload your photos (name them 4.jpg, 5.jpg, etc.)
4. Commit changes
5. Go to `content/listings/listings.json`
6. Find your listing
7. Add the new photos to the "gallery" array:
   ```json
   "gallery": [
     "/public/images/listings/your-property/1.jpg",
     "/public/images/listings/your-property/2.jpg",
     "/public/images/listings/your-property/3.jpg",
     "/public/images/listings/your-property/4.jpg"
   ]
   ```

### Replace the main photo:
1. Go to the property's image folder
2. Delete the old `main.jpg`
3. Upload your new photo and name it `main.jpg`
4. Commit changes

---

## 🏡 How to Update Homepage Content

Go to `content/site/homepage.json` and click the pencil icon (✏️).

### Change the main headline:
Find the `hero` section and update:
```json
"title": "Your New Headline Here"
```

### Change the hero image:
```json
"image": {
  "url": "YOUR_IMAGE_URL_HERE",
  "alt": "Description of the image"
}
```

### Update your stats:
```json
"stats": [
  {
    "number": "20+",
    "label": "Years Experience"
  },
  {
    "number": "500+",
    "label": "Homes Sold"
  }
]
```

### Add or edit testimonials:
Scroll to the `testimonials` section:
```json
{
  "name": "John & Jane Doe",
  "quote": "Amazing service! Highly recommend.",
  "rating": 5
}
```

---

## 📞 How to Update Contact Information

Go to `content/site/contact.json` and click the pencil icon (✏️).

### Change phone numbers:
```json
"contact": {
  "cell": "(202) 555-1234",
  "cellLink": "tel:+12025551234",
  "office": "(703) 555-5678",
  "officeLink": "tel:+17035555678",
  "email": "newemail@example.com",
  "emailLink": "mailto:newemail@example.com"
}
```

**⚠️ Important:** 
- `cell` is what people see: `(202) 555-1234`
- `cellLink` is the clickable link: `tel:+12025551234` (no spaces, dashes, or parentheses)

### Change address:
```json
"address": {
  "street": "123 New Street",
  "city": "New City",
  "state": "VA",
  "zip": "20110",
  "fullAddress": "123 New Street, New City, VA 20110",
  "lat": 38.7947,
  "lng": -77.5203
}
```

**⚠️ Map coordinates:** If you change the address, you'll need to update `lat` and `lng`. 
- Go to Google Maps
- Right-click on your location
- Copy the coordinates (first number is lat, second is lng)

---

## ⚠️ Important Rules to Follow

### ✅ DO:
- Keep all quotes `" "` around text
- Keep all commas `,` between items
- Use lowercase folder names with dashes (no spaces)
- Test your changes by viewing the website
- Make one change at a time

### ❌ DON'T:
- Delete commas between items
- Remove quotes around text
- Use spaces in folder or file names
- Delete brackets `[ ]` or braces `{ }`
- Edit files in the `js/` or `css/` folders (unless you know what you're doing)

---

## 🎯 Quick Reference: What File to Edit

| What I want to change | File to edit |
|-----------------------|--------------|
| Add/remove a listing | `content/listings/listings.json` |
| Change a price | `content/listings/listings.json` |
| Upload property photos | `public/images/listings/PROPERTY-NAME/` |
| Change homepage headline | `content/site/homepage.json` |
| Update phone number | `content/site/contact.json` |
| Change email address | `content/site/contact.json` |
| Add a testimonial | `content/site/homepage.json` (testimonials section) |
| Update office address | `content/site/contact.json` |

---

## 🆘 Common Problems & Solutions

### Problem: My changes aren't showing up
**Solution:** 
- Wait 1-2 minutes for changes to take effect
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear your browser cache

### Problem: The website broke after my edit
**Solution:**
- You likely removed a comma, quote, or bracket by accident
- Go to your file on GitHub
- Click "History" to see your recent changes
- Click "Revert" to undo your change
- Try again, being careful with commas and quotes

### Problem: Images aren't showing
**Solution:**
- Check that the file path matches EXACTLY: `/public/images/listings/property-name/photo.jpg`
- Make sure the folder name and file name are lowercase
- Make sure there are no spaces in the file name
- The fallbackImage will show if the main image is missing

### Problem: Listing isn't appearing on website
**Solution:**
- Check that `"status"` is set to `"active"` or `"pending"`
- Make sure you didn't accidentally delete a comma or bracket
- Check that the listing is inside the square brackets `[ ]`

---

## 📖 Example: Complete Workflow for Adding a Listing

Let's say you want to add a new listing for "789 Elm Street, Arlington, VA"

**Step 1: Prepare your photos**
- Rename your photos: `main.jpg`, `1.jpg`, `2.jpg`, `3.jpg`

**Step 2: Create the folder and upload photos**
1. Go to `public/images/listings/`
2. Click "Add file" → "Create new file"
3. Type: `789-elm-street/main.jpg`
4. Upload your main photo
5. Commit
6. Repeat for photos 1.jpg, 2.jpg, 3.jpg

**Step 3: Add the listing**
1. Open `content/listings/listings.json`
2. Click the pencil icon
3. Scroll to the bottom (before the last `]`)
4. Add a comma after the previous listing
5. Paste this:

```json
  {
    "id": "789-elm-street",
    "status": "active",
    "featured": true,
    "title": "Charming Arlington Home",
    "address": "789 Elm Street, Arlington, VA",
    "price": "$825,000",
    "beds": 3,
    "baths": 2,
    "sqft": "1,850",
    "description": "Charming home in the heart of Arlington",
    "mainImage": "/public/images/listings/789-elm-street/main.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    "gallery": [
      "/public/images/listings/789-elm-street/1.jpg",
      "/public/images/listings/789-elm-street/2.jpg",
      "/public/images/listings/789-elm-street/3.jpg"
    ]
  }
```

6. Click "Commit changes"
7. Add message: "Added new listing: 789 Elm Street"
8. Click "Commit changes" again

**Done!** Your listing should appear on the website in 1-2 minutes.

---

## 🎓 Understanding JSON Syntax (Simple Version)

JSON is just a way to organize information. Here are the rules:

```json
{
  "propertyName": "value",          ← Text values need quotes
  "number": 123,                    ← Numbers don't need quotes
  "list": ["item1", "item2"],       ← Lists use square brackets [ ]
  "object": { "nested": "value" }   ← Objects use curly braces { }
}
```

**Key points:**
- Commas separate items (but NO comma after the last item)
- Text must be in "quotes"
- Brackets and braces must match: `[` needs `]`, `{` needs `}`

---

## 📞 Need Help?

If something goes wrong or you're not sure how to do something:

1. Check the "Common Problems" section above
2. Look at existing examples in the JSON files
3. Try making small changes one at a time
4. You can always revert changes using GitHub's History feature

---

## ✨ Pro Tips

1. **Always preview your changes:** After committing, wait 2 minutes and check the website
2. **Make small edits:** Change one thing at a time, commit, then move to the next
3. **Copy existing listings:** The easiest way to add a listing is to copy an existing one and change the details
4. **Use the fallback image:** Keep the fallbackImage URL in case your main image doesn't load
5. **Be consistent:** Use the same format for all listings (lowercase, dashes, etc.)

---

**Remember: You can't break anything permanently. All changes can be reverted using GitHub's history feature!**

Good luck! 🎉
