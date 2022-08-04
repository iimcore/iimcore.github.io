function copy_to_clipboard(){
    var copytext=Document.getElementById('myinput');
    copytext.select();
    Document.execCommand('copy');
    alert('복사완료');
}
