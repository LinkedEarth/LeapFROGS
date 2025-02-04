---
type: slides
---

<div><h1><img src="https://raw.githubusercontent.com/docker-library/docs/c350af05d3fac7b5c3f6327ac82fe4d990d8729c/docker/logo.png" alt="Docker Logo" width=25% align="left"/> Lesson 4<br>Encapsulating computational environment</h1></div>

---

## Why use and Environment file?

* **Ensure reproducibility**: Others can recreate the exact environment.
* **Manage dependencies efficiently**: Prevent version conflicts.
* **Facilitate collaboration**: Share the same computing setup across teams.
* **Enable containerization**: Compatible with Docker, Binder, and cloud workflows.

---

## Choosing the right format

In Python, you have a few options. You can go through Conda (`environment.yml`) or pip (`requirements.txt`)

<div><h1><img src="https://github.com/LinkedEarth/LeapFROGS/blob/main/static/module6/envvsreq.png?raw=true" alt="environment.yml vs requirements.txt" width=50% align="center"/></h1></div>

### Recommendation

* Use `environment.yml` for complex environments, especially if using scientific libraries that require system dependencies (e.g., `gdal`, `hdf5`).
* Use `requirements.txt` if you only need pure Python packages (e.g., numpy, pandas).

---

## Working with Conda

### Example of an `environment.yml` file

<div><h1><img src="https://github.com/LinkedEarth/LeapFROGS/blob/main/static/module6/environmentfile.png?raw=true" alt="environment file example" width=50% align="center"/></h1></div>

---

### Best practices with Conda

* **Pin versions only when necessary**. The more you pin, the harder it gets to find a configuration flexible enough (i.e., without conflicts) to build the environment. For instance, pin python=3.10 (to ensure compatibility), but avoid unnecessary pinning like numpy=1.23.1 unless required.
* **Use conda-forge as a primary channel**. Conda-forge offers more up-to-date and stable packages for scientific computing.
* **Include pip section if mixing pip and Conda packages**. If a package is not available in Conda, list it under pip.
* **Organize dependencies logically**. Place core packages first (Python, NumPy, Pandas), followed by visualization tools, domain-specific libraries, and pip-only dependencies.

### Tips for Cross-Platform Compatibility

* Use conda-forge: More consistent package availability across OS.
* Avoid OS-specific packages (e.g., mkl can be Windows-specific, prefer openblas).
* Do not include platform-specific builds: Instead of numpy=1.21.0=py38hdbf815f_0, use numpy=1.21.0 (without build ID).

---

### Creating and Using the environment

Conda makes it easy to create `environment.yml` file and share them. You can find a tutorials on [creating environment file](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#sharing-an-environment) and [building from them](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#creating-an-environment-from-an-environment-yml-file) in the Anaconda documentation. 

---

## Working with pip

### Example of an `requirements.txt` file

<div><h1><img src="https://github.com/LinkedEarth/LeapFROGS/blob/main/static/module6/requirements.png?raw=true" alt="requirements file example" width=50% align="center"/></h1></div>

---

### Best practices with pip

* **Use `>=` instead of `==` where possible.** Example: pandas>=1.3.0 allows flexibility, while pandas==1.3.0 forces an exact version, which may cause conflicts.
* **Sort dependencies alphabetically.** Makes it easier to find and update packages.
* **Separate development dependencies.** Create a `requirements-dev.txt` for testing tools, linters, etc.
* **Freeze versions when sharing exact dependencies** Use pip freeze to generate a fully reproducible file: `pip freeze > requirements.txt`

### Tips for Cross-Platform Compatibility

* Avoid OS-specific wheels (e.g., don’t include matplotlib-3.5.1-cp39-win_amd64.whl).
* Use platform-independent package management: Prefer pip install numpy over installing system dependencies like apt-get install libblas.
* Ensure Unicode compatibility

---

### Installing from `requirements.txt`

1. Create a virtual environment: `python -m venv my_env`
2. Activate the environment:
  * macOS/Linux: `source my_env/bin/activate`
  * Windows: `my_env\Scripts\activate`
3. Install dependencies: `pip install -r requirements.txt`

---

## Summary of Best Practices

<div><h1><img src="https://github.com/LinkedEarth/LeapFROGS/blob/main/static/module6/bestpractices.png?raw=true" alt="summary of best practices" width=50% align="center"/></h1></div>

---

## Handling GPU support

If your workflow requires GPU acceleration, you need to ensure that your environment includes the appropriate CUDA, cuDNN, and GPU-supported libraries. 

---

### Using Conda for GPU environments

Conda makes it easier to install GPU dependencies because it manages CUDA and cuDNN versions automatically.

#### Key points

* Use the nvidia channel for official NVIDIA CUDA libraries.
* Explicitly specify cudatoolkit and cudnn versions to match your GPU driver.
* Choose the correct framework (pytorch, tensorflow-gpu, jax, etc.) based on your needs.
* Use cupy for NumPy-like GPU operations (especially in geoscience computations).
* Avoid installing GPU dependencies via pip in Conda environments, as Conda manages GPU dependencies more reliably.

---

### Using pip for GPU environments

If using pip, you must install the CUDA-enabled versions of machine learning libraries.

#### Key points

* Use the correct CUDA-compatible PyTorch/TensorFlow wheels from their official sources.
* Install cupy-cudaXX (e.g., cupy-cuda11x) instead of plain cupy for GPU support.
* Ensure your system already has NVIDIA CUDA drivers installed (nvidia-smi should return details).
* Check compatibility between TensorFlow/PyTorch and CUDA versions before installation.

---

## Handling File System Differences

Operating systems handle file paths differently. Windows: Uses \ (backslash) while macOS/Linux uses / (forward slash). To handle these differences, you can do the following:
* Use os.path or pathlib instead of hardcoding paths.
* Avoid absolute paths (e.g., C:\Users\name\file.txt won’t work on macOS/Linux).
* Use tempfile (Python library) for temp file creation