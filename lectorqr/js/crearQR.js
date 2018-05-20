var objJSON;
var test;

function createQrCode(){
	var userInput1 = document.getElementById("valor1").value;
	var userInput2 = document.getElementById("valor2").value;

	//guardamos los datos ingresados en un objeeto json
	objJSON = {"nombre":userInput1,"pesaje":userInput2};
	
	//crea el qr
	var qrcode = new QRCode("test", {
		text: userInput1+userInput2,		
		width: 256,
		height: 256,
		colorDark: "black",
		colorLight: "white",
		correctLevel: QRCode.CorrectLevel.H		
	});

}	

function mostrarJSON(){

alert(objJSON.nombre+" "+objJSON.pesaje);	

}

function clean(){
	qrcode.clear(); // clear the code.
}


