//custom ease variations (for path drawing tl)
CustomEase.create("easeOne", "M0,0 C0.004,0.207 0.188,0.474 0.488,0.612 0.802,0.756 0.974,0.816 1,1 ");
CustomEase.create("easeTwo", "M0,0 C0.306,0 0.468,0.364 0.522,0.688 0.576,0.96 0.722,1 1,1 ");
CustomEase.create("easeThree", "M0,0 C0.768,-0.01 0.674,0.462 0.746,0.692 0.836,0.98 1,1 1,1 ");

//tl for path drawing effect
var ropeTl = gsap.timeline ({ paused:true})
.fromTo(".amp-svg-rope-a", 1, {drawSVG:"0%"}, {drawSVG:"100%",ease: "none", stagger:0.05}, 0)
.fromTo(".amp-svg-rope-b", 1, {drawSVG:"0%"}, {drawSVG:"100%",ease: "none", stagger:-0.05}, 0)
.fromTo(".amp-svg-path-twist", 1, {drawSVG:"0%"}, {drawSVG:"100%", ease: "none"}, 1)
.from(".amp-svg-text-title-d", 4, {x:'-=20px', opacity:0, ease: "expo.out"}, 1);

//tl for scrubbing progress of drawing effect, with custom ease 
var ropeProgressTl = gsap.timeline ()
.fromTo (ropeTl, 6, {progress:0}, {progress:0.85, ease: "easeTwo"})

//text animation for top group (A)
var textATl = gsap.timeline ()
.from (".amp-svg-text-a", 0.25, {opacity:0, stagger:-2}, 0)
.from (".amp-svg-text-a", 0.5, {x:380, y:90,stagger:-2, ease:"expo.inOut"},1)
.fromTo (".amp-svg-text-a", 0.5, {scale:4}, {scale:2, stagger:-2, ease:"expo.inOut"},1);

//text animation for bottom group (B)
var textBTl = gsap.timeline ()
.from (".amp-svg-text-b", 0.25, {opacity:0, stagger:-2}, 0)
.from (".amp-svg-text-b", 0.5, {x:380, y:90,stagger:-2, ease:"expo.inOut"},1)
.fromTo (".amp-svg-text-b", 0.5, {scale:4}, {scale:2, stagger:-2, ease:"expo.inOut"},1);

//master tl for assembly of all animation/tl's
var masterTl = gsap.timeline ({
  repeat:-1,
  yoyo:false,
  repeatDelay:3,
  scrollTrigger: {
    trigger: '#scarboroughs-rope',
    onEnter: self => {
      masterTl.progress(0);
      masterTl.play();
    },
     onEnterBack: self => {
      masterTl.progress(0);
      masterTl.play();
    },
  },
})
.from (".amp-div-circle-a", 0.5, {scale:0, transformOrigin:'50% 50%', ease:"back.out"})
.add (textATl)
.from (".amp-svg-group-a", 0.5, {x:150, y:220, scale:1.5, ease:'sine.inOut'},'+=2')
.to (".amp-svg-group-a", 0.5, {opacity:0.25}, "-=0.5")
.to (".amp-svg-text-a", 0.5, {scale:1, ease:"sine.inOut"},"-=0.5")
.from (".amp-div-circle-b", 0.5, {scale:0, transformOrigin:'50% 50%', ease:"back.out"})
.add (textBTl)
.from (".amp-svg-group-b", 0.5, {x:150, y:220, scale:1.5, ease:'sine.inOut'},'+=2')
.from (".amp-svg-text-title-c", 0.5, {opacity:0, ease:'sine.out'}, "-=0.5")
.to (".amp-svg-group-a", 0.5, {opacity:1, ease:'sine.out'}, "-=0.5")
.from (".amp-svg-text-title-a", 0.5, {opacity:0, ease:'sine.out'}, "-=0.5")
.to (".amp-svg-text-b", 0.5, {scale:1, ease:"sine.inOut"},"-=0.5")
.from (".amp-svg-text-title-b", 0.5, {opacity:0, ease:'sine.out'}, "-=0.5")
.from (".amp-div-circle-c", 0.5, {x:'-=20px', scale:0, transformOrigin:'50% 50%', ease:"back.out"})
.add (ropeProgressTl, "-=1") 

//control playback speed
masterTl.timeScale (2);