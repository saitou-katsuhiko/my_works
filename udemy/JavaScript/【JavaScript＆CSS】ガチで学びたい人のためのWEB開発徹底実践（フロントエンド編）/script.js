// function hello(callback, lastname) {
//     console.log('hello' + callback(lastname));
// }
// function getName() {
//     return 'code mafia';
// }

// hello(function(name){
//     return 'code' + name;
// }, 'mafia');



// function doSomething(a, b, callback){
//     const result = callback(a, b);
//     console.log(result);
// }

// function multiply(a, b){
//     return a * b;
// }

// function plus(a, b){
//     return a + b;
// }

// doSomething(2, 2, multiply);
// doSomething(2, 3, plus);



//part63
// const array = [1,2,3,4,5];

// function forEach(ary, callback){
//     for(let i = 0; i < ary.length; i++){
//         callback(ary[i])
//     }
// }

// function log(val){
//     console.log(val)
// }

// function double(val){
//     val = val * 2;
//     log(val);
// }

// forEach(array, double);


//part64 forEachを使おう
// const array = [1, 2, 3, 4, 5];

// array.forEach(function(val, i, ary){
//     console.log(val, i, ary);
// });

// array.forEach(v => console.log(v));

// for(let i = 0; i < array.length; i++){
//     const v = array[i];
//     console.log(v);
// }

//part65 reduceメソッド
const array = [1, 2, 3, 4, 5];

//accu:前のループの戻り値、curr:現在の値
//第二引数に初期値を設定可能
// array.reduce(function(accu, curr){
//     console.log(accu, curr);
//     return accu + curr;
// }, 10);

// const str = 'animation';
// const strArray = str.split('');

// console.log(strArray);


// const result = strArray.reduce((accu, curr) => {
//     return `${accu}<${curr}>`;//テンプレートリテラル
//     //return accu + '<' + curr + '>';
// }, "");
// console.log(result);





// const str = 'animation';
// const strArry = str.split('');

// function tag(accu, curr){
//     console.log(accu);
//     return `${accu}<${curr}>`;
// }

// function reduce(arry, callback, defaultValue){
//     let accu = defaultValue;
//     for(let i = 0; i < arry.length; i++){
//         let curr = arry[i];
//         accu = callback(accu, curr);
//     }
//     return accu;
// }

// const result = reduce(strArry, tag, "");

// console.log(result);




// const btn = document.querySelector('#btn');

// function hello(){
//     alert('hello');
//     this.style.color = 'red';
//     console.log(this);
// };

// btn.addEventListener('click', hello);




class TextAnimation {
    constructor(el){
        this.el = el;
        //alert(el);
    }
    log() {
        console.log(this.el);
    }
}
const ta = new TextAnimation('hello world');
ta.log();