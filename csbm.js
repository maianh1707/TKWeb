
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
