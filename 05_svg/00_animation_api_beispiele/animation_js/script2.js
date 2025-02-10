"use strict"
let snailRotate = [{
    transform: 'rotate(0)',
    fill: '#0A1747'
},
{
    fill: '#0029FA',
    offset: 0.3
},
{
    transform: 'rotate(-360deg)',
    fill: '#0A1747'
}
];

let snailTiming = {
duration: 3000,
iterations: Infinity
}

document.getElementById("snail").animate(snailRotate,snailTiming)
