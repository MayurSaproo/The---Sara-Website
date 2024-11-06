gsap.from(".cont1 .box1 ",{
    x:-815, 
    duration:2,
    delay:1,
    opacity:0
    
})
gsap.from(".cont1 .box2 img",{ 
    duration:2,
    delay:2,
    hieght:0,
    opacity:0,
    
})
gsap.from(".cont2",{
    x:-815, 
    duration:3,
    delay:1,
    opacity:0,
    scrollTrigger:{
        trigger:".cont2",
        scroller:"body",
        start:"top 50%",
        end:"80% 80%",
        scrub:3
    }
})


gsap.from(".cont3",{
    x:815, 
    duration:3,
    delay:1,
    opacity:0,
    scrollTrigger:{
        trigger:".cont3",
        scroller:"body",
        start:"top 50%",
        end:"80% 80%",
        scrub:3
    }
})


gsap.from(".cont4",{
    x:-815, 
    duration:3,
    delay:1,
    opacity:0,
    scrollTrigger:{
        trigger:".cont4",
        scroller:"body",
        start:"top 50%",
        end:"80% 80%",
        scrub:3
    }
})

gsap.from(".cont5 h2",{
    transform: "scale(115)",

    duration:18,
    delay:1,
    opacity:0,
    scrollTrigger:{
        trigger:".cont5",
        scroller:"body",
        start:"top 50%",
        end:"80% 80%",
        scrub:2,
        pin:true,
    }
})


gsap.from(".cont6",{
    y:855,
    duration:1,
    delay:8,
    opacity:0,
    scrollTrigger:{
        trigger:".cont5 ",
        scroller:"body",
        start:"top 10%",
        end:"80% 80%",
        scrub:2,
        pin:true,
    }
})

gsap.from(".contact1 h2",{
    x:355,
    duration:2,
    delay:1,
    opacity:1,
    scrollTrigger:{
        trigger:".contact1 h2 ",
        scroller:"body",
        start:"top 80%",
        end:"80% 80%",
        scrub:2,
        }
})
gsap.from(".contact2 .crd1",{
    y:855,
    duration:3,
    delay:5,
    opacity:1,
    scrollTrigger:{
        trigger:".contact2  ",
        scroller:"body",
        start:"top 80%",
        end:"80% 80%",
        scrub:2,
        }
})


gsap.from(".camps h2",{
    x:1355,
    duration:3,
    delay:1,
    opacity:1,
    scrollTrigger:{
        trigger:".camps  ",
        scroller:"body",
        start:"top 80%",
        end:"80% 80%",
        scrub:2,
        animationTimingFunction:"easeout",
        }
})
gsap.from(".camp .box1 img",{
    y:555,
    duration:3,
    delay:8,
    opacity:0,
    scrollTrigger:{
        trigger:".camp  ",
        scroller:"body",
        start:"top 80%",
        end:"80% 80%",
        scrub:2,
        }
})

gsap.from(".camp .box2 h2",{
    x:555,
    duration:3,
    delay:8,
    opacity:0,
    scrollTrigger:{
        trigger:".camp  ",
        scroller:"body",
        start:"top 80%",
        end:"80% 80%",
        scrub:2,
        }
})



gsap.from(".camp2 .box2 img",{
    y:555,
    duration:3,
    delay:8,
    opacity:0,
    scrollTrigger:{
        trigger:".camp2 ",
        scroller:"body",
        start:"top 80%",
        end:"80% 80%",
        scrub:2,
        }
})


gsap.from(".camp2 .box1 h2",{
    x:-555,
    duration:3,
    delay:8,
    opacity:0,
    scrollTrigger:{
        trigger:".camp2 ",
        scroller:"body",
        start:"top 80%",
        end:"80% 80%",
        scrub:2,
        }
})