$(document).ready(function() {
    $("#textBoxOne").change(textBoxOneHeader);
    $("#textBoxTwo").change(textBoxTwoHeader);
    $("#textBoxThree").change(textBoxThreeHeader);
    $("input[name=equip]").change(add);


    var totalPriceOne = 0;
    var totalPriceTwo = 0;
    var totalPriceThree = 0;

    function textBoxOneHeader() {
        /* Pull input from text box one*/

        let quantityOne = parseFloat($("#textBoxOne").val());

        /*text box input * data price */

        totalPriceOne = quantityOne * $(this).data("price");

        /*Total $ amount of purchase*/

        $("#outputOne").text(totalPriceOne.toFixed(2));

    }

    function textBoxTwoHeader() {
        /* Pull input from text box two*/
        let quantityTwo = parseFloat($("#textBoxTwo").val());

        /*text box input * data price*/
        totalPriceTwo = quantityTwo * $(this).data("price");

        /* total $ amount of purchase*/

        $("#outputTwo").text(totalPriceTwo.toFixed(2));

    }

        function textBoxThreeHeader() {
            /* Pull input from text box three*/
            let quantityThree = parseFloat($("#textBoxThree").val());

            /*text box input * data price*/
            totalPriceThree = quantityThree * $(this).data("price");

            /* total $ amount of purchase*/
            $("#outputThree").text(totalPriceThree.toFixed(2));

        }
            function add() {
                /*Total Purchase grand total*/
                let grandTotal = totalPriceOne + totalPriceTwo + totalPriceThree;

                $("#grandTotal").text(grandTotal.toFixed(2));

            }

});










