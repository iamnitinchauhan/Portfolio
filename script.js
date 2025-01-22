var tl = gsap.timeline()

tl.from('#name h1',{
  y: -150,
  duration : .6,
  delay : 1.5,
})

tl.from('#name h2 ',{
  x: -2000,
  duration : .4
})

tl.from('#name p ',{
  x: -800,
  duration : .2,
})


gsap.from('#kp h2',{
  scale : .7,
  duration : 3,
  scrollTrigger : {
    trigger : "#contact",
    start : "top 95%",
    scrub : 2,
  }
})


gsap.from('#kaam-2',{
  scale : .7,
  duration : 3,
  scrollTrigger : {
    trigger : "#contact",
    scrub : 2,
  }
})

gsap.from('#contact',{
  scale : .8,
  duration : 3,
  scrollTrigger : {
    trigger : "#contact",
    scrub : 2,
  }
})

