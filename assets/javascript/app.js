// SETUP VARIABLES
//============================================================
var topic   =   ["cats", "dogs", "birds", "pigs"];
var urlBase =   "http://api.giphy.com/v1/gifs/search?q=";
var sample  =   "ryan+gosling";
var apikey  =   "&api_key=AVVldwR8KOjAphb70VEpxVkX0ffpBPTR";
// limit is set to user yet, only 5
var limit   =   "limit=5";
var favs    =   [];
var count   =   0;
var userInput;
var subject;
var queryURL;
var gifCard;
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
                gifStill = response.data[i].images.fixed_height_still.url;
                gifAnimate = response.data[i].images.fixed_height.url;
                var gifRating = response.data[i].rating;
                // gif.attr("src", gifResponse);
                // $("#gifsHere").append(gif);
                gifBox = $("<div>");
                gifCard = ('<div class="card mt-3" style="width: 18rem;">' +
                '<img class="card-img-top gifImage' + count + '" src="' + gifStill +'" data-state="still" data-animate="' + gifAnimate +'" "data-still="'+ gifStill +'"" data-type="" alt="Card image cap">' +
                '<div class="card-body">' + '<h5 class="card-title">Rating: '+ gifRating +'</h5>' +
                '<button type="button" class="btn btn-primary playGif'+ count +' mr-3">Play Gif</button>' +
                '<button id="saveToFav" type="button" class="btn btn-success">Save To Favorite</button>' +
                '</div>' + '</div>');
                $(gifBox).append(gifCard);
                $("#gifsHere").append(gifBox);
                console.log(gifAnimate);    
                count++;
            }
            // Find a way to target gifImage + count, all gifs now have a diffrent class and can be targeted
            $(document).on("click", ".playGif0", function(){
                // this works targeting the 2nd gif
                // $(".gifImage0").attr("src",  $(".gifImage0").attr("data-animate"));
                // this long path is the path to the text content       you can add textContent at the end of these paths
                // console.log($( this ).parent().parent().get( 0 ).firstChild.attributes[1].textContent);
                // this is a path to the src
                // console.log($( this ).parent().parent().get( 0 ).firstChild.attributes[1]);
                // this path is the data-animate
                // console.log($( this ).parent().parent().get( 0 ).firstChild.attributes[3]);
                // this is the data-still
                // console.log($( this ).parent().parent().get( 0 ).firstChild.attributes[4]);
                // console.log($( this ).parent());
                // console.log($(this).closest("img"));
                
            });
            $(document).on("click", ".playGif1", function(){
                // this works targeting the 2nd gif
                $(".gifImage1").attr("src",  $(".gifImage1").attr("data-animate"));
            });
            $(document).on("click", ".playGif2", function(){
                // this works targeting the 2nd gif
                $(".gifImage2").attr("src",  $(".gifImage2").attr("data-animate"));
            });
            $(document).on("click", ".playGif3", function(){
                // this works targeting the 2nd gif
                $(".gifImage3").attr("src",  $(".gifImage3").attr("data-animate"));
            });
            $(document).on("click", ".playGif4", function(){
                // this works targeting the 2nd gif
                $(".gifImage4").attr("src",  $(".gifImage4").attr("data-animate"));
            });
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