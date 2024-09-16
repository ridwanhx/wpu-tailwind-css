// hamburger
// tangkap elemen hamburgernya terlebih dahulu
const hamburger = document.querySelector('#hamburger');
// berikan event terhadap elemen, ketika elemen di klik
hamburger.addEventListener('click', function () {
    // add : menambahkan kelas pada elemen
    // remove : menghilangkan kelas pada elemen
    // toggle : melakukan keduanya (menambahkan / menghilangkan)
    hamburger.classList.toggle('hamburger-active');
});

// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
        header.classList.remove('absolute')
    } else {
        header.classList.remove('navbar-fixed');
        header.classList.add('absolute')
    }
};
