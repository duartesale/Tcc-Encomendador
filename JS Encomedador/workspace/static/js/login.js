(function() { 

    // how many milliseconds is a long press?
    var longpress = 3000;
    // holds the start time
    var start;

    jQuery( "#pressme" ).on( 'mousedown', function( e ) {
        start = new Date().getTime();
    } );

    jQuery( "#pressme" ).on( 'mouseleave', function( e ) {
        start = 0;
    } );

    jQuery( "#pressme" ).on( 'mouseup', function( e ) {
        if ( new Date().getTime() >= ( start + longpress )  ) {
           alert('long press!');   
        } else {
           alert('short press!');   
        }
    } );

}());


/// LOGIN ADMIN AO ADD