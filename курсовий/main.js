document.addEventListener('DOMContentLoaded', function() {

    const toTopBtn = document.getElementById('toTopBtn');

    if (toTopBtn) {
        function checkScroll() {
            if (window.scrollY > 300) {
                toTopBtn.classList.add('active');
            } else {
                toTopBtn.classList.remove('active');
            }
        }

        window.addEventListener('scroll', checkScroll);

        toTopBtn.addEventListener('click', function(e) {
            e.preventDefault(); 
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    const accountBtn = document.getElementById('accountBtn');
    const modal = document.getElementById('registrationModal');
    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalCloseBtn');
    const regForm = document.getElementById('registrationForm');

    function openModal() {
        if (modal && overlay) { 
            modal.classList.add('active');
            overlay.classList.add('active');
        }
    }

    function closeModal() {
        if (modal && overlay) {
            modal.classList.remove('active');
            overlay.classList.remove('active');
        }
    }

    if (accountBtn) {
        accountBtn.addEventListener('click', function(e) {
            e.preventDefault(); 
            openModal();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            closeModal();
        });
    }

    if (overlay) {
        overlay.addEventListener('click', function() {
            closeModal();
        });
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            e.stopPropagation(); 
        });
    }
    
    if (regForm) {
        regForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            
            console.log('Форма відправлена!');
            console.log('Ім\'я користувача:', username);
            console.log('Email:', email);
            
            alert('Реєстрація успішна! (Дані виведено в консоль F12)');
            closeModal(); 
        });
    }

});