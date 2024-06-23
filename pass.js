document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('password-form');
    const currentPasswordInput = document.getElementById('current-password');
    const newPasswordInput = document.getElementById('new-password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const errorDiv = document.getElementById('password-error');

    // Load the stored password from localStorage
    const storedPassword = localStorage.getItem('password') || '1'; // Default password is '1'

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const currentPassword = currentPasswordInput.value;
        const newPassword = newPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Clear previous error or success messages
        errorDiv.innerHTML = '';

        if (currentPassword !== storedPassword) {
            showError('Mật khẩu hiện tại chưa đúng');
            return;
        }

        if (newPassword !== confirmPassword) {
            showError('Mật khẩu mới không khớp');
            return;
        }

        if (newPassword === currentPassword) {
            showError('Mật khẩu mới không được trùng với mật khẩu cũ');
            return;
        }

        // Save the new password to localStorage
        localStorage.setItem('password', newPassword);

        showSuccess('Đổi mật khẩu thành công');
    });

    function showError(message) {
        errorDiv.innerHTML = `<p class="error-message">${message}</p>`;
    }

    function showSuccess(message) {
        errorDiv.innerHTML = `<p class="success-message">${message}</p>`;
    }
});
