## Von CSS Animationen zur Web Animation API

Web Animation API: This native browser API provides a JavaScript interface for controlling animations on web pages, allowing for greater control over animations compared to CSS.

Vergleiche auch folgende Beispiele:
https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API

# Beispiel Alice Tumbling von der oberen Webseite

1. Keyframe Object
   const aliceTumbling = [
   { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
   { color: "#431236", offset: 0.3 },
   { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
   ];

2. timing Properties
   const aliceTiming = {
   duration: 3000,
   iterations: Infinity,
   };

3. Zusammensetzen
   document.getElementById("alice").animate(aliceTumbling, aliceTiming);

The animate() method can be called on any DOM element that could be animated with CSS. And it can be written in several ways. Instead of making objects for keyframes and timing properties, we could just pass their values in directly, like so:

document.getElementById("alice").animate(
    [
        {   transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
        {   color: "#431236", offset: 0.3 },
        {   transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
    ],
        {
            duration: 3000,
            iterations: Infinity,
        },
);
