var myImages = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
var currentImage = 0;

document.getElementById('next').onclick = nextPhoto;

function nextPhoto(){
    currentImage = currentImage + 1;
    if (currentImage > myImages.length - 1) {
        currentImage =0;
    }
    document.getElementById('myimage').src = myImages[currentImage];
}

document.getElementById("previous").onclick = previousPhoto;

function previousPhoto(){
    currentImage--;
    if (currentImage < 0){ currentImage = myImages.length - 1;}
    document.getElementById("myimage").src = myImages[currentImage];
}