# 🚗 AutoHub - Frontend Only Version

This is a **frontend-only car dealership website** with no backend or database requirements!

## Features

✅ User Registration & Login (stored locally)
✅ Browse 6 Premium Cars
✅ Filter by Brand & Price
✅ Shopping Cart
✅ Checkout System
✅ Responsive Design
✅ No Server Required!

## How to Run

### Option 1: Simple (Easiest)
1. Open `index.html` directly in your browser
   - Double-click on `index.html`
   - Or right-click → Open with → Browser

### Option 2: Using Python (Recommended)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open: `http://localhost:8000`

### Option 3: Using Node.js
```bash
# Install globally (one time)
npm install -g http-server

# Run in project folder
http-server
```
Then open the URL shown in terminal

### Option 4: Using VS Code
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Click "Open with Live Server"

## 📂 Files Included

- `index.html` - Main website (all HTML, CSS, JS included)
- `styles.css` - Styling
- `app.js` - JavaScript logic
- `README.md` - Documentation
- `SETUP_GUIDE.md` - Setup instructions

## 🎯 How to Use

### Register
1. Click "Register"
2. Enter name, email, password
3. Click Register
4. Account saved locally

### Login
1. Click "Login"
2. Enter email and password
3. Click Login
4. Access full features

### Browse Cars
1. Click "Browse Cars"
2. See all 6 cars
3. Use filters to search
4. Click car to see details

### Add to Cart
1. Click on any car
2. Click "Add to Cart"
3. Car added to your cart

### Checkout
1. Click "Cart" in menu
2. View all items
3. Click "Checkout"
4. Order confirmation

## 📊 Mock Cars Included

1. **Tesla Model 3** - $45,000 (Electric)
2. **BMW X5** - $65,000 (Diesel SUV)
3. **Honda Civic** - $28,000 (Petrol)
4. **Audi Q7** - $72,000 (Hybrid SUV)
5. **Mazda CX-5** - $32,000 (Petrol)
6. **Mercedes-Benz C-Class** - $58,000 (Diesel)

## 💾 Data Storage

All data is stored locally in browser:
- User login info
- Shopping cart
- Preferences

**Note:** Data clears if you clear browser cache

## 🔍 Filter Cars

- **By Brand:** Type Tesla, BMW, Honda, etc.
- **By Price:** Set minimum and maximum price
- **Search:** Click Search button

## 🛠️ Customization

### Add More Cars
Edit `app.js`, find `mockCars` array, add new car object:
```javascript
{
    id: 7,
    brand: 'Toyota',
    model: 'Camry',
    year: 2024,
    price: 35000,
    color: 'White',
    fuel_type: 'Hybrid',
    transmission: 'Automatic',
    mileage: 0,
    description: 'Reliable hybrid sedan'
}
```

### Change Colors
Edit `styles.css`:
- Line 27: `background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);` - Header color
- Line 78: `background: #ff6b6b;` - Button color

### Change Logo
Edit `index.html`:
- Line 24: Change `🚗 AutoHub` to your text/logo

## ⚠️ Important Notes

- No internet connection needed
- Data saved in browser's localStorage
- Works on all modern browsers
- No installation required
- No backend server needed

## 🌐 Browsers Supported

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 🚀 Ready to Use!

Just open `index.html` and start browsing cars! No setup needed.

## 📝 Future Enhancements

Want to add backend? See `README.md` for full-stack version with:
- Real database (PostgreSQL)
- Server backend (Node.js)
- API endpoints
- Persistent data
- Admin panel

## 💡 Tips

- Try adding multiple cars to cart
- Use different prices to filter
- Try logging out and back in
- Browser dev tools (F12) to see localStorage
- Works offline once loaded!

---

**Enjoy browsing cars! 🚗✨**
