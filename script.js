"use strict";

const firstCard = document.querySelector('[data-event="talk"]');
const labStatus = document.querySelector("#lab-status");

const detailsTitle = document.querySelector("#details-title");

const eventName = "Город в деталях";
let clickCount = 0;

firstCard.addEventListener("click", () => {
  clickCount = clickCount + 1;

  if (clickCount === 1) {
    labStatus.textContent = `Первое открытие: ${eventName}`;
  } else {
    labStatus.textContent = `Повторное открытие: ${eventName}`;
  }

  detailsTitle.textContent = eventName;
});

const secondCard = document.querySelector('[data-event="workshop"]');

secondCard.addEventListener("click", () => {
  detailsTitle.textContent = "Мастерская постеров";
});
const cards = document.querySelectorAll(".event-card");
const eventCount = document.querySelector("#event-count");

eventCount.textContent = cards.length;

// 07. Обойдете все карточки циклом. В этом месте временно могут
// сосуществовать старые и новые обработчики; в задании 08 вы
// удалите временные и оставите один общий путь обработки клика.

// 08. Напишете функцию showEvent(card) и возьмете данные из HTML.

// 09. Добавите выбранное состояние, акцент и CSS-анимацию.

// 10. Самостоятельно оживите кнопку «Удиви меня».
