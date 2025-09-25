import { getParkData, parkInfoLinks } from './parkService.mjs';
import { introTemplate, infoTemplate, mediaCardTemplate } from './templates.mjs';
import setHeaderFooter from './setHeaderFooter.mjs';

const parkData = getParkData();

function setParkIntro(data) {
  const introSection = document.querySelector(".intro");
  introSection.innerHTML = introTemplate(data);
}

function setParkInfo(data) {
  const infoSection = document.querySelector(".info");
  infoSection.innerHTML = parkInfoLinks
    .map(item => mediaCardTemplate(item))
    .join('');

  infoSection.innerHTML += infoTemplate(data);
}

export function init(data) {
  setHeaderFooter(data);
  setParkIntro(data);
  setParkInfo(data);
}

init(parkData);
