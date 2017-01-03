$(document).ready(function() {

	/* Iniciando cards */

	var cards = [
		{ 
			name: "SIPPA", 
			description: "Sistema de Presenças e Planos de Aula", 
			image: "img/sippa.png", 
			link: "https://sistemas.quixada.ufc.br/sippa"
		}, 
		{ 
			name: "SAVI", 
			description: "Sistema de Avaliação Institucional", 
			image: "img/savi.png", 
			link: "https://sistemas.quixada.ufc.br/savi"
		}, 
		{ 
			name: "SISAC", 
			description: "Sistema de Atividades Complementares", 
			image: "img/sisac.png", 
			link: "https://sistemas.quixada.ufc.br/sisac"
		},
		{ 
			name: "GPA - Extensão", 
			description: "Sistema de Gestão de Ações de Extensão do Campus da UFC em Quixadá", 
			image: "img/icon_08.png", 
			link: "https://sistemas.quixada.ufc.br/gpa-extensao"
		}, 
		{ 
			name: "GPA - Pesquisa", 
			description: "Sistema de Projetos de Pesquisa", 
			image: "img/gpa-pesquisa.png", 
			link: "https://sistemas.quixada.ufc.br/gpa-pesquisa"
		},
		{ 
			name: "SIAF", 
			description: "Sistema para gerenciamento de afastamentos de docentes", 
			image: "img/siaf.png", 
			link: "http://sistemas.quixada.ufc.br/siaf"
		},
		{ 
			name: "Contest", 
			description: "Controle de Eventos de Submissão", 
			image: "img/contest.png", 
			link: "https://sistemas.quixada.ufc.br/contest"
		},
		{ 
			name: "SINUTRI", 
			description: "Sistema de Nutrição", 
			image: "img/icon_10.png", 
			link: "https://sistemas.quixada.ufc.br/sinutri"
		}, 
		{ 
			name: "GAL", 
			description: "Sistema Gestão de Aquisição de Livros", 
			image: "img/icon_11.png", 
			link: "https://sistemas.quixada.ufc.br/gal"
		}, 
		{ 
			name: "Gestão de Estágio", 
			description: "Sistema de Gestão de Estágio", 
			image: "img/icon_12.png", 
			link: "https://sistemas.quixada.ufc.br/gestao-estagio/"
		}, 		
		{ 
			name: "Base Centralizada", 
			description: "Sistema unificado de cadastro de informações de alunos e servidores do campus", 
			image: "img/icon_04_02.png", 
			link: "http://identidadepessoa.intranet/"
		},
		{ 
			name: "Cadastro Aluno", 
			description: "Sistema para cadastro de aluno na base centralizada", 
			image: "img/icon_12.png", 
			link: "http://cadastroaluno.intranet/"
		},
		{ 
			name: "Arquivos", 
			description: "Sistema para armazenamento e compartilhamento de arquivos institucionais. Disponível somente para servidores do campus", 
			image: "img/icon_arquivos.png", 
			link: "http://arquivos.quixada.ufc.br"
		},
		{ 
			name: "Helpdesk", 
			description: "Sistema para gerenciar, com eficiência, as solicitações de TI. Disponível somente para servidores do campus", 
			image: "img/logo_otrs.jpg", 
			link: "http://helpdesk.quixada.ufc.br"
		},
		{ 
			name: "Moodle", 
			description: "Plataforma de aprendizagem a distância baseada em software livre", 
			image: "img/logo-moodle.png", 
			link: "http://moodle.quixada.ufc.br"
		},
		{ 
			name: "Redmine", 
			description: "Plataforma para gerenciamento de projetos baseado em software livre", 
			image: "img/logo-redmine.png", 
			link: "http://redmine.quixada.ufc.br"
		}
	];

	var toClone = $(".clone");
	var parent = toClone.parent();
	toClone.remove();

	cards.forEach(function(e, i) {
		var card = toClone.clone();
		for(k in e)
			k == "image"? card.find(".card-" + k).find("div").css("background", "url('" + e[k] + "') no-repeat center / contain"): 
			k == "link"? card.attr("href", e[k]):
			card.find(".card-" + k).text(e[k]);
		var yOffset = 240 + (i * 5)/cards.length * 1000;
		var timeOffset = 0.5;
		card.css("transform", "translateY(" + yOffset + "px) rotate(30deg)");
		card.css("transition", "all " + timeOffset + "s cubic-bezier(0,.59,.44,.98)");
		parent.append(card);
	});

	var ptc = $('.page-title-container');
	$(window).on('scroll resize', function() {

		if($(window).width() > 601) {
			var scrollTop = $(window).scrollTop(),
	            scrollBot = scrollTop + $(window).height(),
	            elTop = ptc.offset().top,
	            elBottom = elTop + ptc.outerHeight(),
	            visibleTop = elTop < scrollTop ? scrollTop : elTop,
	            visibleBottom = elBottom > scrollBot ? scrollBot : elBottom;
	        var visible = visibleBottom - visibleTop > 0? visibleBottom - visibleTop: 0;

	        if(visible > 200) {
	        	ptc.find(".page-title").height(visible);

	        	//if(visible > 200)
	        	//	ptc.find(".page-title").css("font-size", Math.sqrt(visible) * 3);
	        }
	    } else {
	    	ptc.find(".page-title").height(128);
	    }

        if($(window).width() > 601) {
	        var maxH = 1000;
	        visible = visible <= maxH? visible: maxH;
	        $(".background-image-over-layer").css("opacity", visible/maxH);
		}
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
		body.stop().animate({scrollTop: ($(window).height() * .4)}, 700, 'swing', function() {
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