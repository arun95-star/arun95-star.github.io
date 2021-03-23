$(document).ready(function(){
    $(".checked--one").click(function(){ 
        updateFunction(); 
    });

    $(".checked--two").click(function(){ 
        updateFunctionone(); 
    });

    $(".checked--three").click(function(){ 
        updateFunctiontwo(); 
    });

    function updateFunction(){
        $(".ckeck-one-reslt").text($(".checked--one:checked").length);
    }

    function updateFunctionone(){
        $(".ckeck-two-reslt").text($(".checked--two:checked").length);
    }

    function updateFunctiontwo(){
        $(".ckeck-three-reslt").text($(".checked--three:checked").length);
    }
});