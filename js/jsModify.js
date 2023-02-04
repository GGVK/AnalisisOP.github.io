function vinculo(){
	window.open('http://www.google.com.mx','640x480','toolbar=no,status=no,scrollbars=no,location=no,menubar=no,directories=no,width=640,height=480');
}
	
document.addEventListener("contextmenu", function(event){
        event.preventDefault();
    }, false);

document.addEventListener("copy", function(event){
    // Change the copied text if you want
    event.clipboardData.setData("text/plain", "No se permite copiar en esta página web");
    
    // Prevent the default copy action
    event.preventDefault();
}, false);
