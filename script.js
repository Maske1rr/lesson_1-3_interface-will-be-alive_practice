"use strict";

const labStatus = document.querySelector("#lab-status");

const detailsTitle = document.querySelector("#details-title");
const detailsDescription = document.querySelector("#details-description");
const detailsTime = document.querySelector("#details-time");
const detailsPanel = document.querySelector("#event-details");

const cards = document.querySelectorAll(".event-card");
const eventCount = document.querySelector("#event-count");

eventCount.textContent = cards.length;

let selectedCard = null;

function showEvent(card) {
  detailsTitle.textContent = card.dataset.title;
  detailsDescription.textContent = card.dataset.description;
  detailsTime.textContent = card.dataset.time;

  if (selectedCard !== null) {
    selectedCard.classList.remove("event-card--selected");
  }

  card.classList.add("event-card--selected");
  selectedCard = card;

  detailsPanel.style.setProperty("--accent", card.dataset.accent);
}
cards.forEach((card) => {
  card.addEventListener("click", () => {
    labStatus.textContent = "Нажата карточка из программы";
    showEvent(card);
  });
});

// 10. Самостоятельно оживите кнопку «Удиви меня».
