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
 
 const cataloge = [product1, product2, product3];
 
basket1 = new Basket(123,[]);   //Пустая корзина
//basket1 = new Basket(123,cataloge);

const basketEl = document.querySelector('#basket');
const adressEl = document.querySelector('#adress');
const commentEl = document.querySelector('#comment');
const catalogeEl = document.querySelector('#products');

function renderCataloge(cataloge){
    cataloge.forEach((product) => {
        //console.log(product);
        const prodEl = document.createElement('p');
        const buttonAdd = document.createElement('button');
        const buttonDel = document.createElement('button');
        prodEl.textContent = `${product.name} `;
        buttonAdd.textContent = `Добавить`;
        buttonDel.textContent = `Удалить`;
        buttonAdd.addEventListener('click', () => {
            addprod(basket1, product);
            renderBasket(basket1);
        });
        buttonDel.addEventListener('click', () => {
            delprod(basket1, product);
            renderBasket(basket1);
        });
        prodEl.appendChild(buttonAdd);
        prodEl.appendChild(buttonDel);
        catalogeEl.appendChild(prodEl);

    });
}

 function renderBasket(basket){
    basketEl.innerHTML = ""; 
    if (basket.products.length != 0){
        basket.products.forEach((product) => {
            const prodEl = document.createElement('p');
            prodEl.textContent = `${product.name}: ${product.price}`;
            basketEl.appendChild(prodEl);
        });
        const price = document.createElement('p');
        price.textContent = `В корзине ${basket.products.length} товаров на сумму ${basket.totalprice} рублей.`;
        basketEl.appendChild(price);
    } else {
        const prodemptyEl = document.createElement('p');
        prodemptyEl.textContent = `Корзина пуста`;
        basketEl.appendChild(prodemptyEl);
        //console.log('Корзина пуста');
    }
    //console.log(basket1);
}
let displayEl = 1;

const shBasket = document.querySelector('#showbasket');
shBasket.addEventListener('click', () => {
    if (basketEl.style.display == 'none') {
        basketEl.style.display = 'block';
    } else {
        basketEl.style.display = 'none';
    }
})

const nextButton = document.querySelector('#next');
nextButton.addEventListener('click', () => {
    basketEl.style.display = 'none';
    adressEl.style.display = 'none';
    commentEl.style.display = 'none';

console.log(displayEl);

    switch(displayEl){
        case 1: {
            adressEl.style.display = 'block';
            displayEl++;
            break;

        };
        case 2: {
            commentEl.style.display = 'block';
            nextButton.textContent = `Завершить`;
            displayEl++;
            break;
        };
        case 3: {
            basketEl.style.display = 'block';
            nextButton.textContent = `Далее`;
            alert('Готово!');
            displayEl = 1;
        }
    }
})

function addprod(somebasket, someproduct){      //Добавление нового продукта в корзину
    if (somebasket.products.find(product => product.id === someproduct.id) != undefined){   //Проверяем, нет ли уже продукта в корзине
        console.log('Продукт уже добавлен');
    } else {
        somebasket.products.push(someproduct);  //Добавляем сущность нового продукта в массив.
        totalprice(somebasket);                 //Обновляем итоговую цену
    }
}

//addprod(basket1, product3);
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

function totalprice(somebasket){    //подсчет стоимости корзины и запись в атрибут totalprice
    let sum = 0;
    for (let i = 0; i < somebasket.products.length; i++){
        sum += somebasket.products[i].price;
    };
    console.log(sum);
    somebasket.totalprice = sum;
};

renderBasket(basket1);
renderCataloge(cataloge);