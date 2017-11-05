
$(function(){
	var servico = "http://botanicapp.com.br/receitas_teste.php";
	$.get(servico)
		.done(function(data){
			var receitasArray = JSON.parse(data);
			
			$.each(receitasArray, function(indice, receita){
				var $receita = $("<div/>").addClass("receita");
				var $ingredientes = $("<ul/>");
				var $preparo = $("<ol/>");
				$receita.append($("<h1/>").text(receita.nome));
				$receita.append($("<img/>").attr("src", receita.foto));
				$receita.append($("<p/>").addClass("receita-descricao").text(receita.descricao));
				$.each(receita.ingredientes, function(ind, ing){
					$ingredientes.append($("<li/>").text(ing));
				});
				$receita.append($ingredientes);
				$.each(receita.preparo, function(idx, prp){
					$preparo.append($("<li/>").text(prp));
				});
				$receita.append($preparo);
				$(".cardapio").append($receita);
			});
	    });
});



