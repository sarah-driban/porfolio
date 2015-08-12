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

$(function() {

    $('#open').on('click', function() {
        $('.nav').animate({width: 'toggle'},800);

    });

    $('#close').on('click', function() {
        $('.nav').animate({width: 'toggle'},800);

    });
})


