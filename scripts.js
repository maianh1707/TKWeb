document.getElementById("exploreButton").onclick = function() {
    window.location.href = "#aries";
};

document.addEventListener('DOMContentLoaded', function() {
const postsPerPage = 5;
const posts = document.querySelectorAll('.blog-post');
const totalPages = Math.ceil(posts.length / postsPerPage);
const paginationLinks = document.querySelectorAll('.pagination .page');

function showPage(page) {
posts.forEach((post, index) => {
    post.style.display = (index >= (page - 1) * postsPerPage && index < page * postsPerPage) ? 'block' : 'none';
});

paginationLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-page') == page);
});
}

paginationLinks.forEach(link => {
link.addEventListener('click', function(e) {
    e.preventDefault();
    const page = parseInt(this.getAttribute('data-page'));
    showPage(page);
});


showPage(1); // Hiển thị trang đầu tiên khi tải trang
});
});

document.addEventListener('DOMContentLoaded', function() {
    const postsPerPage = 5;
    const posts = document.querySelectorAll('.blog-post2');
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const paginationLinks = document.querySelectorAll('.pagination2 .page');
    
    function showPage(page) {
    posts.forEach((post, index) => {
        post.style.display = (index >= (page - 1) * postsPerPage && index < page * postsPerPage) ? 'block' : 'none';
    });
    
    paginationLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-page') == page);
    });
    }
    
    paginationLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = parseInt(this.getAttribute('data-page'));
        showPage(page);
    });
    });
    
    showPage(1); // Hiển thị trang đầu tiên khi tải trang
    });
    