
const MENU_CONTENT = document.createElement('div');
MENU_CONTENT.setAttribute('class', 'menu-wrapper');

function addMenuItem({title, desc, price}){
    let html = `<div class="menu-item">
                        <div class="menu-item-title">${title}</div>
                        <div class="menu-item-desc">${desc}</div>
                        <div class="menu-item-price">$ ${(Math.round(price * 100) / 100).toFixed(2)}</div>
                </div>`;

    MENU_CONTENT.insertAdjacentHTML('beforeend', html);
}


addMenuItem({
    title: 'Pizza Napolitana', 
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste amet numquam nesciunt neque dolores, est.',
    price: 14.99,
});

addMenuItem({
    title: 'Pizza Peperonni', 
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste amet numquam nesciunt neque dolores, est.',
    price: 14.99,
});


addMenuItem({
    title: 'Pizza di Queso', 
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste amet numquam nesciunt neque dolores, est.',
    price: 12.99,
});


export { MENU_CONTENT }