const myBody = document.getElementById('mainBody');

let inputTag = document.getElementById('inputTag');
const myPara = document.createElement('p');
myBody.appendChild(myPara);

inputTag.addEventListener('click', function(){
    myPara.textContent = new Date();
})