var label1=document.querySelector('#l1');
var label2=document.querySelector('#l2');
var label3=document.querySelector('#l3');
var cDec=document.querySelectorAll('.circleDec');
label1.addEventListener('click',function(){
    cDec[0].style.background='white';
    cDec[1].style.background='none';
    cDec[2].style.background='none';
});
label2.addEventListener('click',function(){
    cDec[0].style.background='none';
    cDec[1].style.background='white';
    cDec[2].style.background='none';
});
label3.addEventListener('click',function(){
    cDec[0].style.background='none';
    cDec[1].style.background='none';
    cDec[2].style.background='white';
});
//Вызов Меню авторизации
var link=document.querySelector('.account');
var popupMenu=document.querySelector('.modal-menu');
var escp=document.querySelector('.esc');
link.addEventListener('click', function (evt){
    evt.preventDefault();
    popupMenu.classList.add('show');
});
window.addEventListener('keydown', function (evt){
    if (evt.keyCode===27) {
        popupMenu.classList.remove('show');
    }
});
escp.addEventListener('click', function (evt){
    evt.preventDefault();
    popupMenu.classList.remove('show');
});
//конец вызова

//Вызов Напишите нам
var sub=document.querySelector('#writeUs');
var close=document.querySelector('.close');
var popupWriteUs=document.querySelector('.modal-writeUs');
sub.addEventListener('click', function (evt){
    evt.preventDefault();
    popupWriteUs.classList.add('show');
});
window.addEventListener('keydown', function (evt){
    if (evt.keyCode===27) {
        popupWriteUs.classList.remove('show');
    }
});
close.addEventListener('click', function (evt){
    evt.preventDefault();
    popupWriteUs.classList.remove('show');
});
//конец Напишите нам