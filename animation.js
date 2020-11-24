const tl = gsap.timeline({defaults: {ease: 'Power1.out'} });

tl.to('.intro-text', {y: "0%", duration: 1, stagger: 0.25}); //stagger offset
tl.to('.slider', {y: "-100%", duration: 1.5, delay: 0.5});
tl.to('.intro', {y: "-100%", duration: 1}, "-=1"); // -=1 zacni o 1s rychleji, zacne vice mene stejne jako slider

tl.fromTo('.navbar', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.big-title', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");