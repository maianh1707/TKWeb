$(document).ready(function() {
    // Populate day and month dropdowns
    for (let i = 1; i <= 31; i++) {
        $('#yourDay, #partnerDay').append('<option value="' + i + '">Ngày ' + (i < 10 ? '0' + i : i) + '</option>');
    }
    for (let i = 1; i <= 12; i++) {
        $('#yourMonth, #partnerMonth').append('<option value="' + i + '">Tháng ' + (i < 10 ? '0' + i : i) + '</option>');
    }

    $('#loveCalculatorForm').on('submit', function(event) {
        event.preventDefault();

        // Get form values
        const yourName = $('#yourName').val();
        const yourDay = $('#yourDay').val();
        const yourMonth = $('#yourMonth').val();
        const yourYear = $('#yourYear').val();
        const partnerName = $('#partnerName').val();
        const partnerDay = $('#partnerDay').val();
        const partnerMonth = $('#partnerMonth').val();
        const partnerYear = $('#partnerYear').val();

        // Calculate compatibility (simple example, replace with real logic)
        const compatibilityScore = Math.floor(Math.random() * 101);
        const resultText = `${yourName} và ${partnerName} có độ tương hợp là ${compatibilityScore}%.`;

        // Display result
        $('#result').html(`<h2>Kết quả:</h2><p>${resultText}</p>`);
    });
});
