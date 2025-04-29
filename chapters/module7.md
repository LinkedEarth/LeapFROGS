---
title: 'Module 7: Packaging your software for sharing'
description:
  "This module provides fundamental information about packaging your research software."
prev: /module6
next: null
type: chapter
id: 7
---

<exercise id="1" title="To package or not to package">

This training introduces you to key concepts in software packaging. When talkning about software packaging, we really mean two things: **building** the package and **distributing** it to a registry.

# 1. What are packages?

A Python package is a way to organize related code by grouping modules into a structured directory. It consists of a folder with an `__init__.py` file and one or more Python modules, making it easier to manage, reuse, and share functionality—especially in larger projects. Think of packages as toolboxes that store useful tools like functions and classes. They can also include sub-packages for more complex organization. This [blog](https://www.geeksforgeeks.org/python-packages/) provides a high-level introduction to Python packages. 

# 2. Why package?

Publishing your code and packaging it properly benefits both you and the wider Python community. It helps grow the ecosystem of third-party tools and improves your code through user feedback. Packages make your code easier to use, maintain, and share—whether with colleagues, the public, or even your future self. Even if you don't plan to share your code, packaging it saves time by making it easier to reuse and update across projects, avoiding inefficient copy-paste practices and promoting cleaner, more maintainable code.

# 3. When not to package

That being said, packaging might not be necessary or beneficial in certain situations:

* **Small, single-file scripts**: For simple scripts that don't require complex organization or distribution, packaging can be an overkill. A single .py file might suffice.
* **Personal projects with limited scope**: If the code is solely for a specific project (e.g., reproducing a figure in an article), packaging might add unnecessary complexity.
* **Rapid prototyping and experimentation**: During the initial stages of development, packaging can slow down the iteration process. It's often more efficient to experiment with code in a simpler structure.
* **When platform-specific mechanisms are more suitable**: If you need to distribute shell scripts or other platform-specific files, using mechanisms like .deb or .rpm might be more appropriate than Python packages.
* **When avoiding dependencies is a priority**: If the goal is to have a self-contained script with minimal external dependencies, packaging might introduce unnecessary overhead.
* **When the code is tightly coupled to a specific environment**: If the code relies heavily on a particular system configuration or environment, packaging might not be the best way to ensure portability.
* **When the project is not generalized enough**: If the project is too specific or not valuable for the community to benefit from, it might not be worth the effort to package it for distribution.  As a rule of thumb, workflows for a single paper should not be packaged. However, the functions supporting the workflow may be. 

</exercise>

<exercise id="2" title="Sharing your package">

# 1. Software repositories

Code resides in a software repository. You want to make sure that the repository supports software evolution (such as tracking changes, version control and continuous integration) and supports groups of developers with tools such as issue tracking and project organization. Such a platform is GitHub, which you can learn to use [here](https://linked.earth/LeapFROGS/module5). There are other platforms as well, most based on git. 

# 2. Software registries

Unlike repositories, which support development, registries allow for your software to be discovered by capturing appropriate metadata. There are may software registries. Python has two main dedicated registries:
* [Pypi](https://pypi.org)(Python Package Index) is the official online repository for sharing and installing Python packages. Software shared on this registry can be managed through `pip`.
* [Anaconda](https://repo.anaconda.com) is a distribution of Python that simplifies package management and deployment, especially for data science and scientific computing. Software shared on this registry can be managed through `conda`.

</exercise>

<exercise id="3" title="Packaging your software">

# 1. Getting started

## User APIs

An API (Application Programming Interface) for a software package is the set of functions, classes, and methods that the package exposes for users to interact with its features—essentially, it's the public interface that lets others use the package without needing to understand its internal code.

### How to choose what you API should be

#### Focus on the user's needs

* Start with what the user wants to accomplish, not how the code works internally.
* Ask: What are the 3–5 core things someone will want to do with this package?
* Build an API around tasks, not just functions.

Example: If your package processes climate data, users might want load_data(), analyze_trends(), and plot_results()—not parse_csv(), fit_regression(), etc.

#### Choose the right abstractions

* Group related functionality under intuitive classes or modules.
* Don’t expose every internal function—just the ones that support your use cases cleanly.

Think: “What objects or concepts does my package revolve around?” Those are your API anchors. For instance, if you are working with tabular data, you may want to create an object that revolves around tables and design methods to filter by some criteria, append columns, remove rows... Such a library for Python already exists: `Pandas` and its table object is the `DataFrame`.

#### Make It Feel Native

* Design the API to feel "Pythonic" and familiar.
* Reuse common conventions (`fit`, `transform`, `predict`, `plot`) when appropriate.
* Follow the principle of least surprise: it should behave as users expect.

#### Flat is Better Than Nested (Usually)

* Don’t make users dive into deep submodules unless absolutely necessary.
* Expose the most useful functions at the top level of the package.

Instead of `from mypkg.tools.parsers.climate.csv import load_data`, offer `from mypkg import load_data`. This can be managed through the use the __init__ files at the top of each module. 

#### Decide Between a Functional vs. Object-Oriented API

* Use functions if tasks are independent and stateless.
* Use classes if there’s a natural object model (e.g., a `Model`, `Simulation`, or `Dataset`).

It’s okay to offer both if done cleanly—e.g., load_data() returns a `Data` object with methods like `.plot()`.

#### Prototype the API Before You Build It

* Write example usage (pseudocode or in a notebook) as if the package already existed.
* This helps clarify what feels natural vs. clunky.

Ask a colleague: Would you enjoy using this interface?

#### Think About Long-Term Maintenance

* Avoid exposing internals that you might want to change.
* Keep your API minimal but extensible.
* Think about how many dependencies (e.g., `Pandas`) you might have and whether these are maintained as your code evolves. The fewer, the better. If you only have one function that you need from a package, it might be better to rewrite it. The more maintained, the better. You don't want to integrate a package that do not have support for future versions of Python. 

Public APIs are promises. Once people depend on them, they are hard to break.

## Understanding package structure

Start your Python package with a simple, minimal setup—including basic pyproject.toml, setup.cfg, and README.md files—and gradually add details as your project evolves. This approach helps avoid common mistakes like missing dependencies and makes the process less overwhelming. Begin documenting and organizing your code early to clarify your goals.

To create a package, structure your project as a directory with an __init__.py file and modular Python files. You can add sub-packages for deeper organization. Use clear imports and expose key functions in your __init__.py to make the API intuitive and easy to access.

Here's a simple directory structure for a hypothetical climate analysis package. This package separates the user-facing API from the underlying functionality using submodules for clarity and maintainability.

climate_analysis/  
├── climate_analysis/  
│   ├── __init__.py            # Exposes the public API  
│   ├── api.py                 # User-facing functions  
│   ├── loader.py              # Data loading functionality  
│   ├── stats.py               # Climate statistics utilities  
│   ├── visualizer.py          # Plotting and visualization  
│   └── utils.py               # Internal helper functions  
├── tests/  
│   ├── __init__.py  
│   ├── test_api.py  
│   └── test_stats.py  
├── README.md  
├── pyproject.toml  
└── setup.cfg  

## Building your first package.

An excellent tutorial on Python Package Structure is provided by [PyOpenSci](https://www.pyopensci.org/python-package-guide/package-structure-code/intro.html). 

# 2. Telling users how to use your software

## Documentation

The documentation  is simply a record of what each function does, what are the inputs and outputs, and a minimally viable example, often with fake or simple data. Most software documentation are built from docstrings. An excellent tutorial on how to [build your package documentation](https://www.pyopensci.org/python-package-guide/documentation/index.html#). 

Note that one of the best ways to get started is to look at a documentation for a package you really like and emulate what they have done. One easy way to get started is to use [Sphinx](https://www.sphinx-doc.org/en/master/) and release it through [readthedocs.org](https://about.readthedocs.com/?ref=readthedocs.org). 

## Tutorials

Tutorials tend to go more in depth about the concepts and give examples about scientific workflows that can be constructed from the various functionalities. PyOpenSci provides a good overview on [tutorials](https://www.pyopensci.org/python-package-guide/documentation/write-user-documentation/create-package-tutorials.html). We recommend that you use annotated [Jupyer Notebook](https://jupyter.org) to describe the workflows that you can coalesce in a [Jupyter Book](https://jupyterbook.org/en/stable/intro.html). Jupyter Book can be made fully executable through [myBinder](https://mybinder.org) so your users can also experiment with your code. We provide a tutorial on how to setup and use myBinder [here](https://linked.earth/LeapFROGS/module6). 

Here is a list of tutorials maintained by LinkedEarth:
- [Tutorials for Pyleoclim](http://linked.earth/PyleoTutorials/intro.html), a sofware package for the analysis of paleoclimate data. 
- [Tutorials for PyLiPD](http://linked.earth/pylipdTutorials/intro.html), a software package to work with datasets in the LiPD format. 

Other science galleries you may want to look at:
- [PaleoBooks](http://linked.earth/PaleoBooks/index.html) is maintained by LinkedEarth and showcases workflows useful for paleoclimate sudies
- [Pythia Cookbooks Gallery](https://cookbooks.projectpythia.org), maintained by Project Pythia, provide example workflows on more advanced and domain-specific problems faced by the Pythia community (Big Data Geoscience).

# 3. Testing and continuous integration

Unit tests are essential for ensuring that each part of your code behaves as expected, making it easier to catch bugs early, maintain code quality, and safely refactor over time. Using a tool like [`pytest`](https://docs.pytest.org/en/stable/) simplifies writing and running tests by offering a clean, readable syntax and powerful features like fixtures and parameterized testing. It helps developers confidently validate their code and contributes to more reliable and robust software.

These tests can be run on your local machine or integrated into a software registry such as Github. This is called continous integration (CI).

To learn how to write tests in Python and use CI, have a look at [this tutorial](https://www.pyopensci.org/python-package-guide/tests/index.html) by PyOpenSci. 

# 4. Code review

Code review is a vital part of the software development process that helps improve code quality, catch bugs early, and ensure consistency across a project. By having peers review code before it’s merged, teams can identify issues in logic, design, and style, while also sharing knowledge and reinforcing best practices. It fosters collaboration, improves maintainability, and contributes to building more reliable and readable codebases. Additionally, code review can serve as a valuable learning opportunity for both the author and the reviewer.

The PyOPenSci community offers [peer review](https://www.pyopensci.org/about-peer-review/index.html). 


</exercise>

<exercise id="4" title="Publishing your software on software registries">

# 1. Publishing on PyPi and/or Anaconda

See [this tutorial](https://www.pyopensci.org/python-package-guide/package-structure-code/publish-python-package-pypi-conda.html) for a deep dive on making your package available through these registries.

# 2. Automating updates upon GitHub release.

You can also create a workflow (GitHub action) to automatically upload your new version when releasing on GitHub. An example of such a workflow can be found [here](https://github.com/LinkedEarth/pylipd/blob/main/.github/workflows/publish.yaml). 

We also recommend that you [Build a docker container](https://linked.earth/LeapFROGS/module6) for each release. 

</exercise>

<exercise id="5" title="Additional Rsources">

Have a look at these resouces to help you package your software:
- [PyPi](https://packaging.python.org/en/latest/tutorials/packaging-projects/)
- [Anaconda](https://docs.conda.io/projects/conda-build/en/latest/user-guide/getting-started.html)
- [PyOpenSci](https://www.pyopensci.org/python-packaging-science.html)
- [Example of package organization](https://www.geeksforgeeks.org/python-packages/)
- [Good practices in building Python packages](https://medium.com/@miqui.ferrer/python-packaging-best-practices-4d6da500da5f)

</exercise>

<exercise id="7" title="Test your understanding">

Question: What is a Python package?

<choice id="07-01">
<opt text="A single Python file with reusable code.">
That describes a module, not a package.
</opt>
<opt text="A directory with scripts and no special files">
Without __init__.py, it’s not recognized as a package.
</opt>
<opt text="A folder with an __init__.py file and one or more modules.", correct=True>
This is the standard structure of a Python package: a folder with __init__.py and one or more modules.
</opt>
<opt text="A zipped archive of Python files">
While zipped packages exist, it's not how a package is defined structurally.
</opt>
</choice>

Question: Why is it beneficial to package your Python code?

<choice id="07-02">
<opt text="It guarantees your software will run faster.">
Packaging doesn’t directly affect performance.
</opt>
<opt text="It eliminates all bugs.">
Good practice helps, but packaging doesn't guarantee bug-free code.
</opt>
<opt text="It prevents other people from seeing your code.">
Packaging actually makes code more accessible, not less.
</opt>
<opt text="It helps with reusability, sharing, and long-term maintenance.", correct=True>
Packaging supports reuse, distribution, and better organization.
</opt>
</choice>

Question: When might packaging not be necessary?

<choice id="07-03">
<opt text="When your code is modular.">
Modular code is often a reason to package, not to avoid it.
</opt>
<opt text="When you’re working on a quick prototype or small script.", correct=True>
Packaging can be overkill for small or temporary projects.
</opt>
<opt text="When you’re building for open-source distribution.">
That’s a strong reason to package your code.
</opt>
<opt text="When your code is general-purpose.">
General-purpose code benefits from packaging and reuse.
</opt>
</choice>

Question: What is the main role of a software repository like GitHub?

<choice id="07-04">
<opt text="To support code development and collaboration.", correct=True>
GitHub supports development through version control, issues, CI, and collaboration tools.
</opt>
<opt text="To install Python packages.">
That’s the role of registries like PyPI or Anaconda.
</opt>
<opt text="To serve as a backup for files.">
While version control offers some backup-like benefits, that’s not the main purpose.
</opt>
<opt text="To distribute packages to pip and conda.">
Distribution happens through registries, not repositories.</opt>
</choice>

Question: What distinguishes a software registry like PyPI from a repository like GitHub?

<choice id="07-05">
<opt text="Registries are private and repositories are public.">
Both registries and repositories can be either public or private.
</opt>
<opt text="Registries are for discovery and installation; repositories are for development.", correct=True>
Registries make software findable and installable; repositories manage the development process.
</opt>
<opt text="Registries support development, repositories handle publishing.">
This reverses the actual roles.
</opt>
<opt text="They serve the exact same function.">
They serve complementary but different purposes.
</opt>
</choice>

Question: What is an API in the context of a Python package?

<choice id="07-06">
<opt text="The internal logic of the software.">
That’s the implementation, not the API.
</opt>
<opt text="A user interface for the command line.">
That’s a CLI, not an API.
</opt>
<opt text="The data files used by the software.">
That’s part of the data, not the API.
</opt>
<opt text="The set of public functions and classes exposed for use.", correct=True>
The API defines what users interact with—functions, classes, methods.
</opt>
</choice>

Question: Which of the following is a best practice when designing a Python package API?

<choice id="07-07">
<opt text="Expose all internal helper functions.">
Only expose functions that support the public interface; internal helpers should be private.
</opt>
<opt text="Start by identifying user tasks and use cases.", correct=True>
Good APIs are user-focused and task-driven.
</opt>
<opt text="Use deeply nested imports for organization.">
Deep nesting makes the API harder to use and understand.
</opt>
<opt text="Avoid documenting your code to reduce clutter.">
Documentation is essential for usability and maintenance.
</opt>
</choice>

Question: What is the role of the `__init__.py` file in a package?

<choice id="07-08">
<opt text="It provides installation instructions.">
That’s done via pyproject.toml or setup.cfg, not `__init__.py`.
</opt>
<opt text="It initializes the Python environment.">
It marks the folder as a Python package—not the environment.
</opt>
<opt text="It defines the public API and marks directories as packages.", correct=True>
__init__.py defines the package and can be used to expose the public interface.
</opt>
<opt text="It logs package usage.">
Logging is not a built-in purpose of `__init__.py`.
</opt>
</choice>

Question: Why is unit testing important in packaging software?

<choice id="07-09">
<opt text="It helps secure your code.">
Testing checks functionality, not security.
</opt>
<opt text="It guarantees your software will be accepted by PyPI.">
Tests are recommended but not required for PyPI.
</opt>
<opt text="It makes your package smaller.">
Testing has no effect on package size.
</opt>
<opt text="It ensures individual components behave as expected.", correct=True>
Unit testing helps verify each part of your code functions correctly.
</opt>
</choice>

Question: What is one benefit of peer code review in software development?

<choice id="07-10">
<opt text="It helps catch bugs and improve code quality.", correct=True>
Code reviews are critical for improving quality and catching issues early.
</opt>
<opt text="It increases the package file size.">
Reviews have no effect on package size.
</opt>
<opt text="It reduces version history.">
Version control tracks changes regardless of review.
</opt>
<opt text="It guarantees your code passes all tests.">
Testing ensures code correctness; reviews ensure quality and structure.
</opt>
</choice>

</exercise>

<exercise id="8" title="Hands-on exercise">



</exercise>