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

console.log(palindrom("Ana"));
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
let modifyString = "john doe";
let letter = "h";
let meaning = true;
let result = myFunction(modifyString, letter, meaning);
console.log(result);
