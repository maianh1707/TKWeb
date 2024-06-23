// Lưu trữ danh sách các câu hỏi
var allCards = document.querySelectorAll(".card");

function searchQuestions(event) {
    if (event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form submit
    }

    var input = document.getElementById("searchInput").value.trim().toLowerCase();
    var results = [];

    if (!input) {
        displayAllQuestions(); // Nếu không có từ khóa nhập vào, hiển thị lại tất cả câu hỏi
        return;
    }

    allCards.forEach(function(card) {
        var questionText = card.querySelector(".card-front p").textContent.toLowerCase();
        var matches = countMatches(questionText, input);
        if (matches > 0) {
            results.push({ card: card, matches: matches });
        }
    });

    var cardGrid = document.querySelector(".card-grid");
    cardGrid.textContent = ""; // Xóa hết nội dung hiện tại của grid

    if (results.length === 0) {
        var noResultMessage = document.createElement("p");
        noResultMessage.textContent = "Không tìm thấy kết quả phù hợp.";
        cardGrid.appendChild(noResultMessage);
    } else {
        results.sort(function(a, b) {
            return b.matches - a.matches;
        });

        results.forEach(function(result) {
            cardGrid.appendChild(result.card);
        });
    }
}

function countMatches(str, keyword) {
    var count = 0;
    var position = str.indexOf(keyword);
    while (position !== -1) {
        count++;
        position = str.indexOf(keyword, position + 1);
    }
    return count;
}

function displayAllQuestions() {
    var cardGrid = document.querySelector(".card-grid");
    cardGrid.textContent = ""; // Xóa hết nội dung hiện tại của grid

    allCards.forEach(function(card) {
        cardGrid.appendChild(card);
    });
}

// Thêm sự kiện để lật thẻ khi nhấp vào
allCards.forEach(function(card) {
    card.addEventListener("click", function() {
        card.classList.toggle("flipped");
    });
});

var searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", searchQuestions);

// Gắn sự kiện khi người dùng ấn nút tìm kiếm
var searchButton = document.querySelector(".search-bar button");
searchButton.addEventListener("click", function(event) {
    searchQuestions(event);
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
