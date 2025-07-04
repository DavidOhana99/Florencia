  // Hamburger menu logic for mobile
        const navToggle = document.querySelector('.nav-toggle');
        const navList = document.querySelector('.mobile-nav .nav-list');
        if (navToggle && navList) {
            navToggle.addEventListener('click', () => {
                navList.classList.toggle('open');
            });
            document.addEventListener('click', (e) => {
                if (
                    navList.classList.contains('open') &&
                    !navList.contains(e.target) &&
                    !navToggle.contains(e.target)
                ) {
                    navList.classList.remove('open');
                }
            });
        }