(async () => {

    if ("serviceWorker" in navigator) {

        // we register our service worker                             						
        const registration = await navigator.serviceWorker.register('./sw.js');

        // when our service worker is updated
        registration.onupdatefound = () => {

            // when our service worker is updated
            registration.installing.onstatechange = function () {
                console.log(`Service worker... ${this.state}`);
            };
        };

    }

})()
.catch(e => console.log(`😳 : ${e}`));



const cardTemplate = (name, price, time) => `
    <div class="card">
    <div class="row">

        <div class="col s4 img-container">
            <img src="./img/${name}.svg" alt="" srcset="" width="80">
        </div>

        <div class="col s8 card-content">
            <h3>${name}</h3>
            <p><span class="price">${price} €</span></p>
            <p><span class="time">${time}</span></p>
        </div>

    </div>
    </div>
`;

const getPrices = async (crypto) => {

    const data = await fetch(`https://crypto-api.glitch.me/`);

    if (!data.ok) {
        const errorText = await data.text();
        throw new Error(errorText);
    }
    const json = await data.json();

    return json;

};



const displayPrices = async () => {

    const prices = await getPrices();

    for (const price of prices) {

        let element = document.createElement('div')
        element.classList.add('card');
        element.innerHTML = cardTemplate(price.name, price.price, price.time)
        document.querySelector('#cryptos-container').appendChild(element);

    }

};



document.addEventListener('DOMContentLoaded', async function () {
    const elems = document.querySelector('.sidenav');
    const instance = M.Sidenav.init(elems);
    await displayPrices().catch(e => console.log(e));
});


function injectOfflineBanner() {

    const elem = document.createElement('div');

    elem.style.cssText = `
    position: fixed;
    background-color: #6d6d6d;
    bottom: 0;
    left: 0;
    right: 0;
    height: 46px;
    line-height: 40px;
    text-align: center;
    color: #FFF;
    z-index: 9999999999;
    `;

    elem.id = "offline-banner";

    elem.innerText = "Heads up  : You are offline";

    document.body.appendChild(elem);

}


function removeOfflineBanner() {

    const offlineBanner = document.querySelector("#offline-banner");

    if (offlineBanner !== null) offlineBanner.parentNode.removeChild(offlineBanner);

}



if (!navigator.onLine) injectOfflineBanner();

if (navigator.onLine) removeOfflineBanner();


addEventListener("offline", injectOfflineBanner);


addEventListener("online", removeOfflineBanner);







const $body = document.querySelector('body');

const notifyUser = message => {
  $body.insertAdjacentHTML('afterbegin', `

      <p class="notification">${message}</p>
  
  `);
};


const updatesChannel = new BroadcastChannel('api-updates');

updatesChannel.addEventListener('message', async (event) => {

  const {cacheName,updatedURL} = event.data.payload;
  
  console.log(cacheName,updatedURL, event.data);

  notifyUser(`There's new data available, <a href='/'>refresh the page to display it </a> `);
});
