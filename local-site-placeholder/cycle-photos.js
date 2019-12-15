const photoDisplay = document.getElementById('photo-container');
const photos = [
    "https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/2213443/pexels-photo-2213443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
];

// straight outa MDN
const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

const replaceRandomImage = (randomInt) => {
    console.log(photoDisplay.style);
    photoDisplay.style.backgroundImage = 'url(' + photos[randomInt] + ')';
}

replaceRandomImage(getRandomIntInclusive(0, photos.length - 1));