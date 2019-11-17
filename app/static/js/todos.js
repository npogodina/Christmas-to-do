// Check off specific Todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// Click on Trash Icon to delete Todos
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

// Adding a new Todo
$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        let todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");

    }
});

// Toggling the input form on and off
$("#toggle-form").click(function() {
    $("input[type='text']").fadeToggle();
});


/*
$("li").click(function(){
    if ($(this).css("color") === "rgb(0, 0, 0)") {
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        })
    } else {
        $(this).css({
            color: "black",
            textDecoration: "none"
        })
    }
})
*/