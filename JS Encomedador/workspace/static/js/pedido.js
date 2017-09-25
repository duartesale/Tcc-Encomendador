//plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/

function modfyCount(e){
    debugger;
    //e.preventDefault();
    debugger;
    
    fieldName = $(e).attr('data-field');
    type      = $(e).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    var celulaPrecoitem = $(e).parent().parent().parent().parent().children()[2];
    var precoItem = parseFloat($(celulaPrecoitem).attr("valor"));
    
    
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
                
                $(celulaPrecoitem).text( "R$ "+ (precoItem * (currentVal - 1))  );
                $(celulaPrecoitem).attr( "valor_atual",  (precoItem * (currentVal - 1))  );
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(e).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
               
                $(celulaPrecoitem).text( "R$ "+ (precoItem * (currentVal + 1))  );
                $(celulaPrecoitem).attr( "valor_atual",  (precoItem * (currentVal + 1))  );
                
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(e).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
    
    
    setTotalPedidos($(e));
    
    
    
    
}



$('.btn-number').on( 'click' , (function(e){
    e.preventDefault();
    debugger;
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    var celulaPrecoitem = $(this).parent().parent().parent().parent().children()[2];
    var precoItem = parseFloat($(celulaPrecoitem).attr("valor"));
    
    
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
                
                $(celulaPrecoitem).text( "R$ "+ (precoItem * (currentVal - 1))  );
                $(celulaPrecoitem).attr( "valor_atual",  (precoItem * (currentVal - 1))  );
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
               
                $(celulaPrecoitem).text( "R$ "+ (precoItem * (currentVal + 1))  );
                $(celulaPrecoitem).attr( "valor_atual",  (precoItem * (currentVal + 1))  );
                
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
    
    
    setTotalPedidos($(this));
}) );


$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});



$('.input-number').change(function() {
    debugger;
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    
    
});

$(".input-number").keydown(function (e) {
    
        debugger;
        
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
    
    
    
    
    function setTotalPedidos(elementClick){
        debugger;
        
        var linhas = elementClick.parent().parent().parent().parent().parent().children();
        var total  = 0;
        
        
        for(var index in linhas){
            var linha = linhas[index];
            
            var quantidade = parseInt($(linha).find(".input-number").val());
            
            var celulaPrecoitem = $(linha).children()[2];
            if(celulaPrecoitem == null) continue;
            var valor = parseFloat($(celulaPrecoitem).attr("valor"));
            
            if (!isNaN(valor))
                total += (quantidade * valor);
        }
        
        $("#spanTotal").text(total);
  }
  
  
    var produto = '<tr>\
                  <td>{produto_nome}</td>\
                  <td> \
                    <div class="input-group" >\
                        <span class="input-group-btn">\
                            <button type="button" class="btn btn-default btn-number" data-type="minus" data-field="quant[{quant}]" onclick="modfyCount(this)">\
                                <span class="glyphicon glyphicon-minus"></span>\
                            </button>\
                        </span>\
                        <input type="text" id="quant{produto_id}" name="quant[{quant}]" class="form-control input-number" value="1" min="1" max="{produto_quant}">\
                        <span class="input-group-btn">\
                            <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[{quant}]" onclick="modfyCount(this)">\
                                <span class="glyphicon glyphicon-plus"></span>\
                            </button>\
                      </span>\
                    </div></td>\
                  <td valor="{produto_preco}" valor_atual="{produto_preco}"> R$ {produto_preco}</td>\
                </tr>'
                
                
    var numero  = 0;            
                
    function retornarProdutoHTML(data){
        
        numero = numero + 1;
        
        debugger;
        var produtoHTML = produto.replace("{produto_id}", data.id);
        produtoHTML = produtoHTML.replace("{produto_nome}", data.nome);
        produtoHTML = produtoHTML.replace("{produto_preco}", data.preco);
        produtoHTML = produtoHTML.replace("{produto_preco}", data.preco);
        produtoHTML = produtoHTML.replace("{produto_preco}", data.preco);
        produtoHTML = produtoHTML.replace("{produto_quant}", data.quant);
        produtoHTML = produtoHTML.replace("{quant}", numero);
        produtoHTML = produtoHTML.replace("{quant}", numero);
        produtoHTML = produtoHTML.replace("{quant}", numero);
        
        return produtoHTML;
        
    }