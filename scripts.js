document.getElementById('zodiacForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthDate = parseInt(document.getElementById('birthDate').value);
    const birthMonth = parseInt(document.getElementById('birthMonth').value);

    const zodiacSign = getZodiacSign(birthDate, birthMonth);
    const zodiacContent = getZodiacContent(zodiacSign);

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<h2>Cung Hoàng Đạo của bạn là: ${zodiacSign}</h2><p>${zodiacContent}</p>`;
    resultElement.classList.add('visible'); // Thêm lớp 'visible' để hiển thị khung trắng
});

function getZodiacSign(day, month) {
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Bảo Bình';
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Song Ngư';
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Bạch Dương';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Kim Ngưu';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Song Tử';
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cự Giải';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Sư Tử';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Xử Nữ';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Thiên Bình';
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Bọ Cạp';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Nhân Mã';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Ma Kết';
    return 'Không xác định';
}

function getZodiacContent(zodiacSign) {
    const zodiacDetails = {
        'Bảo Bình': '<img src="img/baobinh.jpg"> Cung Bảo Bình có tên tiếng Anh là Aquarius thuộc nguyên tố Khí, hình ảnh biểu tượng đặc trưng là người mang nước. <br>Trong 12 cung Hoàng Đạo, Bảo Bình luôn thể hiện mình là người vô tư, yêu đời, nhân hậu, tốt bụng và luôn thích giúp đỡ mọi người. Vì thế, Bảo Bình luôn được tư vấn chọn lựa những công việc liên quan đến nhiều người như ca sĩ, diễn viên, người bán hàng, tư vấn viên du lịch, <br>Màu may mắn của Bảo Bình là màu xanh lá cây, xanh da trời, xanh ngọc, đen,… <br>Số may mắn: nên lựa chọn là 2, 3 , 4, 7 và 8.',
        'Song Ngư': '<img src="img/songngu.jpg"> Cung Song Ngư có tên tiếng Anh là Pisces thuộc nguyên tố Nước, hình ảnh biểu tượng của cung Song Ngư là con cá. <br>Trong các cung Hoàng Đạo hiện nay, Song Ngư thuộc tuýp người hơi bí ẩn, luôn muốn chinh phục ước mơ, phóng khoáng, lãng mạn và có phần chi tiêu hoang phí. Công việc phù hợp với Song Ngư là thiết kế, bán hàng và làm các công việc kinh doanh.Màu may mắn là màu xanh dương, tím và màu xám. <br> Con số may mắn của cung Song Ngư là 1, 3, 4 và 9.',
        'Bạch Dương': '<img src="img/bachduong.jpg"> Cung Bạch Dương có tên tiếng Anh là Aries. Hình ảnh biểu tượng của cung Bạch Dương là con cừu đực, thuộc nguyên tố Lửa. Những người thuộc cung hoàng đạo này là những người có cá tính mạnh mẽ, quyết đoán, thích trải nghiệm thử thách và ưa thích sự khám phá.<br>Màu may mắn của cung Bạch Dương là màu đỏ thắm, cam. Số may mắn: 1 và 9. Những nghề nghiệp phù hợp người cung Hoàng Đạo là: Hướng dẫn viên du lịch, Giám đốc, Cảnh sát, Nhà trinh thám, Quản lý,…',
        'Kim Ngưu': '<img src="img/kimnguu.jpg"> Taurus là tên tiếng Anh của Cung Kim Ngưu. Hình ảnh biểu tượng của cung Hoàng Đạo này là con Bò Đực, Hải Cẩu thuộc nguyên tố Đất. Người có nguyên tắc, kiên định, sống có tổ chức, kỷ luật chính là những điều mô tả rõ nhất về tính cách của cung Kim Ngưu. Màu may mắn của cung Kim Ngưu là màu hồng, xanh lục. Vì tính kiên định và sống có tổ chức nên những công việc như Luật sư, Kỹ sư, Chính trị gia sẽ rất phù hợp với người cung Kim Ngưu.',
        'Song Tử': '<img src="img/songtu.jpg"> Trong 12 cung hoàng đạo tháng sinh, Cung Song Tử là cung hoàng đạo rất đặc biệt với biểu tượng là 2 anh em song sinh. Tuy có tài năng và trí tuệ, sáng tạo độc đáo nhưng Song Tử lại thiếu sự kiên định, nhất quán nên họ thường là những người bay bổng, phù hợp với công việc “đậm chất nghệ sĩ” như: Họa sĩ, Nhà thiết kế, làm diễn viên, hoạt động nghệ thuật.Cung Song Tử có tên tiếng Anh là Gemini thuộc nguyên tố Khí. Màu may mắn là: xanh lá cây, xanh da trời, xám. Số may mắn nên lựa chọn: 3 – 4 và 7.',
        'Cự Giải': '<img src="img/cugiai.jpg"> Cua là hình ảnh biểu tượng của cung Cự Giải. Trong các cung Hoàng Đạo, Song Tử khác biệt hơn, họ thuộc một trong số rất ít tuýp người có tài lãnh đạo thiên bẩm. Lời nói của những người thuộc cung hoàng đạo này rất quyền lực và luôn được mọi người kính trọng. Vì thế, những công việc như người truyền cảm hứng, Nhà lãnh đạo, Quản trị nhân lực sẽ là những công việc đem lại sự thành công cao nhất mà họ nên lựa chọn.Cung Cự Giải có tên là Cancer thuộc nguyên tố Khí. Màu may mắn: Xám, bạc, trắng. Số may mắn: 4 và 6.',
        'Sư Tử': '<img src="img/sutu.jpg"> Leo là tên tiếng Anh của cung Sư Tử và đây cũng là biểu tượng rất rõ của cung Hoàng đạo này. Trong các cung Hoàng Đạo, Sư Tử thuộc nhóm Lửa và là tuýp người mạnh mẽ, quyết đoán, giỏi phân tích, dám nghĩ dám làm nên rất phù hợp với những công việc như Nhà lãnh đạo, CEO, Doanh nhân.Cung Cự Giải luôn muốn được người khác tôn trọng, màu may mắn là màu đỏ, vàng, cam. Số may mắn nên lựa chọn: 1, 4 và 6.',
        'Xử Nữ': '<img src="img/xunu.jpg"> Hình ảnh biểu tượng của cung Xử Nữ là cây Trinh nữ. Có nhiều nét tương đồng như 12 cung hoàng đạo nữ, tính cách của những người thuộc cung hoàng đạo này rất chuẩn mực, chăm chỉ, kiên định và sống khá nguyên tắc. <br>Những người thuộc cung Xử Nữ rất phù hợp với những công việc như: Bác sĩ, Giáo viên, Kế toán và Nhân viên Ngân hàng.<br>Tên tiếng anh của cung Xử Nữ là Virgo thuộc nguyên tố Đất, màu may mắn mà họ nên lựa chọn là những gam màu nhạt hoặc bạc, những vật liệu có màu sắc lung linh.',
        'Thiên Bình': '<img src="img/thienbinh.jpg"> Cung Thiên Bình có tên là Libra thuộc nguyên tố Khí, hình ảnh biểu tượng của cung Thiên Bình là cái cân. Tính cách của người cung Thiên Bình khá hài hòa, chính trực, tốt bụng, luôn có cái nhìn đa chiều, tích cực trong mọi vấn đề. Chính vì thế, những người thuộc cung hoàng đạo này rất phù hợp với nghề tư vấn, bán hàng và kinh doanh, công việc đòi hỏi sự giao tiếp nhiều.Màu may mắn của cung Thiên Bình chính là màu xanh lá cây, số may mắn nên lựa chọn là 1, 2, 7.',
        'Bọ Cạp': '<img src="img/bocap.jpg"> Cung Thiên Yết còn được gọi là cung Bọ Cạp, cung Thần Nông có tên tiếng Anh là Scorpio. Đúng như tên gọi, hình ảnh biểu tượng của cung hoàng đạo này là con bọ cạp. Trong các cung Hoàng Đạo, Bọ Cạp là người giỏi lãnh đạo, phân tích nhạy bén, ưa thích sự khám phá, mạo hiểm và luôn thử thách bản thân bằng các mục tiêu lớn. Chính vì những điểm mạnh này mà những người cung Thiên Yết rất có tố chất của một nhà lãnh đạo, người tiên phong trong việc xây dựng chiến lược, những công việc đòi hỏi sự tập trung cao độ. Cung Thiên Yết thuộc nguyên tố Nước, màu may mắn của cung Thiên Yết là màu đỏ và hạt dẻ. Con số may mắn cung hoàng đạo này nên lựa chọn là: 2, 7, và 9.',
        'Nhân Mã': '<img src="img/nhanma.jpg"> Cung Nhân Mã có tên tiếng Anh là Sagittarius thuộc nguyên tố Lửa, biểu tượng đặc trưng của cung hoàng đạo này là chiếc cung tên thể hiện rõ người có hoài bão lớn lao, người luôn đặt ra mục tiêu lớn và cố gắng kiên trì, nỗ lực để đạt được thành quả mình mong muốn. Những người thuộc cung Nhân Mã thường gặt hái được nhiều thành công nhờ sự kiên trì và nỗ lực của mình. Do đó, công việc phù hợp với Nhân Mã thường thiên về ngành du lịch, biên tập viên, huấn luyện viên,… Màu may mắn của cung hoàng đạo này là màu tím đậm, con số may mắn là 3, 5 và 8.',
        'Ma Kết': '<img src="img/maket.jpg"> Cung Ma Kết có tên tiếng Anh là Capricorn thuộc nguyên tố Đất, hình ảnh biểu tượng đặc trưng của cung hoàng đạo này là con dê biển. Trong các cung Hoàng Đạo, Ma Kết thuộc tuýp người trưởng thành, chín chắn, mạnh mẽ và luôn nuôi dưỡng rất nhiều hoài bão lớn lao. Là người có sự ảnh hưởng lớn đến công chúng nên Ma Kết rất phù hợp với những công việc như tiếp viên hàng không, giáo viên hay làm các công việc ngân hàng. Những màu tối, màu nâu thể hiện sự chín chắn, màu đen là những màu may mắn mà cung Ma Kết nên chọn lựa. Với con số, cung hoàng đạo này nên chọn số 6, 8 và 9.'
    };

    return zodiacDetails[zodiacSign] || 'Không có thông tin về cung hoàng đạo này.';
}
document.addEventListener("DOMContentLoaded", function() {
    var accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var content = this.nextElementSibling;
            content.style.display = content.style.display === "block"?"none" : "block";
        });
    });
});