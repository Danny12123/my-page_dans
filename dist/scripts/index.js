window.addEventListener('scroll', ()=>{
    let features = document.querySelector('.anim'); //this is the container element that will be animated
    let positionOfElement = features.getBoundingClientRect().top; //this is the position of the element features
    let windowPosition = window.innerHeight; //this is the position of the window
        console.log("1st position of element" + positionOfElement);
        console.log("1st position of window" + windowPosition);
    //now check if the position of the element and the window
    if (positionOfElement< windowPosition){
        features.classList.add('active')
        console.log("2st position of element" + positionOfElement);
        console.log("2st position of window" + windowPosition);


    }else {
        features.classList.remove('active');
        console.log("3st position of element" + positionOfElement);
        console.log("3st position of window" + windowPosition);
    }


});