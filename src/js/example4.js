const baseUrl = "https://developer.nps.gov/api/v1/";
const apiKey = 'FiC7cgOFSXyRFxgzJmH8fstyi5UaCWnZFzUZIKZQ';

// 1.  -- in conditions.js 
async function init() {  
    const parkData = await getParkData();
    const alerts = await getAlerts(parkData.parkCode); /* this is to start a whole new fetch with alerts */
    setAlerts(alerts);
}
init();

// 2.  -- in parkServices.mjs (code we already have)
async function getParkData() {
    const parkData = await getJson("parks?parkCode=yell");
    console.log(parkData.data[0]); /* data we've already seen, notice the parkCode property here */
    return parkData.data[0];
  }

// 3. &  5.  -- in parkServices.mjs (code we already have)

async function getJson(url) {
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    }
  };
  let data = {};
  const response = await fetch(baseUrl + url, options);
  // check to make sure the reponse was ok.
  if (response.ok) {
    // convert to JSON
    data = await response.json();
    console.log(data);
  } else throw new Error("response not ok");
  // return just the first row of the data object
  return data;
}


// 4.  -- in parkServices.mjs
async function getAlerts(code) {
    const parkData = await getJson(`alerts?parkCode=${code}`); /* brand new fetch */
    console.log(parkData); /* new fetched data with alerts */
    return parkData.data;
}

// 6. -- in conditions.js
function setAlerts(data) {
    console.log(data); /* the 3 alerts for yellowstone, notice .category property*/
    const alertElem = document.querySelector("#alerts");
    const html = data.map(alertTemplate);
    alertElem.innerHTML += html.join("");
}

// 7.  -- in templates.mjs 
function alertTemplate(data) {
    let alertType = '';
    switch (data.category) {
        case "Park Closure":
            alertType = "closure";
            break;
        default:
            alertType = data.category.toLowerCase();
    }
   //focusable="false" ensures that the icon is not focusable via keyboard navigation, improving accessibility by skipping this element.
   //aria-hidden="true" hides the icon from screen readers, so it won’t be announced to users who rely on assistive technologies, as it may be decorative or redundant.
   //xlink:href="" points to the sprite.symbol.svg we have in images folder with lots of ids
    return `<li class="alert">
    <svg class="icon" focusable="false" aria-hidden="true"> 
        <use xlink:href="/images/sprite.symbol.svg#alert-${alertType}"></use>
    </svg>
    <span>  
        <h3 class="alert-${alertType}">${data.title}</h3>
        <p>${data.description}</p>
    </span></li>`;

}


  