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
        });
    });

    $(".change-status").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");
        var newState = { devoured: devoured };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(function () {
            console.log("changed status to", devoured);
            location.reload();
        });
    });
});