// Select color input

var colorInput = $(colorPicker);
//console.log(colorInput);
// Select size input
var heightInput = $("#input_height").val();
//console.log(heightInput);
var widthInput = $("#input_width").val();
//console.log(widthInput);
// Select table element to create Grid
var grid = $("#pixel_canvas");

/*
When size is submitted by the user, call makeGrid()
*/

$("#submit_button").click(function() {
    makeGrid();

})


// The makeGrid() function

function makeGrid() {
    var row = heightInput;
    var column = widthInput;

    //CleanSlate - del all previous
    grid.children().remove();

    //actually making the grid
    for (var i = 0; i < row; i++) {

        grid.append("<tr></tr>");
    }

    for (var n = 0; n < column; n++) {

        grid.children().append("<td></td>");


    }

}