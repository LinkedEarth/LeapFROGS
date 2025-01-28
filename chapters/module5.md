---
title: 'Module 5: Using GitHub for your research'
description:
  "This module provides fundamental information about using GitHub for your research."
prev: /module4
next: /module6
type: chapter
id: 5
---

<exercise id="1" title="Git and GitHub" type="slides">

<slides source="chapter5_01_git_and_github">

</exercise>

<exercise id="2" title="Introduction to Github" type="slides">

<slides source="chapter5_02_intro_github">

</exercise>

<exercise id="3" title="Intermediate Github" type="slides">

<slides source="chapter5_03_intermediate_github">

</exercise>

<exercise id="4" title="GitHub for project planning" type="slides">

<slides source="chapter5_04_projectmanagement">
 
</exercise>

<exercise id="5" title="Advanced GitHub" type="slides">

<slides source="chapter5_05_Advanced GitHub">
 
</exercise>

<exercise id="6" title="GitHub Desktop" type="slides">

<slides source="chapter5_06_GitHubDesktop">
 
</exercise>

<exercise id="7" title="Test your understanding">

GitHub and Git are essentially the same thing

<choice id="05-01">
<opt text="True">
Wrong answer.
</opt>
<opt text="False", correct="true">
That's correct. GitHub uses Git but Git is not limited to GitHub. 
</opt>
</choice>

You can host static pages on GitHub to describe your project

<choice id="05-02">
<opt text="True", correct="true">
Correct! You can use it to build websites. With tools like GitHub actions, it is very easy to update your pages as you make new changes.
</opt>
<opt text="False">
Incorrect. You can host statis website on GitHub. In fact, it is a good idea to do so for projects. 
</opt>
</choice>

What is a repository?

<choice id="05-03">
<opt text="A folder on your computer that holds all your project files.">
While a repository can be cloned to your local computer and appear as a folder, a repository itself is more than just a folder. It also includes version control, collaboration tools, and a connection to the remote GitHub repository.
</opt>
<opt text="A cloud-based location that stores your project files, version history, and collaboration tools.", correct=True>
Correct!
</opt>
<opt text="A backup service that saves only the latest version of your project">
GitHub repositories do more than simple backups. They store a complete history of changes, allowing you to view or revert to any previous version of your project. It’s a full version control system, not just a backup tool.
</opt>
<opt text="A chat application where developers can communicate about their code">
GitHub repositories do have tools for collaboration (like comments on pull requests and issues), but they are not chat applications. The primary purpose of a repository is to store and manage project files, not facilitate real-time conversations.
</opt>
</choice>

What is the main purpose of using issues in a GitHub repository?

<choice id="05-04">
<opt text="To store the entire history of changes in a project.">
This describes the purpose of version control within Git, which tracks all changes made to the files in a repository, not the purpose of issues.
</opt>
<opt text="To resolve merge conflicts between branches.">
Merge conflicts are resolved using Git tools, often during a pull request or directly on the command line. Issues are not used for this purpose.
</opt>
<opt text="To create tasks, report bugs, or suggest enhancements for a project.", correct=True>
Correct!
</opt>
<opt text="To create a local copy of a repository on your computer">
This describes cloning a repository, not the function of issues. Issues are about project management, not file storage or copying.
</opt>
</choice>

Why are labels used in GitHub Issues?

<choice id="05-05">
<opt text="To describe the purpose and category of an issue for easier organization and tracking.", correct=True>
Correct!
</opt>
<opt text="To assign an issue to a specific team member.">
While assigning team members is a part of issue management, it is not the purpose of labels. Labels are for categorization, not assigning responsibilities.
</opt>
<opt text="To provide a detailed explanation of the problem described in the issue.">
Detailed explanations should be included in the issue's description or comments, not through labels. Labels are short tags used for quick categorization.
</opt>
<opt text="To merge an issue with a pull request.">
Merging refers to combining changes from a branch into another branch, often linked to an issue via a pull request, but labels are not directly involved in this process.
</opt>
</choice>

What is the primary purpose of the Discussions feature in GitHub?

<choice id="05-06">
<opt text="To track bugs and assign tasks within a project.">
Tracking bugs and assigning tasks is the purpose of Issues, not Discussions. Discussions are for broader, less structured conversations.
</opt>
<opt text="To have collaborative conversations, share ideas, and ask questions about a project.", correct=True>
Correct!
</opt>
<opt text="To review and approve changes in a pull request.">
Pull request reviews involve code and change approvals, while Discussions are more general and aren't tied directly to code changes.
</opt>
<opt text="To store a version history of all changes in the repository.">
Storing a version history is the role of Git's version control, not Discussions.
</opt>
</choice>

The act of downloading a local copy of the repository, linked to the original respository for syncing changing is called:

<choice id="05-07">
<opt text="Forking">
Forking in GitHub is the process of creating an independent copy of a repository in your own GitHub account. It allows you to experiment, make changes, or contribute to someone else's project without affecting the original repository.
</opt>
<opt text="Cloning", correct=True>
Correct!
</opt>
</choice>

What is a release in GitHub?

<choice id="05-08">
<opt text="A branch used to develop new features.">
Branches are used for development, not for finalizing and sharing a version.
</opt>
<opt text="A specific version of a project, often shared with the public, that includes key files and version details.", correct=True>
Correct!
</opt>
<opt text="A backup of the entire repository, stored locally.">
A release is not a backup; it's a curated version meant for distribution.
</opt>
<opt text="A tool for resolving merge conflicts.">
Releases do not resolve merge conflicts; that is handled through pull requests and merges.
</opt>
</choice>

What is the primary purpose of using branches in GitHub?

<choice id="05-09">
<opt text="To permanently save all versions of the project files.">
Permanently saving all versions of files is the job of version control, not branches. Branches help isolate changes.
</opt>
<opt text="To create a public copy of the repository for experimentation.">
Creating a public copy of the repository is done through forking, not branching.
</opt>
<opt text="To allow multiple developers to work on different features or fixes without affecting the main codebase.", correct=True>
Correct!
</opt>
<opt text="To merge two different repositories into one.">
Branches are part of the same repository and do not merge two different repositories together.
</opt>
</choice>

What is the main purpose of a pull request in GitHub?

<choice id="05-10">
<opt text="To create a new branch for developing a feature or fixing a bug.">
Creating a new branch is separate from the pull request process. A pull request happens after changes have been made in a branch.
</opt>
<opt text="To request permission to delete a repository.">
Pull requests have nothing to do with deleting a repository; they are for proposing changes.
</opt>
<opt text="To propose and discuss changes from one branch before merging them into another branch.", correct=True>
Correct!
</opt>
<opt text="To clone a repository to your local machine for offline work.">
Cloning a repository is a separate action and is unrelated to pull requests.
</opt>
</choice>

What is the primary purpose of a citation file in a GitHub repository?

<choice id="05-11">
<opt text="To provide proper credit to authors and offer citation details for academic use.", correct=True>
Correct!
</opt>
<opt text="To track the version history of the repository.">
Version history is tracked by Git, not the citation file.
</opt>
<opt text="To summarize the main features of the repository for new contributors.">
A `README.md` file summarizes features for contributors, not the citation file.
</opt>
<opt text="To list all the branches and pull requests in the repository.">
Branches and pull requests are managed through GitHub's interface, not in the citation file.
</opt>
</choice>

What is the primary purpose of the GitHub Projects feature?

<choice id="05-12">
<opt text="To store and version control project files.">
Storing and version-controlling project files is the purpose of the repository itself, not GitHub Projects.
</opt>
<opt text="To generate a backup of the repository for offline use.">
GitHub Projects does not create backups; cloning or forking a repository serves that purpose.
</opt>
<opt text="To review and approve changes in a pull request.">
Pull request reviews involve code changes, not task management, which is handled by GitHub Projects.
</opt>
<opt text="To create a Kanban-style board for organizing tasks, tracking progress, and managing workflows.", correct=True>
Correct!
</opt>
</choice>

What is the main difference between milestones and projects in GitHub?

<choice id="05-13">
<opt text="Milestones track high-level goals and group issues, while projects organize tasks visually using a board or table.", correct=True>
Correct!
</opt>
<opt text="Milestones are used to review pull requests, while projects track the version history of the repository.">
Milestones and projects are not used for pull request reviews or version tracking; those functions are separate.
</opt>
<opt text="Milestones are limited to a single branch, while projects can span multiple repositories.">
Milestones are not restricted to a single branch but are tied to a repository. Projects, however, can span across multiple repositories (e.g., for an organization).
</opt>
<opt text="Milestones provide detailed descriptions of each task, while projects only allow tagging of issues.">
Milestones do not describe each task but instead group related issues under a common goal. Projects allow visual organization of tasks, including issues, pull requests, and custom cards.
</opt>
</choice>

What is the primary purpose of GitHub Actions?

<choice id="05-14">
<opt text="To automate workflows like testing, deployment, and code formatting.", correct=True>
Correct!
</opt>
<opt text="To track the version history of a repository.">
Tracking version history is a core function of Git, not GitHub Actions.
</opt>
<opt text="To create a backup of your repository on your local machine.">
Backups are created by cloning a repository, not by using GitHub Actions.
</opt>
<opt text="To manage discussions and comments about the project.">
Discussions are handled through the Discussions or Issues tabs, not GitHub Actions.
</opt>
</choice>

What is one major benefit of using GitHub Actions?

<choice id="05-15">
<opt text="It replaces the need for a README file">
GitHub Actions does not replace documentation, like a README file.
</opt>
<opt text="It ensures that changes to the repository are automatically tested or deployed.", correct=True>
Correct!
</opt>
<opt text="It prevents all merge conflicts in a repository.">
Actions do not prevent merge conflicts; these must be resolved manually.
</opt>
<opt text="It permanently saves all versions of the project in GitHub.">
Version history is managed by Git itself, not GitHub Actions.
</opt>
</choice>

Which of the following is an example of how GitHub Actions can be used?

<choice id="05-16">
<opt text="Merging branches automatically without review.">
Actions cannot bypass manual reviews if enabled in branch protection rules.
</opt>
<opt text="Assigning labels to issues and pull requests.">
Labeling is done manually or through other bots, not typically via GitHub Actions.
</opt>
<opt text="Running automated tests on code every time a pull request is opened.", correct=True>
Correct!
</opt>
<opt text="Adding collaborators to a repository.">
Adding collaborators is a manual administrative task.
</opt>
</choice>

What is the primary purpose of GitHub Secrets?

<choice id="05-17">
<opt text="To store encrypted sensitive information like API keys, passwords, or tokens for use in workflows.", correct=True>
Correct!
</opt>
<opt text="To back up the entire repository securely on GitHub servers.">
GitHub automatically stores repositories, but secrets are specifically for encrypting sensitive information for workflows.
</opt>
<opt text="To hide branches from public view.">
Branches are not hidden using secrets; branch visibility is managed by repository permissions.
</opt>
<opt text="To permanently lock files in a repository from being edited.">
GitHub Secrets do not lock files. File permissions and branch protection rules handle that.
</opt>
</choice>

What is the primary purpose of GitHub Desktop?

<choice id="05-18">
<opt text="To provide a graphical interface for managing Git and GitHub repositories locally.", correct=True>
Correct!
</opt>
<opt text="To run automated workflows and scripts directly from your computer.">
GitHub Desktop is not used for running workflows; this is managed by GitHub Actions.
</opt>
<opt text="To store and encrypt sensitive information like API keys for your projects.">
GitHub Desktop doesn’t handle sensitive information; GitHub Secrets are used for that.
</opt>
<opt text="To host repositories on GitHub without needing an internet connection.">
Hosting repositories requires GitHub’s online services; GitHub Desktop provides local management, but internet connectivity is needed to sync changes.
</opt>
</choice>

</exercise>

<exercise id="8" title="Hands-on exercise">

1. Create a repository for your project. Make sure you choose an appropriate license and add a `README.md` file. To be able to complete the full exercise, the repository should be kept public. 
2. Clone the repository on your local machine using GitHub Desktop. Add your work to the local repository and edit the `README.md` file to give your information about your code, including which notebook to run and where to find the data. If you choose to use a series of `.py` files for your workflow, describe in which order they should be run and what input/output should be expected. 
3. Commit your changes and push to the main branch
4. Open an issue about adding a citation file to the project. 
5. Create a project to keep track of progress and add issue to the board
6. Create a milestone for the project and issue to it
7. Create a new banch from `main` to resolve the citation issue. 
8. Add a citation file to the new branch
9. Create a pull request to merge your new branch back into main
10. Merge the request
11. Link your repository to Zenodo
12. Prepare a release
13. After the release, Zenod will give you a DOI. Add the DOI badge to your `README.md`. You may do so directly in the `main` branch. Update your citation file with your DOI. 
14. Add two more issues regarding your work. Add them to your project and milestone. 
15. Address the two issues in different branches.
16. Do another release.
 
</exercise>