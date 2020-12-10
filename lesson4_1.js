function NumbObj(hun, ten, uni){    //Конструктор
    this.hun = 0;                   
    this.ten = 0;
    this.uni = 0;
}

function numb(num){
    if ((num < 1000) && (num >= 0)) {
        let x = new NumbObj();                  //Новый объект
        x.hun = Math.floor(num / 100);          //Делим на сто, округляем в меньшую сторону и присваиваем свойству объекта hun (сотни)
        x.ten = Math.floor((num % 100) / 10);   //Отбрасываем сотни, делим на 10, округляем и записываем в ten (десятки)
        x.uni = (num % 100) % 10;               //Два остатка от деления на 100 и 10 дадут единицы
        return x;                               //Функция возвращает готовый объект
    } else {
        console.log('Число слишком большое или маленькое');
        return {};
    }
}

console.log(numb(321));
