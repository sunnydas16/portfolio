gsap.from(".port h1",{
    scale:0,
    opacity:1,
    repeat:-1,
    duration:3
})

gsap.from(".year ",{
    rotation: -360,
  duration: 2,
  repeat: -1,
  repeatDelay: 1,
  ease: 'bounce.out'
})

gsap.from(".about h3 ",{
    rotation: 360,
  duration: 2,
  repeat: -1,
  repeatDelay: 1,
  ease: 'bounce.out'
})

gsap.from(".img2,.info h1",{
    rotation: 360,
  duration: 5,
  repeat: -1,
})

function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init ()

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".port",
        scroller:".main",
        
        start:"top 35%",
        end:"top 0%",
        scrub:2
    }
})

tl.to(".port h1",{
    x:-260,
    rotate:-140
},"anim")
tl.to(".year h3",{
    x:900,
    rotate: -180
},"anim")

var p2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        start:"top 80%",
        end:"top 15%",
        
        scrub:2
        }
})

p2.from(".about h2",{
    y:-1500,
    rotate: 100
},"p2")
p2.from(".about p",{
    y:2000,
    rotate: 100
},"p2")
p2.from(".about h3",{
    y:300,
    x:200,   
},"p2")
p2.from(".about h5",{
    y:00,
    x:500,
},"p2")

var sk = gsap.timeline({
    scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        start:"top 150%",
        end:"top 4%",
        
        scrub:2
        }
})
sk.to(".page2",{
    backgroundColor:"#FEDBAA",
})
sk.from(".img2",{
    x:200,
    rotate:500
},"sk")
sk.from(".skills h1",{
    y:200,
    rotate:360,
    ease: 'bounce.out'
},"sk")
sk.from(".skills h3",{
    y:200,
    rotate: 100
},"sk")

var sk2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page4",
        scroller:".main",
        start:"top 200%",
        end:"top 10%",
        
        scrub:2
        }
})
sk2.to(".page3",{
    backgroundColor:"#FEC9B7",
})

sk2.to(".project", { 
    rotation: 360,
    ease: 'bounce.out'
  },"pr");

  var sk2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page4",
        scroller:".main",
        start:"top 70%",
        end:"top 10%",
        
        scrub:2
        }
})
sk2.to(".page4",{
    backgroundColor:"#FEC9B7",
})

sk2.from(".links img",{
    scale: 0,
    opacity:1
},"pr");
sk2.from(".links h1",{
    scale: 0,
    opacity:1
},"pr");


var pg5 = gsap.timeline({
    scrollTrigger:{
        trigger:".page5",
        scroller:".main",
        start:"top 70%",
        end:"top 10%",
        
        scrub:2
        }
})
pg5.from(".info ",{
    scale:0,
    opacity:1
})

var pg6 = gsap.timeline({
    scrollTrigger:{
        trigger:".page6",
        scroller:".main",
        start:"top 90%",
        end:"top -30%",
        
        scrub:2
        }
})
pg6.to(".ty h1",{
    rotate:360,
    ease: "bounce.out",
},"pg6")
sk2.to(".page5",{
    backgroundColor:"#FEDBAA",
})





