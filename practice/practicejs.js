// const a=[1,1,2,4,2,4,2,2,7,5,8,4,2,4,8,2,2,2,2,2,2]
// let n=a.length
// console.log(n)
// a.sort()
// uniqueArray = a.filter(function(item, pos) {
//     return a.indexOf(item) == pos;
// })
// console.log(uniqueArray)
// document.getElementById("output").innerHTML = uniqueArray
// var major=a[0],cond=Math.floor(n/2)+1,freqhigh=0,freqnow=0
// for(let i=0;i<n;i++){
//     if(major==a[i]){
//         freqnow++
//     }
//     else{
//         if(freqhigh<freqnow)
//         freqhigh=freqnow
//         major=a[i]
//         freqnow=1
//     }
// }
// console.log("freqHigh=",cond)


// function major(arr,n)
// {
// arr.sort()
// var major=arr[0],ele=0,cond=Math.floor(n/2)+1,freqhigh=0,freqnow=0
// for(let i=1;i<n;i++){
//     if(major==arr[i]){
//         freqnow++
//         if(freqnow==cond)
//         return arr[i]
//     }
//     else{
//         if(freqhigh<freqnow){
//         freqhigh=freqnow
//         ele=arr[i-1]}
//         major=arr[i]
//         freqnow=1
//     }
// }
// return ele
// }

// function letterCombinations(A) {
//     const phone={
//       "0":"0",
//       "1":"1",
//       "2":"abc",
//       "3":"def",
//       "4":"ghi",
//       "5":"jkl",
//       "6":"mno",
//       "7":"pqrs",
//       "8":"tuv",
//       "9":"wxyz"
//     }
//     let len=A.length
  
//     let ans=[]
  
//     if(!len){return ans} 
  
//     const bfs=(pos,str)=>{
//       if(pos===len) ans.push(str)
//       else{
//         let letters=phone[A[pos]]
//         for(let i=0;i<letters.length;i++) {bfs(pos+1,str+letters[i])}
  
//       }
//     }
//     bfs(0,"")
//     return ans
//   }
  
// console.log(letterCombinations("3"))

// function mincost(arr)
// {
// arr.sort((a,b)=>a-b)

// let cost=0

// while(arr.length>1){
//   let first=arr.shift()
//   let second=arr.shift()

//   cost=first+second

//   arr.push(first+second)
//   arr.sort((a,b)=>a-b)
// }
// return cost
// }
// let a=[4,3,2,6]
// console.log(mincost(a))

// let a=5
// let b=8
// b,a=a,b 

// console.log(`a= ${a} b= ${b}`)

// var num=5
// var string='s1'
// console.log(num-string)

// const arr=[1,1,1,1,1,2,2,2,2,2,2]
// n=arr.length
// console.log(n[Math.floor(n/2)])
// let str="aBCd"
// console.log(str.toLowerCase)
// console.log("r"==="R")

// let str="anupambatkar"
// console.log(str.split("").reverse().join(""))

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    console.log(timer)
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        console.log(minutes)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};



