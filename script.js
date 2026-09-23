"use strict";

const labStatus = document.querySelector("#lab-status");

const detailsTitle = document.querySelector("#details-title");
const detailsDescription = document.querySelector("#details-description");
const detailsTime = document.querySelector("#details-time");

const cards = document.querySelectorAll(".event-card");
const eventCount = document.querySelector("#event-count");

eventCount.textContent = cards.length;

function showEvent(card) {
  detailsTitle.textContent = card.dataset.title;
  detailsDescription.textContent = card.dataset.description;
  detailsTime.textContent = card.dataset.time;
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    labStatus.textContent = "Нажата карточка из программы";
    showEvent(card);
  });
});

// 09. Добавите выбранное состояние, акцент и CSS-анимацию.

// 10. Самостоятельно оживите кнопку «Удиви меня».
