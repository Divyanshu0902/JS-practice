const text = '{"name":"Divyanshu"}';

const obj = JSON.parse(text);
console.log(obj);

const text2 = JSON.stringify(obj);
console.log("Text2:"+text2);
console.log("Text1:"+text);