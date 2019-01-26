function sendGform(){
   document.myForm.submit();
   document.getElementById('formWrapper').style.display = 'none';
   document.getElementById('thxMessage').style.display = 'block';
}