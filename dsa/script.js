// Initialize Chart.js
document.addEventListener('DOMContentLoaded', function() {
    // Keep existing chart initialization code...

    // Page navigation functionality
    const pages = {
        'overview': document.getElementById('overview-page'),
        'courses': document.getElementById('courses-page')
    };

    // Show overview page by default
    pages['overview'].style.display = 'block';

    // Add click event listeners to nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all nav items
            document.querySelectorAll('.nav-item').forEach(navItem => {
                navItem.classList.remove('active');
            });
            
            // Add active class to clicked item
            this.classList.add('active');

            // Hide all pages
            Object.values(pages).forEach(page => {
                page.style.display = 'none';
            });

            // Show selected page
            const pageToShow = this.getAttribute('data-page');
            if (pages[pageToShow]) {
                pages[pageToShow].style.display = 'block';
            }
        });
    });

    // Add functionality to homework checkboxes
    document.querySelectorAll('.homework-item input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const homeworkItem = this.closest('.homework-item');
            if (this.checked) {
                homeworkItem.style.opacity = '0.7';
            } else {
                homeworkItem.style.opacity = '1';
            }
        });
    });

    // Add hover effect to chapter cards
    document.querySelectorAll('.chapter-card').forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});