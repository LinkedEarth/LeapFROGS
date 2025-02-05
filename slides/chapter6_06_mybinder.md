---
type: slides
---

<div><h1><img src="https://raw.githubusercontent.com/docker-library/docs/c350af05d3fac7b5c3f6327ac82fe4d990d8729c/docker/logo.png" alt="Docker Logo" width=25% align="left"/> Lesson 6<br>Using myBinder</h1></div>

---

## Setting Up Your Repository

Before using myBinder, your project should be in a public GitHub repository with the following:

* Your Python scripts or Jupyter notebooks.
* An `environment.yml` file specifying dependencies.

An example repository structure is shown below:

<div><h1><img src="https://github.com/LinkedEarth/LeapFROGS/blob/main/static/module6/FileStructure.png?raw=true" alt="GitHub repository structure" width=50% align="center"/></h1></div>

---

## Linking the Repository to myBinder

1. Go to [myBinder.org](https://mybinder.org).
2. Enter your GitHub repository URL.
3. Set the branch to main (or the relevant branch name).
4. Ensure Path to a notebook file is correct (e.g., notebooks/analysis.ipynb).
5. Click Launch. myBinder will build your environment and provide a link for sharing.

<div><h1><img src="https://github.com/LinkedEarth/LeapFROGS/blob/main/static/module6/myBinder.png?raw=true" alt="myBinder" width=50% align="center"/></h1></div>

---

## Creating a myBinder Badge

To allow others to easily launch your environment, add a myBinder badge to your repository’s README.md.

`[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/username/repository/main)`

Replace `username` and `repository` with your **GitHub username** and **repository name**.

---

## Testing and Debugging Common Issues

### Binder Takes Too Long to Build

Solution: Reduce dependencies in `environment.yml`. Try removing heavy packages or installing them via pip instead.

### Notebook Kernel Died Unexpectedly

Solution: Ensure jupyter is included in environment.yml and that Python version compatibility is correct.

### Binder Build Fails Due to Package Conflicts

Solution:
* Use conda lock to generate a lockfile that ensures package versions work together.
* Manually check for conflicts using: `conda install --dry-run <package-name>`