//array of images
let catsImages = [
    "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    "https://e3.365dm.com/21/03/768x432/skynews-cats-missing-microchip_5315182.jpg?20210323142004",
    "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fc3836660-7846-11eb-80c3-8cc375faed89.jpg?crop=5729%2C3222%2C187%2C805&resize=1200",
    "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/petting_pet_cat-1296x728-header.jpg?w=1155&h=1528",
    "https://lh3.googleusercontent.com/pw/AL9nZEXYJlrVkYoKIkpx07_3F4HOiTiOheaoaiRAcwrUg3C613-jkzEubJ3k8Z9fDjG5IfVqCzorphZ00vp6mIyB79GtCsoyV69xXe9cqrA0zglgrcvYhH2UP4cDR88WTm1AmuyCxQHAWCB5JzKD7eD94dtNZA=w690-h920-no",
];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * catsImages.length);
    imgs[i].src = catsImages[randomImg];
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++) {
    headers[i].innerText = "Cats are awesome.";
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
    p[i].innerText = "This website is now about cats.";
}

const span = document.getElementsByTagName("span");
for (let i = 0; i < span.length; i++) {
    span[i].innerText = "The Planet of Cats";
}

const catWords = ["Cats", "Kittens", "Feline Friends", "Purr-fect Info"];

// Function to modify links with cat-related words
function catifyLinks() {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
        const randomCatWord =
            catWords[Math.floor(Math.random() * catWords.length)];
        link.textContent = `Learn More About ${randomCatWord}`;
    });
}

catifyLinks();

// Function to catify page titles
function catifyPageTitles() {
    const pageTitle = document.title;
    const catEmojis = ["😺", "😸", "😻", "🐱", "🐾"];
    const randomCatEmoji =
        catEmojis[Math.floor(Math.random() * catEmojis.length)];

    // document.title = `${randomCatEmoji} Cat Paradise ${randomCatEmoji}`;
    document.title =
        `${randomCatEmoji} ` + document.title + ` ${randomCatEmoji}`;
}

// Call the catifyPageTitles function
catifyPageTitles();

// Apply cat themed font
const fontLink = document.createElement("link");
fontLink.href = "https://fonts.cdnfonts.com/css/kitty-face";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);
document.body.style.fontFamily = "Kitty face, sans-serif";

// Change background to hello kitty
document.body.style.backgroundImage =
    "url('https://kawaiihoshi.com/wp-content/uploads/2022/08/sanrio-hello-kitty-tulips-wallpaper-1536x864.jpeg')";
