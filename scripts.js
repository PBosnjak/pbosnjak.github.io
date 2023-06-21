$( "#open" ).on( "click", function() {
    $(".open").toggleClass( "open-transform-partial" );
    $(".bottom").toggleClass( "bottom-transform-partial" );
    $(".inner-top").toggleClass( "inner-top-transform-partial" );
    $(".inner-bottom").toggleClass( "inner-bottom-transform-partial" );
    $(".text").toggleClass( "text-transform-partial" );

    // $(".open").toggleClass( "open-transform-full" );
    // $(".bottom").toggleClass( "bottom-transform-full" );
    // $(".inner-top").toggleClass( "inner-top-transform-full" );
    // $(".inner-bottom").toggleClass( "inner-bottom-transform-full" );
    // $(".text").toggleClass( "text-transform-full" );
    // $(".timer").toggleClass( "timer-transform-full" );
});