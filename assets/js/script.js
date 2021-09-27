let scroll_text = document.getElementById("scroll-text");
window.addEventListener("scroll", scrollTextHandler);

// content box fading effect
let content_boxes = document.getElementsByClassName("content-box");
for (let i = 0; i < content_boxes.length; i++) {
    window.addEventListener("scroll", function() {
        let box = content_boxes[i];
        let rect = box.getBoundingClientRect();
        box.style.opacity = calculateOpacity(rect);
    });
}

function calculateOpacity(bounds) {
    var progress = getProgress(window.scrollY + window.innerHeight / 2, bounds.top + window.scrollY, bounds.bottom + window.scrollY);
    if (progress >= 0 && progress <= 1) {
        return clamp01(progress * 8) - clamp01((progress - 0.875) * 8);
    }
    
    return 0;
}

function getProgress(num, start, stop) {
    return (num - start) / (stop - start);
}

// scroll text fading effect
function scrollTextHandler() {
    scroll_text.style.opacity = clamp((250 - window.scrollY) / 250, 0, 1);

    if (scroll_text.style.opacity == 0) {
        scroll_text.style.display = "none";
    } else {
        scroll_text.style.display = "block";
    }
}

function clamp01(num) {
    return clamp(num, 0, 1);
}

function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}