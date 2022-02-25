// if input as str is 9.00am-10:am then output should be 60 minutes
// if str is 1:00pm-11:00am, output should be 1320 minutes

// input: "12:30pm"-12:00am"
// output: 690

// input: "1:23am-1:08am"
// output: 1425

function CountingMinutes(str) {
  let wordCharacters = str.match(/\w+/g)

  let time1HourAsMinutes = Number(wordCharacters[0])
  let time1Minutes = Number(wordCharacters[1].match(/\d+/)[0])
  let time1Type = wordCharacters[1].match(/\D+/)[0]

  let time2HourAsMinutes = Number(wordCharacters[2])
  let time2Minutes = Number(wordCharacters[3].match(/\d+/)[0])
  let time2Type = wordCharacters[3].match(/\D+/)[0]

  let time1Total = time1HourAsMinutes * 60 + time1Minutes
  let time2Total = time2HourAsMinutes * 60 + time2Minutes

  let result = 0;

  if (time1Type === time2Type) { // if am == am
    if (time1Total < time2Total) {
      result = time2Total - time1Total
    }
    else if (time1Total > time2Total) {
      result = time1Total + 720 - time2Total
    }
    else if (time1Total == time2Total) {
      if (time1Minutes < time2Minutes) {
        result = time2Total - time1Total
      } else if (time1Minutes > time2Minutes) {
        result = time1Total + 720 - time2Total
      } else {
        result = 0
      }
    }
  }
  else if (time1Type !== time2Type) {
    if (time1Total < time2Total) {
      result = 720 - time2Total - time1Total
    }
    else if (time1Total > time2Total) {
      result = time2Total + 720 - time1Total
    }
  }
  console.log(result)


}
CountingMinutes("9:00am-10:00am")
CountingMinutes("11:00pm-10:00pm")
CountingMinutes("01:30am-01:00am")
CountingMinutes("1:23am-1:08am")
CountingMinutes("12:30pm-12:00am")
CountingMinutes("1:00am-11:00pm")
// console.log(CountingMinutes("12:30pm-12:00am"))
// console.log(CountingMinutes("1:23am-1:08am"))