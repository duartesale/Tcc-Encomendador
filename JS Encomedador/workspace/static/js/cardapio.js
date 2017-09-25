


     var categoria = ' <div class="panel panel-default">\
              <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse{categoria_nome}"  aria-controls="collapse{categoria_nome}">\
                <div class="panel-heading" role="tab" id="id{categoria_nome}">\
                  <h4 class="panel-title">\
                   {categoria_nome}\
                  </h4>\
                </div>\
              </a>\
            <div id="collapse{categoria_nome}" class="panel-collapse collapse " role="tabpanel" aria-labelledby="id{categoria_nome}">\
              <div class="panel-body">\
                <div class="table-responsive">\
                   <table class="table table-hover">\
                      <tbody>\
                          {produtos}\
                        </tr>\
                      </tbody>\
                  </table>\
                  </div>\
              </div>\
            </div>\
          </div> ';
 
 
      var produto =  ' <tr>\
                      <td>{produto_nome}</td>\
                      <td>R$ {produto_preco}</td>\
                      <td>\
                        <button class="btn btn-default add-produto" produto_id="{produto_id}"  onclick="addProdutoPedido(this, {produto_id}, \'{produto_nome}\', {produto_preco}, {produto_quant})" >\
                            <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>\
                            <span class="glyphicon glyphicon-plus"></span>\
                        </button>\
                      </td>\
                    </tr>';
      
      
      
      
      


function retornarCategoriaHTML(data){
    
    debugger;
    
    
    var categoria1 = categoria.replace("{categoria_nome}" , data.nome);
    var categoria1 = categoria1.replace("{categoria_nome}" , data.nome);
    var categoria1 = categoria1.replace("{categoria_nome}" , data.nome);
    var categoria1 = categoria1.replace("{categoria_nome}" , data.nome);
    var categoria1 = categoria1.replace("{categoria_nome}" , data.nome);
    var categoria1 = categoria1.replace("{categoria_nome}" , data.nome);
    
    var produtos_elementos = [];
    
    
    var produtos = data.products;
    
    
    for (var i = 0; i < produtos.length; i++) {
       var produtos1  = produto;
       produtos1 = produtos1.replace("{produto_nome}", produtos[i].name);
       produtos1 = produtos1.replace("{produto_id}", produtos[i].id);
       produtos1 = produtos1.replace("{produto_preco}", produtos[i].price);
       
       
       produtos1 = produtos1.replace("{produto_nome}", produtos[i].name);
       produtos1 = produtos1.replace("{produto_id}", produtos[i].id);
       produtos1 = produtos1.replace("{produto_preco}", produtos[i].price);
       
       produtos1 = produtos1.replace("{produto_quant}", produtos[i].quant);
       
       produtos_elementos.push(produtos1);
    }
    
    
    categoria1 = categoria1.replace("{produtos}", produtos_elementos.join("") );
    
    
   
   return categoria1;
   
    
}
