
// number of in days to finish all documentaries
// <= 3 hours for a day
// input=[1.01,1.01,1.01,2.45,2.59,1.00,2.59]


const dayCall = function (arr) {

    let newArr = []
    convertArrIntoMinutes(newArr);
    newArr.sort(function (a, b) { return a - b });

    let counter = 1;
    let sum = 0;

    for (i = 0; i < arr.length; i++) {
        sum += newArr[i]
        if (sum > 180) {
            counter++
            sum = 0
            i--
        }

    }

    console.log(counter)




    function convertArrIntoMinutes(newArr) {
        let elementConvertedIntoArray;
        let arrConvertedInMinutes = 0

        for (j = 0; j < arr.length; j++) {
            elementConvertedIntoArray = String(arr[j]).split(".");
            arrConvertedInMinutes = Number(elementConvertedIntoArray[0]) * 60 + (Number(elementConvertedIntoArray[1]) ? Number(elementConvertedIntoArray[1]) : 0)
            newArr.push(arrConvertedInMinutes);
        }
    }

}

// dayCall([1.01, 1.01, 1.01, 2.45, 2.59, 1.00, 2.59])
dayCall([1.01, 1.01, 3.00, 1.00, 1.00, 1.00])