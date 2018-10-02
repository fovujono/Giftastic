
    // initial array of random gifs

    var randomArray = ["Magician", "52 cards", "Levitation", "Genie"];


 function displayYourGif() {

        var yourInput = $(this).attr("data-name")
        //giphy API URl
         var queryURL = "http://api.giphy.com/v1/gifs/search?q="
          + yourInput + "&api_key=l7ECN0URzNLpKQsqJQIcrFolqaaXWOBj";
        //AJAX  CALL
        $.ajax({
                url: queryURL,
                method: "GET",
                q: yourInput
            
            }).then(function(response) {
                
                var results = response.data;

    //for loop for the results 
                for (var i = 0; i < results.length; i++) {
                    //storage
                    var gifDiv = $("<div class='gif'>");
                    // having the rating added
                    var rated = response.data[i].rated;
                    var paragraph = $("<p>").html("Rating: " + rated);
                    gifDiv.append(paragraph);

                    //storage for img div
               
                    var gifImage = $("<img>");
                   gifImage.attr("src", response.data[i].images.fixed_height.url);
                    gifDiv.append(gifImage);

                    $("#gif-display").prepend(gifDiv)



                };
            });
        };
   


//LETS RENDER SOME BUTTONS

               function render() {
                    //no duplicate buttons
                    $("#gif-button-view").empty();
                    //loop through randomArray
                    for (var i = 0; i < randomArray.length; i++) {
                        var generate = $("<button>");

                        generate.addClass("gif-button");
                        generate.attr("data-name", randomArray[i]);
                        generate.html(randomArray[i]);

                        //add to the html 
                        $("#gif-button-view").append(generate);
                    }
                }
                console.log(render)

                //function to grab value from what the user submits
                $("#add-button").on("click", function (event) {

                    event.preventDefault();

                    var yourInput = $("#submitArea").val().trim();

                    //push the inputs into the main array at top of this page 
                    randomArray.push(yourInput);
                    render();
                });
        
                render();
                $(document).on("click", ".gif-button", displayYourGif);




 

    

