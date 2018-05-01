
    window.onload = function(){ 
        getCurrentLocation();
    };


            

    // Set if language is RTL and load Owl Carousel

    $(window).load(function(){
        var rtl = false; // Use RTL
        initializeOwl(rtl);
    });

    autoComplete();