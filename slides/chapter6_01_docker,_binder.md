---
type: slides
---

<div><h1><img src="https://raw.githubusercontent.com/docker-library/docs/c350af05d3fac7b5c3f6327ac82fe4d990d8729c/docker/logo.png" alt="Docker Logo" width=25% align="left"/> Lesson 1<br>Docker, Binder, and MyBinder</h1></div>

---
## Containers

[Docker containers](https://www.docker.com/resources/what-container/) are like lightweight, portable "mini-computers" that can run software. They package everything a program needs—like its code, tools, and settings—so it works the same way everywhere, whether on your laptop, a server, or the cloud. Think of it as a way to ship an app and all its ingredients in one tidy box, making it easy to use and consistent across different machines.

These virual environments can be thought of as a pyramid of requirements that support your workflow. An operating system and its libraries support a coding language and a few specific packages, which in turn support the script you wrote.

---

## Docker

Docker is the software that builds and runs containers. Podman is another, less commonly used, tool for working with containers.

Containers are built from images. Images are built from Dockerfiles or GitHub Actions (amoungst other options).

---

## Building a container image

A container image is typically built from a base image. For example, to run an R script that requires ggplot2 and dplyr one could pull:

* an Ubuntu image and install R, then install ggplot2 and dplyr
* a rocker image, which already contains Ubuntu and R, then install ggplot2 and dplyr
* the rocker/tidyverse image, which contains all the requirements to run your code

We will talk more about building containers in the next exercise. But, we can also automate the building on a container image through GitHub, using `Binder`.

---

## Binder


Binder is a set of tools that let you run code and explore projects directly in your web browser without needing to install anything on your computer. It takes the code and its required software setup (like libraries and dependencies) and creates a temporary, ready-to-use environment for you. It's like clicking a link to instantly open a working lab where you can test and play with code—perfect for sharing and collaborating on projects.

---

## Binder (cont.)

Binder requires a only a few tweaks to your repository to get started. You will need to define the language, language version, and the packages used (and their versions for some languages). Together, this is called the environment.

We will deploy the suite of Binder tools `myBinder` a free cloud resource.

---

## MyBinder

The relationship between Binder and [BindHub](https://github.com/jupyterhub/binderhub) is analagous to that of Git and GitHub, wherein the _Hub wraps the tools in a nifty user interface. [MyBinder](https://mybinder.org/) is a widely used, free instance on BinderHub.

MyBinder is a Binder UI and cloud resource that hosts containers. The platform allows users to share scripts in online IDEs (eg. Rstudio), interactive notebooks, (eg. Jupyter), and web apps (eg. Shiny).

---

## Getting started

You will learn more about implementing Binder in your repo in the last exercise.
