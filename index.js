

// select the different images
let img1 = document.querySelector('.one');
let img2 = document.querySelector('.two');
let img3 = document.querySelector('.three');


// create empty array and push images to array
let imgArray = [];
imgArray.push(img1);
imgArray.push(img2);
imgArray.push(img3);



// display one of the hidden images
let currImage = imgArray[0];
currImage.style.display = 'inline';





// global counter of current image
let i = 0;

function arrowClickLeft() {
    // hide current image when left arrow is clicked
    let currImage = imgArray[i];
    currImage.style.display = 'none';

    if (i == 0) {
        i = 2;
        console.log(i);
        currImage = imgArray[i];
        currImage.style.display ='inline';


    } else {
        i -= 1;
        console.log(i);
        currImage = imgArray[i];
        currImage.style.display ='inline';



    }

    clearInterval(startInterval);
    startInterval = setInterval(arrowClickRight, 2000, '');
}

function arrowClickRight() {
    // hide current image when left arrow is clicked
    let currImage = imgArray[i];
    currImage.style.display = 'none';
    if (i == 2) {
        i = 0;
        console.log(i);
        currImage = imgArray[i];
        currImage.style.display ='inline';



    } else {
        i += 1;
        console.log(i);
        currImage = imgArray[i];
        currImage.style.display ='inline';
    }
    
    clearInterval(startInterval);
    startInterval = setInterval(arrowClickRight, 2000, '');
}

// change slide every 2 seconds when there is no interactions
let startInterval = setInterval(arrowClickRight, 2000, '');

