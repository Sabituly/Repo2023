//document.querySelector('button').onclick = myClick;
document.querySelector('button').addEventListener('click', myClick);

function myClick() { // Отличие в том что можно вызывать функцию до создания

    //console.log('Clicked');
    //get input
    //input - value
    let a = document.querySelector('.i-1').value;
    document.querySelector('.out').innerHTML = a;
}
// myClick = () => { // Тут при создании анонимной функции нельзя её вызвать до её создания

//     console.log('Clicked');
// }

//value - получить текст из input
//innerHTML - получить - записать текст код в парный тег