$(document).ready(function () {
    function calculatescore(){
        var c1total = 0;
        $(".checked--one").each(function(index,val){
            c1total += val.value > 0 ? parseInt(val.value) : 0;
            $('.ckeck-one-reslt').text(c1total);
        });

        var c2total = 0;
        $(".checked--two").each(function(index,val){
            c2total += val.value > 0 ? parseInt(val.value) : 0;
            $('.ckeck-two-reslt').text(c2total);
        });

        var c3total = 0;
        $(".checked--three").each(function(index,val){
            c3total += val.value > 0 ? parseInt(val.value) : 0;
            $('.ckeck-three-reslt').text(c3total);
        });

    }
    

    $(function () {
        $('.checked--one').keyup(function (e) {
            if($(this).val() <= 10){
                calculatescore();
                //if (isNaN(this.value + "" + String.fromCharCode(e.charCode))) return false;
            }
            else{
                alert('Rate Between 1 to 10');
                $(this).val('');
            }
        })

        $('.checked--two').keyup(function (e) {
            if($(this).val() <= 10){
                //if (isNaN(this.value + "" + String.fromCharCode(e.charCode))) return false;
                calculatescore();
            }
            else{
                alert('Rate Between 1 to 10');
                $(this).val('');
            }
        })

        $('.checked--three').keyup(function (e) {
            if($(this).val() <= 10){
                //if (isNaN(this.value + "" + String.fromCharCode(e.charCode))) return false;
                calculatescore();
            }
            else{
                alert('Rate Between 1 to 10');
                $(this).val('');
            }
        })
    });
});