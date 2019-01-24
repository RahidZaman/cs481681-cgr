# Ray Tracing Activity Worksheet

## YouTube Videos

- [Ray Tracing](https://www.youtube.com/watch?v=oo-aPeL4VSA)
- [Quake 2 Now fully ray traced](https://www.youtube.com/watch?v=0YYJwwSrwtg)

## Outline

- What is a ray?
- Ray-sphere intersection
- Camera rays
- Whitted Ray Tracing
- Programmable Ray Tracing

## Activities

Feel free to discuss your issues and solutions in the `#rendering` channel on Slack.

1. How would you implement the ray-sphere intersection algorithm in GLSL
2. How would you test this to make sure it works?
3. Peter Shirley argues in his book that you should use a non square buffer to test a ray tracer. Why reasons might there be for this?
4. How can we create camera rays for each pixel?
5. Find a ray tracer on [ShaderToy](www.shadertoy.com), what is the performance like?
6. The ray tracer we will be building on in this class is called **Sunfish**. Please look at `homework-template/examples/example4.js`, `raytracer.vert` and `raytracer.frag` for details.

## Graduate Student Activity

1. What are the calculations for computing refraction?
2. Whitted ray tracing suffers from increasing computational complexity because every ray intersection spawns a reflection ray, refraction ray, and shadow ray. What technique could we implement to remove this branching factor?
