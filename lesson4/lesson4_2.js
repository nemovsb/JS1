
function Product(id, name, desc, price, discont, discvalue, tags){    //Конструктор продукта
   this.id = id;
   this.name = name;
   this.desc = desc;
   this.price = price;
   this.discont = discont;
   this.discvalue = discvalue;
   this.tags = tags; 
}

function Basket(userid, products){  //Конструктор корзины
    this.userid = userid;
    this.products = products;
}

product1 = new Product(1, 'Картошка', 'Мешок картошки', 600, false, 0.5, ['tag1', 'tag2', 'tag3']);
product2 = new Product(2, 'Морковка', 'Маленький мешочек моркошки', 400, false, 0.5, ['tag1', 'tag3', 'tag4']);
product3 = new Product(3, 'Репка', 'Средний мешок репы', 500, false, 0.5, ['tag1', 'tag2', 'tag4']);

basket1 = new Basket(123, [JSON.parse(JSON.stringify(product1)), JSON.parse(JSON.stringify(product2))]);

//console.log(basket1);

function totalprice(somebasket){    //подсчет стоимости корзины и запись в атрибут totalprice
    let sum = 0;
    for (let i = 0; i < somebasket.products.length; i++){
        sum += somebasket.products[i].price;
    };
    console.log(sum);
    somebasket.totalprice = sum;
};

totalprice(basket1);
//console.log(basket1);

function activatediscont(somebasket, discontproductid){                                 //Активация скидки на продукт
   let prod = somebasket.products.find(product => product.id === discontproductid);     //Поиск продукта по id 
   //console.log(prod);
   prod.discont = true;                     //Смена метки скидки
   prod.price *= prod.discvalue;            //Обновление цены продукта в корзине
   totalprice(somebasket);                  //Обновление итоговой цены корзины
}

activatediscont(basket1, 2);
//console.log(basket1);

function addprod(somebasket, someproduct){      //Добавление нового продукта в корзину
    if (somebasket.products.find(product => product.id === someproduct.id) != undefined){   //Проверяем, нет ли уже продукта в корзине
        console.log('Продукт уже добавлен');
    } else {
        somebasket.products.push(someproduct);  //Добавляем сущность нового продукта в массив.
        totalprice(somebasket);                 //Обновляем итоговую цену
    }
}

addprod(basket1, product3);
//console.log(basket1);

function delprod(somebasket, someproduct){      //Удаление продукта из корзины
    let x = somebasket.products.find(product => product.id === someproduct.id); //Есть ли такой продукт уже в корзине? 
    //console.log(x);
    if (x == undefined){   
        console.log('Продукт отсутствует в корзине');
    } else {
        let ind = somebasket.products.findIndex(n => n.id === x.id);
        //console.log('ind = '+ind);
        somebasket.products.splice(ind, 1);  
        totalprice(somebasket);                 //Обновляем итоговую цену
    }
}

delprod(basket1, product1);
console.log(basket1);