const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Toggle nav
toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'));

// Show modal
open.addEventListener('click', () => modal.style.display = 'block');
//OR
// open.addEventListener('click', () => modal.classList.add('show-modal'));

// Close modal
close.addEventListener('click', () => modal.style.display = 'none')
// OR
// close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on click outside
window.addEventListener('click', e => e.target == modal ? modal.style.display = 'none' : false);
// OR
// window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);