const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        const cards = document.querySelectorAll('.destination-card');
        cards.forEach(card => {
            const name = card.getAttribute('data-name');
            if (name.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        galleryItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    if (lightbox && img) {
        img.src = src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');
        const successMsg = document.getElementById('contactSuccess');

        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        successMsg.classList.add('d-none');

        if (name.length < 3) {
            nameError.textContent = '❌ Name must be at least 3 characters';
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = '❌ Please enter a valid email address';
            isValid = false;
        }

        if (message.length < 10) {
            messageError.textContent = '❌ Message must be at least 10 characters';
            isValid = false;
        }

        if (isValid) {
            successMsg.classList.remove('d-none');
            contactForm.reset();
        }
    });
}

const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const successMsg = document.getElementById('bookingSuccess');
        const destination = document.getElementById('bdestination').value;
        
        if (!destination) {
            alert('Please select a destination!');
            return;
        }
        
        successMsg.classList.remove('d-none');
        bookingForm.reset();
    });
}

const toggleBtn = document.createElement('button');
toggleBtn.innerHTML = '🌙';
toggleBtn.className = 'btn btn-secondary';
toggleBtn.id = 'darkModeToggle';
toggleBtn.title = 'Toggle Dark Mode';
document.body.appendChild(toggleBtn);

let isDark = localStorage.getItem('darkMode') === 'true';

function updateDarkMode() {
    if (isDark) {
        document.body.classList.add('dark-mode');
        toggleBtn.innerHTML = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        toggleBtn.innerHTML = '🌙';
    }
}

updateDarkMode();

toggleBtn.addEventListener('click', function() {
    isDark = !isDark;
    localStorage.setItem('darkMode', isDark);
    updateDarkMode();
});