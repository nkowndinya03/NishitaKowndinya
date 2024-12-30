//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
            sec.classList.remove('show-animate');
    });

//     //sticky header
//     let header = document.querySelector('header');

//     header.classList.toggle('sticky', window.scrollY > 100);

//     // remove toggle icon and navbar when click navbar links (scroll)
//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');

}

// const form = document.querySelector('form');

// function sendEmail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "rajdeepbakshi061@gmail.com",
//         Password : "CD674EE9276A05B789213A3BCE1221788E6F",
//         To : 'rajdeepbakshi061@gmail.com',
//         From : "rajdeepbakshi061@gmail.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     sendEmail();
//  });

// const aboutText = document.getElementById('aboutText');
// const readMoreBtn = document.getElementById('readMoreBtn');

// readMoreBtn.addEventListener('click', () => {
//     if (aboutText.classList.contains('collapsed')) {
//         aboutText.classList.remove('collapsed');
//         aboutText.classList.add('expanded');
//         readMoreBtn.textContent = 'Read Less';
//     } else {
//         aboutText.classList.remove('expanded');
//         aboutText.classList.add('collapsed');
//         readMoreBtn.textContent = 'Read More';
//     }
// });