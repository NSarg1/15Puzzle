let rndNum, rndNumArr, doesExist, data;
rndNumArr = [];
data = [
    { id: 0, num: 1, animate: null },
    { id: 1, num: 2, animate: null },
    { id: 2, num: 3, animate: null },
    { id: 3, num: 4, animate: null },
    { id: 4, num: 5, animate: null },
    { id: 5, num: 6, animate: null },
    { id: 6, num: 7, animate: null },
    { id: 7, num: 8, animate: null },
    { id: 8, num: 9, animate: null },
    { id: 9, num: 10, animate: null },
    { id: 10, num: 11, animate: null },
    { id: 11, num: 12, animate: null },
    { id: 12, num: 13, animate: null },
    { id: 13, num: 14, animate: null },
    { id: 14, num: 15, animate: null },
    { id: 15, num: 16, animate: null }
];

const rndNumGenerator = () => {
    rndNum = Math.floor(Math.random() * 16 + 1);
    doesExist = rndNumArr.find(el => el === rndNum);

    if (doesExist === undefined) {
        rndNumArr.push(rndNum);
    } else {
        return rndNumGenerator();
    }
};
for (let i = 0; i < 16; i++) {
    rndNumGenerator();
}

data.forEach((el, ind) => {
    if (rndNumArr[ind] === 16) {
        rndNumArr[ind] = null;
    }
    el.num = rndNumArr[ind];
});

export default data;
