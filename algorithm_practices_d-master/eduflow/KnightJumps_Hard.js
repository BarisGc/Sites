function KnightJumps(str) {

    const playGround = [];
    const movementArr = [[1, 2], [-1, 2], [1, -2], [-1, -2], [2, 1],
    [2, -1], [-2, 1], [-2, -1]];
    let counter = 0;
    let positionCheck;

    for (j = 1; j < 9; j++) {
        playGround.push(j)
    };

    for (i = 0; i < movementArr.length; i++) {
        positionCheck = playGround.includes(Number(str[1]) + movementArr[i][0])
            &&
            playGround.includes(Number(str[3]) + movementArr[i][1])
        if (positionCheck) {
            counter = counter + 1
        }
    };

    return counter
};

console.log(KnightJumps(readline()));
