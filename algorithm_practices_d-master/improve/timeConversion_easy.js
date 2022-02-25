
// My Solution
function timeConversion(s) {
    // Write your code here
    const sliceAmPm = s.slice(8)
    console.log(sliceAmPm)
    const time= (s.slice(0,8)).split(":")
    
    if (sliceAmPm === "PM")
        {
        time[0] = Number(time[0])!==12?Number(time[0])+12 : Number(time[0])
        return time.join(":").padStart(8,0)}
    else {
        time[0] = Number(time[0])==12?Math.abs(Number(time[0])-12):Number(time[0])
        return time.join(":").padStart(8,0)
    }
}
timeConversion("12:45:54PM")

// Best Solution

// let AMPM = s.slice(-2);
//     let timeArr = s.slice(0, -2).split(":");
    
//     if (AMPM === "AM" && timeArr[0] === "12") {
//         // catching edge-case of 12AM
//         timeArr[0] = "00";
//     } else if (AMPM === "PM") {
//         // everything with PM can just be mod'd and added with 12 - the max will be 23
//         timeArr[0] = (timeArr[0] % 12) + 12
//     }
    
//     return timeArr.join(":");