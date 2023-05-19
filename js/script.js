// Feather Icons
feather.replace();

// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').addEventListener('click', (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
});

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').addEventListener('click', (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
});

// Toggle class active untuk Shopping Cart
const shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-cart-button').addEventListener('click', (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
});

// klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  });
});

// klik tombol close
document.querySelector('.modal .close-icon').addEventListener('click', (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
});

// klik di luar modal
window.onclick = (e) => {
  if (e.target == itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};
