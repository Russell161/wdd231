

function getMailingAddress(addresses) {
  return addresses.find(address => address.type === "Mailing");
}

function getVoicePhone(phoneNumbers) {
  const voice = phoneNumbers.find(phone => phone.type === "Voice");
  return voice ? voice.phoneNumber : "";
}

export function introTemplate(data) {
  return `
    <h2>Welcome to ${data.fullName}</h2>
    <p>${data.description}</p>
  `;
}

export function infoTemplate(data) {
  return `
  `;
}

export function footerTemplate(data) {
  const mailing = getMailingAddress(data.addresses);
  const voice = getVoicePhone(data.contacts.phoneNumbers);

  return `
    <section class="contact">
      <h3>Contact Info</h3>
      <h4>Mailing Address:</h4>
      <div>
        <p>${mailing.line1}</p>
        <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
      </div>
      <h4>Phone:</h4>
      <p>${voice}</p>
    </section>
  `;
}

export function mediaCardTemplate(info) {
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
