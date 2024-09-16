console.log('Check if a string is a palindrome');
// Check if a string is a palindrome

function ispalindrome (str){
    let revStr = str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reverse().join('');

    if (str.toLowerCase().replace(/[^a-z0-9]/g, '')=== revStr) {
        return true
    }

    {
        return false
    }
}

console.log(ispalindrome('A man, a plan, a canal, Panama'));
console.log(ispalindrome('Was it a car or a cat I saw'));
console.log(ispalindrome('DAD'));



console.log('\n\n\n\nReverse a String');
//Reverse a String
function rev(stri){
    let reverseStr= stri.split('').reverse().join('')

    return reverseStr
}

console.log(rev('Clifford'))



console.log('\n\n\n\nLongest Palindrome in the substrings');
//Longest Palindrome in the substrings
function longestpalindrome(s){
    s1=0
    let longest;
    for (let i = 0; i<2; i++ ){
        if (s.length>s1) {
           let s1 = s.length;
           longest= s
           return longest
        }
    }
}

console.log(longestpalindrome('I am the best'));
console.log(longestpalindrome('already living life'));


console.log('\n\n\n\nchecking if two strings are anagrams');
// checking if two strings are anagrams
function anagram(x1, x2){
    let n1 = x1.length
    let n2 = x2.length

    if (n1 != n2){
        return false
    }

    let x11 = x1.toLowerCase().split('')
    let x22 = x2.toLowerCase().split('')

    x11.sort()
    x22.sort()

    for (i = 0; i<n1; i++){
        if (x11[i] != x22[i])
            return false;
        return true;
    }
}
console.log(anagram('listen', 'silent'));
console.log(anagram('Hello', 'Wolrd'));





console.log('\n\n\n\nRemoving Duplicates from a String');
//Removing Duplicates from a String
function duplicate(data) {
    x = data.split('');
    y = x.filter((value, index) => x.indexOf(value) === index);
    return y.join('');
}
console.log(duplicate('programming'))




console.log('\n\n\n\nCount Palindromes in strings')
//Count Palindromes in strings
function countpalindrome(s){
    const n = s.length;
    let count = 0;
    const palindromes = new Set();

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < n && s[left] === s[right]){
            palindromes.add(`${left}, ${right}`)
            left--;
            right++;
        }
        }
        for (let i = 0; i<n; i++){
            expandAroundCenter(i, i);
            expandAroundCenter(i, i+1);
        }
        return palindromes.size;
    }

    console.log(countpalindrome('ababa'));
    console.log(countpalindrome('racecar'));
    console.log(countpalindrome('aabb'));



    console.log('\n\n\n\nLongest Common Prefix')
// Longest Common Prefix
function longestprefix(stri1){
    if (!stri1.length) return '';

    let prefix = stri1[0];

    for (let i=1; i<stri1.length; i++){
        while (stri1[1].indexOf(prefix) !== 0){
            prefix = prefix.slice(0, -1);
            if(!prefix) return '';
        }
    }
    return prefix;
}

console.log(longestprefix(['flowers', 'floor', 'flight']))


//Case Insensitive Palindrome
console.log('\n\n\n\nCase Insensitive Palindrome')
function isCaseInsensitivePalindrome(str){
    let cleanedstr = str.replace(/[^a-z0-9]/g, '').toLowerCase();
    let reversedStr = cleanedstr.split('').reverse().join('');
    return cleanedstr ===reversedStr;
}

console.log(isCaseInsensitivePalindrome("Aba"));
console.log(isCaseInsensitivePalindrome("Racecar"));
console.log(isCaseInsensitivePalindrome("Palindrome"));
console.log(isCaseInsensitivePalindrome("Madam"));
console.log(isCaseInsensitivePalindrome("Hello"));