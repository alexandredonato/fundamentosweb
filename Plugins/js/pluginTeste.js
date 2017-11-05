;(function($){
	


	$.fn.pluginTeste = function(parametros) {
		
		$(this).on("click", ".close", function(){
			//este this de dentro é o .close
			//elemento que está sofrendo o click
			var $objMensagem = $(this).parent();
			$objMensagem.hide(1000);
			setTimeout(function(){
				$objMensagem.remove();
			}, 1100);
		});

		var msg = parametros.mensagem;
		var categoria = parametros.categoria;
		var hora_inicio = parametros.hora_inicio;
		var hora_fim = parametros.hora_fim;
		var divHoras = "";
		var divStrip = "";

		$(this).append($("<div/>")
			.addClass("calendar")
				.append($("<div/>")
					.addClass("calendar-header")
						.append($("<div/>").text("Horário"))
						.append($("<div/>").text("Segunda-feira, 30/10")))
				.append($("<div/>")
					.addClass("calendar-body")
						.append($("<div/>").addClass("calendar-hour"))
						.append($("<div/>").addClass("calendar-grid"))
			));
		for(var i=hora_inicio; i<=hora_fim;i++) {
			divHoras += "<div>"+i+":00"+"</div>";
			divStrip += "<div class=\"calendar-grid-strip\"></div>";
		}
		$(".calendar-hour").append(divHoras);
		$(".calendar-grid").append(divStrip);

		$.each(parametros.eventos,function(idx, evento){
			var nome = evento.nome;
			var horaArray = evento.inicio.split(":");
			var inicio = (horaArray[0]-hora_inicio)*60 + parseInt(horaArray[1]);

			$(".calendar-grid")
				.append($("<div/>")
					.addClass("event")
					.text(nome)
					.css({"height": evento.duracao,"top":inicio})
					.append($("<div/>").addClass("close").html("&times;")))
		})
		
	};
})(jQuery);