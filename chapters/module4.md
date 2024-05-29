---
title: 'Module 4: The Scientific Paper of The Future'
description:
  "This module provides fundamental principles in scientific publishing. Scientific publishing refers to the making all artifacts of research publically accessible (not only the paper but also the data, software and workflow) to ensure that all artifacts of science are Findable, Reproducible, Interoperable, and Reusable (FAIR). The following module will provide author checklist on publishing guidelines and test your understanding of the concepts."
prev: /module3
next: /module5
type: chapter
id: 4
---

<exercise id="1" title="The Scientific Paper of the Future">

This training contains best practices in sharing your science artifacts regardless of the platform, research area or target journal. The recommendations made in this training are mindful to the effort required to help your scientific community to achieve FAIR Science. 

As you go through this training, recommendations on specific platform are made so you apply the concepts; however, please note that many options are available to you. 

The training materials can be accessed [here](https://figshare.com/articles/presentation/The_Scientific_Paper_of_the_Future_v2024_Training_Materials/25754244).

The next three chapters in this module provides an author checklist for publishing your data, software, and workflow. 

**Trivia Time!** 

Obtaining consistent computational results uing the same input data, computational steps, methods, code, and conditions of analysis is an example of: 

<choice id="04-01">
<opt text="Reproducibility", correct="true">
This is the definition of reproducibility
</opt>
<opt text="Replicability">
No, this is reproducibility
</opt>
</choice>

Replicability is not always wanted.

<choice id="04-02">
<opt text="True", correct="true">
Non-replicability of results doesn't mean that something is wrong. In fact, science advancement relies on getting more information with different data/methods and obtaining inconsistent answers. 
</opt>
<opt text="False">
Non-replicability of results doesn't mean that something is wrong. In fact, science advancement relies on getting more information with different data/methods and obtaining inconsistent answers. 
</opt>
</choice>

Which of the following do not require a persistent unique identifier when writing a scientific paper of the future?

<choice id="04-03">
<opt text="Data">
Data should be identified with a persistent unique identifier. You can usually get one through a data repository.  
</opt>
<opt text="Software">
Software (and possible, each version of the software) should be identified with a unique, persistent identifier 
</opt>
<opt text="Worflow">
Workflows should be identified with a unique, persistent identifier 
</opt>
<opt text="Authors">
Authors should be identified with a unique, persistent identifier. Several publishers now required ORCID for submission. 
</opt>
<opt text="None of the above", correct="true">All should have a unique persistent identifiers!</opt>
</choice>

</exercise>


<exercise id="2" title="Publishing your data" type="slides">
<slides source="chapter4_01_data">
</exercise>

<exercise id="3" title="Publishing your software" type="slides">
<slides source="chapter4_02_software">
</exercise>

<exercise id="4" title="Publishing your workflow" type="slides">
<slides source="chapter4_03_workflow">
</exercise>

<exercise id="5" title="Test your understanding">

You may put your data in your GitHub repository and get a single DOI for all products of your research.

<choice id="04-04">
<opt text="True", correct="true">
This is certainly one way to go. The advantage is that the data is on the same repository as the code, making it easier to create containers. However, you will need to be explicit in what the repository covers in your citation. In addition, your data may not be as discoverable as if they were on a data repository, especially one in your domain. One approach is to have a copy in the GitHub repository for workflow execution, referring to the data repository and associated citation in the read me of the repo. 
</opt>
<opt text="False">
It is more nuanced than saying never! Placing the data with the code makes it easier to create containers. However, you will need to be explicit in what the repository covers in your citation. In addition, your data may not be as discoverable as if they were on a data repository, especially one in your domain. One approach is to have a copy in the GitHub repository for workflow execution, referring to the data repository and associated citation in the read me of the repo. 
</opt>
</choice>

You should always use a permissive license.

<choice id="04-05">
<opt text="True">
This is going to be highly dependent on your work!
</opt>
<opt text="False", correct="true">
The choice of license will depend on your source of funding. If using government funding, especially NSF, you have a duty to make all products of research available for reuse. When working with small businesses (SBIR and STTR grants), the requirements may be different. Your university may also carry their own licenses (for instance, you may have a look at USC's license here: https://postdocs.usc.edu/wp-content/uploads/sites/2/2018/05/Software-Distribution-exhibits-revised-05042018-1.pdf).   
</opt>
</choice>

Your workflow should always be in an electronic notebook. 

<choice id="04-06">
<opt text="True">
Although notebooks have become more popular, this is not a requirement (but highly desirable)
</opt>
<opt text="False", correct="true">
Notebooks are very popular to share workflows since they include the data, code, visualizations and text that allows another researcher to validate their results on your code. However, they are not the only way to share workflows. At the very least, you should include a flow diagram (this is also useful to include in a notebook for visualization of the approach). When using a series of scripts, make sure that your read me file includes the order in which they need to be executed, the input data for the script and the expected output.    
</opt>
</choice>

I am entirely responsible for making my data, software and workflow FAIR. 

<choice id="04-07">
<opt text="True">
No. The steps outlined in the scientific paper of the future helps you support a FAIR community but the responsibility is not squarely on your shoulders. Data/Software repositories play a critical role in ensuring that the data/code stored their meet FAIR criteria as well. Publishers are also responsible for ensuring FAIR research and access. 
</opt>
<opt text="False", correct="true">
That is correct! The steps outlined in the scientific paper of the future helps you support a FAIR community but the responsibility is not squarely on your shoulders. Data/Software repositories play a critical role in ensuring that the data/code stored their meet FAIR criteria as well. Publishers are also responsible for ensuring FAIR research and access.   
</opt>
</choice>
</exercise>


<exercise id="7" title="Other resources">

- [The Turing Way handbook to reproducible, ethical and collaborative data science.](https://the-turing-way.netlify.app/index.html)

</exercise>