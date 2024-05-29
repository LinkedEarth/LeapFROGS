---
type: slides
---

<div><h1>Author Checklist:<br>Publishing your workflow</h1></div>

---

<h2> Identify a publicly accessible repository</h2>

If your workflow is sketched but you are not planning to provide an executable version, the best option is Figshare or Zenodo and treat the sketch as data.

If you are planning to provide an executable workflow, several options are available:
1. Provide an electronic Notebook. Make sure to indicate any manual steps in the text narrative of the notebook.
2. Provide a series of scripts. In this case, make sure you have a "read me" file that describes in which order to execute and what are the expected output of each script. 
In both cases, a sketch of the workflow could still be useful and should be shared in the same repository as the executable workflow. There are several options but a popular one is Github, which allows for many developers to work together and has verion control.

<h3>Why is this important? </h3>

Sharing your workflow in publically accessible repository enables other (and yourself) researchers to use your original workflow for reprocublity and replicability studies or apply it to other studies. 

Version control allows to easily track changes in the workflow (made by you or other collaborators), and rolls back to a prior stable version if needed or runs continous integration to ensure that introduced changes are still giving proper results. Many platforms, including GitHub, provide other collaboration tools such as issue tracker and project management tools that you will learn to use in subsequent modules. 

---

<h2> Provide enough metadata for reuse, including a licence and your conmputational environment </h2>
 
To share your computational environment, you can either list the libraries in a "read me" file. 

<h3>Why is this important? </h3>

The license identifies the rules and conditions under which your workflow can be reused by others. Some of the most used licences for open-source project are the Apache 2.0 and MIT licenses. These licenses are permissive, meaning that they have few restrictions to allow others to reuse your work. You can use this website to help you choose a license: https://choosealicense.com.

If you are using GitHub, use the following to add a license to your repository: https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository 

In the case of executable workflows, sharing your computational environment, and in particular the version of the packages, is critical to long-term reproducbility. Five years from now, a particular library could change its default behavior, resulting in differing results.

---

<h2> [Optional] Making your workflow executable</h2>

For full reproducibility, you may want to consider sharing your workflow in a Docker container or through Binder (e.g., you can use myBinder)

<h3>Why is this important? </h3>

Building environment from a list of libraries may become tricky a few years from when the workflow was created. Docker containers make it easier for others to reproduce your work.  


---

<h2> Enable citation of the workflow</h2>

The citation should include a unique persistent identifier for the workflow. If using a sketch publicly available on a general-purpose repository such as Figshare, you will obtain a permanent unique identifier from them.  Most software repositories (including GitHub), which might be more appropriate for executable workflows, do not mint DOIs directly. One option is to link your GitHub repository to Zenodo to obtain a DOI for each version of your workflow upon release. 

In most cases, you will have to provide a citation for your workflow. To do so, you can use CodeMeta (https://codemeta.github.io/) and the Citation File Format (https://citation-file-format.github.io/). In each case, a plain text file (CITATION.cff) is added to your repository. When you link your GitHub repository with Zenodo, the content of the CITATION.cff file is used to generate the citation in combination with the minted DOI from Zenodo. 

<h3>Why is this important? </h3>

Citation helps you get credit for all of your research. 

---

<h2> Citing the workflow in your paper </h2>

If using a sketch for your workflow, you can include the figure directly into the manusctipt in the methods section or in supplementary information. 

For executable workflows, you can treat it as software:
- Citation goes in the references section
- Guidelines on how to cite software are often set by the journal but includes an in-text pointer as you would cite any other paper (recommended), an in-text pointer in a "Data Resources" or "Open Science" section, an in-text pointer in the "Acknowledgements" section. 

You may combine sketch and executable workflows to ensure that your study is reproducible. 

---

