import { footerTemplate } from './templates.mjs';

function setHeaderInfo(data) {
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;

  document.title = data.fullName;

  const heroImage = document.querySelector(".hero-banner > img");
  heroImage.src = data.images[0].url;
  heroImage.alt = data.images[0].altText;

  const content = document.querySelector(".hero-banner .content");
  content.innerHTML = `
    <a href="${data.url}" class="park-title">${data.name}</a>
    <p class="subheader">
        <span>${data.designation}</span>
        <span>${data.states}</span>
    </p>
  `;
}

function setParkFooter(data) {
  const footerSection = document.querySelector("#park-footer");
  footerSection.innerHTML = footerTemplate(data);
}

export default function setHeaderFooter(data) {
  setHeaderInfo(data);
  setParkFooter(data);
}
