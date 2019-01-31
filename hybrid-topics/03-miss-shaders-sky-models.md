# Miss Shaders & Sky Models Activity Worksheet

[PDF version of this document](pdfs/03-miss-shaders-sky-models.pdf)

## YouTube Video(s)

- [Miss Shaders and Sky Models](https://www.youtube.com/watch?v=PUF8OrbQLpc)
- [Hosek-Wilkie Cube Map](https://www.youtube.com/watch?v=aCR74npawFk)
- [Hosek-Wilkie Cylinder Map](https://www.youtube.com/watch?v=DKjquLIe-d4)

## Outline

- Ray Tracing Pipeline
- Miss Shaders
- Sky Models
- Frame of Reference

## Activities

1. Try your hand at verifying the sun's position. From the Preetham et al. paper, appendix A.6 has the sun's position given by the equations

$$t = t_s + 0.170 \sin \left(\frac{4\pi(J-80)}{373}\right) - 0.129 \sin \left(\frac{2\pi(J-8)}{355}\right) + \frac{12(SM-L)}{\pi} $$

$$\delta = 0.4093 \sin\left(\frac{2\pi(J-81)}{368}\right)$$

$$\theta_s = \frac{\pi}{2} - \arcsin \left( \sin l \sin \delta - \cos l \cos \delta \cos \frac{\pi t}{12}\right)$$

$$\phi_s = \arctan \left( \frac{-\cos \delta \sin \tfrac{\pi t}{12}}{\cos l \sin \delta - \sin l \cos \delta \cos \tfrac{\pi t}{12}} \right)$$

| term              | math term  | units         |
| ----------------- | ---------- | ------------- |
| Solar zenith      | $\theta_s$ | radians       |
| Solar azimulth    | $\phi_s$   | radians       |
| Solar time        | $t$        | decimal hours |
| Standard time     | $t_s$      | decimal hours |
| Solar declination | $\delta$   | radians       |
| Standard meridian | $SM$       | radians       |
| Site latitude     | $l$        | radians       |
| Site longitude    | $L$        | radians       |
| Julian date       | $J$        | 1 to 365      |
| Zenith luminance  | $Y_z$      |               |
| Sky Luminance     | $Y_C$      |               |
| Overcast sky      | $Y_OC$     |               |

2. Calculate the sun's position for Fairbanks ($l=64.837, L=-147.716$) for January 1st, 2018 ($J=1$) at noon ($t_s = 12.0$).

3. Calculate the sun's position for Fairbanks for July 1st, 2018 ($J=182$).

4. The clear sky and overcast sky luminance as adopted as the CIE standard is given by

$$Y_C = Y_z \frac{(0.91 + 10e^{-3\gamma} + 0.45\cos^2\gamma)(1 - e^{-0.32/\cos \theta})}{(0.91 + 10e^{-3\theta_s} + 0.45\cos^2 \theta_s)(1 - e^{-0.32})}$$

$$Y_{OC} = Y_z \frac{(1 + 2\cos\theta)}{3}$$

5. Assume that $Y_z$ is the luminance at zenith (assume 1). What would be the luminance of the sky at vector $(1, 1, 1)^T$?

## Graduate Student Activities

1. [A Practical Analytic Model for Daylight](https://www.cs.utah.edu/~shirley/papers/sunsky/sunsky.pdf) by Preetham, Shirley, and Smits
2. [An Analytic Model for Full Spectral Sky-Dome Radiance](https://cgg.mff.cuni.cz/projects/SkylightModelling/HosekWilkie_SkylightModel_SIGGRAPH2012_Preprint_lowres.pdf) by Hosek and Wilkie
