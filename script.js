let menuIcon = document.querySelector(' #menu- icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll( 'section');
let navlinks = document .querySelectorAll( 'header nav ul li a');


window.onscroll = () => {
sections. forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if(top >= offset & top < offset + height){
        navLinks.forEach(links =>{
            links.classlList.remove( 'active');
                document .querySelector( 'header nav ul li a[href*=' + id + ' ]' ).classlist.add(active)
        })       
    }
})
}

menuIcon.onclick= () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});*/
