
const HOME_CONTENT = document.createElement('div');
HOME_CONTENT.setAttribute('class', 'home-slider');

const SLIDER_ITEM = document.createElement('div');
SLIDER_ITEM.setAttribute('class', 'slider-item');
SLIDER_ITEM.innerHTML = `<img class="slider-img" src="..." alt="">
                        <div class="slider-content">
                            <div>
                                <h2 class="slider-title"></h2>
                                <p class="slider-desc"></p>
                                <div class="slider-signature">
                                    <p>-Mr. Morette</p>
                                </div>
                            </div>
                        </div>`;

const sliderObjects = [
    {
        title: 'The most exquisite italian cuisine', 
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste amet numquam nesciunt neque dolores, est, consectetur voluptates delectus et earum ab adipisci repellat non quam labore accusantium enim reiciendis?',
        imgurl: 'https://i.ibb.co/QMQ6F8p/best-italian-restaurant-brooklyn-nyc.jpg',
    },
    {
        title: 'Made with the best ingredients', 
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste amet numquam nesciunt neque dolores.',
        imgurl: 'https://i.ibb.co/NNfPbx9/recipes-make-food-part-square.jpg',
    },
    {
        title: 'For you', 
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        imgurl: 'https://i.ibb.co/mT4FXyF/gettyimages-1045346796.jpg',
    }
]

updateSliderItem(sliderObjects[0]);
HOME_CONTENT.append(SLIDER_ITEM);

let index = 1;

setInterval(() => {
    updateSliderItem(sliderObjects[index]);
    index ++;
    if(index > 2)
        index = 0;
}, 3000);


function updateSliderItem({title, desc, imgurl}){
    let itemTitle = SLIDER_ITEM.querySelector(".slider-title");
    let itemDesc = SLIDER_ITEM.querySelector(".slider-desc");
    let itemIMG = SLIDER_ITEM.querySelector(".slider-img");

    itemTitle.innerText = title;
    itemDesc.innerText = desc;
    itemIMG.setAttribute('src', imgurl);
}

export { HOME_CONTENT }