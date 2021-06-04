function randomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function characterFactory(name, sex) {
    return {
        name,
        sex,
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
        'Lordship',
        'Acolyte',
        'Apprentice',
        'Archmaester',
        'Bloodrider',
        'Captain of the Guards',
        'Castellann',
    ],
    // Female titles
    ['Lady'],
    // Unisex titles
    ['Cupbearer'],
];

let characters = [];

// Filling characters list with objects with all names and their sex
for (i = 0; i < names[0].length; i++) {
    characters.push(characterFactory(names[0][i], 'male'));
}
for (i = 0; i < names[1].length; i++) {
    characters.push(characterFactory(names[1][i], 'female'));
}
for (i = 0; i < names[2].length; i++) {
    characters.push(characterFactory(names[2][i], 'non-binary'));
}

const character = characters[randomIndex(characters)];

const housesIndex = randomIndex(houses);

const innerHousesIndex = randomIndex(houses[housesIndex]);

character.house = houses[housesIndex][innerHousesIndex];

let titlesIndex = [];

let titleAmount = 0;

if (Math.random() * 100 < 5) {
    titleAmount = Math.floor(Math.random() * 9) + 2;
} else {
    titleAmount = 1;
}

for (i = 0; i < titleAmount; i++) {
    let newTitlesIndex = 0;
    if (character.sex === 'male') {
        do {
            newTitlesIndex = randomIndex(titles);
        } while (newTitlesIndex === 1);
        titlesIndex.push(newTitlesIndex);
    } else if (character.sex === 'female') {
        do {
            newTitlesIndex = randomIndex(titles);
        } while (newTitlesIndex === 0);
        titlesIndex.push(newTitlesIndex);
    } else {
        titlesIndex.push(randomIndex(titles));
    }
}

let titlesList = [];

for (index of titlesIndex) {
    const innerTitleIndex = randomIndex(titles[index]);
    if (titlesList.indexOf(titles[index][innerTitleIndex]) === -1) {
        titlesList.push(titles[index][innerTitleIndex]);
    }
}

console.log('\nGame of Thrones - Name genereator\n');

let greetings = 'Greetings ';

for (i = 0; i < titlesList.length; i++) {
    if (i === titlesList.length - 2) {
        greetings += `${titlesList[i]} and `;
    } else if (i === titlesList.length - 1) {
        greetings += `${titlesList[i]} `;
    } else {
        greetings += `${titlesList[i]}, `;
    }
}

greetings += `${character.name}`;

if (housesIndex === 0) {
    greetings += ` of ${character.house}`;
} else {
    greetings += ` ${character.house}`;
}
console.log(greetings);
