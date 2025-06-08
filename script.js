// Data
const popularItems = [
    {
        id: 1,
        name: "Masala Chai",
        description: "Classic Indian spiced tea with ginger and cardamom",
        price: 20,
        image: "https://placehold.co/300x200"
    },
    {
        id: 2,
        name: "Samosa",
        description: "Crispy pastry filled with spiced potatoes and peas",
        price: 15,
        image: "https://placehold.co/300x200"
    },
    {
        id: 3,
        name: "Vada Pav",
        description: "Spicy potato fritter in a bun with chutneys",
        price: 30,
        image: "https://placehold.co/300x200"
    }
];

const chaiItems = [
    {
        id: 1,
        name: "Masala Chai",
        description: "Classic Indian spiced tea with ginger and cardamom",
        price: 20,
        image: "https://placehold.co/300x200"
    },
    {
        id: 2,
        name: "Ginger Chai",
        description: "Strong tea with extra ginger for that perfect kick",
        price: 25,
        image: "https://placehold.co/300x200"
    },
    {
        id: 3,
        name: "Elaichi Chai",
        description: "Fragrant tea with cardamom as the dominant flavor",
        price: 25,
        image: "https://placehold.co/300x200"
    },
    {
        id: 4,
        name: "Chocolate Chai",
        description: "Creamy chai with rich chocolate flavor",
        price: 35,
        image: "https://placehold.co/300x200"
    },
    {
        id: 5,
        name: "Kashmiri Pink Chai",
        description: "Traditional pink tea with nuts and spices",
        price: 40,
        image: "https://placehold.co/300x200"
    },
    {
        id: 6,
        name: "Lemon Tea",
        description: "Refreshing tea with a citrus twist",
        price: 20,
        image: "https://placehold.co/300x200"
    }
];

const snackItems = [
    {
        id: 7,
        name: "Samosa",
        description: "Crispy pastry filled with spiced potatoes and peas",
        price: 15,
        image: "https://placehold.co/300x200"
    },
    {
        id: 8,
        name: "Vada Pav",
        description: "Spicy potato fritter in a bun with chutneys",
        price: 30,
        image: "https://placehold.co/300x200"
    },
    {
        id: 9,
        name: "Bread Pakora",
        description: "Bread slices stuffed with spicy potatoes, dipped in gram flour batter and fried",
        price: 25,
        image: "https://placehold.co/300x200"
    },
    {
        id: 10,
        name: "Kachori",
        description: "Deep-fried snack filled with spicy lentils",
        price: 20,
        image: "https://placehold.co/300x200"
    },
    {
        id: 11,
        name: "Bun Maska",
        description: "Soft bun with a generous layer of butter",
        price: 15,
        image: "https://placehold.co/300x200"
    },
    {
        id: 12,
        name: "Maggi",
        description: "Classic instant noodles with our special masala",
        price: 40,
        image: "https://placehold.co/300x200"
    }
];

const comboItems = [
    {
        id: 13,
        name: "Chai & Samosa Combo",
        description: "Masala chai with 2 samosas",
        price: 45,
        image: "https://placehold.co/300x200"
    },
    {
        id: 14,
        name: "Chai & Vada Pav Combo",
        description: "Ginger chai with vada pav",
        price: 50,
        image: "https://placehold.co/300x200"
    },
    {
        id: 15,
        name: "Study Break Combo",
        description: "Masala chai with bread pakora and bun maska",
        price: 60,
        image: "https://placehold.co/300x200"
    },
    {
        id: 16,
        name: "Hostel Special",
        description: "2 masala chai with maggi and bread pakora",
        price: 90,
        image: "https://placehold.co/300x200"
    }
];

// Helper Functions
function createItemCard(item) {
    return `
        <div class="item-card" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" class="item-image">
            <div class="item-content">
                <div class="item-header">
                    <h3 class="item-name">${item.name}</h3>
                    <span class="item-price">₹${item.price}</span>
                </div>
                <p class="item-description">${item.description}</p>
                <button class="btn add-to-cart-btn" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}" data-image="${item.image}">Add to Cart</button>
            </div>
        </div>
    `;
}

function createCartItem(item) {
    return `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-price">₹${item.price} each</p>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn decrease-btn" data-id="${item.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
                <span class="quantity-value">${item.quantity}</span>
                <button class="quantity-btn increase-btn" data-id="${item.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
            </div>
            <div class="cart-item-total">
                <div class="cart-item-total-price">₹${item.price * item.quantity}</div>
                <button class="remove-btn" data-id="${item.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                    Remove
                </button>
            </div>
        </div>
    `;
}

function createEmptyCart() {
    return `
        <div class="empty-cart">
            <svg class="empty-cart-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <h3 class="empty-cart-title">Your cart is empty</h3>
            <p class="empty-cart-text">Looks like you haven't added anything to your cart yet.</p>
            <a href="menu.html" class="btn">Browse Menu</a>
        </div>
    `;
}

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }
}

function addToCart(id, name, price, image) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id,
            name,
            price,
            image,
            quantity: 1
        });
    }
    
    saveCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== parseInt(id));
    saveCart();
}

function updateQuantity(id, newQuantity) {
    if (newQuantity < 1) return;
    
    const item = cart.find(item => item.id === parseInt(id));
    if (item) {
        item.quantity = newQuantity;
        saveCart();
    }
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = count;
    }
}

function calculateTotal() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const deliveryFee = 10;
    const total = subtotal + deliveryFee;
    
    if (document.getElementById('subtotal')) {
        document.getElementById('subtotal').textContent = `₹${subtotal}`;
        document.getElementById('total').textContent = `₹${total}`;
    }
    
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.disabled = cart.length === 0;
    }
}

function renderCart() {
    const cartContainer = document.getElementById('cart-items-container');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = createEmptyCart();
    } else {
        cartContainer.innerHTML = '';
        cart.forEach(item => {
            cartContainer.innerHTML += createCartItem(item);
        });
    }
    
    calculateTotal();
    
    // Add event listeners to cart items
    document.querySelectorAll('.increase-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            const item = cart.find(item => item.id === id);
            updateQuantity(id, item.quantity + 1);
        });
    });
    
    document.querySelectorAll('.decrease-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            const item = cart.find(item => item.id === id);
            updateQuantity(id, item.quantity - 1);
        });
    });
    
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.dataset.id;
            removeFromCart(id);
        });
    });
}

// Initialize Page
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Render items on homepage
    const popularItemsContainer = document.getElementById('popular-items-container');
    if (popularItemsContainer) {
        popularItems.forEach(item => {
            popularItemsContainer.innerHTML += createItemCard(item);
        });
    }
    
    // Render items on menu page
    const chaiItemsContainer = document.getElementById('chai-items-container');
    const snackItemsContainer = document.getElementById('snack-items-container');
    const comboItemsContainer = document.getElementById('combo-items-container');
    
    if (chaiItemsContainer) {
        chaiItems.forEach(item => {
            chaiItemsContainer.innerHTML += createItemCard(item);
        });
    }
    
    if (snackItemsContainer) {
        snackItems.forEach(item => {
            snackItemsContainer.innerHTML += createItemCard(item);
        });
    }
    
    if (comboItemsContainer) {
        comboItems.forEach(item => {
            comboItemsContainer.innerHTML += createItemCard(item);
        });
    }
    
    // Render cart on cart page
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }
    
    // Tab functionality on menu page
    const tabButtons = document.querySelectorAll('.tab-button');
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tab = this.dataset.tab;
                
                // Update active tab button
                document.querySelectorAll('.tab-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                this.classList.add('active');
                
                // Update active tab content
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                document.getElementById(`${tab}-tab`).classList.add('active');
            });
        });
    }
    
    // Add to cart functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const { id, name, price, image } = e.target.dataset;
            addToCart(parseInt(id), name, parseInt(price), image);
            
            // Show confirmation
            alert(`${name} added to cart!`);
        }
    });
    
    // Checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            const hostel = document.getElementById('hostel').value;
            const room = document.getElementById('room').value;
            
            if (!hostel) {
                alert('Please select your hostel');
                return;
            }
            
            if (!room) {
                alert('Please enter your room number');
                return;
            }
            
            alert('Order placed successfully! Your order will be delivered soon.');
            cart = [];
            saveCart();
            window.location.href = 'index.html';
        });
    }
});