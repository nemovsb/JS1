function NumbObj(hun, ten, uni){    //Конструктор
    this.hun = 0;                   
    this.ten = 0;
    this.uni = 0;
}

function numb(num){
    if ((num < 1000) && (num >= 0)) {
        let x = new NumbObj();
        x.hun = Math.floor(num / 100);
        x.ten = Math.floor((num % 100) / 10);
        x.uni = (num % 100) % 10; 
        return x;
    } else {
        return console.log('Число слишком большое');
    }
}

console.log(numb(123));
