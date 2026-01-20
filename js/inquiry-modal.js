document.addEventListener('DOMContentLoaded', () => {
    // Create modal logic
    const modal = document.getElementById('inquiry-modal');
    const openBtns = document.querySelectorAll('.open-inquiry');
    const closeBtn = document.querySelector('.close-modal');
    const form = document.getElementById('inquiry-form');

    if (!modal) return;

    // Open modal
    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close modal
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Form submission
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate submission
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;

            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
                btn.classList.add('btn-success');

                setTimeout(() => {
                    closeModal();
                    form.reset();
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    btn.classList.remove('btn-success');
                }, 1500);
            }, 1000);
        });
    }
});
