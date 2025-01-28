---
title: 'Module 6: Sharing Reproducible Workflows'
description:
  "This module provides fundamental information about using containers to share your research."
prev: /module5
next: null
type: chapter
id: 6
---



<exercise id="1" title="Reproducible workflows and open science">

Sharing reproducible scientific workflows involves creating, documenting, and disseminating processes, tools, and data that allow others to fully understand, replicate, and extend your scientific work. It includes the following components:

* **Transparency**: Clearly document every step of your research process, from data collection and preprocessing to analysis and visualization. This ensures others can see exactly what was done. One of the most effective way to do so is to use electronic notebooks such as Jupyter Notebooks or RMarkDown. If not using these technologies, it is highly recommended to document the steps in a ReadMe file showing which scripts to invoke with the appropriate input and what outputs are expected. Remember that doing science is not simply about whether the code executes but also that it provides the right output. So make sure to describe what is expected (e.g., an increasing trend or a tolerance level less than 10).
* **Documentation**: Provide comprehensive metadata, annotations, and instructions for using your workflow, including dependencies, software versions, and any assumptions made during analysis.
* **Automation**: Use tools like scripts or workflow managers to automate processes, reducing the likelihood of errors and ensuring consistent results. We have talked about GitHub actions in the Github lecture. Another concept is continuous integration, which we will cover in a subsequent module. 
* **Open Tools and Standards**: Share code, software, and data in widely accessible formats using platforms like GitHub, Zenodo, or institutional repositories.
* **Reusability**: Design workflows to be modular and generalizable, so they can be adapted to other datasets or research questions.
* **FAIR Principles**: Ensure workflows and data adhere to principles of being Findable, Accessible, Interoperable, and Reusable.

A way to meet all of these requirements is to serve your code through a container, which we will cover in this module. 

</exercise>

<exercise id="2" title="Introduction to Docker, Binder and myBinder" type="slides">

<slides source="chapter6_01_docker,_binder">

</exercise>

<exercise id="3" title="Container repositories" type="slides">

<slides source="chapter6_03_ContainerRepo">

</exercise>

<exercise id="4" title="Encapsulating your computational environment" type="slides">
 
</exercise>

<exercise id="5" title="Creating Docker Containers" type="slides">

<slides source="chapter6_05_CreatingContainer">
 
</exercise>

<exercise id="6" title="Using Binder and myBinder" type="slides">
 
</exercise>

<exercise id="7" title="Test your understanding">

What best describes a container in the context of computing?

<choice id="06-01">
<opt text="A virtual machine that emulates an entire operating system.">
A virtual machine (VM) emulates an entire operating system, which includes the kernel and hardware abstraction, making it heavier and slower than containers. Containers share the host OS kernel, making them lightweight.
</opt>
<opt text="A lightweight, portable unit that packages software and its dependencies.", correct=True>
Containers package an application and its dependencies into a portable unit, ensuring consistency and reproducibility across different computing environments.
</opt>
<opt text="A hardware device used to store large datasets securely.">
Containers are not hardware devices. They are software-based and unrelated to physical storage devices.
</opt>
<opt text="A protocol for transferring data between servers.">
Containers are not protocols; they are environments for running software in isolated and reproducible conditions.
</opt>
</choice>

What best describes Binder in the context of computational workflows?

<choice id="06-02">
<opt text="A tool for version control and collaboration on code repositories.">
Version control tools like Git handle collaboration and tracking changes in code. Binder focuses on creating live, executable environments.
</opt>
<opt text="A software library for managing dependencies in a project.">
Tools like Conda or pip manage dependencies; Binder uses these specifications to set up environments but is not itself a dependency manager.
</opt>
<opt text="A service that creates shareable, interactive environments for running code.", correct=True>
Binder is designed to take a GitHub repository with code and environment specifications (e.g., `environment.yml`) and create a live, interactive environment that can run the code, often in Jupyter notebooks.
</opt>
<opt text="A hardware-based solution for executing high-performance computations.">
Binder is a cloud-based service, not a hardware solution.
</opt>
</choice>

What is the primary purpose of a container repository?

<choice id="06-03">
<opt text="To provide cloud storage for large datasets.">
Container repositories are not used for storing datasets. They store container images, which are pre-packaged environments for running software.
</opt>
<opt text="To manage and execute containers in a high-performance environment.">
Container execution is handled by runtime environments like Docker or Kubernetes, not by the repository itself.
</opt>
<opt text="To store, distribute, and share container images.", correct=True>
A container repository, such as DockerHub or Quay.io, serves as a central platform to store and share container images, enabling reproducibility and collaboration.
</opt>
<opt text="To create and package containers based on environment files.">
Containers are built locally or through automation workflows (e.g., GitHub Actions), and the repository is used to store and distribute the finished container images.
</opt>
</choice>

What is the best way to encapsulate a computational environment to ensure reproducibility and ease of sharing across different systems?

<choice id="06-04">
<opt text="Manually list the installed packages in a text file.">
Manually listing packages is prone to errors, omissions, and inconsistencies, making it unreliable for reproducibility.
</opt>
<opt text="Provide a written guide for users to install the necessary software on their own systems.">
While guides may help, they rely on users manually following instructions, leading to potential inconsistencies and wasted time.
</opt>
<opt text="Save the entire operating system state as a virtual machine.">
Saving an entire operating system as a virtual machine is overkill for most workflows and much less efficient than using environment files or containers.
</opt>
<opt text="Use a standardized environment file to define all dependencies and their versions.", correct=True>
A standardized environment file (e.g., `environment.yml` for Conda or `requirements.txt` for Python, and `.Rprofile` or `.lock` files in R) is the best approach for defining all dependencies, versions, and configurations in a structured, machine-readable format. This ensures reproducibility and allows others to recreate the exact environment.
</opt>
</choice>

What is the correct process to create a Docker container for your computational workflow?

<choice id="06-05">
<opt text="Write an environment file, upload it to DockerHub, and the container will be created automatically.">
DockerHub is a repository for storing and sharing container images, but it does not create containers automatically from an environment file.
</opt>
<opt text="Install Docker, write a Dockerfile defining the environment and dependencies, then build the container using Docker commands.", correct=True>
To create a Docker container, you define the environment, dependencies, and steps in a Dockerfile. This file acts as a blueprint for building the container. The docker build command then packages everything into an image, which can be run as a container.
</opt>
<opt text="Use a graphical user interface (GUI) in Docker to manually install dependencies into a container.">
Docker does not provide a GUI for manually creating containers; the process relies on command-line tools and scripts for reproducibility.
</opt>
<opt text="Copy all your project files into a virtual machine and export it as a Docker image.">
Virtual machines are not the same as containers. Docker containers are lightweight and created using Dockerfile, not virtual machine snapshots.
</opt>
</choice>

What is the primary purpose of `myBinder` in scientific workflows?

<choice id="06-06">
<opt text="To provide an interactive, shareable environment for running code from a GitHub repository.", correct=True>
myBinder turns a GitHub repository into an interactive environment that runs in the cloud. It is especially useful for sharing reproducible scientific workflows or teaching materials that others can run without local setup.
</opt>
<opt text="To manage dependencies and package software for computational workflows.">
While you can share code results using tools like Jupyter notebooks, myBinder’s purpose is to provide live, interactive environments, not static reports.
</opt>
<opt text="Use a graphical user interface (GUI) in Docker to manually install dependencies into a container.">
Tools like Conda or pip manage dependencies, but myBinder uses these to build environments for execution rather than managing the dependencies itself.
</opt>
<opt text="To secure large-scale data storage for research projects.">
myBinder is not designed for storing data but for providing executable computational environments.
</opt>
</choice>

</exercise>

<exercise id="8" title="Hands-on exercise">

Using an existing repository (e.g., the one you created in Module 5):

1. Create an environment file (you may do so by using branches for practice)

2. Set up your notebook using [myBinder](https://mybinder.org). Make sure that your notebook executes on the site. Sometimes this requires a lot of trial and error.

3. Update your README with a myBinder badge for a one-click sharing of your workflows.

4. Using a GitHub action, create a Docker container and make it available on [Quay.io](https://quay.io). You may use this [workflow file](https://github.com/LinkedEarth/Pyleoclim_util/blob/master/.github/workflows/build.yml)
as an inspiration. 

5. Update your README with instructions on how to run the Docker container. Make sure it works on your machine as well!

</exercise>