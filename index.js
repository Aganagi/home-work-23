//1ci ----------------------------------------------------
const cumle = (str) => {
  const word = str.split(" ");
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].slice(1);
  }
  return word.join(" ");
};
console.log(cumle("bizim gozel vetenimizde gunes cixib"));

//2ci-------------------------------------------------------
const palindrom = (str) => {
  let word = str.toLowerCase().replace("", "");

  let res = word.split("").reverse().join("");

  return word === res;
};

console.log(palindrom("qalAq"));
//3cu--------------------------------------------------

const myFunction = (str, second, third) => {
  let someText = "";
  for (let i = 0; i < str.length; i++) {
    let someWord = str[i];
    if (second.toLowerCase().includes(someWord.toLowerCase())) {
      someText += third ? someWord.toUpperCase() : someWord.toLowerCase();
    } else {
      someText += someWord;
    }
  }
  return someText;
};
let modifyString = "JOhn doe";
let letter = "h";
let meaning = false;
let result = myFunction(modifyString, "o", true);
console.log(result);
//3cu- 2ci metodu------------------------------------------
// const newFunction = (str, letter, boo) => {
//   let result = "";
//   let text = str.toLowerCase();
//   for (let i of text) {
//     i === letter && boo ? (result += i.toUpperCase()) : (result += i);
//   }
//   console.log(result);
// };
// newFunction("Johe Doe", "e", true);
