(function(){
	
	function nombrar(nombre){
		return nombre
	}

	function saludar(nombre){
		console.info(nombre, ' da un saludo desde  casa por la noche');
	}

	saludar(nombrar('Larry'));

})()