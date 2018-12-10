// SETUP VARIABLES
//============================================================
var topic = ["cats", "dogs", "birds", "pigs"];
var apikey = "AVVldwR8KOjAphb70VEpxVkX0ffpBPTR";
var subject;

// FUNCTIONS
//============================================================
function getGifs(url){
    // topic = $(this).attr("data-type");
    // url = queryURL;
    // console.log(topic);
}

// MAIN PROCESSES
//============================================================

$(document).on("click", "#searchGifs", function(){

    $(".lead").empty();
    topic.push($("#searchGifs").attr("value"));
    for(let i =0; i < topic.length; i++){
    var newButton = $("<button>");
    newButton.attr("type", "button");
    newButton.attr("data-type", topic[i]);
    newButton.addClass("topic btn btn-info mr-1");
    newButton.text(topic[i]);
    $(".lead").append(newButton);
    }
    
});

$(document).on("click", "#clearGifs", function(){

});

$(document).on("click", ".topic", function(){
    var subject = $(this).attr("data-type");
    console.log($(this).attr("data-type"));
});

// PSEUDO CODE
//============================================================