function getCurrentDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = String(now.getMonth() + 1).padStart(2, '0');
    var day = String(now.getDate()).padStart(2, '0');
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');
  
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    // Set the value of the hidden field to the current date and time
    var formLoadedTimeField = document.querySelector('input[name="form-loaded-time"]');
    formLoadedTimeField.value = getCurrentDateTime();
  });
  