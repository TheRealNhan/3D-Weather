// When you scroll down, the title fades out and moves up
// When you scroll up, the title fades in and moves down
import { waapi, animate, createDrawable, stagger, onScroll } from 'animejs';

waapi.animate('#text', {
    translateY: [
        { value: -50, duration: 500, easing: 'easeOutQuad' },
        { value: 0, duration: 500, easing: 'easeInQuad' }
    ],
    opacity: [
        { value: 0, duration: 500, easing: 'easeOutQuad' },
        { value: 1, duration: 500, easing: 'easeInQuad' }
    ]
});

waapi.animate(createDrawable('path'), {
  draw: ['0 0', '0 1', '1 1'],
  delay: stagger(40),
  ease: 'inOut(3)',
  autoplay: onScroll({ sync: true }),
});