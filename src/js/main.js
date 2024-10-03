import { setHeaderInfo, setParkFooter } from "./setHeaderFooter.mjs";
import { getParkData } from "./parkService.mjs";
import { getInfoLinks } from "./parkService.mjs";
import { introTemplate, mediaCardTemplate, footerTemplate} from "./templates.mjs";

const parkData = getParkData();
//const parkInfoLinks = getInfoLinks();

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

async function init() {
  const parkData = await getParkData();
  console.log(parkData);
  const links = getInfoLinks(parkData);
  setHeaderInfo(parkData);
  setParkIntro(parkData);
  setParkInfo(links);
  setParkFooter(parkData);

}

init();

