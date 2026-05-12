/* Main Script - Handles navigation, filtering, and interactivity */

class Portfolio {
    constructor() {
        this.initSidebar();
        this.initNavigation();
        this.initFilter();
        this.initForm();
    }

    initSidebar() {
        const sidebarBtn = document.querySelector('[data-sidebar-btn]');
        const sidebar = document.querySelector('[data-sidebar]');
        
        if (sidebarBtn && sidebar) {
            sidebarBtn.addEventListener('click', () => {
                sidebar.classList.toggle('hide');
            });
        }
    }

    initNavigation() {
        const navLinks = document.querySelectorAll('[data-nav-link]');
        const pages = document.querySelectorAll('[data-page]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Remove active class from all links and pages
                navLinks.forEach(l => l.classList.remove('active'));
                pages.forEach(p => p.classList.remove('active'));
                
                // Add active class to clicked link
                link.classList.add('active');
                
                // Show corresponding page
                const pageName = link.getAttribute('data-nav-link').toLowerCase();
                const targetPage = document.querySelector(`[data-page="${pageName}"]`);
                if (targetPage) {
                    targetPage.classList.add('active');
                }
            });
        });
    }

    initFilter() {
        const filterBtns = document.querySelectorAll('[data-filter-btn]');
        const projectItems = document.querySelectorAll('.project-item');
        const selectBtn = document.querySelector('[data-select]');
        const selectItems = document.querySelectorAll('[data-select-item]');
        const selectValue = document.querySelector('[data-selecct-value]'); // Note: typo in original HTML
        
        // Button filters
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter-btn');
                
                // Update select dropdown
                if (selectValue) {
                    selectValue.textContent = btn.textContent;
                }
                
                // Filter projects
                projectItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-filter');
                    if (filterValue === 'all' || itemCategory === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        
        // Select dropdown
        if (selectBtn && selectItems && selectValue) {
            selectBtn.addEventListener('click', () => {
                const selectList = selectBtn.parentElement.querySelector('.select-list');
                selectList.classList.toggle('show');
            });
            
            selectItems.forEach(item => {
                item.addEventListener('click', () => {
                    const value = item.getAttribute('data-select-item');
                    selectValue.textContent = item.textContent;
                    
                    // Trigger filter
                    filterBtns.forEach(btn => {
                        if (btn.getAttribute('data-filter-btn') === value || 
                            (value === 'all' && btn.getAttribute('data-filter-btn') === 'All')) {
                            btn.click();
                        }
                    });
                    
                    // Hide dropdown
                    selectBtn.parentElement.querySelector('.select-list').classList.remove('show');
                });
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!selectBtn.contains(e.target) && !selectBtn.parentElement.querySelector('.select-list').contains(e.target)) {
                    selectBtn.parentElement.querySelector('.select-list').classList.remove('show');
                }
            });
        }
    }

    initForm() {
        const form = document.querySelector('[data-form]');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);
                
                // Here you would typically send to a backend
                // For now, we'll show a toast
                this.showToast('Message sent successfully!', 'success');
                
                // Reset form
                form.reset();
                
                // Re-disable submit button (if it was enabled by validation)
                const submitBtn = form.querySelector('[data-form-btn]');
                if (submitBtn) {
                    submitBtn.disabled = true;
                }
            });
            
            // Form validation
            const formInputs = form.querySelectorAll('[data-form-input]');
            const submitBtn = form.querySelector('[data-form-btn]');
            
            if (submitBtn && formInputs.length > 0) {
                const validateForm = () => {
                    let isValid = true;
                    formInputs.forEach(input => {
                        if (!input.value.trim()) {
                            isValid = false;
                        }
                    });
                    submitBtn.disabled = !isValid;
                };
                
                formInputs.forEach(input => {
                    input.addEventListener('input', validateForm);
                });
                
                // Initial validation
                validateForm();
            }
        }
    }

    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.textContent = message;
            toast.className = `toast ${type}`;
            toast.style.display = 'block';
            
            setTimeout(() => {
                toast.style.display = 'none';
            }, 3000);
        }
    }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolio = new Portfolio();
});