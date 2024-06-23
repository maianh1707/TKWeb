document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cart-items').querySelector('tbody');
    const grandTotalElement = document.querySelector('.grand-total');
    const checkoutForm = document.getElementById('checkout-form');
    const checkoutBtn = document.querySelector('.checkout-btn');

    // Hàm chuyển đổi số thành chuỗi định dạng tiền tệ với phân cách hàng nghìn
    function formatCurrency(amount) {
        return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }

    function loadCart() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><input type="checkbox" class="select-product"></td>
                <td>
                    <div class="product-info">
                        <img src="${product.image}" alt="${product.name}">
                        <div>
                            <p>${product.name}</p>
                            <a href="#" class="delete">Xóa</a>
                        </div>
                    </div>
                </td>
                <td class="price">${formatCurrency(product.price)}</td>
                <td>
                    <div class="quantity">
                        <button class="minus">-</button>
                        <input type="text" value="${product.quantity}">
                        <button class="plus">+</button>
                    </div>
                </td>
                <td class="total">${formatCurrency(product.price * product.quantity)}</td>
            `;
            cartItems.appendChild(row);
        });
        updateTotal();
    }

    function updateTotal() {
        let grandTotal = 0;
        document.querySelectorAll('#cart-items tbody tr').forEach(row => {
            const price = parseFloat(row.querySelector('.price').textContent.replace(/\D/g, '')); // Loại bỏ tất cả ký tự không phải số
            const quantity = parseInt(row.querySelector('.quantity input').value);
            const total = price * quantity;
            row.querySelector('.total').textContent = formatCurrency(total);

            const checkbox = row.querySelector('.select-product');
            if (checkbox.checked) {
                grandTotal += total;
            }
        });
        grandTotalElement.textContent = formatCurrency(grandTotal);
    }

    function updateLocalStorage() {
        const cart = [];
        document.querySelectorAll('#cart-items tbody tr').forEach(row => {
            const name = row.querySelector('.product-info p').textContent;
            const price = parseFloat(row.querySelector('.price').textContent.replace(/\D/g, ''));
            const quantity = parseInt(row.querySelector('.quantity input').value);
            const image = row.querySelector('.product-info img').src;
            cart.push({ name, price, quantity, image });
        });
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    cartItems.addEventListener('click', function(event) {
        if (event.target.classList.contains('plus')) {
            const input = event.target.previousElementSibling;
            input.value = parseInt(input.value) + 1;
            updateLocalStorage();
            updateTotal();
        } else if (event.target.classList.contains('minus')) {
            const input = event.target.nextElementSibling;
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
                updateLocalStorage();
                updateTotal();
            }
        } else if (event.target.classList.contains('delete')) {
            event.preventDefault();
            const row = event.target.closest('tr');
            const name = row.querySelector('.product-info p').textContent;
            row.remove();
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart = cart.filter(product => product.name !== name);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateTotal();
        } else if (event.target.classList.contains('select-product')) {
            updateTotal();
        }
    });

    cartItems.addEventListener('input', function(event) {
        if (event.target.tagName === 'INPUT' && event.target.type === 'text') {
            updateLocalStorage();
            updateTotal();
        }
    });

    checkoutBtn.addEventListener('click', function() {
        checkoutForm.style.display = 'block';
    });

    loadCart(); // Gọi hàm loadCart để tải sản phẩm vào giỏ hàng ban đầu
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navUl = document.querySelector("nav ul");

    // Xử lý khi click vào biểu tượng gạch để mở menu
    menuToggle.addEventListener("click", function() {
        navUl.classList.toggle("show");
    });

    // Xử lý hover vào biểu tượng gạch để hiển thị dropdown menu
    const menuToggleHover = document.querySelector(".menu-toggle-hover");
    const dropdown = document.querySelector(".dropdown");

    menuToggleHover.addEventListener("mouseover", function() {
        dropdown.classList.toggle("show");
    });

    menuToggleHover.addEventListener("mouseout", function() {
        dropdown.classList.remove("show");
    });
});

//cuộn trang khi nhấn tìm hiểu thêm
document.addEventListener("DOMContentLoaded", function() {
    // Lắng nghe sự kiện click trên nút "Tìm hiểu thêm"
    var learnMoreButton = document.getElementById("learn-more-button");
    learnMoreButton.addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của nút

        // Tìm phần tử có ID là "vip-section"
        var vipSection = document.getElementById("vip-section");
        
        // Kiểm tra nếu phần tử tồn tại
        if (vipSection) {
            // Cuộn xuống phần tử "vip-section" với hiệu ứng smooth
            vipSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

//thông báo y mail 
// Hiển thị Modal
function showModal(message) {
    var modal = document.getElementById("myModal");
    var modalMessage = document.getElementById("modalMessage");
    
    modalMessage.textContent = message;
    modal.style.display = "block";
}

// Ẩn Modal
function hideModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Validate Email
function validateEmail() {
    var emailInput = document.getElementById("emailInput").value;
    var modalButton = document.getElementById("modalButton");

    if (/^\w+([\.-]?\w+)*@gmail.com$/.test(emailInput)) {
        showModal("Bạn đã đăng ký nhận thông báo mới nhất của Bói vui thành công.");
    } else {
        showModal("Bạn nhập không đúng định dạng của email, hãy nhập lại.");
    }
    
    modalButton.onclick = function() {
        hideModal();
    }
}

// Đóng Modal khi click bên ngoài Modal
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        hideModal();
    }
}
