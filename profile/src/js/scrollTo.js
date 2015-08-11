(function(doc){
    'use strict';

    var mainNav = doc.querySelector(".main-nav"),
        main = doc.querySelector("main"),
        to;
    
    mainNav.addEventListener("click", function(e) {

        if (e.target.nodeName === 'A') {
            e.preventDefault();
            console.log(e.target.getAttribute('href'));
            var querySection = e.target.getAttribute('href'),
                sectionElement = doc.querySelector(querySection);

            to = sectionElement.offsetTop;

          scrollTo(main, to, 500);
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

})(this.document);