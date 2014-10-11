// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Single Page Navigation Plugin.

// Prevent console.log from generating errors in IE for the purposes of the demo
if ( ! window.console ) console = { log: function(){} };

// The actual plugin
$('nav').singlePageNav({
    offset: $('nav').outerHeight(),
    filter: ':not(.external)',
    updateHash: true,
    beforeStart: function() {
        console.log('begin scrolling');
    },
    onComplete: function() {
        console.log('done scrolling');
    }
});



// Place any jQuery/helper plugins in here.
 new WOW().init();

