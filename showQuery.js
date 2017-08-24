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
