(function () {
    "use strict";

    /**
     * Utils
     */

    function applyProperties(target, properties) {
        for (var key in properties) {
            target.style[key] = properties[key];
        }
    }

    function init() {
        window.addEventListener('error', onError, false);
    }

    function onError(event) {
        console.log(event.error);

        event.preventDefault();
        event.stopPropagation();

        showBSOD();
    }


    function showBSOD() {

        var body = document.body,
            bsodContainer = document.createElement('div'),
            innerCt = document.createElement('div'),
            leftCt = document.createElement("div"),
            rightCt = document.createElement("div"),
            innerCtStyle = {
                'padding': "50px",
                'width': '100%',
                'height': '100%'
            },
            leftCtStyle = {
                width: "45%",
                display: "inline-block",
                'vertical-align': "top",
                'word-wrap': "break-word",

                transform: "rotate(-8deg)"
            },
            rightCtStyle = {
                width: "45%",
                display: "inline-block",
                'vertical-align': "top",

                'word-wrap': "break-word",
                transform: "rotate(8deg)"
            },
            bgStyles = {
                'font-family': "Impact, Charcoal, sans-serif",
                'font-size': "5em",
                'background': '#ff3d3d',
                'position': 'fixed',

                'top': '0px',
                'left': '0px',
                'width': '100%',
                'height': '100%',
                'color': '#fff'
            };

        leftCt.innerHTML =
            "Oh, crap!!! There is an error in your stupid code! Learn how to write JavaScript, you lame sh*t";
        rightCt.innerHTML = "The error is " + event.message +
            ", it happened in " + event.filename + " file, on line " +
            event.lineno;

        applyProperties(leftCt, leftCtStyle);
        applyProperties(rightCt, rightCtStyle);
        applyProperties(innerCt, innerCtStyle);
        applyProperties(bsodContainer, bgStyles);

        bsodContainer.appendChild(innerCt);
        innerCt.appendChild(leftCt);
        innerCt.appendChild(rightCt);
        body.appendChild(bsodContainer);
    }

    init();
})();
