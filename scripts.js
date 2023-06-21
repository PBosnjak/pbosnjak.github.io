$( "#open" ).on( "click", function() {
    $(".open").toggleClass( "open-transform-full" );
    $(".bottom").toggleClass( "bottom-transform-full" );
    $(".inner-top").toggleClass( "inner-top-transform-full" );
    $(".inner-bottom").toggleClass( "inner-bottom-transform-full" );
    $(".text").toggleClass( "text-transform-full" );
});