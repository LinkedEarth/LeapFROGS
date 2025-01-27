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
