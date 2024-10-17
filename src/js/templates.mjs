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
  <svg class="icon" focusable="false" aria-hidden="true"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/sprite.symbol.svg#alert-${alertType}"></use></svg>
  <div>  
    <h3 class="alert-${alertType}">${data.title}</h3>
    <p>${data.description}</p>
  </div></li>`;

}

export function visitorsTemplate(data) {
    return `<li class="visitors">
  <div>  
    <h3>${data.name}</h3>
    <p>${data.description}<p>
    <p>${data.directionsInfo}</p>
  </div></li>`;

}

export function activitiesTemplate(data) {
    return `<li class="activities">${data.name}</li>`;

}