
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
    price: 12.99,
});

addMenuItem({
    title: 'Pizza di Peperonni', 
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste amet numquam nesciunt neque dolores, est.',
    price: 14.99,
});


addMenuItem({
    title: 'Pizza di Queso', 
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste amet numquam nesciunt neque dolores, est.',
    price: 14.99,
});

addMenuItem({
    title: 'Lasagna al forno', 
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste amet numquam nesciunt neque dolores, est.',
    price: 11.99,
});

addMenuItem({
    title: 'Estromboli', 
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste amet numquam nesciunt neque dolores, est.',
    price: 7.99,
});

addMenuItem({
    title: 'Spaghetti alla bucaniera', 
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste amet numquam nesciunt neque dolores, est.',
    price: 11.99,
});

addMenuItem({
    title: 'Spaghetti bolognesa', 
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste amet numquam nesciunt neque dolores, est.',
    price: 7.99,
});

addMenuItem({
    title: 'Spaghetti amatrician', 
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste amet numquam nesciunt neque dolores, est.',
    price: 7.99,
});

addMenuItem({
    title: 'Spaghetti carbonara', 
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste amet numquam nesciunt neque dolores, est.',
    price: 7.99,
});

addMenuItem({
    title: 'Risotto', 
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste amet numquam nesciunt neque dolores, est.',
    price: 12.99,
});

addMenuItem({
    title: 'Fetuccini boscaiola', 
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste amet numquam nesciunt neque dolores, est.',
    price: 8.99,
});

addMenuItem({
    title: 'Fetuccini alla Nona', 
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste amet numquam nesciunt neque dolores, est.',
    price: 8.99,
});


export { MENU_CONTENT }