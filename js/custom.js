$(document).ready(function(){
    $("input[type='checkbox']").click(function(){ 
        updateFunction(); 
    });

    function updateFunction(){
        $(".ckeck-one-reslt").text($(".checked--one:checked").length);
    }
});