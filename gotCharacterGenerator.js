function randomFromArray(array) {
    return Math.floor(Math.random() * array.length);
}

const names = [
    // Male Names
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
    // Female Names
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
    // Non-binary Names
    'Varys',
    'Theon',
];

const houses = [
    // Legitimate Sons
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
    // Bastard Sons
    'Flowers',
    'Hill',
    'Pyke',
    'Rivers',
    'Sand',
    'Snow',
    'Stone',
    'Storm',
    'Water',
];

const titles = [
    // Male Titles
    'Lordship',
    'Acolyte',
    'Apprentice',
    'Archmaester',
    'Bloodrider',
    'Captain of the Guards',
    'Castellann',
    // Female titles
    'Lady',
    // Unisex titles
    'Cupbearer',
];

const nameIndex = randomFromArray(names);

let sex = '';
if (nameIndex < 24) {
    sex = 'Male';
} else if (nameIndex < 38) {
    sex = 'Female';
} else {
    sex = 'Non-binary';
}

const houseIndex = randomFromArray(houses);

const character = {
    name: names[nameIndex],
    sex: sex,
    house: houses[houseIndex],
};

if (character.sex === 'Male') {
    titles.splice(7);
} else if (character.sex === 'Female') {
    titles.splice(0, 7);
}

character.titles = [];

let titleAmount = 0;

if (Math.random() * 100 < 5) {
    titleAmount = Math.floor(Math.random() * 9) + 2;
} else {
    titleAmount = 1;
}

for (i = 0; i < titleAmount; i++) {
    const titleIndex = randomFromArray(titles);
    if (character.titles.indexOf(titles[titleIndex]) === -1) {
        character.titles.push(titles[titleIndex]);
    }
}

let greetings = 'Greetings ';

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

if (houseIndex < 19) {
    greetings += ` of ${character.house}`;
} else {
    greetings += ` ${character.house}`;
}

console.log(greetings);
