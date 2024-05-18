/*1. Create a function to convert Excel sheet column title to its corresponding column number.
● Example : 
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
…
● Example : 
○ Input : AB
○ Output : 28*/
function excelColumn(columnTitle){
    let columnNumber = 0
    let power = columnTitle.length - 1

    for(let i = 0; i < columnTitle.length; i++){
        columnNumber += columnTitle.charCodeAt(i) - 65 + (26 ** power)
        power--
    }

    return columnNumber
}

console.log(excelColumn("AB"))

/*2. Given a non-empty array of integers nums, every element appears twice except for one. Find that 
single one.
 ● Example 1:
 ○ Input: nums = [2,2,1]
 ○ Output: 1
 ● Example 2:
 ○ Input: nums = [4,1,2,1,2]
 ○ Output: 4
 ● Example 3:
 ○ Input: nums = [1]
 ○ Output: 1*/
function singleNumber(nums){
    for(let i = 0; i < nums.length; i++){
        let single = true
        for(let j = 0; j < nums.length; j++){
            if(nums[i] == nums[j] && i != j){
                single = false
                break;
            }
        }
        
        if(single){
            return nums[i]
        }
    }
    return -1
}

console.log(singleNumber([2,2,1]))

/*3. Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 ● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.
 ● Example 1:
 ○ Input: s = "anagram", t = "nagaram"
 ○ Output: true
 ● Example 2:
 ○ Input: s = "rat", t = "car"
 ○ Output: false*/
function isAnagram(s, t){
    if(s.length != t.length){
        return false
    }

    ss = arraySort(s)
    ts = arraySort(t)

    for(let i = 0; i < ss.length; i++){
        if(ss[i] != ts[i]){
            return false
        }
    }
    return true
}

function arraySort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] < arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(isAnagram("anagram","nagaram"))

/*4. You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 
 steps. In how many distinct ways can you climb to the top?
  ● Example 1:
  ○ Input: n = 2
  ○ Output: 2
  ○ Explanation: There are two ways to climb to the top.
  ■ 1. 1 step + 1 step
  ■ 2. 2 steps
  ● Example 2:
  ○ Input: n = 3
  ○ Output: 3
  ○ Explanation: There are three ways to climb to the top.
  ■ 1. 1 step + 1 step + 1 step
  ■ 2. 1 step + 2 steps
  ■ 3. 2 steps + 1 step*/
function staircase(n){
    let firstStair = 1
    let secondStair = 2

    for(let i = 3; i < n; i++){
        let temp = secondStair
        secondStair = firstStair + secondStair
        firstStair = temp
    }

    return secondStair
}

console.log(staircase(4))