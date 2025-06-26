// Initialize localStorage data
function initializeData() {
    if (!localStorage.getItem('users')) {
        const users = [
            { email: 'admin@shroomhaws.com', password: 'admin123', role: 'admin' },
            { email: 'customer@example.com', password: 'password', role: 'customer' }
        ];
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    if (!localStorage.getItem('products')) {
        const products = [
            { id: 1, name: 'Shiitake Mushrooms', price: 8.99, image: 'https://images.unsplash.com/photo-1596363658095-ad4f0d85a0d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', description: 'Rich, savory flavor perfect for stir-fries and soups.' },
            { id: 2, name: 'Oyster Mushrooms', price: 7.49, image: 'https://images.unsplash.com/photo-1612119276551-be9e9b9a1c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', description: 'Delicate texture with a mild, sweet flavor.' },
            { id: 3, name: "Lion's Mane", price: 12.99, image: 'https://images.unsplash.com/photo-1624517452483-0442a0d5d9a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', description: 'Unique texture and flavor with potential cognitive benefits.' },
            { id: 4, name: 'Portobello Mushrooms', price: 6.99, image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', description: 'Meaty texture perfect for grilling or stuffing.' },
            { id: 5, name: 'Enoki Mushrooms', price: 5.99, image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', description: 'Delicate and crunchy, great for salads and soups.' },
            { id: 6, name: 'Maitake Mushrooms', price: 10.49, image: 'https://images.unsplash.com/photo-1623163922620-10f7b7d8e0c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', description: 'Rich, earthy flavor with potential health benefits.' },
            { id: 7, name: 'Chanterelle Mushrooms', price: 14.99, image: 'https://images.unsplash.com/photo-1618941719972-2238229f1f0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', description: 'Prized for their fruity aroma and peppery taste.' },
            { id: 8, name: 'Morel Mushrooms', price: 19.99, image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', description: 'Highly sought-after with a distinctive honeycomb appearance.' }
        ];
        localStorage.setItem('products', JSON.stringify(products));
    }
    
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
    
    if (!localStorage.getItem('orders')) {
        // Sample orders with different statuses
        const orders = [
            {
                id: 1001,
                date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
                customer: { name: 'John Doe', email: 'john@example.com' },
                address: '123 Forest Lane, Mushroom City',
                items: [
                    { id: 1, name: 'Shiitake Mushrooms', price: 8.99, quantity: 2, image: 'https://images.unsplash.com/photo-1596363658095-ad4f0d85a0d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' },
                    { id: 3, name: "Lion's Mane", price: 12.99, quantity: 1, image: 'https://images.unsplash.com/photo-1624517452483-0442a0d5d9a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' }
                ],
                total: 30.97,
                paymentMethod: 'GCash',
                status: 'Completed'
            },
            {
                id: 1002,
                date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
                customer: { name: 'Jane Smith', email: 'jane@example.com' },
                address: '456 Woodland Ave, Forest Hills',
                items: [
                    { id: 4, name: 'Portobello Mushrooms', price: 6.99, quantity: 3, image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' }
                ],
                total: 20.97,
                paymentMethod: 'PayPal',
                status: 'To Ship'
            },
            {
                id: 1003,
                date: new Date().toISOString(),
                customer: { name: 'Bob Johnson', email: 'bob@example.com' },
                address: '789 Mushroom Blvd, Fungi Town',
                items: [
                    { id: 2, name: 'Oyster Mushrooms', price: 7.49, quantity: 1, image: 'https://images.unsplash.com/photo-1612119276551-be9e9b9a1c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' },
                    { id: 8, name: 'Morel Mushrooms', price: 19.99, quantity: 2, image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' }
                ],
                total: 47.47,
                paymentMethod: 'COD',
                status: 'To Pay'
            },
            {
                id: 1004,
                date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
                customer: { name: 'Alice Brown', email: 'alice@example.com' },
                address: '321 Forest Path, Woodland',
                items: [
                    { id: 5, name: 'Enoki Mushrooms', price: 5.99, quantity: 4, image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' },
                    { id: 6, name: 'Maitake Mushrooms', price: 10.49, quantity: 2, image: 'https://images.unsplash.com/photo-1623163922620-10f7b7d8e0c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' }
                ],
                total: 44.94,
                paymentMethod: 'GCash',
                status: 'To Receive'
            },
            {
                id: 1005,
                date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
                customer: { name: 'Charlie Davis', email: 'charlie@example.com' },
                address: '654 Fungal St, Mycelium City',
                items: [
                    { id: 7, name: 'Chanterelle Mushrooms', price: 14.99, quantity: 1, image: 'https://images.unsplash.com/photo-1618941719972-2238229f1f0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' }
                ],
                total: 14.99,
                paymentMethod: 'PayPal',
                status: 'Cancelled'
            }
        ];
        localStorage.setItem('orders', JSON.stringify(orders));
    }
    
    if (!localStorage.getItem('inquiries')) {
        localStorage.setItem('inquiries', JSON.stringify([]));
    }
    
    if (!localStorage.getItem('currentUser')) {
        localStorage.setItem('currentUser', JSON.stringify(null));
    }
    
    updateAuthLink();
    updateCartCount();
}

// Update authentication link
function updateAuthLink() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const authLink = document.getElementById('auth-link');
    
    if (currentUser) {
        authLink.textContent = 'Logout';
        authLink.href = 'javascript:logout()';
    } else {
        authLink.textContent = 'Login';
        authLink.href = 'login-signup.html';
    }
}

// Logout function
function logout() {
    localStorage.setItem('currentUser', JSON.stringify(null));
    updateAuthLink();
    window.location.href = 'index.html';
}

// Add to cart function
function addToCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const products = JSON.parse(localStorage.getItem('products'));
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

// Update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(element => {
        element.textContent = count;
    });
}

// Render products on homepage
function renderProducts() {
    const products = JSON.parse(localStorage.getItem('products'));
    const container = document.getElementById('products-container');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <p class="product-description">${product.description}</p>
                <button class="btn btn-sm" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Render cart items
function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const container = document.getElementById('cart-items');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 2rem;">Your cart is empty</p>';
        document.getElementById('cart-total').textContent = '0.00';
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
            </div>
            <div class="cart-item-actions">
                <button class="quantity-btn" onclick="updateCartItem(${item.id}, ${item.quantity - 1})">-</button>
                <input type="number" class="quantity-input" value="${item.quantity}" min="1" 
                       onchange="updateCartItem(${item.id}, parseInt(this.value))">
                <button class="quantity-btn" onclick="updateCartItem(${item.id}, ${item.quantity + 1})">+</button>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        container.appendChild(cartItem);
    });
    
    document.getElementById('cart-total').textContent = getCartTotal().toFixed(2);
}

// Update cart item quantity
function updateCartItem(productId, quantity) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (quantity < 1) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
            updateCartCount();
        }
    }
}

// Remove item from cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

// Calculate cart total
function getCartTotal() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Render user orders
function renderUserOrders() {
    const orders = JSON.parse(localStorage.getItem('orders'));
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const container = document.getElementById('orders-container');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    if (!currentUser) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem;">
                <h3>Please login to view your orders</h3>
                <button class="btn btn-accent" style="margin-top: 1.5rem;" onclick="window.location.href='login-signup.html'">
                    Login to Account
                </button>
            </div>
        `;
        return;
    }
    
    const userOrders = orders.filter(order => order.customer.email === currentUser.email);
    
    if (userOrders.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 3rem;">You have no orders yet</p>';
        return;
    }
    
    userOrders.forEach(order => {
        const orderCard = document.createElement('div');
        orderCard.className = 'order-card';
        
        // Get status class
        const statusClass = `status-${order.status.toLowerCase().replace(' ', '-')}`;
        
        orderCard.innerHTML = `
            <div class="order-header">
                <div>
                    <div class="order-id">Order #${order.id}</div>
                    <div class="order-date">${new Date(order.date).toLocaleDateString()}</div>
                </div>
                <div class="order-status ${statusClass}">${order.status}</div>
            </div>
            
            <div class="order-timeline">
                ${getTimeline(order.status)}
            </div>
            
            <div class="order-items">
                ${order.items.map(item => `
                    <div class="order-item">
                        <img src="${item.image}" alt="${item.name}" class="order-item-image">
                        <div class="order-item-details">
                            <div class="order-item-title">${item.name}</div>
                            <div class="order-item-price">$${item.price.toFixed(2)} × ${item.quantity}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="order-total">Total: $${order.total.toFixed(2)}</div>
            
            <div class="order-actions">
                ${getOrderActions(order.status)}
            </div>
        `;
        
        container.appendChild(orderCard);
    });
}

// Get timeline HTML
function getTimeline(status) {
    const steps = [
        { name: 'To Pay', icon: 'fas fa-money-bill-wave' },
        { name: 'To Ship', icon: 'fas fa-box' },
        { name: 'To Receive', icon: 'fas fa-truck' },
        { name: 'Completed', icon: 'fas fa-check-circle' }
    ];
    
    let activeIndex = -1;
    switch(status) {
        case 'To Pay': activeIndex = 0; break;
        case 'To Ship': activeIndex = 1; break;
        case 'To Receive': activeIndex = 2; break;
        case 'Completed': activeIndex = 3; break;
        case 'Cancelled': activeIndex = -1; break;
    }
    
    return steps.map((step, index) => {
        let stepClass = '';
        if (status === 'Cancelled') {
            stepClass = 'cancelled';
        } else if (index <= activeIndex) {
            stepClass = index === activeIndex ? 'active' : 'completed';
        }
        
        return `
            <div class="timeline-step ${stepClass}">
                <div class="timeline-icon">
                    <i class="${step.icon}"></i>
                </div>
                <div class="timeline-label">${step.name}</div>
            </div>
        `;
    }).join('');
}

// Get order action buttons
function getOrderActions(status) {
    switch(status) {
        case 'To Pay':
            return `
                <button class="action-btn pay-btn">Pay Now</button>
                <button class="action-btn cancel-btn">Cancel Order</button>
            `;
        case 'To Ship':
            return `
                <button class="action-btn track-btn">Track Order</button>
                <button class="action-btn cancel-btn">Cancel Order</button>
            `;
        case 'To Receive':
            return `
                <button class="action-btn track-btn">Track Order</button>
                <button class="action-btn review-btn">Order Received</button>
            `;
        case 'Completed':
            return `
                <button class="action-btn review-btn">Leave Review</button>
                <button class="action-btn track-btn">Buy Again</button>
            `;
        case 'Cancelled':
            return `
                <button class="action-btn track-btn">Buy Again</button>
            `;
        default:
            return '';
    }
}

// Handle payment method selection
function setupPaymentOptions() {
    const gcashOption = document.getElementById('gcash-option');
    const paypalOption = document.getElementById('paypal-option');
    const codOption = document.getElementById('cod-option');
    
    if (gcashOption) {
        gcashOption.addEventListener('click', () => selectPayment('gcash'));
    }
    
    if (paypalOption) {
        paypalOption.addEventListener('click', () => selectPayment('paypal'));
    }
    
    if (codOption) {
        codOption.addEventListener('click', () => selectPayment('cod'));
    }
}

// Select payment method
function selectPayment(method) {
    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('active');
    });
    
    document.querySelectorAll('.payment-details').forEach(details => {
        details.classList.remove('active');
    });
    
    document.querySelector(`#${method}-option`).classList.add('active');
    document.getElementById(`${method}-details`).classList.add('active');
}

// Handle checkout form submission
function handleCheckout() {
    const form = document.getElementById('checkout-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (!currentUser) {
                alert('Please login to place an order');
                window.location.href = 'login-signup.html';
                return;
            }
            
            const cart = JSON.parse(localStorage.getItem('cart'));
            if (cart.length === 0) {
                alert('Your cart is empty');
                return;
            }
            
            const name = document.getElementById('full-name').value;
            const email = document.getElementById('email').value;
            const address = document.getElementById('address').value;
            const paymentMethod = document.querySelector('.payment-option.active div').textContent;
            
            const order = {
                id: Date.now(),
                date: new Date().toISOString(),
                customer: { name, email },
                address,
                items: cart,
                total: getCartTotal(),
                paymentMethod,
                status: 'To Pay' // Initial status
            };
            
            const orders = JSON.parse(localStorage.getItem('orders'));
            orders.push(order);
            localStorage.setItem('orders', JSON.stringify(orders));
            
            // Clear cart
            localStorage.setItem('cart', JSON.stringify([]));
            updateCartCount();
            
            alert('Order placed successfully!');
            window.location.href = 'my-orders.html';
        });
    }
}

// Handle support form submission
function handleSupportForm() {
    const form = document.getElementById('support-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('support-name').value;
            const email = document.getElementById('support-email').value;
            const message = document.getElementById('support-message').value;
            
            const inquiry = {
                name,
                email,
                message,
                date: new Date().toISOString()
            };
            
            const inquiries = JSON.parse(localStorage.getItem('inquiries'));
            inquiries.push(inquiry);
            localStorage.setItem('inquiries', JSON.stringify(inquiries));
            
            alert('Your inquiry has been submitted!');
            form.reset();
            document.getElementById('chat-box').classList.remove('active');
        });
    }
}

// Initialize page-specific functionality
function initPage() {
    initializeData();
    
    // Setup chat functionality
    const chatBubble = document.getElementById('chat-bubble');
    const chatBox = document.getElementById('chat-box');
    const chatClose = document.getElementById('chat-close');
    
    if (chatBubble && chatBox && chatClose) {
        chatBubble.addEventListener('click', () => {
            chatBox.classList.toggle('active');
        });
        
        chatClose.addEventListener('click', () => {
            chatBox.classList.remove('active');
        });
    }
    
    // Page-specific initializations
    if (document.getElementById('products-container')) {
        renderProducts();
    }
    
    if (document.getElementById('cart-items')) {
        renderCart();
    }
    
    if (document.getElementById('orders-container')) {
        renderUserOrders();
    }
    
    if (document.getElementById('checkout-form')) {
        setupPaymentOptions();
        handleCheckout();
    }
    
    if (document.getElementById('checkout-btn')) {
        document.getElementById('checkout-btn').addEventListener('click', () => {
            window.location.href = 'checkout.html';
        });
    }
    
    handleSupportForm();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);