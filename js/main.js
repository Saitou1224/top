$(() => {
    $("#btn").on("click", () => {
        var a = $('#text').val();
        $("h1").css("color", a);
        console.log(a);
        $('#text').val(function() {
            return "";
        });
    });
}); 
