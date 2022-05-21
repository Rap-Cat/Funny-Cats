let images = [
   {image: 'https://i.gifer.com/2vSZ.gif'},
   {image: 'https://i.gifer.com/ImPS.gif'},
   {image: 'https://i.gifer.com/2Nni.gif'},
   {image: 'https://i.gifer.com/TIAQ.gif'},
   {image: 'https://i.gifer.com/7KJ.gif'},
   {image: 'https://i.gifer.com/fxVu.gif'},
   {image: 'https://i.gifer.com/Cv5k.gif'},
   {image: 'https://i.gifer.com/UwPC.gif'},
   {image: 'https://i.gifer.com/VrJ.gif'},
   {image: 'https://i.gifer.com/9eEx.gif'},
];

 function getRandomImage (arr) {
  let random = Math.floor(Math.random()*arr.length)
  return arr[random];
}

let button = document.querySelector('.button');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomImage(images);
image.src = randomElement.image
});

