let canvasContainer = document.getElementById('project');
if (!canvasContainer) {
    canvasContainer = document.createElement('div');
    document.body.appendChild(canvasContainer);
}
canvasContainer.style.textAlign = "center";
canvasContainer.style.width = "100%";
canvasContainer.style.marginLeft = "auto";
canvasContainer.style.marginRight = "auto";

let canvas = document.createElement('canvas');
canvasContainer.appendChild(canvas);
let h = (canvasContainer.clientWidth / 1.5) & 0xFFFE;
canvas.width = h * 1.5;
canvas.height = h;
canvas.style.borderRadius = "4";

window.addEventListener("resize", (e) => {
    canvasContainer.style.width = "100%";
    let h = (canvasContainer.clientWidth / 1.5) & 0xFFF8;
    if (canvas.height != h) {
        canvas.width = h * 1.5;
        canvas.height = h;
    }
    let log = document.getElementById('log');
    log.innerText = window.innerWidth.toString() + " / " + canvasContainer.clientWidth.toString() + " / " + canvas.width.toString() + "x" + canvas.height.toString();
});

let gl = canvas.getContext("webgl");

function mainloop() {
    window.requestAnimationFrame((t) => {
        gl.clearColor(0.3, 0.1, 0.15, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        mainloop();        
    });
}

mainloop();