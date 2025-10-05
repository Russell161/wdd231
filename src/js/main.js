import { getParkData, getInfoLinks } from './parkService.mjs';
import { introTemplate, infoTemplate, mediaCardTemplate } from './templates.mjs';
import setHeaderFooter from './setHeaderFooter.mjs';

function setParkIntro(data) {
  const introSection = document.querySelector(".intro");
  introSection.innerHTML = introTemplate(data);
}

function setParkInfo(data, infoLinks) {
  const infoSection = document.querySelector(".info");
  infoSection.innerHTML = infoLinks
    .map(item => mediaCardTemplate(item))
    .join('');

  infoSection.innerHTML += infoTemplate(data);
}

async function init() {
  const parkData = await getParkData(); 
  const infoLinks = getInfoLinks(parkData.images); 

  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfo(parkData, infoLinks);
}

init();
