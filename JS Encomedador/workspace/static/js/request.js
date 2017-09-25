
var request =
    function(url, data, type, callBS, callSuccess, callError, callComplete){
    
    debugger;
    
    $.ajax({
        
        type: type,
        url: url,
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        crossDomain : true,
        //processData: false,
        //jsonpCallback: 'jsonCallback',
        //contentType: 'application/json',
        beforeSend: function() {
           callBS();
        },
        success: function(data) {
           callSuccess(data);
        },
        error: function(xhr) { // if error occured
        
            callError(xhr);
            
            console.log(xhr.statusText + xhr.responseText);
            //$(placeholder).removeClass('loading');
        },
        complete: function() {
           callComplete();
        },
        
});
    
    
    
}



var request2=
    function(url, data, type, callBS, callSuccess, callError, callComplete){
    
    debugger;
    
    $.ajax({
        
        type: type,
        url: url,
       
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        crossDomain : true,
        //processData: false,
        //jsonpCallback: 'jsonCallback',
        //contentType: 'application/json',
        beforeSend: function() {
           callBS();
        },
        success: function(data) {
           callSuccess(data);
        },
        error: function(xhr) { // if error occured
        
            callError(xhr);
            
            console.log(xhr.statusText + xhr.responseText);
            //$(placeholder).removeClass('loading');
        },
        complete: function() {
           callComplete();
        },
        
});

}


var requestp=
    function(url, data, type, callBS, callSuccess, callError, callComplete){
    
    debugger;
    
    $.ajax({
        
        type: type,
        url: url,
       
       
        contentType: "application/hal+json; charset=utf-8",
        crossDomain : true,
        //processData: false,
        //jsonpCallback: 'jsonCallback',
        //contentType: 'application/json',
        dataType: 'jsonp',
        beforeSend: function() {
           callBS();
        },
        success: function(data) {
           callSuccess(data);
        },
        error: function(xhr) { // if error occured
        
            callError(xhr);
            
            console.log(xhr.statusText + xhr.responseText);
            //$(placeholder).removeClass('loading');
        },
        complete: function() {
           callComplete();
        },
        
});
    
    }
    


