# Full-Stack Car Website

A complete car dealership website with user authentication, car browsing, shopping cart, and order management.

## Features

✅ User Authentication (Register/Login)
✅ Browse & Filter Cars
✅ Shopping Cart
✅ Order Management
✅ Responsive Design
✅ Backend API with Express.js
✅ PostgreSQL Database

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Authentication**: JWT

## Installation

### Prerequisites
- Node.js (v14+)
- PostgreSQL

### Setup

1. Install dependencies:
```bash
npm install
```

2. Create a PostgreSQL database:
```sql
CREATE DATABASE car_website;
```

3. Update `.env` file with your PostgreSQL credentials:
```
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=car_website
JWT_SECRET=your_secret_key
```

4. Start the server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

5. Open http://localhost:5000 in your browser

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Cars
- `GET /api/cars` - Get all cars (supports filters)
- `GET /api/cars/:id` - Get single car
- `POST /api/cars` - Add new car (requires auth)

### Orders
- `POST /api/orders` - Create order (requires auth)
- `GET /api/orders` - Get user orders (requires auth)

## Usage

1. Register/Login to create account
2. Browse available cars with search filters
3. Click on a car to view details
4. Add cars to cart
5. Checkout to place order

## File Structure

```
├── server.js              # Main server file
├── db.js                 # Database connection
├── database.js           # Database initialization
├── auth-routes.js        # Authentication routes
├── cars-routes.js        # Cars routes
├── orders-routes.js      # Orders routes
├── auth-middleware.js    # JWT middleware
├── package.json          # Dependencies
├── .env                  # Environment variables
└── public/
    ├── index.html        # Frontend HTML
    ├── css/
    │   └── styles.css    # Styles
    └── js/
        └── app.js        # Frontend JavaScript
```

## Future Enhancements

- Admin panel for car management
- Payment integration
- Email notifications
- Car reviews and ratings
- Advanced search filters
- Mobile app

## License

MIT License
Added New Line 
# Added One More Line now 