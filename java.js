	function Mudarestado(lista) {
		var display = document.getElementById(lista).style.display;
		if(display == "block")
			document.getElementById(lista).style.display = 'none';
		else
			document.getElementById(lista).style.display = 'block';
	}
	
	function Mudarestado2(vis) {
		var display = document.getElementById(vis).style.display;
		if(display == "none")
			document.getElementById(vis).style.display = 'block';
		else
			document.getElementById(vis).style.display = 'none';
	}
	
	
	function Login(){
		var done=0;
		var username=document.login.username.value;
		username=username.toLowerCase();
		var password=document.login.password.value; 
		password=password.toLowerCase();
		if(username=="jonathas" && password=="1234"){
			alert("Bem-vindo, ainda não há nada a fazer!") 
		}
		else if(done==0){
			alert("Usuário e/ou senha incorretos");
		} 
	} 

	function btn(){
		alert("não ha nada para fazer!")
	}
	

	
	