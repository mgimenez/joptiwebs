(function(win, doc){
    'use strict';

    var mainNav = doc.querySelector(".main-nav"),
        elemToScroll = isMobile() ? doc.body : doc.querySelector("main"),
        to;
    
    mainNav.addEventListener("click", function(e) {

        if (e.target.nodeName === 'A') {
            e.preventDefault();
            var querySection = e.target.getAttribute('href'),
                sectionElement = doc.querySelector(querySection),
                rest = isMobile() ? 55 : 0;


            to = (sectionElement.id === 'home') ? 0 : sectionElement.offsetTop - rest;



          scrollTo(elemToScroll, to, 500);
        }
    }, false)

    function scrollTo(element, to, duration) {
        if (duration < 0) return;
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 10;

        setTimeout(function() {
            element.scrollTop = element.scrollTop + perTick;

            if (element.scrollTop == to || element.offsetHeight + element.scrollTop + 1 >= element.scrollHeight) return;
            scrollTo(element, to, duration - 10);
        }, 10);
    }

    function isMobile() {
        return (screen.width < 960);
    }

    /**
     * Sticky header on top for mobile
     */
    win.addEventListener('scroll', function(e) {
        console.log(e.target.body.scrollTop);
        if (e.target.body.scrollTop >= 165) {
            doc.querySelector('.left-panel').classList.add('fixed');
        } else {
            doc.querySelector('.left-panel').classList.remove('fixed');
        }
    })

})(window, window.document);