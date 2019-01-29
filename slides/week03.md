% Ray Tracing
% CS 481/681 Computer Graphics Rendering
% University of Alaska Fairbanks

## Ray Tracing

- Essential Ray Tracing Algorithms
- Ray-Surface Intersection Algorithms
- Surface Physics
- Realtime Ray Tracing

## Essential Algorithms

- Ray-Sphere Intersection
- Ray-Plane Intersection
- Ray-Box Intersection
- Ray-Quadric 

## Ray Tracing Shaders

- Ray Generation Shader
- Miss Shader
- Closest Hit Shader
- Any Hit Shader
- Bounding Volume Hierarchy Processor

## Ray Sphere Intersection

## Ray Plane Intersection

## BVH Traversal

- INIT HITRECORD h(cur_t = tmax)
- Loop through object list
- t <- INTERSECT(ray, object)
- IF t < tmin THEN CONTINUE
- IF t > tmax THEN CONTINUE
- IF t > cur_t THEN CONTINUE
- cur_t <- t
- ANYHIT SHADER
- END LOOP
- IF cur_t != tmax THEN CLOSEST HIT SHADER
- ELSE MISS SHADER

### Hybrid Topics

- Signed Distance Functions
