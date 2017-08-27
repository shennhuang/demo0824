$(".hideBtn").click(()=>{
    $(".showDiv").hide();
})

$(".showBtn").click(()=>{
    $(".showDiv").show();
})

$(".fadeInBtn").click(()=>{
    $(".fadeDiv").fadeIn('slow')
})

$(".fadeOutBtn").click(()=>{
    $(".fadeDiv").fadeOut('slow')
})

$(".fadeToggleBtn").click(()=>{
    $(".fadeToggleDiv").fadeToggle('slow')
})

$(".slideUpBtn").click(()=>{
    $(".slideDiv") .slideUp();
})

$(".slideDownBtn").click(()=>{
    $(".slideDiv").slideDown();
})

$(".slideLeftBtn").click(()=>{
    $(".slideDiv").animate({width:'hide'})
})

$(".slideRightBtn").click(()=>{
    $(".slideDiv").animate({width:'show'})
})

$(".slideToggleBtn").click(()=>{
    $(".slideToggleDiv").slideToggle();
})

$(".stopBtn").click(()=>{
    $(".showDiv").stop();
    $(".fadeDiv").stop();
    
})

// selectot 
$(document).ready(function(){
    
    $(".parentDiv").mouseover(()=>{
        $(".isYouDiv").parent().css("border-color","lightcoral")
    })
    $(".parentDiv").mouseout(()=>{
        $(".isYouDiv").parent().css("border-color","black")
    })
    
    $(".parentsDiv").mouseover(()=>{
        $(".isYouDiv").parents().css("border-color","lightcoral")
    })
    $(".parentsDiv").mouseout(()=>{
        $(".isYouDiv").parents().css("border-color","black")
    })  
})



// selectot 