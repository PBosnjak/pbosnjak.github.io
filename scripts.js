const sh = "&scaron;"
const velikoSh = "&Scaron;"
const zh = "&zcaron;"
const velikozh = "	&Zcaron;";
const mekoc = "&cacute;"
const tvrdoc = "&ccaron;"
const mekod = "&dstrok;"
const tvrdod = "&dcaron;"
const velikotvrdoc = "&Ccaron;"

$( ".jewellery-box" ).on( "click", function() {
    var timeLeft = getTimeLeft(); 
    if (timeLeft <= 0){
        $("#message").html(getFinalMessage());
        $(".open").toggleClass( "open-transform-full" );
        $(".bottom").toggleClass( "bottom-transform-full" );
        $(".inner-top").toggleClass( "inner-top-transform-full" );
        $(".inner-bottom").toggleClass( "inner-bottom-transform-full" );
        $(".text").toggleClass( "text-transform-full" );
        $(".timer").toggleClass( "timer-transform-full" );
        return;   
    }

    if (!$(".open").hasClass( "open-transform-partial" )){
        $("#message").html(getRegularMessage());
        $(".open").toggleClass( "open-transform-partial" );
        $(".bottom").toggleClass( "bottom-transform-partial" );
        $(".inner-top").toggleClass( "inner-top-transform-partial" );
        $(".inner-bottom").toggleClass( "inner-bottom-transform-partial" );
        $(".text").toggleClass( "text-transform-partial" );

        setTimeout(function(){
            $(".open").toggleClass( "open-transform-partial" );
            $(".bottom").toggleClass( "bottom-transform-partial" );
            $(".inner-top").toggleClass( "inner-top-transform-partial" );
            $(".inner-bottom").toggleClass( "inner-bottom-transform-partial" );
            $(".text").toggleClass( "text-transform-partial" );
        }, 1000)
    }
});

$( document ).ready(function() {
    setInterval(function() { makeTimer(); }, 1000);  
});

function makeTimer() {  
    var timeLeft = getTimeLeft(); 
    if (timeLeft <= 0){
        $("#timer").html("00:00:00:00");
        return;   
    }
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

function getTimeLeft (){
    var endTime = new Date("23 June 2023 00:00:00 GMT+02:00");    
    endTime = (Date.parse(endTime) / 1000);  
    var now = new Date();  
    now = (Date.parse(now) / 1000);  
    return endTime - now;  
}

var regularMessages = [
    "Ne jo" + sh + ".",
    "Ne "+zh+"uri.",
    "Kamo si po"+sh+"la?",
    "Di je pri"+sh+"a?",
    "Lagano me pokrij!",
    "De ne.",
    "Bo"+zh+"e Klaudia.",
    "Okani me se.",
    velikozh+"uri polako.",
    "A di?",
    "Eee moja Klaudia...",
    "Lako tebi.",
    "Makar"+sh+"ta!",
    "Sve u svoje vrijeme.",
    "De skuliraj se.",
    "Ohladi malo.",
    velikotvrdoc+"o bolo?",
    "Lubenica 20 Eura???",
    velikoSh+"to si nervozna?",
    velikoSh+"pricanje."
];
var count = -1;

function getRegularMessage(){    
    if (count >= (regularMessages.length - 1))
        count = 0;
    else 
        count++;
    
    return regularMessages[count]
}

function getFinalMessage(){
    return "Klaudia, ho"+ mekoc+"e"+sh+" li se udati za mene?"
}