'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

function hide() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function open() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (const element of btnsOpenModal) {
  element.addEventListener('click', open);

  btnCloseModal.addEventListener('click', hide);

  overlay.addEventListener('click', hide);
}
