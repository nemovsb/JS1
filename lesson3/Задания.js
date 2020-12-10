//1.С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

var n = 100; 
var i = 0; 
while (i <= n) { 
   console.log(i++); 
}

//2.  a)Организовать такой массив для хранения товаров в корзине
//    b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

//Представим содержимое корзины как двумерный массив, где первый столбец - наименование продукта, а второй - его цена.

var basket = [  ["product1", 123],
                ["product2", 234],
                ["product3", 345]];
//console.log(basket);                

function countBasketPrice(x){
    var sumPrice = 0;
    for (var i = 0; i < x.length; i++){
        //console.log(sumPrice); 
        //console.log(x[i][1]);
        sumPrice += x[i][1];  
    }
    return(sumPrice);
};

console.log("Сумма: "+countBasketPrice(basket));

//3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:

for (var i =0; i <= 10; console.log(i++)){}

//4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:


var array = ['x'];
for (var i = 0; i < 20; i++){ //проход по 20 строкам
        var st = '';
        for (var j = 0; j < array.length; j++){ //сборка элементов массива в строку
            st += array[j];
        }
        console.log(st); //вывод строки
        array.push('x'); //добавление нового элемента в массив
    };

