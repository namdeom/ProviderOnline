var jsonPath = 'assets/json/real-estate.json';

    window.onload = function(){ 
    if ("geolocation" in navigator){ //check geolocation available 
            //try to get user current location using getCurrentPosition() method
            navigator.geolocation.getCurrentPosition(function(position){ 
                    //console.log("Found your location \nLat : "+position.coords.latitude+" \nLang :"+ position.coords.longitude);
            //this.http.get(AUTH_CONFIG.baseUri + 'api/ProviderDetails').map(response=> response.json())
            //$.get('http://localhost:61148/api/Providerdetails')
            $.getJSON(jsonPath)
            .done(function(json) {
                //var m = {
                //"data":[json]
                //};
            console.log(json.data[0].typeIcon);
                createHomepageGoogleMap(position.coords.latitude,position.coords.longitude,json);
            })
            .fail(function( jqxhr, textStatus, error ) {
                console.log(error);
            })
            ;
                });
        }else{
            console.log("Browser doesn't support geolocation!");
        }
    };


            

    // Set if language is RTL and load Owl Carousel

    $(window).load(function(){
        var rtl = false; // Use RTL
        initializeOwl(rtl);
    });

    autoComplete();
