
//TODO
var pedidosHTML  = 

 '<tr>\
     <td> {pedido_id} </td>\
     <td> R$ {pedido_preco}</td>\
     <td> <span class="label label-{label}">{pedido_status}</span></td>\
     <td> <button class="btn btn-default btn-lg btn-pedido" data-toggle="modal" data-target="#myModal" onclick="carregarDadosModal({pedido_id},\'{pedido_date}\', \'{pedido_status}\', {pedido_preco} )"> <span class="glyphicon glyphicon-eye-open"></span> </button></td>\
   </tr>';
   
   var pedidosHTMLADMIN  = '<tr>\
     <td> {pedido_id} </td>\
     <td> R$ {pedido_preco}</td>\
     <td> <span class="label label-{label}">{pedido_status}</span></td>\
     <td>  \
     <button class="btn btn-default btn-lg" data-toggle="modal" data-target="#myModal" onclick="carregarDadosModal({pedido_id},\'{pedido_date}\', \'{pedido_status}\', {pedido_preco} )"> <span class="glyphicon glyphicon-eye-open"></span> </button></td>\
     <td><button class="btn btn-default btn-lg"  onclick="alterarStatus({pedido_id}, \'{pedido_status}\')"> <span class="glyphicon glyphicon-share"></span> </button></td>\
    \
   </tr>';
  
function retornarPedidosHTML(data){
    
	var label = "";
 
 	var IsAdmin = sessionStorage.getItem("admin");
	
	var pedidosHTML2 = "";
	debugger;
	
	if(IsAdmin != null ){
		pedidosHTML2 = pedidosHTMLADMIN.replace("{pedido_id}", data.id);
		pedidosHTML2 = pedidosHTML2.replace("{pedido_id}", data.id);
		pedidosHTML2 = pedidosHTML2.replace("{pedido_usuario_nome}", data.userName);
	}
	
	else
		pedidosHTML2 = pedidosHTML.replace("{pedido_id}", data.id);
	
		
  pedidosHTML2 = pedidosHTML2.replace("{pedido_preco}", data.price);
  pedidosHTML2 = pedidosHTML2.replace("{pedido_date}", data.date);
  pedidosHTML2 = pedidosHTML2.replace("{pedido_status}", data.status);
  pedidosHTML2 = pedidosHTML2.replace("{pedido_id}", data.id);
  pedidosHTML2 = pedidosHTML2.replace("{pedido_date}", data.date);
  pedidosHTML2 = pedidosHTML2.replace("{pedido_status}", data.status);
  pedidosHTML2 = pedidosHTML2.replace("{pedido_preco}", data.price);
  
  pedidosHTML2 = pedidosHTML2.replace("{pedido_status}", data.status);
 
 if(data.status == "Pendente") 
    label = "warning";
    
 else if(data.status == "Fechado") 
    label = "success";
    
    
 var pedidosHTML2 = pedidosHTML2.replace("{label}", label);
    
return pedidosHTML2;


}


var produtosHTML = '<tr>\
                  <td> {produto_nome} </td>\
                  <td> {produto_quant} </td>\
                  <td> R$ {produto_preco} </td>\
                </tr>';
                

function retornarProdutoHTML(data){
	
	var produtosHTMLEdited = produtosHTML.replace("{produto_nome}", data.name);
	var produtosHTMLEdited = produtosHTMLEdited.replace("{produto_quant}", data.quant);
	var produtosHTMLEdited = produtosHTMLEdited.replace("{produto_preco}", data.price);
	
	return produtosHTMLEdited;
	
	
}


function carregarDadosModal(pedido_id, pedido_date, pedido_status, pedido_valor){


 var data = {};

  debugger;
  var url = URL_SERVICE + "productsbyorder/" + pedido_id;    
	
	var callBS = function(){ debugger;};
	var callSuccess = function(data){
			
			$("#tbodyid").empty();
			
			
			if(data == null || data.length < 1){
			 alert("Não foi possível encontrar produtos para este pedido"); return;
			}
			
			
			
			//TODO
			
			 $("#span_pedido_id").text(pedido_id);
			 $("#span_pedido_data").text(pedido_date);
			 $("#span_pedido_status").text(pedido_status);
			 $("#span_pedido_valor").text(pedido_valor);
			
			for (var i = 0; i < data.length; i++) {
			
			    var produtoHTML = retornarProdutoHTML(data[i]);
			    $("#tabela_produtos > tbody:last-child").append(produtoHTML);
			}
			
	
	
	debugger;
	
	
	
	};
	  		
	var callError = function(xhr){
	    debugger;
	    alert("Erro ao fechar pedido, consulte o administrador");
	}
		
	var callComplete = function(){};
	request2(url, data, "GET", callBS, callSuccess, callError, callComplete);


};
       
       
       
   function alterarStatus(pedido_id, pedido_status){
   	
       	var execStatus = "";
		
		if(pedido_status == "Pendente") execStatus = "Fechado";
		else return;
		
		var data = {status : execStatus }
		var url = URL_SERVICE + "order/" + pedido_id;    
	
		var callBS = function(){ debugger;};
		var callSuccess = function(data){
				
			alert("Pedido alterado com sucesso!");
			window.location.replace("pedidos.html");
			debugger;
		
		
		
		};
		  		
		var callError = function(xhr){
		   	alert("Pedido alterado com sucesso!");
			window.location.replace("pedidos.html");
		}
			
		var callComplete = function(){};
		request(url, data, "PUT", callBS, callSuccess, callError, callComplete);
		
		   
   	
   }