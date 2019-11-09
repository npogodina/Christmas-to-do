// Check off specific Todos by clicking
$("li").click(function() {
    $(this).toggleClass("completed");
})


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