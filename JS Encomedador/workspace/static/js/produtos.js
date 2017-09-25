

var produtosHTML = '<tr>\
                  <td> {produto_nome} </td>\
                  <td> R$ {produto_preco} </td>\
                  <td> <span class="label label-{label}">{produto_status}</span></td>\
                  <td>\
                      <button class="btn btn-{labelButtonMenuStyle} btn-lg" onclick="addMenu({produto_id}, {produto_menu})"> <span class="glyphicon {labelButtonMenu}"></span> </button>\
                  </td>\
                  <td> \
                      <button class="btn btn-default btn-lg"  onclick="delProduto({produto_id}, \'{produto_status}\')"> <span class="glyphicon glyphicon-{icon}"></span> </button>\
                  </td>\
                </tr>';
                
                
                
function retornarProdutosHTML(data){
    
    var produtoID = data.id;
    
    var produtosHTML2 = produtosHTML.replace("{produto_nome}", data.name);
    var produtosHTML2 = produtosHTML2.replace("{produto_preco}", data.price);
    var produtosHTML2 = produtosHTML2.replace("{produto_status}", data.status);
    var produtosHTML2 = produtosHTML2.replace("{produto_status}", data.status);
    var produtosHTML2 = produtosHTML2.replace("{produto_id}", produtoID);
    var produtosHTML2 = produtosHTML2.replace("{produto_id}", produtoID);
    var produtosHTML2 = produtosHTML2.replace("{produto_menu}", data.menu);
    
    var labelButtonMenu = "";
    var labelButtonMenuStyle = "";
    
    if(data.menu == 1) {
        labelButtonMenu = "glyphicon-share";
        labelButtonMenuStyle = "danger";
    }
    else{
        labelButtonMenu = "glyphicon-edit";
        labelButtonMenuStyle = "success";
    }
    
    var produtosHTML2 = produtosHTML2.replace("{labelButtonMenu}", labelButtonMenu);
    var produtosHTML2 = produtosHTML2.replace("{labelButtonMenuStyle}", labelButtonMenuStyle);
    
    
    var label = "";
    var icon  = "";
    
    
    
    if (data.status == "Ativo"){
        label = "success";
        icon = "trash";
      
    }
    else if(data.status == "Inativo"){
        label =  "danger";
        icon = "ok";
    }
    
    var produtosHTML2 = produtosHTML2.replace("{label}", label);
    var produtosHTML2 = produtosHTML2.replace("{icon}", icon);
    
    return produtosHTML2;
}


function execPut(produto_id, data){
    
    debugger;
    var url = URL_SERVICE + "products/" + produto_id;    
                 
    var callBS = function(){ debugger;};
    var callSuccess = function(data){
     
    
    debugger;
    
        alert("Porduto alterado com sucesso");
        window.location.replace("produtos.html");

    };
      		
    var callError = function(xhr){
        debugger;
        alert("Erro ao alterar produto, consulte o administrador");
    }
    	
    var callComplete = function(){};
    request(url, data, "PUT", callBS, callSuccess, callError, callComplete);
    
    
    
}


function addMenu(produto_id, menu){
    
    var execMenu = 1;
    
    if(menu == 1) execMenu = 0;
    else execMenu = 1;
    
    
    var data = {menu : execMenu};
    
    execPut(produto_id, data).
    
    debugger;

    
    
    
    
}


function delProduto(produto_id, status){
    debugger;
    
    
     var execStatus = "";
    
    
    if(status == "Ativo") execStatus = "Inativo";
    else execStatus = "Ativo";
    
    var data = {status : execStatus};
    
    execPut(produto_id, data);
    
    debugger;

}


