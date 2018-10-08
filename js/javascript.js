'use strict';
    
// 1

var nomer = prompt("Введите число", '');
var access;
if (nomer >= 25 && nomer <= 99) {
    access = true;
}
else{
    access = false;
}

alert(access);


// 2

var a = 4;
var b = 5;
 var rezult =( a === b) ? 'a and b are equal' :
          (a > b) ? 'a is greater':
          'b is greater' ;

alert(rezult);

// 3
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(7 / 0 );
console.log(" -9\n" + 5);
console.log(" -9\n" - 5)
console.log(5 && 2 );
console.log(2 && 5);
console.log(5 || 0);
console.log(0 || 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(null == "\n0\n");
console.log(+null == +"\n0\n");




