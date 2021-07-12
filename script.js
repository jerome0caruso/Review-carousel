let peopleData = null;
fetch("./people.json")
    .then(res => res.json())
    .then( async (data) => {
        peopleData = await data; 
        makeCard(data);
        })
    .catch(err => console.log(`${err} sorry there was an error!`))

const leftArrow =  document.querySelector('.leftArrow');
const rightArrow = document.querySelector('.rightArrow');
const container = document.querySelector(".main");
const cardNumber = {num: 0};

leftArrow.addEventListener('click', () => {
    if(cardNumber.num >= 1) {
        cardNumber.num--;
        removeCard();
        makeCard(peopleData);
    }

});

rightArrow.addEventListener('click', () => {
    if(cardNumber.num < 3) {
        cardNumber.num++;
        removeCard();
        makeCard(peopleData);
    }

});

function removeCard() {
    const card = document.querySelector('.card');
    card.remove();
}

function makeCard(people) {
    let card = document.createElement('div');
    card.classList.add('card')

    const img = document.createElement("img");
    img.classList.add('photo');
    img.src = `./pic${cardNumber.num}.jpg`

    const h2 = document.createElement("h2");
    const name = document.createTextNode(people[cardNumber.num].name);
    h2.appendChild(name);
    h2.classList.add(cardNumber.num);

    const h3 = document.createElement("h3");
    const position = document.createTextNode(people[cardNumber.num].position);
    h3.appendChild(position);

    const p = document.createElement("p");
    const paragraph = document.createTextNode(people[cardNumber.num].info);
    p.appendChild(paragraph);

    card.append(img, h2, h3, p);
    container.appendChild(card);
}

