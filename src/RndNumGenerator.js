let rndNum, rndNumArr, doesExist, data;
rndNumArr = [];
data = [
    { id: 0, num: 1 },
    { id: 1, num: 2 },
    { id: 2, num: 3 },
    { id: 3, num: 4 },
    { id: 4, num: 5 },
    { id: 5, num: 6 },
    { id: 6, num: 7 },
    { id: 7, num: 8 },
    { id: 8, num: 9 },
    { id: 9, num: 10 },
    { id: 10, num: 11 },
    { id: 11, num: 12 },
    { id: 12, num: 13 },
    { id: 13, num: 14 },
    { id: 14, num: 15 },
    { id: 15, num: 16 }
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
