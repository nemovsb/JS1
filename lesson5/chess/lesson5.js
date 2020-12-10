// Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. 
// Доска должна быть верно разлинована на черные и белые ячейки. 
// Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.

let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; //массив для обозначения столбцов
let chessfield = document.createElement("div");     //Добавим родительский элемент
chessfield.classList.add('chess');
document.body.appendChild(chessfield);
let chess = document.querySelector('.chess');       

for (let i = 0; i < 9; i++){
    for (let j = 0; j < 9; j++){
        let elem = document.createElement("div");   //Создаем ячейку поля
        elem.classList.add('style3');               //Добавляем общий класс для ячеек
        chess.appendChild(elem);
        if (i == 0 && j == 0){                    //Первую ячейку оставляем пустой
            continue;
        }else if (i == 0){                         //Заполняем верхние ячейки индексами столбцов из массива
            elem.innerHTML = arr[j-1];
        }else if (j == 0){                         //Заполняем левые ячейки индексами строк
            elem.innerHTML = 9 - i;
        }else if ((i+j) % 2 == 0){                  //Если сумма идентификаторов строки и столбца четная - 
            elem.classList.add('style2');           //добавляем стиль style2 (для светлых ячеек)
        }else {elem.classList.add('style1');}       //Иначе - стиль style1 (для темных ячеек)
    }
}