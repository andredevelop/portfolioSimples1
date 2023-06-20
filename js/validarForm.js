$(function(){

	$('#form').submit(function(){

		$('input[type=text]').focus(function(){
			resetarCampoInvalido($(this));
		});
		
		var nome = $('input[name=nome]').val();
		var telefone = $('input[name=telefone]').val();
		if (verificarNome(nome) == false) {
			aplicarCampoInvalido($('input[name=nome]'));
			return false;
		}else if(verificarTelefone(telefone) == false){
			aplicarCampoInvalido($('input[name=telefone]'));
			return false;
		};

		function aplicarCampoInvalido(el){
			el.css('color','red');
			el.css('border','2px solid red');
			el.val('*Campo Inválido*');
		};

		function resetarCampoInvalido(el){
			el.css('color','black');
			el.css('border', '0');
			el.val('');
		};

		function verificarNome(nome){
			if (nome == '') {
				return false;
			};

			var quantidade = nome.split(' ').length;
			var splitStr = nome.split(' ');

			if ( quantidade >= 2 ){
				for (var i = 0; i < quantidade; i++){

					if(splitStr[i].match(/^[A-ZÀ-Ú]{1}[a-zà-ú]{1,}$/)){

					}else{
						return false;
					}
				};
			}else{
				return false;
			}
		};

		function verificarTelefone(telefone){
			if(telefone == ''){
				return false;
			};

			if(telefone.match(/^\([0-9]{2}\)[0-9]{1}[0-9]{4}-[0-9]{4}$/) == null){
				return false;
			};
		};

		var form = $('#form');
		
			$('#form').ajaxSubmit({
				beforeSubmit:function(){
					form.find('input[type=submit]').attr('disabled','true');
					form.find('input[type=submit]').animate({'opacity':'0.4'})
					form.find('input[type=submit]').attr('value','Enviando...');

				},
				success:function(data){
					alert('Enviado com sucesso!');
					form.find('input[type=submit]').removeAttr('disabled');
					form.find('input[type=submit]').animate({'opacity':'1'})
					form.find('input[type=submit]').attr('value','Enviar');
					form[0].reset();
				}
			});

		return false;
	});


})