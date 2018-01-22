$(document).ready(function() {



            // Select color input
            // Select size input


            const colorMe = $('#colorPicker');
            const gridz = $("#pixel_canvas");

            // When size is submitted by the user, call makeGrid()

            $(":submit").click(function(event) {
                event.preventDefault();
                makeGrid();

            });



            function makeGrid() {
                //Re-set in case of already existing grid
                gridz.children().remove(); //could make if else...seems like overkill


                const h = $('#input_height').val();
                const w = $('#input_width').val();
                //write the grid
                for (var x = 0; x < h; x++) {

                    gridz.append("<tr> </tr>");
                }
                for (var y = 0; y < w; y++) {
                    gridz.children().append("<td> </td>");
                    $("tr").children().addClass("canvas");
                }




                //add event listeners to Grid
                $(".canvas").click(function() {

                    $(this).css("background-color", colorMe.val());
                    //  console.log("canvas listener")
                });

                // function dblClick() {

                //    $(this).css("background-color", "white");
                //}
                //add event listener for Dbl click
                $(".canvas").dblclick(function() {
                    $(this).css("background-color", "white");


                });




            });