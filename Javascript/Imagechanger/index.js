let myImg = document.querySelector('img');
let page = document.querySelector('html');

page.onclick = function(){
    let mySrc = myImg.getAttribute('src');
    if(mySrc == 'image1.jpg'){
        myImg.setAttribute('src', 'image3.jpg');
    } else{
        myImg.setAttribute('src', 'image1.jpg');
    }
}