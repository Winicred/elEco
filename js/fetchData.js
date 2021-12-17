// Get data price

let date = new Date();

let yesterday = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() - 1)
let today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate())
let tommorow = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() + 1)

export let todayDataArray = [];
export let tommorowDataArray = [];

// async method to retrieve data by url
async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data.data.ee;
}

// declare url's for api
let todayUrl = `https://dashboard.elering.ee/api/nps/price?start=${yesterday}%2023%3A00&end=${today}%2022%3A00`;
let tommorowUrl = `https://dashboard.elering.ee/api/nps/price?start=${today}%2023%3A00&end=${tommorow}%2022%3A00`;

// method call 
const todayData = await getJson(todayUrl)
const tommorowData = await getJson(tommorowUrl)

// push data to array with today data
for (let i = 0; i < todayData.length; i++) {
    todayDataArray.push(todayData[i].price)
}

// push data to array with tommorow data
for (let i = 0; i < tommorowData.length; i++) {
    tommorowDataArray.push(tommorowData[i].price)
}

// find minium price
function fetchMinimumPrice() {
    return (Math.round(Math.min.apply(Math, todayDataArray) * 1) / 1000);

}

// find maximum price
function fetchMaximumPrice() {
    return (Math.round(Math.max.apply(Math, todayDataArray) * 1) / 1000);
}


// find average price
function fetchAveragePrice() {
    let sum = 0;
    for (let i = 0; i < todayDataArray.length; i++) {
        sum += todayDataArray[i]
    }

    let averagePrice = sum / todayDataArray.length

    return (Math.round(averagePrice * 1) / 1000);
}

// edit text in price cars
document.getElementById("minimalPrice").innerHTML = fetchMinimumPrice();
document.getElementById("averagePrice").innerHTML = fetchAveragePrice();
document.getElementById("maximumPrice").innerHTML = fetchMaximumPrice();
