
    // initial array of animals

    var randomArray = ["Pikachu", "Tekken", "HotDog", "Hulk"];


    function displayYourGif() {

        var yourInput = $(this).attr("data-name")
        //giphy API URl
         var queryUrl = "http://api.giphy.com/v1/gifs/search?q=api_key=l7ECN0URzNLpKQsqJQIcrFolqaaXWOBjq=" + yourInput + "&limit=10&offset=0&rating=G&lang=en"

        //AJAX  CALL
        $.ajax({
                url: queryUrl,
                method: "GET",
                q:yourInput
            })

             .then(function (response) {

             var gifDiv = $("<div class='gif'>");


                var results = response.data;


                //for loop for the results 
                for (var i = 0; i < results.length; i++) {
                    //storage
                  var rated =response.Rated
                    // having the rating added
                    var paragraph = $("<p>").html("Rating: " + results[i].rated);
                    //storage for another div
                    var gifImage = $("<img>");

                    gifImage.attr("src", results[i].images.fixed_height.url);

                    gifDiv.append(paragraph);
                    gifDiv.append(gifImage);

                    $("#gif-display").prepend(gifDiv)



                };

                function render() {
                    //no duplicate buttons
                    $("#gif-view").empty();
                    //loop through randomArray
                    for (var i = 0; i < randomArray.length; i++) {
                        var generate = $("<button>");

                        generate.addClass("gifz");
                        generate.attr("data-name", randomArray[i]);
                        generate.html(randomArray[i]);

                        //add tp the html 
                        $("#gif-display").append(generate);
                    }
                }

                //function to grab value from what the user submits
                $("#add-button").on("click", function (event) {

                    event.preventDefault();

                    var textbox = $("#submitArea").val().trim();

                    //push the inputs into the main array at top of this page 
                    randomArray.push(textbox);
                    displayYourGif();
                    render();
                });

                $(document).on("click", ".gifz", displayYourGif);
                //initital buttons will be called from our array using 
                render();

            });
 
    };

