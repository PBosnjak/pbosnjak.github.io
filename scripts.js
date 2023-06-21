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

$( document ).ready(function() {
    setInterval(function() { makeTimer(); }, 1000);  
});

function makeTimer() {  
    var endTime = new Date("23 June 2023 00:00:00 GMT+02:00");    
    endTime = (Date.parse(endTime) / 1000);  
    var now = new Date();  
    now = (Date.parse(now) / 1000);  
    var timeLeft = endTime - now;  
    var days = Math.floor(timeLeft / 86400);   
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);  
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);  
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));  
    if (days < "10") { days = "0" + days; }  
    if (hours < "10") { hours = "0" + hours; }  
    if (minutes < "10") { minutes = "0" + minutes; }  
    if (seconds < "10") { seconds = "0" + seconds; }  
    $("#timer").html(days + ":" + hours + ":" + minutes + ":"+ seconds );       
}  