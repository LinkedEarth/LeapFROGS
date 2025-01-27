---
type: slides
---

<div><h1><img src="https://foundations.projectpythia.org/_images/GitHub-logo.png" alt="GitHub Logo" width=25% align="left"/> Lesson 3<br>Intermediate GitHub</h1></div>

---

Now that you set up your GitHub account, it is time to start collaborating.

Learn about branches, pull requests, and version control systems.

---

## Version control and GitHub releases - an Overview

Before we delve into the specifics of how version tracking is implemented on the GitHub platform, let's first talk about why we need version control. Version control is essential for scientists because it keeps a detailed history of changes made to files, enabling researchers to track their progress, collaborate effectively, and ensure the reproducibility of their work. It allows multiple people to work on the same project without overwriting each other’s contributions and provides the ability to revert to earlier versions if mistakes occur. By organizing and preserving every step of the research process, version control ensures transparency and prevents the loss of critical data or code.

Once in a while, one might want to capture a snapshot of the project. These snapshots are called **releases**. For instance, a release could correspond to the publication of a manuscript. This is actually how you should think about a release: a published paper with version control as the editing process leading up to it. 

**Why Should Scientists Care?**

1. Transparency: Share your data, code, and analyses openly.
2. Collaboration: Allow others to build on your work.
3. Reproducibility: Ensure your results can be replicated.
4. Organization: Always have access to past versions.

---

## Version Control in GitHub

Version control helps track changes to your files over time. It ensures you can:

* Keep a record of every change (what, when, and why it was made).
* Work collaboratively without overwriting others’ work, using `branches` and by creating `pull requests`.
* Revert to earlier versions if something goes wrong.
* Think of it as the “track changes” feature in Word, but for any type of file.

**How does GitHub help with version control?**

GitHub provides a centralized platform to:

* Store your project (called a repository).
* Track every version and change you make (called `commits`).
* Share your project with collaborators or the public.

To learn more about version control and different implementations, read [this article](https://github.com/resources/articles/software-development/what-is-version-control).

A detailed description of version control with git (and how it relates to GitHub) can be found [on the Project Pythia's website](https://foundations.projectpythia.org/foundations/github/basic-git.html).

---

### Tips for Scientists Using Version Control

* Always write clear commit messages to explain changes.
* Use branches for new experiments or major changes.
* Regularly commit your work to keep track of progress.

---

## What are GitHub releases?

A release is like taking a “snapshot” of your project at a specific point in time.
* It’s a way to package and share finalized work (e.g., datasets, analyses, or software).
* You can attach files (like datasets or PDFs) to the release.
* Releases are versioned (e.g., v1.0, v1.1, v2.0) so others know which is the latest or most stable version.

It is useful to decide on (1) when to release a new version, and (2) the numbering of the version. Most often, you will see two conventions:
* x.y.z where x consists of a major release which may result in code breakage as the way the program is called (referred to as an API or application programming interface) is changed (e.g., replacing the name of a parameter); y consists of additional capabilities, and z is used to indicate bug fixes.
* mm.yyyy which relates to the month and year the software is published. 
In both of these cases, it is useful to link the GitHub releases to Zenodo releases 

---

### Creating a new release on GitHub

1. Navigate to your GitHub repository.
2. Click Releases > Draft a new release.
3. Fill out the form:
    * Tag version: Use semantic versioning as described in the previous slide.
    * Release title: Provide a descriptive name (e.g., "Initial Dataset Release").
    * Click on `Generate Release Notes` so GitHub automatically populate the description with a history of the versions. 
    * Description: List key changes or features (e.g., "Includes raw data and analysis scripts for the 2023 project").
    * Attach relevant files (e.g., datasets, README.pdf). 
4. Click Publish Release.

---

## Branches

Branches in version control are like parallel workspaces within a project. They allow you to make changes or try out new ideas without affecting the main project (usually called the main or master branch). Each branch starts as a copy of the main project but can be edited independently.

**How to Use Branches**
1. Experimentation: Use branches to test new methods, analyze datasets, or add features without impacting the stable version of your work.
2. Collaboration: Team members can work on their own branches, making it easy to merge their contributions later.
3. Bug Fixes or Updates: Fix an issue or add a new feature in a branch while keeping the main project stable.
When your changes are ready, you can merge the branch back into the main project, ensuring all updates are integrated without disrupting others’ work. Branches help organize work and make collaboration seamless in scientific projects.

An introduction on how git branches can be found on the [Project Pythia's website](https://foundations.projectpythia.org/foundations/github/git-branches.html). The following slide demonstrates how to use branches on the GitHub platform

---

### Creating a Branch on GitHub

<div><img src="https://github.com/LinkedEarth/LeapFROGS/blob/main/static/module5/branches.png?raw=true" alt="GitHub branches" width=25% align="left"/></div>

1. Go to Your Repository
    * Log in to GitHub and navigate to the repository where you want to create a branch.
2. Locate the Branch Dropdown
    * At the top-left of the repository page, you’ll see a dropdown menu with the name of the current branch (e.g., `main` or `master`).
3. Create a New Branch
    * Click the dropdown.
    * In the search bar at the top of the dropdown, type a name for your new branch (e.g., `experiment-1` or `bug-fix`).
    * Select Create branch: [branch name] from the dropdown.
4. Switch to the New Branch
    * Once created, GitHub will automatically switch to your new branch.
    * You can confirm this by checking the branch name at the top-left of the repository page.

**Pro Tips:** Use clear and descriptive names for branches (e.g., `data-cleaning`, `add-new-figure`, `update-analysis) and regularly merge changes from the main branch into your branch to keep it up to date.

---

### Using the New Branch
Any changes you make will now be saved to this branch, keeping the main branch unchanged.

You can edit files directly on GitHub or upload new ones to this branch.

---

## Pull Request

After you have forked a repo or created a new branch into your own repository, you are free to fix bugs or add features. After improving the code you can offer your fork as an improved version back to the orginal repo owners (or `main`/`master` branch). This offer is called a `pull request`.

[Pull Requests from project Pythia](https://foundations.projectpythia.org/foundations/github/github-pull-request.html)

**Merging Back to the Main Branch**
1. When your work is complete, go to the `Pull Requests tab` at the top of the repository.
2. Click `New Pull Request` and select your new branch as the source and `main` as the target.
3. Review the changes and click `Merge` to integrate your branch into the main project.

A step-by-step tutorial is given in the [GitHub documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request). 

---

## Make your repository citable

### Citation files help users properly cite your work

### Zenodo offers a DOI for specific software <strong>releases</strong>

---

## Citation file

A `CITATION.cff` file makes citation of your repository easy. The <em>.cff</em> file format is both human- and machine-readable.

After you have added a citation file to your repository, GitHub will provide citation options for users in both APA and BibTeX formats.

Here is an example of a citation file ([from here](https://github.com/citation-file-format/citation-file-format)):

```yaml
cff-version: 1.2.0
message: If you use this software, please cite it using these metadata.
title: My Research Software
abstract: This is my awesome research software. It does many things.
authors:
  - family-names: Druskat
    given-names: Stephan
    orcid: "https://orcid.org/1234-5678-9101-1121"
  - name: "The Research Software project"
version: 0.11.2
date-released: "2021-07-18"
identifiers:
  - description: This is the collection of archived snapshots of all versions of My Research Software
    type: doi
    value: "10.5281/zenodo.123456"
  - description: This is the archived snapshot of version 0.11.2 of My Research Software
    type: doi
    value: "10.5281/zenodo.123457"
license: Apache-2.0
repository-code: "https://github.com/citation-file-format/my-research-software"
```

[Learn more about citation files from GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-citation-files)

---

## Zenodo

Zenodo is most known for data archival. When depositing data with Zenodo, a digital object identifier (DOI) is issued. Creating a persistent reference to the data exactly as they exist at the time of upload and offering an object for citation in scientific publications. Zendo also offers this service for GitHub repositories.

Open the Zenodo [link](https://zenodo.org/login) and login <strong>with GitHub</strong>. You will need to <em>Authorize Zenodo</em> to access GitHub.

<div><img src="https://github.com/LinkedEarth/RLeapFROGS/blob/main/static/module5/zenodo_login.png?raw=true" alt="Zenodo Login" width=25% align="left"/></div>

---

## Zenodo (continued)

Navigate to Zenodo's [page](https://zenodo.org/account/settings/github/) for managing GitHub and enable archival on the repository.

<div><img src="https://github.com/LinkedEarth/RLeapFROGS/blob/main/static/module5/zendo_github_page.png?raw=true" alt="Zenodo GitHub" width=25% align="left"/></div>

[GitHub tutorial for linking to Zenodo](https://docs.github.com/en/repositories/archiving-a-github-repository/referencing-and-citing-content)
