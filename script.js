document.querySelectorAll(".openPop").forEach(button => {
    button.addEventListener("click", (event) => {
        event.stopPropagation();
        const popupId = button.getAttribute("data-popup");
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.classList.add("open");
            console.log("open");
        }
    });
});

window.onclick = function(event) {
    const popups = document.querySelectorAll(".popup");
    popups.forEach(popup => {
        if (popup.classList.contains("open") && !popup.contains(event.target)) {
            popup.classList.remove("open");
            console.log("close");
        }
    });
}

function goToPageB() {
    console.log("test");
    function createBubble(){
        console.log('test2');
        const section = document.querySelector('section');
        const createElement = document.createElement('span');
        var size = Math.random()*500;

        createElement.style.width = size + 'px';
        createElement.style.height = size + 'px';
        createElement.style.left = Math.random()*innerWidth+ "px";
        section.appendChild(createElement);

        setTimeout(()=>{
            createElement.remove();
        }, 4000);
    }
    setInterval(createBubble,0.0001);
    setTimeout(() => {
        window.location.href = 'seafloor.html';
    }, 1000);
}

var audio = document.getElementById("audioEffect");
audio.volume = 0.3;