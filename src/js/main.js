import { getParkData } from './parkService.mjs'

const parkData = getParkData();

function setHeaderInfo() {
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
}

const parkInfoLinks = [
    {
        name: "Current Conditions ›",
        link: "conditions.html",
        image: parkData.images[2].url,
        description: "See what conditions to expect in the park before leaving on your trip!"
    },
    {
        name: "Fees and Passes ›",
        link: "fees.html",
        image: parkData.images[3].url,
        description: "Learn about the fees and passes that are available."
    },
    {
        name: "Visitor Centers ›",
        link: "visitorcenters.html",
        image: parkData.images[9].url,
        description: "Learn about the visitor centers in the park."
    }
]

function mediaCardTemplate(info) {
    return `
    <div class="media-card">
        <a href="${info.link}">
            <img src="${info.image}" alt="${info.name}">
        </a>
        <h2>
            <a href="${info.link}">${info.name}</a>
        </h2>        
        <p>${info.description}</p>
    </div>
    `;
}

setHeaderInfo()

document.querySelector('.info').innerHTML = parkInfoLinks
    .map(item => mediaCardTemplate(item))
    .join('')

// this is all working

