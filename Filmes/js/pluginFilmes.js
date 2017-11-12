
;(function($){
	$.fn.cefetFlix = function(option){
		var conteiner = $(this);
		$.get(option.url).done(function(data){
			var filmes = JSON.parse(data);
			$.each(filmes,function(idx,video){
				var elenco= $("<ul/>");
				$.each(video.elenco,function(indice,artista){
					elenco.append($("<li/>").text(artista))
				}
				);
				var relacionados = $("<div/>").addClass("relacionados");
				relacionados.append($("<h2/>").text("Relacionados"));
				$.each(video.titulosSemelhantes,function(cont,filmeId){
					for (var i = filmes.length - 1; i >= 0; i--) {
						if(filmes[i].id == filmeId){
							relacionados.append($("<p/>").text(filmes[i].titulo));
							break;
						}
					}
				});
				conteiner.append($("<div/>")
					.addClass("main")
						.append($("<div/>")
							.addClass("imagem")
								.append($("<img/>")
									.addClass("foto")
									.attr("src",video.figura)
								)			
						)
						.append($("<div/>")
							.addClass("titulo")
								.append($("<h1/>").text(video.titulo))
								.append($("<p/>").text(video.resumo))
						)
				);
				conteiner.append($("<div/>")
					.addClass("informacoes")
						.append($("<div/>")
							.addClass("elenco")
							.append($("<h2/>").text("Elenco"))
							.append(elenco)
						)
						.append(relacionados)
				);
			});
			
		});
	};
})(jQuery);