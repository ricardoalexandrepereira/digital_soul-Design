
/*  gsap.to('.img-container img',{
    scale:52,
    ease:"ease",
    ScrollTrigger: {
        trigger:'.video-section',
        scrub:1,
        start:"top top",
        end:"bottom bottom",
        pin:true
    }
})
 */


gsap.registerPlugin(ScrollTrigger)


ScrollTrigger.defaults({
toggleActions:"play none none reverse"
});



const tl = gsap.timeline();
tl.from('.title span',{
y:150,
skewY:7,
duration:3,
stagger:true

}).from('.txt-bottom',{
    letterSpacing:-10,
    opacity:0,
    duration:3,
    ease:"ease"
   
})

//image scale with trigger
let tlone = gsap.timeline({
    scrollTrigger: {
        trigger:'.video-section',
        start:'0%',
        end:'100%',
        ease:"ease",
       // markers:true,
        scrub:true,
        pin:true
    }
})

tlone.to('.img-container img',{ scale:80})
//image scale with trigger



gsap.to('.right',{
    autoAlpha:0,
    x:500,
    duration:1.5,
    scrollTrigger:{
        start:1
    }
})
gsap.to('.left',{
    autoAlpha:0,
    x:-500,
    duration:1.5,
    scrollTrigger:{
        start:1
    }
})


    
const tltwo = gsap.timeline();

tltwo.from('.left-side div',{
    y:150,
    opacity:0,
    duration:4,
    stagger:{
        amount:4,
        
    },
    delay:6
  
}).from('.right-side',{ opacity:0, duration:5},6)
.to('.wrapper',{x:-window.innerWidth})

ScrollTrigger.create({
    animation:tltwo,
    trigger:'.wrapper',
    start:"top top",
    end:"+=600",
    scrub:1,
    pin:true,
    ease:"ease"
    
})

gsap.utils.toArray('.col').forEach(image => {
    gsap.fromTo(image,{
        opacity:.3,
        x:-50
    },{
        opacity:1,
        x:-50,
        scrollTrigger:{
            trigger:image,
            start:"20%",
            stagger:{
                amount:.4
            }
        }
    })
});

gsap.from(".box1 h1",{
    scrollTrigger:{
       trigger:".box1",
       start:"bottom 220px",
       end:"bottom bottom",
       scrub:1,
       /* markers:true */
       },              
       x:100,           
       opacity:0,
       duration:3,
         
})             
gsap.from(".box2 h1",{
    scrollTrigger:{
       trigger:".box2",
       start:"center center",
       end:"top bottom",
       scrub:1,
       },              
       x:100,           
       opacity:0,
       duration:3,
         
})             
gsap.from(".box3 h1",{
    scrollTrigger:{
       trigger:".box3",
       start:"center center",
       end:"top bottom",
       scrub:1,
       },              
       x:100,           
       opacity:0,
       duration:3,
         
})             

//intro

const intro = document.querySelector('.intro');
const logo = document.querySelector('.logo-header');
const logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        logoSpan.forEach((span,index)=>{
            setTimeout(()=>{
                span.classList.add('active')
            }, (index + 1) * 900)
        });


       setTimeout(()=>{
            logoSpan.forEach((span,index)=>{
                setTimeout(()=>{
                span.classList.remove('active');
                span.classList.add('fade');
    
                }, (index + 1) * 800);
            });
        },3000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        },4000)

    });
});
