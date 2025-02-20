$(document).ready(function(){
    // Settings for the slide
    // We need to know the width of the slide so that we know how far it should slide in
    var width = 720
    // We want the slider transitions to be 2 seconds long
    var animationSpeed = 2000
    // jQuery will queue up events so make sure that you add your animation speed to the pause or it will keep running forever
    var pause = animationSpeed + 1000
    var currentSlide = 1

    // Cached DOM elements
    var $sliderContainer = $('.slides')
    var $slides = $('.slide')
    var interval;
    
    //Create a function that will start the slider
    function startSlider(){
        interval = setInterval(function(){
            $sliderContainer.animate({'margin-left':'-='+width},
                // It will do this animation speed every time for this long
            
                animationSpeed,
                // After the animation is com plete we can run the callback function() at the end if we want
                function(){
                    // Track the current slide
                    currentSlide++
                    // If we reach the end of the slides, reset the current slide to the first one
                    if (currentSlide === $slides.length){
                        currentSlide = 1
                        $sliderContainer.css('margin-left', 0)
                    }
                    // and them start the animation again
                    startSlider()
                })
        },pause)
    }
    // Start the slider when the page is ready
    startSlider()
})