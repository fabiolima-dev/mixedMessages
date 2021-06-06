function randomFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function nameFactory(name, sex) {
    return {
        name,
        sex,
    };
}

function houseFactory(house, legitimacy) {
    return {
        house,
        legitimacy: legitimacy,
    };
}

const names = [
    // Male Names
    [
        'Eddard',
        'Robert',
        'Jaime',
        'Jorah',
        'Viserys',
        'Jon',
        'Robb',
        'Bran',
        'Joffrey',
        'Sandor',
        'Tyrion',
        'Petyr',
        'Davos',
        'Samwell',
        'Stannis',
        'Jeor',
        'Bronn',
        'Gendry',
        'Tormund',
        'Ramsay',
        'Dario',
        'Tommen',
        'Jaqen',
        'Roose',
    ],
    // Female Names
    [
        'Catelyn',
        'Cersei',
        'Daenerys',
        'Sansa',
        'Arya',
        'Melissandre',
        'Shae',
        'Margaery',
        'Talisa',
        'Ygritte',
        'Brienne',
        'Gily',
        'Missandei',
        'Ellaria',
    ],
    // Non-binary Names
    ['Varys', 'Theon'],
];

const houses = [
    // Legitimate Sons
    [
        "Bronn's House",
        'House Arryn',
        'House Baratheon',
        'House Greyjoy',
        'House Lannister',
        'House Martell',
        'House Stark',
        'House Tully',
        'House Frey',
        'House Royce',
        'House Casterly',
        'House Mudd',
        'House Hoare',
        'House Durrandon',
        'House Gardener',
        'House Baratheon',
        'House Bolton',
        'House Tyrell',
        'House Targaryen',
    ],
    // Bastard Sons
    [
        'Flowers',
        'Hill',
        'Pyke',
        'Rivers',
        'Sand',
        'Snow',
        'Stone',
        'Storm',
        'Water',
    ],
];

const titles = [
    // Male Titles
    [
        'Maester',
        'Captain of the Guards',
        'Khal',
        'King',
        'King in the North',
        'Knight',
        'Lord',
        'Prince',
        'Squire',
    ],
    // Female titles
    ['Lady', 'Khaleesi', 'Princess', 'Queen', 'Septa'],
    // Unisex titles
    [
        'Cupbearer',
        'Hand of the King',
        'Master of Coin',
        'Master of Laws',
        'Master of Ships',
        'Master of War',
        'Master of Whispers',
    ],
];

let namesObj = [];

// Filling namesObj
for (j = 0; j < names.length; j++) {
    let sex;
    if (j === 0) {
        sex = 'male';
    } else if (j === 1) {
        sex = 'female';
    } else {
        sex = 'non-binary';
    }
    for (i = 0; i < names[j].length; i++) {
        namesObj.push(nameFactory(names[j][i], sex));
    }
}

let housesObj = [];

// Filling housesObj
for (j = 0; j < houses.length; j++) {
    let legitimacy;
    if (j === 0) {
        legitimacy = true;
    } else {
        legitimacy = false;
    }
    for (i = 0; i < houses[j].length; i++) {
        housesObj.push(houseFactory(houses[j][i], legitimacy));
    }
}

// Assign a random name and house for character
const character = Object.assign(
    randomFromArray(namesObj),
    randomFromArray(housesObj)
);

let possibleTitles = [];

// Filling possibleTitles based in characters sex
if (character.sex === 'male') {
    possibleTitles = titles[0].concat(titles[2]);
} else if (character.sex === 'female') {
    possibleTitles = titles[1].concat(titles[2]);
    if (character.name === 'Arya') {
        possibleTitles.push('Knight');
    }
} else {
    possibleTitles = titles[0].concat(titles[1], titles[2]);
}

// Giving a chance to get more than one title
let titleAmount = 0;

if (Math.random() * 100 < 5) {
    titleAmount = Math.floor(Math.random() * 9) + 2;
} else {
    titleAmount = 1;
}

// Filling character titles
character.titles = [];

for (i = 0; i < titleAmount; i++) {
    const possibleTitle = randomFromArray(possibleTitles);
    if (character.titles.indexOf(possibleTitle) === -1) {
        character.titles.push(possibleTitle);
    }
}

// Formatting the message according to randomness
let greetings = '\nGreetings ';

for (i = 0; i < character.titles.length; i++) {
    if (i === character.titles.length - 2) {
        greetings += `${character.titles[i]} and `;
    } else if (i === character.titles.length - 1) {
        greetings += `${character.titles[i]} `;
    } else {
        greetings += `${character.titles[i]}, `;
    }
}

greetings += `${character.name}`;

if (character.legitimacy) {
    greetings += ` of ${character.house}\n`;
} else {
    greetings += ` ${character.house}\n`;
}

console.log(greetings);
