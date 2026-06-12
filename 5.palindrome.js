const str = 'mama'
const strPalindrome=(str)=>{
const palindrome= str.split("").reverse();
if(palindrome === str){
return 'The string is palindrome'
}
return 'The string is not palindrome '
}
const result = strPalindrome(str);
