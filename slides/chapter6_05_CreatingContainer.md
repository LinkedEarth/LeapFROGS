---
type: slides
---

<div><h1><img src="https://raw.githubusercontent.com/docker-library/docs/c350af05d3fac7b5c3f6327ac82fe4d990d8729c/docker/logo.png" alt="Docker Logo" width=25% align="left"/> Lesson 5<br>Creating Containers</h1></div>

---

## Dockerfile


A Dockerfile is a plain text script with instructions to build a Docker image, automating the setup of a consistent and portable environment for applications. All Dockerfiles define a base image from which to start. Upon the base image, files and dependencies are commonly added. Finally, the main process (or Entrypoint) is defined.

We will focus on building containers from GitHub. To gain more granular access you will want to read the full documentation for building with Dockerfiles [here](https://docs.docker.com/get-started/docker-concepts/building-images/).

---

## Creating Containers with GitHub Actions

### Why use GitHub actions?

* GitHub Actions automates workflows directly from your GitHub repository.
* It can automatically build and push containers to repositories like DockerHub or Quay.io whenever you update your project.

---

### Key Steps

1. Prepare Your Repository

Ensure your repository includes:

* Code or scripts: Your analysis or workflow files.
* Environment file (e.g., environment.yml): Lists dependencies for the container.

---

2. Set Up a GitHub Actions Workflow

* **Create the Workflow File**: Add a YAML file in `.github/workflows/`, for example, `build-container.yml`.
* Example Workflow: [Here](https://github.com/LinkedEarth/LeapFROGS/blob/main/static/module6/build-container.yml)’s a minimal GitHub Actions workflow to create a container using the environment.yml file. 

Have a look at the file and click on the next slide to learn more about some of the key features. 

---

### Key features

1. Repository Integration: 
  * Automatically builds and pushes a container image to Quay.io whenever changes are pushed to the main branch.
  * Seamlessly integrates with GitHub, ensuring your environment stays up-to-date with your codebase.
2. Environment-First Workflow:
  * Uses the `environment.yml` file
3. Secure Authentication:
  * Leverages [GitHub Secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions) for securely storing and using Quay.io credentials (`QUAY_USERNAME` and `QUAY_PASSWORD`).
4. Pushes to Quay.io:
  * Automatically uploads the container image to your Quay.io repository with a customizable tag (e.g., `quay.io/<username>/my-geoscience-env:latest`).
5. Scalability:
  * Supports versioned containers by modifying the :latest tag (e.g., :v1.0.0).
  * Works with private and public repositories in Quay.io, catering to secure or open science projects.
6. Reproducibility:
  * By exporting and using the `environment.yml` file, collaborators can precisely reproduce your computational environment.

---

### Why This is Useful for Geoscientists

* Focuses on reproducible science without requiring deep technical knowledge of Docker.
* Makes sharing and collaboration on scientific workflows seamless.
* Ensures that complex dependencies (e.g., geoscience libraries) are bundled for consistent analysis across systems.

---

## What are GitHub secrets?

[GitHub Secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions) are a secure way to store sensitive information (e.g., passwords, API tokens, or access credentials) in your GitHub repository. They are encrypted and only accessible by workflows running in your repository.

### Why Use Them?
* **Security**: Secrets prevent sensitive data from being exposed in your code or workflow files.
* **Automation**: They allow workflows to authenticate with external services (e.g., DockerHub, Quay.io) securely.

---

### How to Set Up GitHub Secrets

1. Go to your GitHub repository.
2. Navigate to **Settings > Secrets and variables** and **Actions**.
3. Click `New repository secret`.
4. Enter a name (e.g., `QUAY_USERNAME`) and the secret value.
5. Save the secret.

---

### Using Secrets in Workflows

You can reference secrets in your GitHub Actions workflow like this:

```
with:
  username: ${{ secrets.QUAY_USERNAME }}
  password: ${{ secrets.QUAY_PASSWORD }}
```

