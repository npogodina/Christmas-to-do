// Check off specific Todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// Click on X to delete Todos
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
        $("ul").append("<li><span>X</span> " + todoText + "</li>");

    }
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