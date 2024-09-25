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

