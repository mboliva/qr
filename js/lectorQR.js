	var objJSON2;
	let scanner = new Instascan.Scanner(
	{
		video: document.getElementById("preview")
	}
	);
	scanner.addListener("scan", function(content){
		alert("Escaneo de contenido: "+content);			
		window.open(content, "_blank");
		
	});
	Instascan.Camera.getCameras().then(cameras =>
	{
		if(cameras.length > 1){
			scanner.start(cameras[1]);
		} else {
			console.error("No existe camara en dispositivo");
		}
	});

	function mostrarJSON2(){
		alert(objJSON2.nombre+" "+objJSON2.pesaje);
	}
	
