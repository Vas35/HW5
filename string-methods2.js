// Заменить слово в строке "люблю" на "обожаю". Done!
var sText = "Я люблю JavaScript",
result = '';
result = sText.replace(/люблю/g,"обожаю");
console.log(result);


// Вывести ФИО, где каждая первая буква в верхнем регистре. Done!
var fullName = "мартиненко василь миколайович";
result = "";
aName = fullName.split(" ");
 for (i = 0; i < aName.length; i ++) {
		 result += aName[i].charAt(0).toUpperCase() + aName[i].slice(1) + " ";
 }
console.log(result);




