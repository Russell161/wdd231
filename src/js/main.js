import { getParkData } from './parkService.mjs';

const parkData = getParkData();


const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

document.title = parkData.fullName;

const heroImage = document.querySelector(".hero-banner > img");
heroImage.src = parkData.images[0].url;
heroImage.alt = parkData.images[0].altText;

const content = document.querySelector(".hero-banner .content");
content.innerHTML = `
  <a href="${parkData.url}" class="park-title">${parkData.name}</a>
  <p class="subheader">
    <span>${parkData.designation}</span>
    <span>${parkData.states}</span>
  </p>
`;
