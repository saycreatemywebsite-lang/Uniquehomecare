// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

console.log("Unique Home Care website loaded successfully.");

// 1. Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.padding = '1rem 10%';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.padding = '1.5rem 10%';
        navbar.style.boxShadow = 'none';
    }
});

// 2. Scroll Reveal Animation (Products fade in)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.8s ease-out';
    observer.observe(card);
});

// 3. Creative "Add to Enquiry" Feedback
document.querySelectorAll('.add-btn').forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.innerText;
        this.innerText = 'Added to List! ✓';
        this.style.background = '#27ae60';
        this.style.color = '#fff';
        this.style.borderColor = '#27ae60';

        setTimeout(() => {
            this.innerText = originalText;
            this.style.background = 'transparent';
            this.style.color = '#2c3e50';
            this.style.borderColor = '#2c3e50';
        }, 2000);
    });
});

// Counter Animation Logic
const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCount();
    });
};

// Start counter when visible
const statsSection = document.querySelector('.stats');
const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        startCounters();
        statsObserver.unobserve(statsSection);
    }
}, { threshold: 0.5 });

statsObserver.observe(statsSection);

// Live Search Filter Function
function filterProducts() {
    let input = document.getElementById('productSearch').value.toLowerCase();
    let cards = document.getElementsByClassName('product-card');
    
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector('h3').innerText.toLowerCase();
        let desc = cards[i].querySelector('p').innerText.toLowerCase();
        
        if (title.includes(input) || desc.includes(input)) {
            cards[i].style.display = "block";
            cards[i].style.animation = "fadeIn 0.5s ease forwards";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// Typing Effect for Hero Title
const text = "Modern Homes";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.querySelector('.typing-text').innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 200);
    }
}
window.onload = typeEffect;

// Live Search Filter Function
function filterProducts() {
    let input = document.getElementById('productSearch').value.toLowerCase();
    let cards = document.getElementsByClassName('product-card');
    
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector('h3').innerText.toLowerCase();
        let desc = cards[i].querySelector('p').innerText.toLowerCase();
        
        if (title.includes(input) || desc.includes(input)) {
            cards[i].style.display = "block";
            cards[i].style.animation = "fadeIn 0.5s ease forwards";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// Typing Effect for Hero Title
const text = "Modern Homes";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.querySelector('.typing-text').innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 200);
    }
}
window.onload = typeEffect;

function setSearch(term) {
    document.getElementById('productSearch').value = term;
    filterProducts(); // Auto search trigger karega
}

const searchInput = document.getElementById('productSearch');

if (searchInput) {
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            let searchTerm = this.value;
            // Search term ko URL mein bhej rahe hain
            window.location.href = `products.html?search=${searchTerm}`;
        }
    });
}


// Intro Section animation
const introObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

const introElement = document.querySelector('.brand-intro');
introElement.style.opacity = '0';
introElement.style.transform = 'translateY(30px)';
introElement.style.transition = 'all 1s ease';
introObserver.observe(introElement);

// Professional Page Loader Logic
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});

// Adding smooth transitions to links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (href && href.includes('.html')) {
            e.preventDefault();
            document.body.style.opacity = '0';
            document.body.style.transition = '0.4s';
            setTimeout(() => {
                window.location.href = href;
            }, 400);
        }
    });
});

// Global Link Handling for Smooth Page Transitions
document.addEventListener('click', (e) => {
    const target = e.target.closest('a');
    if (target && target.href.includes('.html')) {
        // Sirf local pages ke liye transition lagao
        e.preventDefault();
        const destination = target.href;

        document.body.style.opacity = '0';
        document.body.style.transform = 'translateY(-10px)';
        document.body.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

        setTimeout(() => {
            window.location.href = destination;
        }, 400);
    }
});

// Ensure page is visible when loading
window.addEventListener('pageshow', () => {
    document.body.style.opacity = '1';
    document.body.style.transform = 'translateY(0)';
});

document.addEventListener("DOMContentLoaded", () => {
    // 1. Page Load hone par fade-in
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 100);

    document.addEventListener("DOMContentLoaded", () => {
    // Page load hote hi animation start karein
    document.body.classList.add("page-fade-in");

    // Sabhi links ko handle karein
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Sirf local pages (.html) ke liye transition chalayein
            // # (anchors) ko skip karein taaki search bar aur scroll sahi chale
            if (href && href.includes('.html') && !href.startsWith('#')) {
                e.preventDefault(); 
                
                // Exit animation start karein
                document.body.classList.add("page-fade-out");

                // Naye page par bhejein transition ke baad
                setTimeout(() => {
                    window.location.href = href;
                }, 450); // CSS animation se thoda kam time
            }
        });
    });
});

// Safari/Chrome back button fix
window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload();
    }
};

let typingTimer;
const doneTypingInterval = 500; // 0.5 seconds ka delay "processing" feel ke liye

function processSearch() {
    const loader = document.getElementById('searchLoader');
    const searchBar = document.querySelector('.search-container');
    
    // Har key press par timer reset karein
    clearTimeout(typingTimer);
    
    // Spinner dikhao aur glowing effect add karo
    loader.className = 'loader-visible';
    searchBar.classList.add('searching-active');

    // User ne typing stop kar di, ab "Process" karke results dikhao
    typingTimer = setTimeout(() => {
        executeFilter();
        
        // Processing khatam, loader chupao
        loader.className = 'loader-hidden';
        searchBar.classList.remove('searching-active');
    }, doneTypingInterval);
}

function executeFilter() {
    let input = document.getElementById('productSearch').value.toLowerCase();
    let cards = document.getElementsByClassName('product-card');
    let found = false;

    // Purana 'No Result' message handle karein
    let existingMsg = document.getElementById('no-result-msg');
    if (existingMsg) existingMsg.remove();

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector('h3').innerText.toLowerCase();
        if (title.includes(input)) {
            cards[i].style.display = "block";
            cards[i].style.animation = "fadeInUp 0.4s ease forwards";
            found = true;
        } else {
            cards[i].style.display = "none";
        }
    }

// Global Function for Search
function processSearch() {
    console.log("Searching triggered..."); // Debugging ke liye
    
    const input = document.getElementById('productSearch').value.toLowerCase();
    const loader = document.getElementById('searchLoader');
    const cards = document.querySelectorAll('.product-card');
    const grid = document.querySelector('.product-grid');

    // 1. Loader ko dikhao
    if(loader) loader.style.opacity = "1";

    // 2. 300ms ka delay (Processing feel)
    setTimeout(() => {
        let found = false;

        // Purana No-Result message delete karein
        const oldMsg = document.getElementById('no-result-msg');
        if (oldMsg) oldMsg.remove();

        // 3. Filtering Loop
        cards.forEach(card => {
            const title = card.querySelector('h3').innerText.toLowerCase();
            const desc = card.querySelector('p').innerText.toLowerCase();

            if (title.includes(input) || desc.includes(input)) {
                card.style.display = "block";
                card.style.opacity = "1";
                found = true;
            } else {
                card.style.display = "none";
                card.style.opacity = "0";
            }
        });

        // 4. No Results handling
        if (!found && input !== "") {
            const msg = document.createElement('div');
            msg.id = 'no-result-msg';
            msg.style.width = "100%";
            msg.style.textAlign = "center";
            msg.style.padding = "50px";
            msg.innerHTML = `<h3 style="color:#8e9aaf">AI Search: No matches found for "${input}"</h3>`;
            grid.appendChild(msg);
        }

        // 5. Loader hide karein
        if(loader) loader.style.opacity = "0";
        
    }, 400); 
}

