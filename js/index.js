$(document).ready(function() {

	/* Iniciando cards */

	var cards = [
		{ 
			name: "GPA - Extensão", 
			description: "Sistema de Gestão de Ações de Extensão do Campus da UFC em Quixadá.", 
			image: "img/sippa.png", 
			link: "https://homologacaosistemas.quixada.ufc.br/extensao"
		}, 
		{ 
			name: "GPA - Pesquisa", 
			description: "Sistema de Projetos de Pesquisa.", 
			image: "img/sippa.png", 
			link: "https://sistemas.quixada.ufc.br/gpa-pesquisa"
		}, 
		{ 
			name: "Contest", 
			description: "Controle de Eventos de Submissão", 
			image: "img/sippa.png", 
			link: "https://sistemas.quixada.ufc.br/contest"
		}, 
		{ 
			name: "SINUTRI", 
			description: "Sistema de Nutrição.", 
			image: "img/sippa.png", 
			link: "https://sistemas.quixada.ufc.br/sinutri"
		}, 
		{ 
			name: "GAL", 
			description: "Sistema Gestão de Aquisição de Livros.", 
			image: "img/sippa.png", 
			link: "https://sistemas.quixada.ufc.br/gal"
		}, 
		{ 
			name: "Gestão de Estágio", 
			description: "Sistema de Gestão de Estágio", 
			image: "img/sippa.png", 
			link: "https://sistemas.quixada.ufc.br/gestao-estagio/"
		}, 		
		{ 
			name: "Base Centralizada", 
			description: "Sistema com as informações de dados pessoais de alunos e servidores do campus.", 
			image: "img/sippa.png", 
			link: "http://identidadepessoa.intranet/"
		},
		{ 
			name: "Cadastro Aluno", 
			description: "Sistema para cadastro de aluno na base centralizada.", 
			image: "img/sippa.png", 
			link: "http://cadastroaluno.intranet/"
		}		
	];

	var toClone = $(".clone");
	var parent = toClone.parent();
	toClone.remove();

	cards.forEach(function(e, i) {
		var card = toClone.clone();
		for(k in e)
			k == "image"? card.find(".card-" + k).attr("src", e[k]): 
			k == "link"? card.attr("href", e[k]):
			card.find(".card-" + k).text(e[k]);
		var yOffset = 240 + (i * 5)/cards.length * 1000;
		var timeOffset = 0.5;
		console.log(yOffset);
		card.css("transform", "translateY(" + yOffset + "px) rotate(30deg)");
		card.css("transition", "all " + timeOffset + "s cubic-bezier(0,.59,.44,.98)");
		parent.append(card);
	});

	$(window).on('scroll resize', function() {
		$('.page-title-container').each(function(_, el) {
	        var $el = $(el),
	            scrollTop = $(window).scrollTop(),
	            scrollBot = scrollTop + $(window).height(),
	            elTop = $el.offset().top,
	            elBottom = elTop + $el.outerHeight(),
	            visibleTop = elTop < scrollTop ? scrollTop : elTop,
	            visibleBottom = elBottom > scrollBot ? scrollBot : elBottom;
	        var visible = visibleBottom - visibleTop > 0? visibleBottom - visibleTop: 0;
	        
	        if(visible > 128) {
	        	$(this).find(".page-title").height(visible);

	        	if(visible > 200)
	        		$(this).find(".page-title").css("font-size", Math.sqrt(visible) * 3);
	        }
	    });
	});

	/* Fim - Iniciando cards */

	/* Efeito de scroll */

	$(window).stellar();
    setTimeout(function() {
    	disableScroll();
        $(".foreground").fadeOut("fast");

        $(".clone").each(function(i, e) {
        	setTimeout(function() {
        		$(e).css("transform", "none");
        	}, i * 50);
        });

		var body = $("html, body");
		body.scrollTop(0);
		body.stop().animate({scrollTop: ($(window).height() * .4)}, 500, 'swing', function() {
			enableScroll();
		});
    }, 100);

    /* Fim - Efeito de scroll */

});




// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}