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
// var goldenTicket = 0;
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
                gifRating = response.data[i].rating;
                // gif.attr("src", gifResponse);
                // $("#gifsHere").append(gif);
                gifBox = $("<div>");
                gifCard = ('<div class="card mt-3" style="width: 18rem;">' +
                '<img id="item-'+ count +'" class="card-img-top gifImage" src="' + gifStill +'" data-state="still" data-animate="' + gifAnimate +'" data-still="'+ gifStill +'" alt="Card image cap">' +
                '<div class="card-body">' + '<h5 class="card-title">Rating: '+ gifRating +'</h5>' +
                '<button type="button" class="btn btn-primary playGif mr-3" data-type="'+ count +'" data-state="still" >Play Gif</button>' +
                '<button id="saveToFav" type="button" class="btn btn-success saveGif" data-type="'+ count +'">Save To Favorite</button>' +
                '</div>' + '</div>');
                $(gifBox).append(gifCard);
                $("#gifsHere").append(gifBox);
                console.log(gifAnimate);    
                count++;
            }

            $(document).on("click", ".playGif", function(){
                goldenTicket = $(this).attr("data-type");
                console.log($(this).attr("data-type"));
                var btnstate = $(this).attr("data-state");
                // var gifstate = $("#item-" + goldenTicket).attr("src");

                if(btnstate === "still"){
                    $("#item-" + goldenTicket).attr("src", $("#item-" + goldenTicket).attr("data-animate"));
                    btnstate = $(this).attr("data-state", "animate");
                    $(this).text("Stop Gif");
                    console.log("Im moving"); 
                }

                if(btnstate === "animate"){
                    $("#item-" + goldenTicket).attr("src", $("#item-" + goldenTicket).attr("data-still"));
                    btnstate = $(this).attr("data-state", "still");
                    $(this).text("Play Gif");
                    console.log("Im not moving");  
                    console.log($("#item-" + goldenTicket).attr("data-still"));  
                    console.log($("#item-" + goldenTicket).attr("data-animate"));  
                }
                
            });
            // $(document).on("click", ".playGif2", function(){
            //     // this works targeting the 2nd gif
            //     $(".gifImage2").attr("src",  $(".gifImage2").attr("data-animate"));
            // });
            // $(document).on("click", ".playGif3", function(){
            //     // this works targeting the 2nd gif
            //     $(".gifImage3").attr("src",  $(".gifImage3").attr("data-animate"));
            // });
            // $(document).on("click", ".playGif4", function(){
            //     // this works targeting the 2nd gif
            //     $(".gifImage4").attr("src",  $(".gifImage4").attr("data-animate"));
            // });
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