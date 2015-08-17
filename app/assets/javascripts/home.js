// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
(function() {

    "use strict";

    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        });
    }

})();/**
 * Created by sdriban on 8/7/15.
 */

//Sliding Right Menu
$(function() {

    $('#open-button').on('click', function() {
        $(".nav").addClass("is-active");
        $(".black-mask").addClass("is-active");

    });

    $('#open-button1').on('click', function() {
        $(".nav").addClass("is-active");
        $(".black-mask").addClass("is-active");

    });

    $('#close-button').on('click', function() {
        $(".nav").removeClass("is-active");
        $(".black-mask").removeClass("is-active");

    });
})

//Drop Down Sticky Nav at 700px
$(window).scroll(function() {
    if ($(window).scrollTop() > 695) {
        $(".sticky-nav").addClass("is-active");
    }
    else {
        $(".sticky-nav").removeClass("is-active");
    }
});