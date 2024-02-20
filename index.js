$(document).ready(function() {
    $(".content h1").click(function() {
      
        if ($(this).css("color") === "rgb(139, 0, 0)") {
          
            $(this).css("color", "");
        } else {
          
            $(this).css("color", "darkred");
        }
    });
});