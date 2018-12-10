const cardTemplate = (name, price, time) => `
<div class="card">
<div class="row">

    <div class="col s4 img-container">
        <img src="/img/${name}.svg" alt="" srcset="" width="80">
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

    const data = await fetch(`https://api.nomics.com/v1/markets/interval?key=03a9cb810b88f55192cf39318b63d95c&currency=${crypto}`);

    if (!data.ok) {
        const errorText = await data.text();
        throw new Error(errorText);
    }
    const json = await data.json();

    return {
        price: json[0]['open'],
        time: json[0]['close_timestamp']
    }

};


const cryptos = {
    "BTC": {
        title: "Bitcoin",
        name: "BTC"
    },
    "DASH": {
        title: "Dash",
        name: "DASH"
    },
    "ETH": {
        title: "Ethereum",
        name: "ETH"
    }
};



const displayPrices = async () => {

    for (let key of Object.keys(cryptos)) {

        // await is slower but will keep the order 
        const {
            price,
            time
        } = await getPrices(cryptos[key].name)


        let element = document.createElement('div')
        element.classList.add('card');
        element.innerHTML = cardTemplate(cryptos[key].title, price, time)
        document.querySelector('#cryptos-container').appendChild(element);



    }

}


displayPrices();