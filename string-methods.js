// Как выразить через || true or false; Done!
var userEntry = 'TeST',
captchaText = 'test',
captchaOk = userEntry || captchaText ? true : false;
console.log(captchaOk);


// Вывести слово test1 со строки 'test1 test2 test3' используя методы: substr, slice, substring.Done!
var start = 'test1 test2 test3';
console.log (start.substr(0,5));
console.log (start.slice(0,6)); //console.log (start.slice(0,-12)); Почему одинаковый ответ?
console.log (start.substring(0,5)); //console.log (start.substring(5,0)); Почему одинаковый ответ?


// Вывести количество символов в строке 'Я люблю JavaScript'.Done!
var text = 'Я люблю JavaScript';
console.log('Количество символов: ', text.length); 


// Заменить слово в строке "люблю" на "обожаю". Done!
var sText = 'Я люблю JavaScript',
aText = sText.split(' ');
aText.splice(1,1,'обожаю');
console.log(aText.join(' '));


// Найти количество слов в строке 'Я люблю JavaScript'. Done!
var sText = 'Я люблю JavaScript',
aText = sText.split(' ');
console.log('Количество слов: ', aText.length); 

// Вывести ФИО, где каждая первая буква в верхнем регистре. Не успел сделать. None!
var feo = 'мартиненко василь миколайович';
feo.replace(0,1,'М');
console.log('Замена нижнего на верхний регистр: ', feo);





