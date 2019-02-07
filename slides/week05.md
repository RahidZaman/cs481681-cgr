% Any Hit Shaders and Shadows
% CS 481/681 Computer Graphics Rendering
% University of Alaska Fairbanks

## Any Hit Shaders and Shadows

- Ray Tracing Pipeline
- Any Hit Shaders
- Shadow Rays
- Participating Media

## Ray Tracing Pipeline

![Ray Tracing Pipeline](images/ray-tracing-pipeline.png)

## Any Hit Shaders

- This is executed after the intersection shader
- We have a hit, what do we do?
  - Alpha Testing?
  - Spawn new rays?
  - Kill the ray?

## Shadow Rays

- Whitted Ray Tracing
  - Reflection Rays
  - Refraction Rays
  - Shadow Rays
- Loop Over Every Light
  - If ray is blocked: we're in shadow
  - Else: calculate illumination
- So what kind of stuff is blocking?

## Participating Media

- Stuff that scatters light
- Translucent objects
- Participating media
  - Isotropic
  - Anisotropic
- Examples: marble, milk, skin, aerial perspective

## Types of Scattering

- Absorption
- Emission
- In-scattering
- Out-scattering
- Complications (Change of Phase, Spectral)

## Hybrid Topics and Activity Worksheet

- [Any Hit Shaders and Shadows](04-any-hit-shaders-shadows)