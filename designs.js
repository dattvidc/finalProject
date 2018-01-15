$(document).ready(function() {



    // Select color input
    // Select size input

    var h = $('#input_height').val();
    var w = $('#input_width').val();


    var gridz = $("#pixel_canvas");

    // When size is submitted by the user, call makeGrid()

    $(":submit").click(function(event) {
        event.preventDefault();
        makeGrid();

    });



    function makeGrid() {
        //Re-set in case of already existing grid
        gridz.children().remove();

        //write the grid
        for (var x = 0; x < h; x++) {
           
            gridz.append("<tr> </tr>");
        }  for (var y = 0; y < w; y++) {
                gridz.children().append("<td> </td>");
            }
        // Your code goes here!

        $("pixel_canvas").children().addclass("canvas");
    }
});