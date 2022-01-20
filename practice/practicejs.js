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

let a=5
let b=8
b,a=a,b 

console.log(`a= ${a} b= ${b}`)









