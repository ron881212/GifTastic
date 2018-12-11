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
var gifCards;
var gifBox;
// FUNCTIONS
//============================================================
function getGifs(subject){
    $.ajax({
        url: urlBase + subject + apikey,
        method: "GET"
    })
      .then(function(response){
        // console.log(response.data[2].images.fixed_height_still.url);
        console.log(urlBase + subject + apikey);
            for(let i = 0; i < 5; i++){
                var gifStill = response.data[i].images.fixed_height_still.url;
                var gifAnimate = response.data[i].images.fixed_height.url;
                var gifRating = response.data[i].rating;
                // gif.attr("src", gifResponse);
                // $("#gifsHere").append(gif);
                gifBox = $("<div>");
                gifCards = ('<div class="card mt-3" style="width: 18rem;">' +
                '<img class="card-img-top" src="' + gifStill +'" data-still="" data-animate="' + gifAnimate +'" data-type="" alt="Card image cap">' +
                '<div class="card-body">' + '<h5 class="card-title">Rating: '+ gifRating +'</h5>' +
                '<button type="submit" class="btn btn-primary playGif mr-3">Play Gif</button>' +
                '<button id="saveToFav" type="submit" class="btn btn-success">Save To Favorite</button>' +
                '</div>' + '</div>');
                $(gifBox).append(gifCards);
                $("#gifsHere").append(gifBox);
            }
      });
}

// MAIN PROCESSES
//============================================================

// Function to make buttons out of inputs
$(document).on("click", "#searchGifs", function(event){
    event.preventDefault();
    if($("#userInput").val() !== ""){

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
    }
    // console.log($("#userInput").val());
    
});

$(document).on("click", "#clearGifs", function(event){
    event.preventDefault();
    $(".lead").empty();
});

$(document).on("click", ".topic", function(event){
    event.preventDefault();
    var subject = $(this).attr("data-type");
    console.log($(this).attr("data-type"));
    getGifs(subject);
});

// PSEUDO CODE
//============================================================