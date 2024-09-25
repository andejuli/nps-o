import { setHeaderInfo, setParkFooter } from "./setHeaderFooter.mjs";
import { getParkData } from "./parkService.mjs";
import { getParkInfoLinks } from "./parkService.mjs";
import { introTemplate, mediaCardTemplate, footerTemplate} from "./templates.mjs";

const parkData = getParkData();
const parkInfoLinks = getParkInfoLinks();

function setParkIntro(data) {
    const introContainer = document.querySelector(".intro");
    introContainer.innerHTML = introTemplate(data);
}

function setParkInfo(data) {
    console.log(data);
    const container = document.querySelector('.info');
    const html = data.map(mediaCardTemplate);
    container.innerHTML = html.join('');
}

setHeaderInfo(parkData);
setParkIntro(parkData);
setParkInfo(parkInfoLinks);
setParkFooter(parkData);