document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.plan-button').addEventListener('click', function() {
        const product = {
            name: this.getAttribute('data-name'),
            price: this.getAttribute('data-price'),
            image: this.getAttribute('data-image'),
            quantity: 1
        };
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Gói VIP đã được thêm vào giỏ hàng!');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Gắn sự kiện click cho tất cả các nút có lớp .add-to-cart hiện có và trong tương lai
    document.querySelectorAll('.plan-button').forEach(button => {
        button.addEventListener('click', function() {
            const product = {
                name: this.getAttribute('data-name'),
                price: parseFloat(this.getAttribute('data-price')),
                image: this.getAttribute('data-image'),
                quantity: 1
            };
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingProductIndex = cart.findIndex(item => item.name === product.name);
            if (existingProductIndex > -1) {
                cart[existingProductIndex].quantity += 1;
            } else {
                cart.push(product);
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Gói VIP đã được thêm vào giỏ hàng!');
            // Optionally redirect to the cart page
            window.location.href = 'cart.html';
        });
    });
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


//
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const inputs = form.querySelectorAll('input[required]');
    const modal = document.getElementById('registerConsultationModal');
    const modalContent = modal.querySelector('.register-consultation-modal-content');
    const closeModal = modal.querySelector('.register-consultation-close');
    const modalMessage = document.getElementById('modalMessage');

    // Xử lý sự kiện gửi form
    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Ngăn chặn hành vi gửi form mặc định

        let allFilled = true;
        inputs.forEach(input => {
            if (!input.value) {
                allFilled = false;
            }
        });

        if (allFilled) {
            modalMessage.textContent = 'Bạn đã đăng ký nhận tư vấn thành công, chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất.';
        } else {
            modalMessage.textContent = 'Bạn chưa nhập đủ thông tin.';
        }

        modal.style.display = 'block';
    });

    // Đóng modal khi click vào nút close
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Đóng modal khi click ra ngoài modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

