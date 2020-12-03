<?php

	$nome = addslashes($_POST['nome']);
	$email = addslashes($_POST['email']);
	$mensagem = addslashes($_POST['mensagem']);

	if(isset($_POST['email']) && (!empty($_POST['email']))) {

		$to = "soloideal0142@gmail.com";
		$subject = "Duvidas do site Solo Ideal";
		$body = "Nome: ".$nome."\r\n".
				"E-mail: ".$email."\r\n".
				"Mensagem: ".$mensagem;
		$header =    "From:soloideal0142@gmail.com"."\r\n"
					."Reply-To:".$email."\r\n"
					."X=Mailer:PHP/".phpversion();

		if (mail($to,$subject,$body,$header)) {
			
			echo("Email enviado com sucesso!");

		}else {
			echo("Email não foi enviado!");
	 	} 	
	}
