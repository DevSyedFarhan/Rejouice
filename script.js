function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco();


function cursorEffect(){
    let page1Content = document.querySelector("#page1-content");
    let cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", function(dets){
    gsap.to("#cursor",{
        x:dets.x,
        y:dets.y,
    })
})

page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity: 1,
    })
})
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity: 0,
    })
})
}

cursorEffect();

function page2Animation(){
    let tl = gsap.timeline();
tl
.from("#p2-top",{
    y: 10,
    opacity:0,
    stager:0.2,
    duration:.7,
    ease : Power1,
    scrollTrigger :{
        trigger : "#page2",
        scroller : "#main",
        start : "top 40%",
        end : "top 37%",
        scrub : 5,
    }
})
.from("#p2-line",{
    width: 0,
    duration:1,
    delay: .5,
    ease : Power1,
    scrollTrigger :{
        trigger : "#page2",
        scroller : "#main",
        start : "top 40%",
        end : "top 37%",
        scrub : 5,
    }
})

.from(".elemh4",{
    y: 120,
    stagger:0.1,
    duration:1,
    opacity:0,
    ease : Power1,
    scrollTrigger :{
        trigger : "#page2",
        scroller : "#main",
        start : "top 40%",
        end : "top 37%",
        scrub : 5,
    }
})

}

page2Animation();

function page3Animation(){
    let tl = gsap.timeline();
tl
.from("#page3-top h5,i",{
    y: 30,
    opacity:0,
    stager:0.1,
    duration:.7,
    ease : Power1,
    scrollTrigger :{
        trigger : "#page3",
        scroller : "#main",
        start : "top 60%",
        end : "top 40%",
        scrub : 5,
    }
})
.from("#page3-top h1",{
    y: 50,
    opacity:0,
    stager:0.3,
    duration:1,
    ease : Power1,
    scrollTrigger :{
        trigger : "#page3",
        scroller : "#main",
        start : "top 60%",
        end : "top 40%",
        scrub : 5,
    }
})

}

page3Animation();



function page4Animation(){
    let tl = gsap.timeline();
tl
.from("#page4",{
    y: 40,
    opacity:0,
    stager:0.2,
    duration:.7,
    ease : Power1,
    scrollTrigger :{
        trigger : "#page4",
        scroller : "#main",
        start : "top 40%",
        end : "top 37%",
        scrub : 5,
    }
})
.from("#p4-line",{
    width: 0,
    duration:1,
    delay: .5,
    ease : Power1,
    scrollTrigger :{
        trigger : "#page4",
        scroller : "#main",
        start : "top 40%",
        end : "top 37%",
        scrub : 5,
    }
})
.from(".elemh5",{
    y : 120,
    opacity: 0,
    duration: .5,
    stagger: .1,
    ease: Power1,
    scrollTrigger :{
        trigger : "#page4",
        scroller : "#main",
        start : "top 40%",
        end : "top 37%",
        scrub : 5,
    }
})
}

page4Animation();

function animationgd(){
    let tl = gsap.timeline();
tl.from("#gradient-video h6 span",{
    y : 100,
    stagger:0.2,
    opacity: 0,
    duration:1,
    ease: Power1,
    scrollTrigger: {
        trigger: "#gradient-video",
        scroller : "#main",
        start : "top 40%",
        end : "top 37%",
        scrub : 5,
    }
})

.to("#gradient-video svg",{
    rotate : 220,
    duration:1,
    ease: Power1,
    scrollTrigger: {
        trigger: "#gradient-video",
        scroller : "#main",
        start : "top 40%",
        end : "top 37%",
        scrub : 5,
    }
})

}

animationgd();

function page5Animation(){
let tl= gsap.timeline();

tl
.from("#page5",{
    y: 40,
    opacity:0,
    stager:0.2,
    duration:.7,
    ease : Power1,
    scrollTrigger :{
        trigger : "#page5",
        scroller : "#main",
        start : "top 60%",
        end : "top 37%",
        scrub : 5,
    }
})
.from("#p5-line",{
    width: 0,
    duration:1,
    delay: .5,
    ease : Power1,
    scrollTrigger :{
        trigger : "#page5",
        scroller : "#main",
        start : "top 60%",
        end : "top 37%",
        scrub : 5,
    }
})
.from(".elemh6",{
    y : 120,
    opacity: 0,
    duration: .5,
    stagger: .1,
    ease: Power1,
    scrollTrigger :{
        trigger : "#page5",
        scroller : "#main",
        start : "top 60%",
        end : "top 37%",
        scrub : 5,
    }
})
}

page5Animation();

function swipper(){
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
});
}

swipper();

function loader(){
    let tl = gsap.timeline();

tl.from("#loader h3",{
    x: 35,
    stagger : 0.1,
    opacity: 0,
    duration: 1,
})
tl.to("#loader h3",{
    x: -35,
    stagger : 0.1,
    opacity: 0,
    duration: 1,
})
tl.to("#loader",{
    opacity: 0,
    duration: 1,
})
tl.to("#loader",{
    display : "none",
})
tl.from("#page1-content h1 span",{
    y: 100,
    stagger :0.1,
    opacity: 0,
    duration:0.5,
    delay : -1,
})


}

loader();

let tl = gsap.timeline();

tl.from("#page6 h2",{
    y: 10,
    opacity: 0,
    duration:0.5,
    ease : Power1,
    scrollTrigger :{
        trigger : "#page6",
        scroller : "#main",
        start : "top 70%",
        end : "top 37%",
        scrub : 5,
    }
})
tl.from(".line6",{
    width: 0,
    opacity: 0,
    stagger:1,
    duration:0.5,
    ease : Power1,
    scrollTrigger :{
        trigger : "#page6",
        scroller : "#main",
        start : "top 70%",
        end : "top 37%",
        scrub : 5,
    }
})

tl.from("#page6 h1 span",{
    y: 100,
    stagger :0.1,
    opacity: 0,
    duration:0.5,
    ease : Power1,
    scrollTrigger :{
        trigger : "#page6",
        scroller : "#main",
        start : "top 60%",
        end : "top 37%",
        scrub : 5,
    }
})


tl.from("#page6 #text6",{
    y: 100,
    stagger :0.1,
    opacity: 0,
    duration:0.5,
    ease : Power1,
    scrollTrigger :{
        trigger : "#page6",
        scroller : "#main",
        start : "top 60%",
        end : "top 37%",
        scrub : 5,
    }
})