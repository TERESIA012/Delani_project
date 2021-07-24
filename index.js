//what we do section

$(document).ready(function(){
    $(".product-management").on("click",function(){
        $(".pmi").toggle();
        $(".product-managements").toggle(); 
    });
    
    $(".design").on("click",function(){
        $(".desi").toggle();
        $(".design1").toggle();
        
        
    });

    $(".development").on("click",function(){
        $(".devi").toggle();
        $(".dev").toggle();
    });


});