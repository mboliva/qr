	var objJSON2;
	let scanner = new Instascan.Scanner(
	{
		video: document.getElementById("preview")
	}
	);
	scanner.addListener("scan", function(content){
		//alert("Escaneo de contenido: "+content);			
		
		var http = new XMLHttpRequest();
		var url = "/qr/lectorqr/consulta.html";
		var email = document.getElementById('email');
		var password = document.getElementById('pass');
		http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		http.open("POST", url, true);

		http.onreadystatechange = function() {
		    if(http.readyState == 4 && http.status == 200) { 
		       //aqui obtienes la respuesta de tu peticion
		       alert(http.responseText);
		    }
		}
		http.send(JSON.stringify({video:video}));
		
		
		
		
		//window.open("/qr/lectorqr/consulta.html");
		
	});
	Instascan.Camera.getCameras().then(cameras =>
	{
		if(cameras.length > 0){
			scanner.start(cameras[1]);
		} else {
			console.error("No existe camara en dispositivo");
		}
	});

	function mostrarJSON2(){
		alert(objJSON2.nombre+" "+objJSON2.pesaje);
	}
	
