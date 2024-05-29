---
type: slides
---

<div><h1>Author Checklist:<br>Publishing your software</h1></div>

---

<h2> Identify a publicly accessible repository with version control </h2>

There are several options but a popular one is Github, which allows for many developers to work together and has verion control. 

<h3>Why is this important? </h3>

Sharing your software in publically accessible repository enables other (and yourself) researchers to use your original software for reprocublity and replicability studies or apply it to other studies. 

Version control allows to easily track changes in the software (made by you or other collaborators), and rolls back to a prior stable version if needed or runs continous integration to ensure that introduced changes are still giving proper results. Many platforms, including GitHub, provide other collaboration tools such as issue tracker and project management tools that you will learn to use in subsequent modules. 

---

<h2> Provide enough metadata for reuse, including a licence </h2>

<h3>Why is this important? </h3>

The license identifies the rules and conditions under which your software can be reused by others.  

Some of the most used licences for open-source project are the Apache 2.0 and MIT licenses. These licenses are permissive, meaning that they have few restrictions to allow others to reuse your work. You can use this website to help you choose a license: https://choosealicense.com.

If you are using GitHub, use the following to add a license to your repository: https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository 

---

<h2> Register your code in a community registry </h2>

Some registries are language specific (e.g., PyPi for Python and CRAN for R). Others are cross-language, but may be dedicated to a scientific domain (e.g., Hydroshare, DesignSafe)

<h3>Why is this important? </h3>

The registry provides more visibility for your work by adding metadata to your package. In some instances, it makes it easier to install your package. 


---

<h2> Enable citation of the Software </h2>

The citation should include a unique persistent identifier for the software. Most software repositories (including GitHub) do not mint DOIs directly. One option is to link your GitHub repository to Zenodo to obtain a DOI for each version of your software upon release. 

In most cases, you will have to provide a citation for your software. To do so, you can use CodeMeta (https://codemeta.github.io/) and the Citation File Format (https://citation-file-format.github.io/). In each case, a plain text file (CITATION.cff) is added to your repository. When you link your GitHub repository with Zenodo, the content of the CITATION.cff file is used to generate the citation in combination with the minted DOI from Zenodo. 

<h3>Why is this important? </h3>

Citation helps you get credit for all of your research. More cricitally, software citation should always include a version of the software used in the work for reproducibility. 

---

<h2> Citing  software in your paper </h2>

- Citation goes in the references section
- Guidelines on how to cite software are often set by the journal but includes an in-text pointer as you would cite any other paper (recommended), an in-text pointer in a "Data Resources" or "Open Science" section, an in-text pointer in the "Acknowledgements" section. 

---

