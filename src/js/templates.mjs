import spritePath from '../images/sprite.symbol.svg';

export function introTemplate(info) {
    return `<div class="introContent">
                <h1>${info.fullName}</h1>
                <p>${info.description}</p>
            </div>`;
}

export function mediaCardTemplate(info){
    return `<div class="card">
                <img src="${info.image}" alt="${info.description}"/>
                <h2>${info.name}</h2>
                <p>${info.description}</p>
            </div>`;
}

function getVoicePhone(data) {
    const voice = data.find((data) => data.type === "Voice");
    return voice;
}

export function footerTemplate(info){
    const voice = getVoicePhone(info.contacts.phoneNumbers);
    return `<div class="contact">
                <h3>Contact Info</h3>
                <h4>Phone Number:</h4>
                <h2>${voice.phoneNumber}</h2>
            </div>`;
}

export function alertTemplate(data) {
    let alertType = '';
    switch (data.category) {
        case "Park Closure":
            alertType = "closure";
            break;
        default:
            alertType = data.category.toLowerCase();
    }
    console.log(alertType);
    console.log(data.title);
    console.log(data.description);
    return `<li class="alert">
  <svg class="icon" focusable="false" aria-hidden="true"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="${spritePath}#alert-${alertType}"></use></svg>
  <div>  
    <h3 class="alert-${alertType}">${data.title}</h3>
    <p>${data.description}</p>
  </div></li>`;

}

export function visitorsTemplate(data) {
  console.log(data.id);
    return `<li class="visitors">
  <div>  
    <h3><a href="visitor-center.html?id=${data.id}">${data.name}</a></h3>
    <p>${data.description}<p>
    <p>${data.directionsInfo}</p>
  </div></li>`;

}

export function activitiesTemplate(data) {
    return `<li class="activities">${data.name}</li>`;

}

//NPS 7 Visitor Center page info

export function vcTitleTemplate(text) {
  return `${text}`;
}

export function vcInfoTemplate(data) {
  const image = data.images[0];
  return `<figure>
          <img src="${image.url}" alt="${image.altText}" />
          <figcaption>${image.caption} <span>${image.credit}</span></figcaption>
        </figure>
        <p>${data.description}</p>`;
}
export function listTemplate(data, contentTemplate) {
  const html = data.map(contentTemplate);
  return `<ul>${html.join("")}</ul>`;
}

function vcAddressTemplate(data) {
  return `<section>
            <h3>${data.type} Address</h3>
            <address>
              ${data.line1}<br />
              ${data.city}, ${data.stateCode} ${data.postalCode}
            </address>
          </section>`;
}

export function vcAddressesListTemplate(data) {
  const physical = data.find((address) => address.type === "Physical");
  const mailing = data.find((address) => address.type === "Mailing");
  let html = vcAddressTemplate(physical);
  if (mailing) {
    html += vcAddressTemplate(mailing);
  }
  return html;
}
export function vcAmenityTemplate(data) {
  return `<li>${data}</li>`;
}
export function vcDirectionsTemplate(data) {
  return `<p>${data}</p>`;
}
export function vcContactsTemplate(data) {
  console.log(data.emailAddresses[0].emailAddress);
  return `<section class="vc-contact__email">
            <h3>Email Address</h3>
            <a href="email:${data.emailAddresses[0].emailAddress}">${data.emailAddresses[0].emailAddress}</a>
          </section>
          <section class="vc-contact__phone">
            <h3>Phone numbers</h3>
            <a href="tel:+1${data.phoneNumbers[0].phoneNumber}">${data.phoneNumbers[0].phoneNumber}</a>
          </section>`;
}

export function iconTemplate(iconId) {
  return `<svg class="icon" role="presentation" focusable="false">
            <use
              href="${spritePath}#${iconId}"
            ></use>
            

          </svg>`;
}

export function vcDetailsTemplate(elementId, summaryText, iconId, content) {
  return `<details name="vc-details" id="${elementId}">
          <summary>
            ${iconTemplate(iconId)}
            ${summaryText}
          </summary>
          ${content}
        </details>`;
}

export function vcImageTemplate(data) {
  return `<li><img src="${data.url}" alt="${data.altText}" ><li>`;
}