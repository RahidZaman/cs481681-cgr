% Ray Tracing
% CS 481/681 Computer Graphics Rendering
% University of Alaska Fairbanks

## Ray Tracing

- Essential Ray Tracing Algorithms
- Ray Tracing Shaders
- Ray Intersection Algorithms
- Ray Object Traversal

## Ray Tracing Shaders

- Ray Generation Shader
- Miss Shader
- Closest Hit Shader
- Any Hit Shader
- Bounding Volume Hierarchy Processor

## Ray Intersection Algorithms

- Ray Sphere Intersection
- Ray Plane Intersection

## Ray Object Traversal

```
h <- HITRECORD(cur_t = tmax)
Loop through object list
    t <- INTERSECT(ray, object)
    IF t < tmin THEN CONTINUE
    IF t > tmax THEN CONTINUE
    IF t > cur_t THEN CONTINUE
    cur_t <- t
    ANYHIT_SHADER(h)
END LOOP
IF cur_t != tmax THEN CLOSEST_HIT_SHADER(h)
ELSE MISS_SHADER(h)
```

## Hybrid Topics

- Miss Shaders and Sky Models
