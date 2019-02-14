# CS 481/681 Computer Graphics Rendering

## Syllabus

- [Graduate Syllabus](cs681-cgr-s19-grad.pdf)
- [Undergraduate Syllabus](cs481-cgr-s19-undergrad.pdf)

## Instructor Site

[https://www.cs.uaf.edu/~jbmetzgar/](https://www.cs.uaf.edu/~jbmetzgar/)

## Homeworks, Hybrid Topics, and Slides

- The [homework worksheets](homeworks/index.md) are in the `homeworks` folder. The projects will be hosted at [https://www.cs.uaf.edu/~jbmetzgar/courses/cgr/S19/](https://www.cs.uaf.edu/~jbmetzgar/courses/cgr/S19/index.html).
- The Hybrid Topics [Activity Worksheets](hybrid-topics/index.md) are in the `hybrid-topics` folder.
- The [class slides](slides/index.md) are in the `slides` folder. A "notes" version can be viewed with the Markdown file which is used to create the Powerpoint version.

## Videos

| Week  | Topic/Link                                                                    |
| :---: | :---------------------------------------------------------------------------- |
|   1   | [Class 1 Live Stream](https://www.youtube.com/watch?v=HFiOrONmx4c)            |
|   1   | [Computer Graphics Crash Course](https://www.youtube.com/watch?v=COD96gGCV2Y) |
|   2   | [Class 2 Live Stream](https://youtu.be/kFiOFk4555w)                           |
|   2   | [Ray Tracing](https://www.youtube.com/watch?v=oo-aPeL4VSA)                    |
|   3   | [Class 3 Live Stream](https://www.youtube.com/watch?v=mwc7csBs3wY)            |
|   3   | [Miss Shaders and Sky Models](https://www.youtube.com/watch?v=PUF8OrbQLpc)    |
|   4   | [Class 4 Live Stream](https://youtu.be/h6dvnKKwPy4)                           |
|   4   | [Any Hit Shaders and Shadows](https://youtu.be/lj-M0Nc6qVc)                   |
|   5   | [Closest Hit Shaders & BRDFs](https://youtu.be/_Xxkosq7vxk)                   |
|   6   | [Global Illumination & Spherical Harmonics]()                                 |
|   7   | [Signed Distance Functions & Creative Synthesis]()                            |
|   8   | [Acceleration Structures]()                                                   |
|  10   | [Shadow Mapping and Shadow Volumes]()                                         |
|  11   | [Realtime Rendering]()                                                        |
|  12   | [Post Processing]()                                                           |
|  13   | [Miscellaneous Topics]()                                                      |
|  14   | [Final Presentations]()                                                       |

## LibXOR Library

The examples for this and other classes is located in the [LibXOR repository](https://www.github.com/microwerx/libxor/).

## Setting up for Graphics

1. Install [Visual Studio Code](code.visualstudio.com)
2. Install [Node.js](www.nodejs.org)
3. Install web development tools with `npm`
4. Do not install the node that comes with your default Linux system

```
$ npm install -g typescript eslint tslint lite-server concurrently
```

- TypeScript is a compiler `tsc`
- `eslint` and `tslint` provide warnings and fixes
- `lite-server` is a lightweight http server
- `concurrently` is a tool to run several node tools at once
- Now you can `npm start`

## Setup Visual Studio Code for Web Development

Install these plugins

- TSLint
- ESLint

## Good Graphics Links

- [WebGL 1.0 Quick Reference Card](https://www.khronos.org/files/webgl/webgl-reference-card-1_0.pdf)
- [Ray Tracing in One Weekend](https://github.com/petershirley/raytracinginoneweekend) by Peter Shirley
- [An Introduction to Ray Tracing](http://www.realtimerendering.com/blog/an-introduction-to-ray-tracing-is-now-free-for-download/) edited by Andrew Glassner