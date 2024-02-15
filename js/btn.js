$(() => {
    $("#btn").on("click", () => {
        var a = $('#search-text').val();
        $("h1").css("color", a);
        console.log(a);
        $('#search-text').val(function() {
            return "";
        });
    });
}); 
