
const HOME_CONTENT = document.createElement('div');
HOME_CONTENT.setAttribute('class', 'home-slider');

function addSliderItem({title, desc, imgurl}){
    let html = `<div class="slider-item">
                    <img src="${imgurl}" alt="">
                    <div class="slider-content">
                        <div>
                            <h2>${title}</h2>
                            <p>${desc}</p>
                            <div class="slider-signature">
                                <p>-Mr. Morette</p>
                            </div>
                        </div>
                    </div>
                </div>`;

    HOME_CONTENT.insertAdjacentHTML('beforeend', html);
}


addSliderItem({
    title: 'The most exquisite italian cuisine', 
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste amet numquam nesciunt neque dolores, est, consectetur voluptates delectus et earum ab adipisci repellat non quam labore accusantium enim reiciendis?',
    imgurl: '../images/best-italian-restaurant-brooklyn-nyc.jpg',
})



addSliderItem({
    title: 'Made with the best ingredients', 
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste amet numquam nesciunt neque dolores.',
    imgurl: '../images/recipes-make-food-part-square.jpg',
})


addSliderItem({
    title: 'For you', 
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imgurl: '../images/gettyimages-1045346796.jpg',
})



export { HOME_CONTENT }