const array = [2, 5, 6, 3, 18, 20, 1, -12, 20, 30, 30, 30, 30];

function findRepeated(array) {
    const groups = array.reduce((res, item) => ({
        ...res,
        [item]: (res[item] || 0) + 1,
    }), {});

    return Object.entries(groups)
        .filter(([key, value]) => value > 1)
        .map(([key]) => key);
}