let circle1 = document.querySelector('.circle1'),
    circle2 = document.querySelector('.circle2'),
    pos = 0;

animate1 = function (time) {
    pos += time / 1000;
    circle1.style.left = 47.5 + Math.sin(pos) * 49.5 + '%';
    circle1.style.top = 47.5 + Math.cos(pos) * 49.5 + '%';
},
    animate2 = function (time) {
        circle2.style.left = 47.5 + Math.cos(pos) * 49.5 + '%';
        circle2.style.top = 47.5 + Math.sin(pos) * 49.5 + '%';
    };

(function (x) {
    let frame = x.requestAnimationFrame ||
        x.webkitRequestAnimationFrame ||
        x.mozRequestAnimationFrame ||
        x.oRequestAnimationFrame ||
        x.msRequestAnimationFrame ||
        function (callback) {
            x.setTimeout(callback, 1000 / 60);
        },
        q = [],
        lastFrame,
        loop = function (timeStamp) {
            let i = q.length,
                // date instance is a fallback for setTimeout
                thisFrame = timeStamp || +new Date(),
                deltaT = thisFrame - lastFrame;

            // Do not render frames if too much time has ellapsed
            if (deltaT < 150)
            // Loop through all of our animations
                while (i)
                    // If an animation returns falsy, remove it from the queue
                    if (q[--i](deltaT) == 0)
                        q.splice(i, 1);

            // If there are still animations in the queue, continue to loop
            if (q.length) {
                lastFrame = thisFrame;
                frame(loop);
            }
        };

    // public API
    // @input function( msBetweenFrames //integer )
    newAnimate = function (cb) {
        // Add animation to the queue
        // If this is the first animation, kickstart the loop
        if (q.push(cb) == 1) {
            lastFrame = +new Date();
            frame(loop);
        }
    };

})(window);

window.newAnimate(animate1);
window.newAnimate(animate2);