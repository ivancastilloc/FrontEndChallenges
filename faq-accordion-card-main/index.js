
$(".question").click(function (event){
    console.log(this.className.split(' ')[1]);
    var pToChange= this.className.split(' ')[1];
    if($(".ans-"+pToChange).css("visibility") === "hidden"){;
        $(".ans-"+pToChange).css("visibility", "visible");
        $(".ans-"+pToChange).addClass("p-on");
        $(".icon-arrow").addClass("arrow-rotate");
        setTimeout(function (){
            $(".ans-"+pToChange).removeClass("p-on");
            $(".icon-arrow").removeClass("rotate");
        },
         1000);
        


    } else{
        $(".ans-"+pToChange).addClass("p-off");
        setTimeout(function (){
            $(".ans-"+pToChange).removeClass("p-off");
        },
         1000);
         setTimeout(function (){
            $(".ans-"+pToChange).css("visibility", "hidden");
        },
         1000);
        
         
         
    }
    
})