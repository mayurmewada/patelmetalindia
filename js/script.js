const path = {
  curviness: 0,
  autoRotate: false,
  values: [{ x: 100, x: -100 }],
};

const tween = TimelineLite();

tween.add(
  TweenLite.to(".plx-txt-hrz", 1, {
    bezier: path,
    ease: Power1.easeInOut,
  })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".plx-wrapper",
  duration: 1000,
})
  .setTween(tween)
  .addIndicators()
  .addTo(controller);
