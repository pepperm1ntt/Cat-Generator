const images = [
    'https://upload.wikimedia.org/wikipedia/commons/6/67/Exotic_cat_transparent.png',
    'https://pngimg.com/uploads/cat/cat_PNG50481.png',
    'https://gallerypng.com/wp-content/uploads/2024/03/cat-png-cute-cat-free-hd-download-transparent-png-454585-2-300x295.png',
    'https://purepng.com/public/uploads/large/purepng.com-catcatanimal-981524635157xq83y.png',
    'https://pngimg.com/uploads/cat/cat_PNG50477.png',
    'https://pngimg.com/uploads/cat/cat_PNG50438.png',
    'https://www.freeiconspng.com/thumbs/cat-png/cat-png-17.png',
    'https://pngimg.com/uploads/cat/cat_PNG50426.png',
    'https://pngimg.com/uploads/cat/cat_PNG50437.png',
    'https://www.freeiconspng.com/thumbs/cat-png/cat-png-22.png',
    'https://pngfre.com/wp-content/uploads/transparent-cat-by-pngfre-63.png',
    'https://www.freeiconspng.com/uploads/black-cat-png-32.png'
    
    
];
let oldIndex;

function displayRandomImage() {
    let randomIndex = getRandomIndex();

    while (randomIndex == oldIndex) {
        randomIndex = getRandomIndex();
    }

    const randomImage = images[randomIndex];
    oldIndex = randomIndex;

    document.getElementById('random-image').src = randomImage;
}

function getRandomIndex() {
    return Math.floor(Math.random() * images.length);
}

