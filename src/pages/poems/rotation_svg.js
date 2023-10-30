const constrain = 20;
let calcX, calcY, svg_media;

function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    calcX = -(y - box.y - (box.height / 2)) / constrain;
    calcX < 0 ? -1 * (calcX % 360 + 1) : (calcX % 360 + 1);
    calcY = (x - box.x - (box.width / 2)) / constrain;
    calcY < 0 ? -1 * (calcY % 360 + 1) : (calcY % 360 + 1);

    return "perspective(100vw) translateZ(50px)"
        + "   rotateX(" + calcX + "deg) "
        + "   rotateY(" + calcY + "deg) ";
};

function transformElement(el, xyEl) {
    el.style.transform = transforms.apply(null, xyEl);
}

function OnMouseMove(event) {
    const xy = [event.clientX, event.clientY];
    svg_media = event.target;
    svg_media.style.transform = "perspective(100vw) translateZ(50px)"
        + "   rotateX(" + calcX + "deg) "
        + "   rotateY(" + calcY + "deg) ";
    const position = xy.concat([svg_media]);

    window.requestAnimationFrame(function () {
        transformElement(svg_media, position);
    });
};

function OnMouseLeave(event) {
    const svg_media = event.target;
    svg_media.style.transform = "perspective(100vw) translateZ(50px)"
        + "   rotateX(" + 0 + "deg) "
        + "   rotateY(" + 0 + "deg) ";
};

export { OnMouseMove, OnMouseLeave }