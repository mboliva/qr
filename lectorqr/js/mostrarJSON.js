function lee_json() {
            $.getJSON("js/datos.json", function(datos) {
                alert("Dato: " + datos["dato"]);
                $.each(datos["primos"], function(idx,primo) {
                    alert("Numero primo: " + primo);
                });
            });
}

function readJSON(){
	$.getJSON("js/datos.json", function(datos)
	{
		//alert(datos["nombre"]);
		var n =datos["nombre"];	
		document.getElementById("show").innerHTML = n;
	}
	);
}

function registerJSON(){
	$.postJSON("js/datos.json", function(datos)
	{
		//alert(datos["nombre"]);
		var nom = document.getElementById("nombre")
		datos["nombre"].push=nom;	
		//document.getElementById("show").innerHTML = n;
	}
	);
}


