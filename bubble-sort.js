const array = [2, 5, 6, 3, 18, 20, 1, -12, 20];

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function sort(array) {
    for(let i = 0, length = array.length; i < length; ++i) {
        if (array[i] > array[i + 1]) {
            for(let j = i + 1; j > 0; --j) {
                if (array[j] < array[j - 1]) {
                    const temp = array[j];
                    array[j] = array[j - 1];
                    array[j - 1] = temp;
                }
            }
        }
    }
}

shuffle(array);
sort(array);
console.log(array);