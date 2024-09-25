import { footerTemplate } from "./templates.mjs";

export function setHeaderInfo(parkData) {
    let disclaimer = document.querySelector(".disclaimer a");

    disclaimer.innerHTML = parkData.fullName;
    disclaimer.href = parkData.url;

    document.querySelector('title').innerHTML = parkData.fullName;

    let banner_img = document.querySelector(".hero-banner img");

    banner_img.src = parkData.images[0].url;
    banner_img.alt = parkData.images[0].altText;

    document.querySelector('.hero-banner_title').innerHTML = parkData.name;
    document.querySelector('#park_des').innerHTML = parkData.designation;
    document.querySelector('.states').innerHTMl = parkData.states;
}

export function setParkFooter(data) {
    const footerContainer = document.querySelector("#park-footer");
    footerContainer.innerHTML = footerTemplate(data);
}