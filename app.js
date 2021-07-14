
var icon= document.getElementById("icon");
var logo= document.getElementById("logo");
/*java*/
icon.onclick=function()
{
document.body.classList.toggle("dark-theme");
if(document.body.classList.contains("dark-theme")){
icon.src="moon.png"; 
}
else{
icon.src="sun.png";
}
}
/*intro*/
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 1.5, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1.1");
tl.fromTo(".nav-index", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".imagine", { opacity: 0 }, { opacity: 1, duration: 1.5});
tl.fromTo(".info h1", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".info a", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".info p", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

tl.fromTo(".project", { opacity: 0 }, { opacity: 1, duration: 1 },"-=5");/*portfolio.html*/
tl.fromTo(".nav-work", { opacity: 0 }, { opacity: 1, duration: 1 },"-=3.5");
tl.fromTo(".project-list", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=4.5");

tl.fromTo(".contact-info", { opacity: 0 }, { opacity: 1, duration: 1 },"-=5");/*contact.html*/
tl.fromTo(".nav-contact", { opacity: 0 }, { opacity: 1, duration: 1 },"-=3.5");
tl.fromTo(".liste-contact", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=4.5");

tl.fromTo(".nav-about", { opacity: 0 }, { opacity: 1, duration: 1 },"-=3.5");/*about.html*/
tl.fromTo(".about-info", { opacity: 0 }, { opacity: 1, duration: 1 },"-=4.5");
tl.fromTo(".circle", { opacity: 0 }, { opacity: 1, duration: 1 },"-=5");

tl.fromTo(".nav-work", { opacity: 0 }, { opacity: 1, duration: 1 },"-=3.5");/*work.html*/
tl.fromTo(".work-info", { opacity: 0 }, { opacity: 1, duration: 1 },"-=4.5");
tl.fromTo(".liste-work", { opacity: 0 }, { opacity: 1, duration: 1 },"-=5");

