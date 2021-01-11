$(function () {

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger-name").val().trim(),
            devoured: false
        };
        console.log(newBurger.burger_name)
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            location.reload();
        }
        );
    });











}