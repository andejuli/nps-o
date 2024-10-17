import { setHeaderInfo, setParkFooter } from "./setHeaderFooter.mjs";
import { getParkData } from "./parkService.mjs";
import { getAlerts } from "./parkService.mjs";
import { getVisitors } from "./parkService.mjs";
import { getActivities } from "./parkService.mjs";
import { alertTemplate} from "./templates.mjs";
import { visitorsTemplate} from "./templates.mjs";
import { activitiesTemplate} from "./templates.mjs";


export function setAlerts(data) {
    console.log(data);
    const alertElem = document.querySelector(".alerts ul");
    alertElem.innerHTML = '';
    const html = data.map(alertTemplate);
    
    alertElem.insertAdjacentHTML("afterbegin", html.join(""));
}
export function setVisitors(data) {
    console.log(data);
    const visitorsElem = document.querySelector(".visitors ul");
    visitorsElem.innerHTML = '';
    const html = data.map(visitorsTemplate);
    
    visitorsElem.innerHTML += html.join("");
}
export function setActivities(data) {
    console.log(data);
    const activitiesElem = document.querySelector(".activities ul");
    activitiesElem.innerHTML = '';
    const html = data.map(activitiesTemplate);
    
    activitiesElem.innerHTML += html.join("");
}

async function init() {
    const parkData = await getParkData(); //get original data like NPS 3
    const alerts = await getAlerts(parkData.parkCode); //get new data using parkCode property
    const visitors = await getVisitors(parkData.parkCode);
    console.log(visitors);
    const activities = await getActivities(parkData.parkCode);
    console.log(activities);
    setHeaderInfo(parkData);
    setParkFooter(parkData);
    setAlerts(alerts);
    setVisitors(visitors);
    setActivities(activities);
}

init();