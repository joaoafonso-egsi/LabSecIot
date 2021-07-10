// Load Video Mobile



(function ($) {
    "use strict"; // Start of use strict

    $(document).ready(function () {
        $('body').append('<div id="toTop" class="btn btn-primary"><span class="fa fa-angle-up fa-2x"></span></div>');
        $('#toTop').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    });

    $(document).ready(function() {
     if($(window).width() <= 767){
        $( "#bg-video" ).remove()
        console.log("not video")
    }
});

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
            $('#toTop').fadeIn();
        } else {
            $("#mainNav").removeClass("navbar-shrink");
            $('#toTop').fadeOut();
        }
    };



    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

// GOOGLE MAPS
function initMap() {

  var styledMap = new google.maps.StyledMapType(
    [
    {
        "featureType": "water",
        "stylers": [
        {
            "visibility": "on"
        },
        {
            "color": "#b5cbe4"
        }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
        {
            "color": "#efefef"
        }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#83a5b0"
        }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#bdcdd3"
        }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#ffffff"
        }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#e3eed3"
        }
        ]
    },
    {
        "featureType": "administrative",
        "stylers": [
        {
            "visibility": "on"
        },
        {
            "lightness": 33
        }
        ]
    },
    {
        "featureType": "road"
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
        {
            "visibility": "on"
        },
        {
            "lightness": 20
        }
        ]
    },
    {},
    {
        "featureType": "road",
        "stylers": [
        {
            "lightness": 20
        }
        ]
    }
    ]
    )

  // The location of LabSec
  var labsecpos = {lat: 41.45326927, lng: -8.28884125};
  
  // The map, centered at LabSec
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: labsecpos});
  
  map.mapTypes.set('styled_map', styledMap);
  map.setMapTypeId('styled_map');

  // The marker, positioned at LabSec

  var infowindow = new google.maps.InfoWindow({
      content: '<div class="text-dark">LabSecureIoT</div>'
  })

  var marker = new google.maps.Marker({
      position: labsecpos,
      map: map,
  })

  marker.addListener('click', function() {
      infowindow.open(map, marker);
  })

}

// Header text effect

var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

var cooltext = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};

// Get current year
document.getElementById("year").innerHTML = new Date().getFullYear()

// Send Mail

function send_mail() {
    console.log("funcao")
    name = document.getElementById("name").value
    email = document.getElementById("email").value
    message = document.getElementById("message").value
    console.log(name + email + message)
    var xhttp = new XMLHttpRequest()
    xhttp.open("POST", "/email", true)
    xhttp.send(JSON.stringify({'name': name,'email': email,'message': message}))
}

// Variable settings carousel
(function ($) {
    "use strict";
  //Auto-scroll
  $('#myCarousel').carousel({
    interval: false
});

  // buttons
  $('.next').click(function () {
    $('.carousel').carousel('next');
    return false;
});
  $('.prev').click(function () {
    $('.carousel').carousel('prev');
    return false;
});
})
(jQuery)