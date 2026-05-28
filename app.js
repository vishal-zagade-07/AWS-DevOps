let currentUser = null;
let cart = [];
let allCars = [];
let selectedCar = null;

// Mock car data with emojis representing cars
const mockCars = [
    {
        id: 1,
        brand: 'Lamborghini',
        model: 'Huracán',
        year: 2024,
        price: 261000,
        color: 'Yellow',
        fuel_type: 'Petrol',
        transmission: 'Automatic',
        mileage: 0,
        description: 'Exotic supercar with incredible performance and luxury',
        emoji: '🏎️'
    },
    {
        id: 2,
        brand: 'Audi',
        model: 'R8',
        year: 2024,
        price: 156000,
        color: 'Red',
        fuel_type: 'Petrol',
        transmission: 'Automatic',
        mileage: 0,
        description: 'High-performance sports car with premium German engineering',
        emoji: '🏁'
    },
    {
        id: 3,
        brand: 'Tesla',
        model: 'Model S',
        year: 2024,
        price: 99990,
        color: 'White',
        fuel_type: 'Electric',
        transmission: 'Automatic',
        mileage: 0,
        description: 'Premium electric sedan with cutting-edge technology and performance',
        emoji: '⚡'
    },
    {
        id: 4,
        brand: 'BMW',
        model: 'M760Li',
        year: 2023,
        price: 165000,
        color: 'Black',
        fuel_type: 'Petrol',
        transmission: 'Automatic',
        mileage: 5000,
        description: 'Luxury sedan with powerful engine and ultimate comfort',
        emoji: '👑'
    },
    {
        id: 5,
        brand: 'Mercedes-Benz',
        model: 'AMG GT',
        year: 2024,
        price: 137000,
        color: 'Silver',
        fuel_type: 'Petrol',
        transmission: 'Automatic',
        mileage: 0,
        description: 'Thrilling sports car combining luxury with raw performance',
        emoji: '🌟'
    },
    {
        id: 6,
        brand: 'Porsche',
        model: '911 Turbo',
        year: 2023,
        price: 195000,
        color: 'Blue',
        fuel_type: 'Petrol',
        transmission: 'Automatic',
        mileage: 8000,
        description: 'Iconic sports car with legendary performance and heritage',
        emoji: '🚀'
    },
    {
        id: 7,
        brand: 'Ferrari',
        model: 'F8 Tributo',
        year: 2023,
        price: 280000,
        color: 'Red',
        fuel_type: 'Petrol',
        transmission: 'Automatic',
        mileage: 3000,
        description: 'Legendary Italian supercar with unmatched performance',
        emoji: '❤️'
    },
    {
        id: 8,
        brand: 'Bentley',
        model: 'Continental GT',
        year: 2024,
        price: 202000,
        color: 'Gold',
        fuel_type: 'Petrol',
        transmission: 'Automatic',
        mileage: 1000,
        description: 'Ultra-luxury grand tourer with elegant styling',
        emoji: '💎'
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('user');
    if (user) {
        currentUser = JSON.parse(user);
        updateAuthUI();
    }
    loadCars();
});

// Auth Functions
function register(event) {
    event.preventDefault();

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    if (!email.includes('@')) {
        alert('Please enter valid email');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }

    const user = {
        id: Math.random(),
        name: name,
        email: email
    };

    localStorage.setItem('user', JSON.stringify(user));
    currentUser = user;
    updateAuthUI();
    closeRegisterModal();
    alert('Registration successful!');
}

function login(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email.includes('@')) {
        alert('Please enter valid email');
        return;
    }

    const user = {
        id: Math.random(),
        name: email.split('@')[0],
        email: email
    };

    localStorage.setItem('user', JSON.stringify(user));
    currentUser = user;
    updateAuthUI();
    closeLoginModal();
    alert('Login successful!');
}

function logout() {
    localStorage.removeItem('user');
    currentUser = null;
    cart = [];
    updateAuthUI();
    showHome();
}

function updateAuthUI() {
    const authButtons = document.getElementById('auth-buttons');
    const userMenu = document.getElementById('user-menu');

    if (currentUser) {
        authButtons.style.display = 'none';
        userMenu.style.display = 'flex';
        document.getElementById('user-name').textContent = `Hello, ${currentUser.name}`;
    } else {
        authButtons.style.display = 'flex';
        userMenu.style.display = 'none';
    }
}

// Cars Functions
function loadCars() {
    allCars = mockCars;
    displayCars(allCars);
}

function displayCars(cars) {
    const carsList = document.getElementById('cars-list');
    carsList.innerHTML = '';

    if (cars.length === 0) {
        carsList.innerHTML = '<p>No cars found</p>';
        return;
    }

    cars.forEach((car) => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.onclick = () => viewCarDetails(car);
        carCard.innerHTML = `
            <div class="car-image">${car.emoji}</div>
            <div class="car-info">
                <h3>${car.brand} ${car.model}</h3>
                <div class="car-specs">
                    <p>📅 Year: ${car.year}</p>
                    <p>⛽ Fuel: ${car.fuel_type}</p>
                    <p>🎨 Color: ${car.color}</p>
                </div>
                <div class="price">$${car.price.toLocaleString()}</div>
            </div>
        `;
        carsList.appendChild(carCard);
    });
}

function filterCars() {
    const brand = document.getElementById('brandFilter').value;
    const minPrice = document.getElementById('minPrice').value;
    const maxPrice = document.getElementById('maxPrice').value;

    let filtered = allCars;

    if (brand) {
        filtered = filtered.filter((car) =>
            car.brand.toLowerCase().includes(brand.toLowerCase())
        );
    }

    if (minPrice) {
        filtered = filtered.filter((car) => car.price >= minPrice);
    }

    if (maxPrice) {
        filtered = filtered.filter((car) => car.price <= maxPrice);
    }

    displayCars(filtered);
}

function viewCarDetails(car) {
    selectedCar = car;
    const carDetails = document.getElementById('car-details');
    carDetails.innerHTML = `
        <div style="text-align: center; font-size: 4rem; margin-bottom: 1rem;">${car.emoji}</div>
        <h2>${car.brand} ${car.model}</h2>
        <p><strong>Year:</strong> ${car.year}</p>
        <p><strong>Price:</strong> $${car.price.toLocaleString()}</p>
        <p><strong>Fuel Type:</strong> ${car.fuel_type}</p>
        <p><strong>Transmission:</strong> ${car.transmission}</p>
        <p><strong>Color:</strong> ${car.color}</p>
        <p><strong>Description:</strong> ${car.description}</p>
    `;
    document.getElementById('carModal').style.display = 'block';
}

function addToCart() {
    if (!currentUser) {
        alert('Please login to add items to cart');
        return;
    }

    if (selectedCar) {
        cart.push(selectedCar);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Added to cart!');
        closeCarModal();
    }
}

function checkout() {
    if (!currentUser) {
        alert('Please login to checkout');
        return;
    }

    if (cart.length === 0) {
        alert('Cart is empty');
        return;
    }

    const orderSummary = cart.map(car => `${car.brand} ${car.model} - $${car.price.toLocaleString()}`).join('\n');
    const totalPrice = cart.reduce((sum, car) => sum + car.price, 0);

    alert(`🎉 Order Summary:\n\n${orderSummary}\n\n💰 Total: $${totalPrice.toLocaleString()}\n\nThank you for your order!`);

    cart = [];
    localStorage.removeItem('cart');
    showHome();
}

// Contact Functions
function sendMessage(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.children[0].value;
    const email = form.children[1].value;
    const subject = form.children[2].value;
    const message = form.children[3].value;

    const contactInfo = {
        name: name,
        email: email,
        subject: subject,
        message: message,
        timestamp: new Date().toLocaleString()
    };

    console.log('Message received:', contactInfo);
    alert(`Thank you ${name}! We received your message and will get back to you at ${email} soon.`);
    
    form.reset();
}

// Modal Functions
function showLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
}

function showRegisterModal() {
    document.getElementById('registerModal').style.display = 'block';
}

function closeRegisterModal() {
    document.getElementById('registerModal').style.display = 'none';
    document.getElementById('registerName').value = '';
    document.getElementById('registerEmail').value = '';
    document.getElementById('registerPassword').value = '';
}

function closeCarModal() {
    document.getElementById('carModal').style.display = 'none';
}

// Navigation Functions
function showHome() {
    document.getElementById('home-section').style.display = 'block';
    document.getElementById('cars-section').style.display = 'none';
    document.getElementById('cart-section').style.display = 'none';
    document.getElementById('contact-section').style.display = 'none';
}

function showCars() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('cars-section').style.display = 'block';
    document.getElementById('cart-section').style.display = 'none';
    document.getElementById('contact-section').style.display = 'none';
    loadCars();
}

function showContact() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('cars-section').style.display = 'none';
    document.getElementById('cart-section').style.display = 'none';
    document.getElementById('contact-section').style.display = 'block';
}

function showCart() {
    if (!currentUser) {
        alert('Please login to view cart');
        return;
    }

    document.getElementById('home-section').style.display = 'none';
    document.getElementById('cars-section').style.display = 'none';
    document.getElementById('cart-section').style.display = 'block';
    document.getElementById('contact-section').style.display = 'none';

    const cartItems = document.getElementById('cart-items');
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        return;
    }

    let html = '<h3>Items in Cart</h3>';
    let total = 0;

    cart.forEach((car, index) => {
        total += car.price;
        html += `
            <div class="cart-item">
                <span>${car.emoji} ${car.brand} ${car.model} - $${car.price.toLocaleString()}</span>
                <button class="btn btn-small" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    html += `<h3 style="margin-top: 2rem; text-align: right; color: #ff6b6b;">Total: $${total.toLocaleString()}</h3>`;
    cartItems.innerHTML = html;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    showCart();
}

// Close modals when clicking outside
window.onclick = function (event) {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const carModal = document.getElementById('carModal');

    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === registerModal) {
        registerModal.style.display = 'none';
    }
    if (event.target === carModal) {
        carModal.style.display = 'none';
    }
};

// Load cart from localStorage
window.addEventListener('load', () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
});
