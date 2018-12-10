// SETUP VARIABLES
//============================================================
var topic =     ["cats", "dogs", "birds", "pigs"];
var urlBase =   "http://api.giphy.com/v1/gifs/search?q=";
var sample =    "ryan+gosling";
var apikey =    "&api_key=AVVldwR8KOjAphb70VEpxVkX0ffpBPTR";
// limit is set to user yet, only 5
var limit =     "limit=5";
var userInput;
var subject;
var queryURL;

// FUNCTIONS
//============================================================
function getGifs(subject){
    $.ajax({
        url: urlBase + subject + apikey,
        method: "GET"
    })
      .then(function(response){
        // console.log(response.data[2].images.fixed_height_still.url);
        // console.log(urlBase + subject + apikey);
            for(let i = 0; i < 5; i++){
                var gifResponse = response.data[i].images.fixed_height_still.url;
                var gif = $("<img>");
                gif.attr("src", gifResponse);
                $("#gifsHere").append(gif);
            }
      });
}

// MAIN PROCESSES
//============================================================

$(document).on("click", "#searchGifs", function(){

    $(".lead").empty();
    topic.push($("#userInput").val());

    for(let i =0; i < topic.length; i++){
    var newButton = $("<button>");
    newButton.attr("type", "button");
    newButton.attr("data-type", topic[i]);
    newButton.addClass("topic btn btn-info mr-1 mt-1");
    newButton.text(topic[i]);
    $(".lead").append(newButton);
    }
    
});

$(document).on("click", "#clearGifs", function(){
    $(".lead").empty();
});

$(document).on("click", ".topic", function(){
    var subject = $(this).attr("data-type");
    console.log($(this).attr("data-type"));
    getGifs(subject);
});

// PSEUDO CODE
//============================================================