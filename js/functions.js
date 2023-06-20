$(function(){
/*menu mobile*/
$('.ico-mobile').click(function(){
	$('.mobile').slideToggle();
});

/*area para llamar functions*/
definicaoTecnologias();
menuScroll();
/*****************************/


function definicaoTecnologias(){

	var largW = $(window).width();
	//largura da tela for menor ou igual a 780 ativa descricao app trocando as classes
	if(largW <= 780){
	//removendo a classe ao chegar na tela menor para que a descrip desktop nao surja
		$('.btn-htmlmob').removeClass('btn-html');
		$('.btn-cssmob').removeClass('btn-css');
		$('.btn-jsmob').removeClass('btn-js');
		$('.btn-drsmob').removeClass('btn-drs');
	//caso esteja no mobile
		$('.btn-htmlmob').click(function(){
			$('.descrip-html-mobile').slideToggle();
			$('.descrip-css-mobile').slideUp();
			$('.descrip-js-mobile').slideUp();
			$('.descrip-drs-mobile').slideUp();
		});
		$('.btn-cssmob').click(function(){
			$('.descrip-css-mobile').slideToggle();
			$('.descrip-html-mobile').slideUp();
			$('.descrip-js-mobile').slideUp();
			$('.descrip-drs-mobile').slideUp();
		});
		$('.btn-jsmob').click(function(){
			$('.descrip-js-mobile').slideToggle();
			$('.descrip-html-mobile').slideUp();
			$('.descrip-css-mobile').slideUp();
			$('.descrip-drs-mobile').slideUp();
		});
		$('.btn-drsmob').click(function(){
			$('.descrip-drs-mobile').slideToggle();
			$('.descrip-html-mobile').slideUp();
			$('.descrip-css-mobile').slideUp();
			$('.descrip-js-mobile').slideUp();
		});
	}else{
	//caso esteja no desktop
		$('.btn-html').click(function(){
			$('.descrip-html-desktop').slideToggle();
			$('.descrip-css-desktop').slideUp();
			$('.descrip-js-desktop').slideUp();
			$('.descrip-drs-desktop').slideUp();
		});
		$('.btn-css').click(function(){
			$('.descrip-css-desktop').slideToggle();
			$('.descrip-html-desktop').slideUp();
			$('.descrip-js-desktop').slideUp();
			$('.descrip-drs-desktop').slideUp();
		});
		$('.btn-js').click(function(){
			$('.descrip-js-desktop').slideToggle();
			$('.descrip-html-desktop').slideUp();
			$('.descrip-css-desktop').slideUp();
			$('.descrip-drs-desktop').slideUp();
		});
		$('.btn-drs').click(function(){
			$('.descrip-drs-desktop').slideToggle();
			$('.descrip-html-desktop').slideUp();
			$('.descrip-css-desktop').slideUp();
			$('.descrip-js-desktop').slideUp();
		});
	}
};

function menuScroll(){
	$('a').click(function(){
		let href = $(this).attr('href');
		let offSetTop = $(href).offset().top - 100;
		
		$('html, body').animate({'scrollTop':offSetTop});
		return false;
	})
}

});