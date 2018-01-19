$(document).ready(function() {



    // Select color input
    // Select size input

   
    var colorMe = $('#colorPicker');
    var gridz = $("#pixel_canvas");

    // When size is submitted by the user, call makeGrid()

    $(":submit").click(function(event) {
        event.preventDefault();
        makeGrid();

    });



    function makeGrid() {
        //Re-set in case of already existing grid
        gridz.children().remove(); //could make if else...seems like overkill


        var h = $('#input_height').val();
        var w = $('#input_width').val();
        //write the grid
        for (var x = 0; x < h; x++) {
           
            gridz.append("<tr> </tr>");
        }  for (var y = 0; y < w; y++) {
                gridz.children().append("<td> </td>");
            $("tr").children().addClass("canvas"); 
            } 
        
        // Your code goes here!
 
        
    }
    
//add event listeners to Grid
 $(".canvas").on('mousedown', 'td', function() {
   $(this).css("background-color", "yellow");
    });

 // $(".canvas").click( function() {
   // this.css("background-color", "yellow");
   // });
//function draw(){
   // $(this).css("background-color", colorMe);
//}
    
    
});