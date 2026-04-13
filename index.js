/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

const appData = document.getElementById("app");

const getName = (NAMES) => {
    return NAMES[Math.floor(Math.random() *  NAMES.length)];
}

const getOccupation = (OCCUPATIONS) => {
    return OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
}

const getPrice = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const people = Array.from({length: NUM_FREELANCERS}, () => ({
    name: getName(NAMES),
    occupation: getOccupation(OCCUPATIONS),
    price: getPrice(PRICE_RANGE.min, PRICE_RANGE.max)
}));

const rateAverage = (people) => {
    const total = people.reduce((acc, person) => acc + person.price, 0);
    return total / people.length;
};

appData.innerHTML = `
    <h1>Freelancer Forum</h2>
    <p>The average rate is: $${rateAverage(people)}.</p>
    <p class="person">
        <span class="name"><b>NAME</b></span>
        <span class="job"><b>OCCUPATION</b></span>
        <span class="rate"><b>RATE</b></span>
    </p>
`;

appData.innerHTML += people.map((person, index) => `
    <div>
        <p class="person ${index % 2 === 0 ? "even" : "odd"}">
            <span class="name">${person.name}</span>
            <span class="job">${person.occupation}</span>
            <span class="rate">$${person.price}</span>
        </p>
    </div>
`).join("");