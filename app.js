gsap.registerPlugin(ScrollTrigger);

const colors = { "Black": "#08090a", "Chrysler blue": "#5711e4", "Platinum": "#eaeaea", "Periwinkle": "#cbc5ea", "Blush": "#d55672" }

function startLoader() {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter() {
        if (currentValue == 100) {
            return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;
        if (currentValue > 100) {
            currentValue = 100;
        }

        counterElement.textContent = currentValue + "%";

        let delay = Math.floor(Math.random() * 200) + 250;
        setTimeout(updateCounter, delay);
    }
    updateCounter();
}

startLoader();

gsap.from(".circles", 2, {
    top: "-100%",
    ease: "elastic.out",
    delay: 0.5,
});

gsap.to(".circle-inner", 1, {
    width: "75px",
    height: "75px",
    ease: "power4.inOut",
    delay: 2,
})

gsap.to(".circle-inner-rotator", 1, {
    scale: 1,
    ease: "power4.inOut",
    delay: 2.5
})

gsap.to(".circles", 1.5, {
    rotation: 360,
    ease: "power4.inOut",
    delay: 3,
})

gsap.to(".block", 0.75, {
    display: "block",
    height: "200px",
    ease: "power4.inOut",
    delay: 4,
})

gsap.to(".block", 0.75, {
    width: "800px",
    ease: "power4.inOut",
    delay: 4.5,
})

gsap.fromTo(".container", {
    duration: 2,
    left: "100%",
    scale: 0.5,
    ease: "power4.inOut",
    delay: 4,
},
    {
        duration: 2,
        left: "50%",
        scale: 0.5,
        transform: "translateX(-50%)",
        ease: "power4.inOut",
        delay: 4,
    }
)

gsap.to(".block", 1.5, {
    width: "0px",
    ease: "power4.inOut",
    delay: 5,
})

gsap.to(".block", 1.5, {
    height: "0px",
    ease: "power4.inOut",
    delay: 6,
})

gsap.to(".circles", 1.5, {
    rotation: 0,
    ease: "power4.inOut",
    delay: 6.5,
})

gsap.to(".loader", 2.5, {
    scale: 0,
    ease: "power4.inOut",
    delay: 7,
})

gsap.to(".container", 2, {
    scale: 1,
    ease: "power4.inOut",
    delay: 7.5,
    "background-color": colors.Black,
})

// gsap.to(".greetings", 1, {
//     opacity:0,
//     display:"none",
//     "margin-bottom": "5rem",
//     ease: "power4.inOut",
//     delay: 9,
// })

gsap.to(".container", 1, {
    opacity: "0",
    "z-index": "-222",
    ease: "power4.inOut",
    delay: 9.5,
})

gsap.to(".contain", .5, {
    display: "block",
    ease: "power4.inOut",
    delay: 8,
    onComplete: someFunction,
})


gsap.to(".contain", .5, {
    opacity: "1",
    ease: "power4.inOut",
    delay: 9,
})


function someFunction() {
    const footer = document.querySelector(".footer");
    const lastCard = document.querySelector(".card.scroll");
    const pinnedSections = gsap.utils.toArray(".pinned");

    pinnedSections.forEach((section, index, sections) => {
        let img = section.querySelector(".img");
        let nextSection = sections[index + 1] || lastCard;
        let endScalePoint = `top+=${nextSection.offsetTop - section.offsetTop} top`;
        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end:
                    index == sections.length
                        ? `+=${lastCard.offsetHeight / 2}`
                        : footer.offsetTop - window.innerHeight,
                pin: true,
                pinSpacing: false,
                scrub: 1,
            }
        })

        gsap.fromTo(img, { scale: 1 }, {
            scale: 0.5,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: endScalePoint,
                scrub: 1,
            }
        })

        let video = document.getElementById("video");
        ScrollTrigger.create({
            trigger: document.body,
            start: "-50px",
            end: '+=450vh',
            scrub: 1,
            onUpdate: (self) => {
                let op = self.progress;
                video.style.opacity = 1 - op;
            },
            onEnter: () => video.play(),
            onEnterBack: () => video.play(),
            onLeave: () => video.pause(),
            onLeaveBack: () => video.pause(),
        });


    })
}


let video = document.getElementById("video");
video.addEventListener("play", (event) => {
    let scrollkoro = document.getElementById("scrollkoro");
    let playkoro = document.getElementById("videoplay");
    playkoro.style.display = "none"
    scrollkoro.style.display = "flex"

});

let clicker = document.querySelector("#birthday-clicker");
clicker.addEventListener('click', () => {
    gsap.to(".footer-content", 1, {
        opacity: "0",
        display: "none",
        "margin-top": "5rem",
        ease: "power4.inOut",
    })

    gsap.to("#birthday", 1, {
        "delay": 1,
        "display": "flex",
        ease: "power4.inOut",
    })


});

var animation = bodymovin.loadAnimation({
    wrapper: document.getElementById('birthday'), // Required
    path: 'https://lottie.host/23c59fa2-2ccc-41ba-8317-76f55d221fdc/p7WxPqoMfW.json', // Required
    animType: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
})
animation.setSpeed(0.6)

var balloonsAnim1 = bodymovin.loadAnimation({
    wrapper: document.getElementById('balloons-contain1'), // Required
    path: 'https://lottie.host/324fc2d8-8372-4441-b4fa-7d7d1a767219/qlHEVH8a5A.json', // Required
    animType: 'svg', // Required
    loop: true, // Optional
    autoplay: false, // Optional
})
balloonsAnim1.setSpeed(0.6)

var balloonsAnim2 = bodymovin.loadAnimation({
    wrapper: document.getElementById('balloons-contain2'), // Required
    path: 'https://lottie.host/324fc2d8-8372-4441-b4fa-7d7d1a767219/qlHEVH8a5A.json', // Required
    animType: 'svg', // Required
    loop: true, // Optional
    autoplay: false, // Optional
})
balloonsAnim2.setSpeed(0.6)

var birthdayMessage = document.getElementById('birthday-message');
let footerContent = document.querySelector(".footer-content");
let done = false;
animation.addEventListener("enterFrame", function (event) {
    if (event.currentTime > 40 && !done && footerContent.style.display == "none") {
        done = true
        gsap.to("#birthday-message", 2, {
            "opacity": 1,
            "scale": 1,
            ease: "power4.inOut",
        })
        for(let i = 0; i < count; i++){
            createUnit()
        }
    }
})



var targetNode = document.getElementById('birthday');
var observer = new MutationObserver(function () {
    if (targetNode.style.display != 'none') {
        animation.goToAndPlay(0, true)
        balloonsAnim1.goToAndPlay(0, true)
        balloonsAnim2.goToAndPlay(0, true)
    }
});
observer.observe(targetNode, { attributes: true, childList: true });


var firefly =  document.getElementById("test");
let count = 200;
let w, h;

function random(min, max){
    return gsap.utils.random(min, max);
}

function createUnit(){
    var unit = document.createElement("i");
    w = window.innerWidth;
    h = window.innerHeight;
    unit.classList.add("fa", "fa-heart");
    firefly.appendChild(unit)

    var a =  random(h, w)
    var b =  random(h, w)
    gsap.set(unit, {
        x: random(0,h*1.5),
        y: random(0,w*1.5),
        scale: random(0.5, 1),
        opacity: 0
    })
    gsap.to(unit, {
        x: "+=" + random(-w/2, w/2),
        y: "+=" + random(-h/2,h/2),
        duration: random(20, 40),
        ease: Linear.easeNone,
        yoyo: true,
        repeat: -1
    })

    gsap.to(unit, {
        opacity: .5,
        repeat: -1,
        yoyo: true,
        duration: random(2,3),
        delay: random(0,2),
        ease: Power2.easeInOut,
        // onComplete: function(){
        //     unit.parentNode.removeChild(unit)
        //     createUnit();
        // }
    })
}





// const canvas = document.querySelector("canvas")
// const ctx = canvas.getContext("2d");

// let mouseMoved = false;

// const pointer = {
//     x: 0.5 * window.innerWidth,
//     y: 0.5 * window.innerHeight
// }

// const params = {
//     pointsNumber: 40,
//     widthFactor: 0,
//     mouseThreshold: 0.5,
//     spring: 0.25,
//     friction: 0.5
// }

// const trail = new Array(params.pointsNumber);
// for(let i = 0; i < params.pointsNumber; i++){
//     trail[i] = {
//         x: pointer.x,
//         y: pointer.y,
//         dx: 0,
//         dy: 0
//     }
// }

// window.addEventListener("click", (e) => {
//     updateMousePosition(e.pageX, e.pageY);
// });
// window.addEventListener("mousemove", (e) => {
//     mouseMoved = true;
//     updateMousePosition(e.pageX, e.pageY)
// })

// window.addEventListener("touchmove", (e) => {
//     mouseMoved = true;
//     updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY)
// })

// function updateMousePosition(eX, eY){
//     pointer.x = eX;
//     pointer.y = eY
// }

// setupCanvas();
// update(0);
// window.addEventListener("resize", setupCanvas)

// function update(t){
//     if(!mouseMoved){
//         pointer.x = (0.5+0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) * window.innerWidth;
//         pointer.y = (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) * window.innerHeight
//     }
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     trail.forEach((p, pIdx) => {
//         const prev = pIdx === 0? pointer : trail[pIdx - 1];
//         const spring = pIdx === 0? 0.4 * params.spring : params.spring;

//         p.dx += (prev.x = p.x) * spring;
//         p.dy += (prev.y - p.y) * spring;
//         p.dx *= params.friction;
//         p.dy *= params.friction;
//         p.x += p.dx;
//         p.y += p.dy;
//     });

//     var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
//     gradient.addColorStop(0, "rgba(160, 93, 134, 1")
//     gradient.addColorStop(1, "rgba(57, 34, 115, 1")

//     ctx.strokeStyle = gradient;
//     ctx.lineCap = "round";
//     ctx.beginPath();
//     ctx.moveTo(trail[0].x, trail[0].y)
    
//     for (let i = 0; i < trail.length - 1; i++) {
//        const xc = 0.5 * (trail[i].x + trail[i + 1].x)
//        const yc = 0.5 * (trail[i].y + trail[i + 1].y)
//         ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
//         ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
//         ctx.stroke();
//     }

//     ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
//     ctx.stroke();

//     window.requestAnimationFrame(update);
// }

// function setupCanvas(){
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// }
