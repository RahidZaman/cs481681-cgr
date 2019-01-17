# Computer Graphics Crash Course

## YouTube Screencast Video

Here is the YouTube video with this week's material:

[https://www.youtube.com/watch?v=COD96gGCV2Y](https://www.youtube.com/watch?v=COD96gGCV2Y)

## Outline

1. Vectors
2. Matrices
3. Transformations
4. WebGL Pipeline
5. Shaders

## Activities

Feel free to discuss your issues and solutions in the `#rendering` channel on Slack.

- Create a WebGL application from scratch using HTML and JavaScript. You may reference the [Mozilla tutorial](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial) to help you.
- Examine the Vector3.ts and Matrix4.ts files to see how different mathematical operations are performed.
- Create a simple JavaScript library that you can include in your HTML file. Later we will begin using the LibXOR library to help perform many graphics tasks.
- Install VS Code and Node.js and practice using `lite-server`.

```javascript
// yourlibrary.js
function pi() {
    // do something
    return 3.14159;
}
```

```javascript
// app.js
class App {
    constructor() {
        this.t1 = 0;
        this.t0 = 0;
        this.dt = 0;
        this.canvas = null;
        this.gl = null;
    }

    init() {
        this.canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        this.canvas.width = 640;
        this.canvas.height = 480;
        this.gl = canvas.getContext("webgl");
    }

    update(dtInSeconds) {

    }

    draw() {
        let gl = this.gl;
        gl.clearColor(Math.abs(Math.sin(this.t1)) * 1.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }

    mainloop() {
        let self = this;
        requestAnimationFrame((t) => {
            let tSeconds = t / 1000.0;
            self.t0 = self.t1;
            self.t1 = tSeconds;
            self.dt = self.t1 - self.t0;
            self.update(self.dt);
            self.draw();
            self.mainloop();
        });
    }
}
```

```html
<html>
<!-- head and other stuff -->
<body>
<script src="yourlibrary.js"></script>
<script src="app.js"></script>
<script>
// your code here
let foo = pi();
let app = new App();
app.init();
app.mainloop();
</script>
</body>
</html>
```

## Graduate Student Activity

If you are a graduate student, please complete the following items. Feel free to post your solutions in the `#rendering` channel on Slack.

1. Using the projection matrix, what is the range of Z values that will be output if the following $z_{\text{near}}$ and $z_{\text{far}} values are chosen?

   a. `znear = 0.001` and `zfar = 1000.0`

   b. `znear = 0.1` and `zfar = 100.0`

   c. `znear = 1.0` and `zfar = 10.0`

2. What libraries or applications are commonly used for doing WebGL graphics?