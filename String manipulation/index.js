//Reverse a string

const str = "Mnelisi Jacq";
const reversedStr = [...str].reverse().join("");
console.log(reversedStr);

//Counting Vowels

function getVowels(string) {
	let Vowels = 'aAeEiIoOuU';
	let vowelsCount = 0;
	for (let i = 0; i < string.length; i++) {
		if (Vowels.indexOf(string[i]) !== -1) {
			vowelsCount += 1;
		}
	}
	return vowelsCount;
}
console.log("The Number of vowels in -" +
	"I am learning web development at Melsoft Academy:"
	+ getVowels("I am learning web development at Melsoft Academy"));

   

