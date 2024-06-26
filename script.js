gsap.from("#links li", {
  opacity: 0,
  y: -100,
  duration: 1,
  stagger: 0.8,
});

gsap.from("#capture", {
  opacity: 0,
  scale: 0.5,
  delay: 1,
  duration: 2,
});

gsap.to("#topimg", {
  x: 1600,
  repeat: -1,
  duration: 30,
  delay: 1,
  yoyo: true,
});

gsap.to("#light", {
  transform: "translateX(-50%)",
  duration: 10,
  scrollTrigger: {
    trigger: "#light",
    scroll: "body",
    start: "top 0%",
    end: "top -100%",
    // markers: true,
    scrub: 3,
    pin: true,
  },
});

gsap.from("#text", {
  x: -500,
  duration: 20,
  scrollTrigger: {
    trigger: "#text",
    scroll: "body",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 4,
  },
});
gsap.from("#img", {
  x: 500,
  duration: 20,
  scrollTrigger: {
    trigger: "#img",
    scroll: "body",
    start: "top 100%",
    end: "top 0%",
    // markers: true,
    scrub: 3,
  },
});

gsap.from("#freeze", {
  scale: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#freeze",
    scroll: "body",
    start: "top 100%",
    scrub: 3,
    // markers: true,
  },
});
