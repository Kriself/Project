// Слайдер
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
//конец Слайдер

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

//Все категории меню
var categories = document.querySelector('.categories');
var allCat = document.querySelector('.allCat');
var submenu =document.querySelector('.sub-menu');
categories.addEventListener('mouseover', function (evt) {
    evt.preventDefault();
    submenu.style.height='200px';
    allCat.classList.add('show');
});
categories.addEventListener('mouseleave', function (evt) {
    evt.preventDefault();
    submenu.style.height='83px';
    allCat.classList.remove('show');
});
//конец Все категории меню

var catItem1=document.querySelector('.catItem1');
var catItem2=document.querySelector('.catItem2');
var catItem3=document.querySelector('.catItem3');
var catItem4=document.querySelector('.catItem4');
var catItem5=document.querySelector('.catItem5');
var catItem6=document.querySelector('.catItem6');

catItem1.addEventListener('mouseover', function (evt) {
    evt.preventDefault();
    catItem1.getElementsByTagName('img')[0].classList.add('hovItem');
    catItem1.getElementsByTagName('div')[0].style.background='#e9b637';
});
catItem1.addEventListener('mouseleave', function (evt) {
    evt.preventDefault();
    catItem1.getElementsByTagName('img')[0].classList.remove('hovItem');
    catItem1.getElementsByTagName('div')[0].style.background='#f0f0f0';
});
catItem1.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    catItem1.getElementsByTagName('img')[0].classList.add('hovItem');
    catItem1.getElementsByTagName('div')[0].style.background='#e9b637';
    catItem1.style.opacity='0.5';
});
catItem1.addEventListener('mouseup', function (evt) {
    evt.preventDefault();
    catItem1.style.opacity='1';
});

catItem2.addEventListener('mouseover', function (evt) {
    evt.preventDefault();
    catItem2.getElementsByTagName('img')[0].classList.add('hovItem');
    catItem2.getElementsByTagName('div')[0].style.background='#e9b637';
});
catItem2.addEventListener('mouseleave', function (evt) {
    evt.preventDefault();
    catItem2.getElementsByTagName('img')[0].classList.remove('hovItem');
    catItem2.getElementsByTagName('div')[0].style.background='#f0f0f0';
});
catItem2.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    catItem2.getElementsByTagName('img')[0].classList.add('hovItem');
    catItem2.getElementsByTagName('div')[0].style.background='#e9b637';
    catItem2.style.opacity='0.5';
});
catItem2.addEventListener('mouseup', function (evt) {
    evt.preventDefault();
    catItem2.style.opacity='1';
});

catItem3.addEventListener('mouseover', function (evt) {
    evt.preventDefault();
    catItem3.getElementsByTagName('img')[0].classList.add('hovItem');
    catItem3.getElementsByTagName('div')[0].style.background='#e9b637';
});
catItem3.addEventListener('mouseleave', function (evt) {
    evt.preventDefault();
    catItem3.getElementsByTagName('img')[0].classList.remove('hovItem');
    catItem3.getElementsByTagName('div')[0].style.background='#f0f0f0';
});
catItem3.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    catItem3.getElementsByTagName('img')[0].classList.add('hovItem');
    catItem3.getElementsByTagName('div')[0].style.background='#e9b637';
    catItem3.style.opacity='0.5';
});
catItem3.addEventListener('mouseup', function (evt) {
    evt.preventDefault();
    catItem3.style.opacity='1';
});

catItem4.addEventListener('mouseover', function (evt) {
    evt.preventDefault();
    catItem4.getElementsByTagName('img')[0].classList.add('hovItem');
    catItem4.getElementsByTagName('div')[0].style.background='#e9b637';
});
catItem4.addEventListener('mouseleave', function (evt) {
    evt.preventDefault();
    catItem4.getElementsByTagName('img')[0].classList.remove('hovItem');
    catItem4.getElementsByTagName('div')[0].style.background='#f0f0f0';
});
catItem4.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    catItem4.getElementsByTagName('img')[0].classList.add('hovItem');
    catItem4.getElementsByTagName('div')[0].style.background='#e9b637';
    catItem4.style.opacity='0.5';
});
catItem4.addEventListener('mouseup', function (evt) {
    evt.preventDefault();
    catItem4.style.opacity='1';
});

catItem5.addEventListener('mouseover', function (evt) {
    evt.preventDefault();
    catItem5.getElementsByTagName('img')[0].classList.add('hovItem');
    catItem5.getElementsByTagName('div')[0].style.background='#e9b637';
});
catItem5.addEventListener('mouseleave', function (evt) {
    evt.preventDefault();
    catItem5.getElementsByTagName('img')[0].classList.remove('hovItem');
    catItem5.getElementsByTagName('div')[0].style.background='#f0f0f0';
});
catItem5.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    catItem5.getElementsByTagName('img')[0].classList.add('hovItem');
    catItem5.getElementsByTagName('div')[0].style.background='#e9b637';
    catItem5.style.opacity='0.5';
});
catItem5.addEventListener('mouseup', function (evt) {
    evt.preventDefault();
    catItem5.style.opacity='1';
});

catItem6.addEventListener('mouseover', function (evt) {
    evt.preventDefault();
    catItem6.getElementsByTagName('img')[0].classList.add('hovItem');
    catItem6.getElementsByTagName('div')[0].style.background='#e9b637';
});
catItem6.addEventListener('mouseleave', function (evt) {
    evt.preventDefault();
    catItem6.getElementsByTagName('img')[0].classList.remove('hovItem');
    catItem6.getElementsByTagName('div')[0].style.background='#f0f0f0';
});
catItem6.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    catItem6.getElementsByTagName('img')[0].classList.add('hovItem');
    catItem6.getElementsByTagName('div')[0].style.background='#e9b637';
    catItem6.style.opacity='0.5';
});
catItem6.addEventListener('mouseup', function (evt) {
    evt.preventDefault();
    catItem6.style.opacity='1';
});
//конец