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
        for (let x = 0; x < h; x++) {

            gridz.append("<tr> </tr>");
        }
        for (let y = 0; y < w; y++) {
            gridz.children().append("<td> </td>");
            $("tr").children().addClass("canvas");
        }




        //add event listeners to Grid
        $(".canvas").click(function() {

            $(this).css("background-color", colorMe.val());
            //  console.log("canvas listener")
        });

        // function dblClick() {


        //add event listener for Dbl click
        $(".canvas").dblclick(function() {
            $(this).css("background-color", "white");
        });

        //drag and click
        $(".canvas").on('mouseover mousedown', function(e) {
            if (e.buttons === 1) {
                console.log("e buttons");
                $(this).css('background-color', colorMe.val());
            } else if (e.buttons === 2) {
                console.log("else fired");
                $(this).css('background-color', '');
            }
        });



    }


});