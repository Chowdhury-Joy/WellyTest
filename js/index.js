//!!PArt 01....................................

var tl0 = gsap.timeline({
    scrollTrigger: {
        trigger: '.index-des',
        toggleActions: "play pause resume reset",
        start: "top 80%"
    }
})
tl0.from('.index-des-text-tit', { y: 100, opacity: 0, duration: .8})
.from('.index-des-text-des', { y: 100, opacity: 0, duration: .8})


//!! Part 02................................

var tl1 = gsap.timeline({
          scrollTrigger: {
                    trigger:'.tl1',
                    toggleActions: "play pause resume reset",
                    start: "top 80%"
          }
});
tl1.from('.tl1-img', { y: 500, opacity: 0, duration: .8})
.from('.tl1-txt-tit', { y: 500, opacity: 0, duration: .8}, "<.2")
.from('.tl1-txt-des', { y: 500, opacity: 0, duration: .8, ease: "sine.out"}, "<")
.from('.tl1-txt-btn', { y: 500, opacity: 0, duration: .8, ease: "sine.out"}, "<")


var tl2 = gsap.timeline({
          scrollTrigger: {
                    trigger:'.tl2',
                    toggleActions: "play pause resume reset",
                    start: "top 80%"
          }
});
tl2.from('.tl2-img', { y: 500, opacity: 0, duration: .8})
.from('.tl2-txt-tit', { y: 500, opacity: 0, duration: .8}, "<.2")
.from('.tl2-txt-des', { y: 500, opacity: 0, duration: .8, ease: "sine.out"}, "<")
.from('.tl2-txt-btn', { y: 500, opacity: 0, duration: .8, ease: "sine.out"}, "<")


var tl3 = gsap.timeline({
          scrollTrigger: {
                    trigger:'.tl3',
                    toggleActions: "play pause resume reset",
                    start: "top 80%"
          }
});
tl3.from('.tl3-img', { y: 500, opacity: 0, duration: .8})
.from('.tl3-txt-tit', { y: 500, opacity: 0, duration: .8}, "<.2")
.from('.tl3-txt-des', { y: 500, opacity: 0, duration: .8, ease: "sine.out"}, "<")
.from('.tl3-txt-btn', { y: 500, opacity: 0, duration: .8, ease: "sine.out"}, "<")


var tl4 = gsap.timeline({
          scrollTrigger: {
                    trigger:'.tl4',
                    toggleActions: "play pause resume reset",
                    start: "top 80%"
          }
});
tl4.from('.tl4-img', { y: 500, opacity: 0, duration: .8})
.from('.tl4-txt-tit', { y: 500, opacity: 0, duration: .8}, "<.2")
.from('.tl4-txt-des', { y: 500, opacity: 0, duration: .8, ease: "sine.out"}, "<")
.from('.tl4-txt-btn', { y: 500, opacity: 0, duration: .8, ease: "sine.out"}, "<")


var tl5 = gsap.timeline({
          scrollTrigger: {
                    trigger:'.tl5',
                    toggleActions: "play pause resume reset",
                    start: "top 80%"
          }
});
tl5.from('.tl5-img', { y: 500, opacity: 0, duration: .8})
.from('.tl5-txt-tit', { y: 500, opacity: 0, duration: .8}, "<.2")
.from('.tl5-txt-des', { y: 500, opacity: 0, duration: .8, ease: "sine.out"}, "<")
.from('.tl5-txt-btn', { y: 500, opacity: 0, duration: .8, ease: "sine.out"}, "<")



//!! Part 03...........................................



var tl6 = gsap.timeline({
    scrollTrigger: {
              trigger:'.fs-01',
              toggleActions: "play pause resume reset",
              start: "top 80%"
    }
});
tl6.from('.fs-01-cont', { y: 200, opacity: 0, duration: 2})


var tl7 = gsap.timeline({
    scrollTrigger: {
              trigger:'.fs-02',
              toggleActions: "play pause resume reset",
              start: "top 80%"
    }
});
tl7.from('.fs-02-cont', { y: 500, opacity: 0, duration: 2, stagger: 0.5})


var tl8 = gsap.timeline({
    scrollTrigger: {
              trigger:'.fs-03',
              toggleActions: "play pause resume reset",
              start: "top 70%"
    }
});
tl8.from('.fs-03-cont', { y: 300, opacity: 0, duration: 2})


var tl9 = gsap.timeline({
    scrollTrigger: {
              trigger:'.fs-04',
              toggleActions: "play pause resume reset",
              start: "top 80%"
    }
});
tl9.from('.fs-04-cont', { y: 200, opacity: 0, duration: 2})


var tl10 = gsap.timeline({
    scrollTrigger: {
              trigger:'.fs-05',
              toggleActions: "play pause resume reset",
              start: "top 80%"
    }
});
tl10.from('.fs-05-cont', { y: 200, opacity: 0, duration: 2, stagger: 0.5})
