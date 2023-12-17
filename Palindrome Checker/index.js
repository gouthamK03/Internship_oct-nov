function palindrome(str) {
  let newStr=str.slice().toLowerCase().replace(/[\W_]+/g,"");
  const ReverseString = s => [...s].reverse().join(''); 
  if(newStr===ReverseString(newStr)){
    return true;
  }
  return false;
}

palindrome("eye");
