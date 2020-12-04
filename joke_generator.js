// Define some german jokes
const animalJokes = [
    'Welche Vögel können nicht hören? - Die Tauben!',
    'Wie nennt man eine Gruppe von Wölfen? - Wolfgang!',
    'Wie viel wiegen ein Pferd und ein Hund zusammen? - Ein Pfund!',
    'Wie nennt man ein Kaninchen, das ins Fitnessstudio geht? - Pumpernickel!',
    'Was ist grün, glücklich und hüpft übers Gras? - Eine Freuschrecke!',
    'Wo wohnen Katzen am liebsten? - In einem Miezhaus!',
    'Was liegt am Strand und ist schlecht zu verstehen? - Eine Nuschel!'
];

const humanJokes = [
    'Wie nennt man jemanden, der DIN-A4 Blätter scannt? - Skandinavier!',
    'Wie heißt der Bruder von Elvis? - Zwölfis!',
    'Ich habe einen neuen Physikerwitz... Aber den Magnet jeder.',
    'Womit backen Schlümpfe? - Gargamehl!',
    'Was haben Gärtner und Chirurgen gemeinsam? - Wenn sie pfuschen, kommt Erde drüber.',
    'Warum verläuft sich ein Henker auf dem Rückweg nach Hause? - Weil er nur die Hinrichtung im Kopf hat!',
    'Wie nennt man einen studierten Bauern? - Ackerdemiker!'
];

const objectJokes = [
    'Ich habe einen neuen Fahrrad-Witz... Aber den Fahrrad ich dir nicht!',
    'Was ist das tolle an billigen Kletterseilen? - Sie halten bis ans Lebensende!',
    'Wollte gerade einen Witz über die Deutsche Bahn machen... Weiß aber nicht, ob der angekommen wäre...',
    'Stiftung Warentest hat Besteck getestet. Das Messer hat am besten abgeschnitten.',
    'Wenn Großbritannien die EU verlässt, wie viel Platz wird dann frei? - 1 GB!',
    'Hab heute meine Bibel bei eBay reingestellt. Gab direkt 10 Gebote!',
    'Aus welcher Stadt kommen die meisten Audiokabel? - Aus Auxburg!'
];

// Select 2 different random jokes and return them
const showRandomJokes = () => {
    const animalJoke = animalJokes[Math.floor(Math.random() * animalJokes.length)];
    const humanJoke = humanJokes[Math.floor(Math.random() * humanJokes.length)];
    const objectJoke = objectJokes[Math.floor(Math.random() * objectJokes.length)];

    return `## GERMAN JOKE GENERATOR ##\nAnimal: ${animalJoke}\nHuman: ${humanJoke}\nObject: ${objectJoke}`;
};

// Print from shoRandomJokes() returned jokes
console.log(showRandomJokes());