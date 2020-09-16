// Sorry if this format is annoying. I just though it wold be easier to uncomment one problem at a time.
//1
var date = new Date();
function getDate(){
    console.log(`${date.getUTCMonth() + 1}/${date.getDate()}/${date.getFullYear()}`);
}
getDate()

// console.log('\n\n');
//===========================================
//2 
// var leapYear = function(year){
//     if(year %4 == 0 && year % 100 !=0){
//         console.log(true);
//     }else if (year % 4 == 0 && year % 100 == 0 && year%400 == 0){
//         console.log(true);
//     }else{
//         console.log(false);
//             }
//     }
//leapYear(1997);
//====================================
//3
// function isConsecutive(arr){
//     var i = 2, d;
//     while (i < arr.length){
//         d = arr[i-1] - arr[i-2];
//         if (Math.abs(d) == 1 && d==arr[i]-arr[i-1]){
//             return true
//         }
//         i++;
//     }
//     return false

// }
// console.log(isConsecutive([1,2,3,4,5]))
//=====================================
//4

//  function hasDuplicates(arr)
// {
//     return new Set(arr).size !== arr.length;
// }

// var arr = [1, 3, 2, 4, 3, 5, 4, 8, 8, 8, 9, 10, 1];

// if (hasDuplicates(arr)) {
//     console.log("Duplicate elements found.");
// }
// else {
//     console.log("No Duplicates found.");
// }
//========================================
//5
// var getFirst = function(arr, sel){
//     if (arr == []){
//         return void 0;
//     }
    
//     if (sel==null){
//         return array[0];
//     }
//     if (sel<0){
//         return [];
//     }
    
//     return arr.slice(0,sel);
    
// }
// console.log(getFirst([7, 9, 0, -2]));
// console.log(getFirst([], 3));
 //console.log(getFirst([7, 9, 0, -2], 3));
// console.log(getFirst([7, 9, 0, -2], 6));
//console.log(getFirst([7, 9, 0, -2], -3));
// var arr = [7, 9, 9, -2]
// console.log(arr.slice(0))
//=============================================
//6
// var text = ''
// var stringList = ['Red','Green','White','Black'];
// for (var i = 0; i < stringList.length; i++ ) {
//     text += stringList[i] + ' ';
 
// }
// console.log(text);
//===============================================
//7
// var arr = [3, 'a', 'a', 'a', 'a', 2, 3, 'a',2,4,9,3];
// for (var i=0; i< arr; i++) {
//     console.log(count(arr))
// }
// function mode(array) {
//     if (array.length == 0)
//         return null;
//     var modeMap = {};
//     var maxEl = array[0], maxCount = 1;
//     for (var i = 0; i < array.length; i++) {
//         var el = array[i];
//         if (modeMap[el] == null)
//             modeMap[el] = 1;
//         else
//             modeMap[el]++;
//         if (modeMap[el] > maxCount) {
//             maxEl = el;
//             maxCount = modeMap[el];
//         }
//     }
//     return [maxEl, maxCount];
// }
// console.log(mode([3, 'a', 'a', 'a', 'a', 2, 3, 'a', 2, 4, 9, 3]))
//================================================================
//8
// var cStrng = ['Blue','Green','Red',"Orange", 'Violet', 'Indigo','Yellow'];
// var numStrng = ['st','nd','rd','th']
// console.log("1" + numStrng[0] + " " + "choice" + " " +"is" + " "+ cStrng[0])
// console.log("2" + numStrng[1] + " " + "choice " +"is " + cStrng[1])
// console.log("3" + numStrng[2] + " " + "choice " +"is " + cStrng[2])
//===================================================================
//9 I just copy and pasted the same code form number 4
//function hasDuplicates(arr)
// {
//     return new Set(arr).size !== arr.length;
// }

// var arr = [1, 3, 2, 4, 3, 5, 4, 8, 8, 8, 9, 10, 1];

// if (hasDuplicates(arr)) {
//     console.log("Duplicate elements found.");
// }
// else {
//     console.log("No Duplicates found.");
// }
//10
// function revStrng(s) {
//     return s.split("").reverse().join("");
// }
// console.log(revStrng('hello'))
//=========================================================
//11
// function checkPal(s) {
//     if (s == s.split("").reverse().join("")){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(checkPal("racecar"))
//===================================
//12
// var combo = function (s, sel) {
//     for (var i = 0; i < array.length; i++)
    
//     if (s == []){
//         return void 0;
//     }

//      if (sel<0){
//         return [];
//     }

//     return s[i];

// }
// console.log(combo('dog'));

//=============================================
//13
// var alpha = function (s) {
//     return s.split('').sort().join('');
// }
// console.log(alpha("josh"))
//==============================================
//14
// var nextTo = function(arr){
//     function sortArr(a, b) {
//         if (a > b) {
//             return 1;
//         } else if (b > a) {
//             return -1;
//         } else {
//             return 0;
//         }
//     }
//     return[arr.sort(sortArr)[1], arr.sort(sortArr).reverse()[1]]
// } 
// console.log(nextTo([37,2,55,21,199]))
//===============================================
//15
// var set = new Set();
// var strng = "hello"
// for (var i = 0; i < strng.length; i++){
//     set.add(strng[i])
// }
// var strngSet = Array.from(set).join("")

// console.log(strngSet)