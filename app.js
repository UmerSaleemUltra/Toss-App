

function toss(){
    // console.log('hello world');
    const randomNumber = Math.floor(Math.random()*2);
    if(randomNumber === 0){
        console.log('chand');
    }else{
        console.log('masjid');
    }
}






















//0 == chand
//1 == masjid
const image = document.querySelector('#coin-image');
const h1 = document.querySelector('h1');
console.log(image);

function toss(user) {
    const randomNumber = Math.floor(Math.random() * 2);
    if(randomNumber === 0){
        image.src = 'https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg'
    }else{
        image.src = 'https://en.numista.com/catalogue/photos/pakistan/424-original.jpg'
    }

    if(user === 'chand' && randomNumber === 0 || user === 'masjid' && randomNumber === 1 ){
        h1.innerHTML = 'You Win The Toss';


    }else{
        h1.innerHTML = ' You Lose The Toss';
    }
}