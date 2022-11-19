export function countWords(str) {
    const arr = str.split(' ');
    return arr.filter(word => word !== '').length;
}

export function countVocals(str) {

    const vocals = 'aáeéiíoóuú';

    let numOfVocals = 0;

    for (const letter of str) {
        if (vocals.includes(letter.toLowerCase())) {
            numOfVocals++;
        }
    }

    return numOfVocals;
}

export function countAcc(str) {

    const vocals = 'áéíóú';

    let numOfVocals = 0;

    for (const letter of str) {
        if (vocals.includes(letter.toLowerCase())) {
            numOfVocals++;
        }
    }

    return numOfVocals;
}