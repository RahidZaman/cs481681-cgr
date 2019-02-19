% Closest Hit Shaders & 
% CS 481/681 Computer Graphics Rendering
% University of Alaska Fairbanks

## Overview

- Review the Ray Tracing Pipeline

## Ray Tracing Pipeline

![](images/ray-tracing-pipeline.png)

## Closest Hit Shaders

- Reflection
- Refraction
- Shadow Rays

## Bidirectional Reflectance Distribution Functions

- Specular
  - Phong
  - Blinn-Phong
  - Cook-Torrance
  - GGX
- Diffuse
  - Lambert's cosine law ($N \cdot L$)
  - Oren-Nayer
  - Disney Diffuse BRDF

## Frame of Reference

| Vector            | Shading | Path Tracing |
| :---------------- | :-----: | :----------: |
| Geometric normal  |   $N$   |  $\omega_g$  |
| View direction    |   $V$   |  $\omega_o$  |
| Light direction   |   $L$   |  $\omega_i$  |
| Hemisphere        |         |   $\Omega$   |
| Half-angle vector |   $H$   |  $\omega_h$  |
| Reflection vector |   $R$   |  $\omega_r$  |
| Refraction vector |   $T$   |  $\omega_t$  |

## The Rendering Equation

$$
L_o (\mathbf{x} \to \omega_o) = L_e(\mathbf{x} \to \omega_o) + \int_\Omega f_r(\omega_i, \omega_o)\ L_i(\omega_i \to \mathbf{x})\ \langle \omega_i, \omega_o \rangle \ d\omega_i
$$

![](images/frame-of-reference.png)

## Paul Heckberts' Notation

- $E$ is eye
- $L$ is vector
- $S$ is specular interface
- $D$ is diffuse interface
- $LSE$ path is light-specular-eye path
- $L\lbrace SD \rbrace E$ path is light to a *single* specular/diffuse interface to eye
- $L\lbrace SD \rbrace ^+E$ path is light to *several* specular/diffuse interfaces to eye

## Physically Based BRDFs

- Conservation of Energy

$$\int_{\Omega} f_r(\omega_i, \omega)\ d\omega_i \le 1$$

- Helmholtz Reciprocity

$$f_r(\omega_i, \omega_o) = f_r(\omega_o, \omega_i)$$

- Positivity

$$f_r(\omega_i, \omega_o) \ge 0$$

- Conservation of visible projected area

$$\cos \theta_o = \int_\Omega G_1(\omega_o, \omega) \langle \omega_o, \omega \rangle D(\omega) d\omega$$

## Diffuse BRDFs

| Name       | BRDF                         | Description               |
| :--------- | :--------------------------- | :------------------------ |
| Lambertian | $f_r = \frac{\rho}{\pi}$           | Perfectly diffuse surface |
| Oren-Nayer | $\begin{aligned} f_r =& \frac{\rho}{\pi} (A + (B \cdot \max \left[ 0, \cos(\phi_i - \phi_o)\right] \cdot \sin \alpha \cdot \tan \beta)) \\ A=&1-0.5\frac{\sigma^2}{\sigma^2 + 0.33} \\ B =& 0.45 \frac{\sigma^2}{\sigma^2 + 0.09} \\ \alpha =& \max (\theta_i, \theta_o) \\ \beta =& \min (\theta_i, \theta_o) \end{aligned}$ | Dusty surfaces            |
| Disney     |                              | Velvety/Soft surfaces     |

## Hybrid Topics and Activity Worksheet

- Global Illumination
- Spherical Harmonics