// hamburger
// tangkap elemen hamburgernya terlebih dahulu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
// berikan event terhadap elemen, ketika elemen di klik
hamburger.addEventListener("click", function () {
  // add : menambahkan kelas pada elemen
  // remove : menghilangkan kelas pada elemen
  // toggle : melakukan keduanya (menambahkan / menghilangkan)
  hamburger.classList.toggle("hamburger-active");
  // muncul / hilangkan kelas hidden ketika fungsi ini dijalankan
  navMenu.classList.toggle("hidden");
});

// Navbar Fixed
// jalankan fungsi berikut hanya ketika window dalam keadaan di scroll
window.onscroll = function () {
  // panggil elemen header
  const header = document.querySelector("header");
  // ambil posisi header terhadap ujung atas dari halamannya / jarak dari posisi header terhadap top nya
  const fixedNav = header.offsetTop;

  // jika scroll yang sedang saya lakukan lebih besar dari fixed-nav(secara default fixedNav akan bernilai 0) / jika jarak antara window dengan fixedNav nya ada selisih
  if (window.scrollY > fixedNav) {
    // tambahkan kelas navbar-fixed kedalam elemen
    header.classList.add("navbar-fixed");
    // hilangkan kelas absolute kedalam elemen
    header.classList.remove("absolute");
  } else {
    // lakukan kebalikannya untuk kondisi else
    header.classList.remove("navbar-fixed");
    header.classList.add("absolute");
  }
};
