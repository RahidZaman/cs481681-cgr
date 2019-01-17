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

- Create a WebGL application from scratch using HTML and JavaScript. You may reference the [Mozilla tutorial](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial) to help you.
- Examine the Vector3.ts and Matrix4.ts files to see how different mathematical operations are performed.
- Create a simple JavaScript library that you can include in your HTML file. Later we will begin using the LibXOR library to help perform many graphics tasks.

```javascript
// yourlibrary.js
function pi() {
    // do something
    return 3.14159;
}
```

```html
<html>
<!-- head and other stuff -->
<body>
<script src="yourlibrary.js"><script>
<script>
// your code here
let foo = pi();
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