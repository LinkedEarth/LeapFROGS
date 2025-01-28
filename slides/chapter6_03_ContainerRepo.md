---
type: slides
---

<div><h1><img src="https://raw.githubusercontent.com/docker-library/docs/c350af05d3fac7b5c3f6327ac82fe4d990d8729c/docker/logo.png" alt="Docker Logo" width=25% align="left"/> Lesson 3<br>Overview of Container Repositories for Geoscientists</h1></div>

---

## What is a Container Repository?

* **Reproducibility**: By sharing your container in a repository, others can easily replicate your work by running the exact same environment.
* **Collaboration**: Collaborators and peers can pull your container, ensuring consistency in software and dependencies.
* **Convenience**: Instead of sending bulky files or detailed setup instructions, you share a link to your container. You may also include some basic instructions on how to run it. 

---

## Key Repositories: DockerHub and Quay.io

### [DockerHub](https://www.docker.com/products/docker-hub/)

* **What It Is**: The most widely used container repository. It's integrated with Docker and offers public and private repositories.
* **Why Use It**:
  * Easy to share containers with collaborators.
  * Built-in search for popular scientific tools or pre-built containers.
  * Free tier available for public repositories.
* **How It Works**:
  * ***Push***: Once you've built a container, upload (push) it to DockerHub.
  * ***Pull***: Collaborators or users download (pull) the container to use on their systems.

---

### [Quay.io](https://quay.io)

* **What It Is**: Another container repository, popular in academic and open-source communities.  
* **Why Use It**:
  * More robust options for image security and scanning.
  * Often preferred for high-performance computing (HPC) and large-scale workflows.
* **How It Works**:
  * Similar to DockerHub, you can push and pull containers.
  * Enhanced metadata and security tools for managing container versions.

---

### When to Use Which?

1. **DockerHub**: If you're just starting or want a simple, widely supported platform for public sharing.
2. **Quay.io**: If your research involves sensitive data, requires more security, or integrates with advanced tools. It also offers more free options

---

## Examples in Geoscience

* **Reproducible Workflows**: Publish a container with the exact versions of Python, R, and climate modeling libraries.
* **Collaborative Projects**: Share a container for a specific analysis, ensuring that collaborators on different systems use the same tools.
* **Educational Modules**: Use containers for teaching geoscience students to run complex workflows without needing to install software.


