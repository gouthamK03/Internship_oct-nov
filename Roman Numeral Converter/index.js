
Only you can see this message. Congratulations on earning this certification. It's no easy task. Running freeCodeCamp isn't easy either. Nor is it cheap. Help us help you and many other people around the world. Make a tax-deductible supporting donation to our charity today.

Confirm your donation of $20 / month:
$5
$10
$20
$40
Your $20 donation will provide 1,000 hours of learning to people around the world each month.

Donate
This certifies that
K GOUTHAM
successfully completed the
JavaScript Algorithms and Data Structures
Developer Certification on December 15, 2023
representing approximately 300 hours of work
Quincy Larson's Signature
Quincy Larson

Executive Director, freeCodeCamp.org


Verify this certification at:
https://freecodecamp.org/certification/fcc1e1dc437-7a9e-4ad2-99a5-bcc0c274b1b6/javascript-algorithms-and-data-structures

Add this certification to my LinkedIn profile
Share this certification on Twitter
As part of this certification, K GOUTHAM built the following projects and got all automated test suites to pass:
Certifications
Palindrome Checker	
Roman Numeral Converter	
Caesars Cipher	
Telephone Number Validator	
Cash Register	
If you suspect that any of these projects violate the academic honesty policy, please report this to our team.
Navigated to JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter | freeCodeCamp.org
×Close
Solution for Roman Numeral Converter
JS
function convertToRoman(num) {
//Break the number into Thousands, Hundreds, Tens and Ones, and write down each in turn.
//get the digits
const numStr=num.toString();
const len=numStr.length;
let Thousands=0,Hundreds= 0,Tens= 0;
if(len>=2){Tens=parseInt(numStr[len-1-1]);}
if(len>=3){Hundreds=parseInt(numStr[len-1-2]);}
if(len==4){Thousands=parseInt(numStr[0]);}
const Ones=num%10;
const lookup=[
    ["","I","II","III","IV","V","VI","VII","VIII","IX"],
    ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
    ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
    ["","M","MM","MMM"]];
    // the given above symbols for the respected value
return lookup[3][Thousands]+lookup[2][Hundreds]+
lookup[1][Tens]+lookup[0][Ones];
}

convertToRoman(36);
