//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
// let timeAutoNext = 7000;
// let timeAutoNext = 15000; 
let timeAutoNext = 10000; // Set the time interval to 10 seconds (10,000 milliseconds)


nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

// Declare a variable to track whether the time is currently paused
let isPaused = false;

// ... (your existing code)

// Add a click event listener to the "pause" button
document.getElementById('stop').onclick = function () {
    // Toggle the isPaused variable
    isPaused = !isPaused;

    // Check if the time is paused
    if (isPaused) {
        // Clear the timeout to stop the automatic slide change
        clearTimeout(runNextAuto);
        
        // Change the content of the "pause" button to a different emoji when paused
        document.getElementById('stop').innerHTML = '&#9208;'; // Change this to the desired emoji code
    } else {
        // Continue the automatic slide change after 10 seconds
        runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);
        
        // Change the content of the "pause" button back to the original emoji when resumed
        document.getElementById('stop').innerHTML = '&#128080;'; // Change this to the original emoji code
    }
};

// ... (continue with your existing code)

