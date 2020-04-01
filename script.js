
let lists = [
    'Контакти',
    'Адреса',
    'Доставка',
];
let menu = document.getElementById('menu');
lists.forEach(function(item) {
    let li = document.createElement('li');
    menu.appendChild(li);

    li.innerHTML += item;
});