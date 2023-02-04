function vinculo(){
	window.open('http://www.google.com.mx','640x480','toolbar=no,status=no,scrollbars=no,location=no,menubar=no,directories=no,width=640,height=480');
}

function fillData(){
	var ruta="https://app.svetlananalytics.com/app/project/dfdc43d9-d7e6-46a0-9a12-8ba44a21326a/shared_dashboard/export_SvetlanrossAnalytics_ol7XnH6h.html#/SHARED_DASHBOARD#co=project&cid=dfdc43d9-d7e6-46a0-9a12-8ba44a21326a&psid=export_SvetlanrossAnalytics_ol7XnH6h.html&keyid=undefined&data=eyJyIjp7ImEiOnsiYWN0aXZlUGFnZUlkQ2hhbmdlZE1zIjoiMTY3NTM3OTg4MDM1MiJ9LCJpIjoiU0hBUkVEX0RBU0hCT0FSRCIsInMiOltdfX0=";
	var iframe = document.getElementById("frameIndex");
	iframe.setAttribute("src", ruta);
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
