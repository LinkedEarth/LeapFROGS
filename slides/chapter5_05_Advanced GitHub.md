---
type: slides
---

<div><h1><img src="https://foundations.projectpythia.org/_images/GitHub-logo.png" alt="GitHub Logo" width=25% align="left"/> Lesson 5<br>Advanced GitHub</h1></div>

---

## Getting started with GitHub Actions

[GitHub Actions](https://github.com/features/actions) is a powerful feature that allows you to automate tasks directly within your GitHub repository. You can use it to automate testing, deployment, or other workflows triggered by events like a code push or a pull request.

---

### What is GitHub Actions?

GitHub Actions allows you to create workflows that automate tasks for your repository. These workflows are written in YAML files and are triggered by specific events (e.g., code commits, issue creation).

---

### Common Use Cases

* ***Continuous Integration (CI)***: Automatically test your code when changes are made. This is particularly useful if you are developing software packages. 
* ***Continuous Deployment (CD)***: Deploy your app or website when updates are pushed. This is useful to automate the creation of Docker containers. 
* ***Automated Workflows***: Tasks like code formatting, notifications, or data processing.

---

### Key Concepts

* ***Workflow***: A collection of automated steps defined in a YAML file.
* ***Event***: Triggers the workflow (e.g., push, pull_request, schedule).
* ***Job***: A collection of steps to be executed on a virtual machine.
* ***Step***: An individual task in a job, like running a script or installing dependencies.

---

## Setting Up a GitHub Actions Workflow

### Step 1: Create the Workflow File

* Navigate to your repository on GitHub.
* Go to the **Actions** tab.
* Click **New Workflow** to explore templates or **Set up a workflow yourself** to start from scratch. You never really start from scratch. It is useful to look at examples in other people's repository and emulate their work. 
* This creates a folder `.github/workflows/` and a YAML file for your workflow (e.g., main.yml).
---

### Step 2: Define the Workflow

Here’s an example of a basic workflow:

```
name: learn-github-actions
run-name: ${{ github.actor }} is learning GitHub Actions
on: [push]
jobs:
  check-bats-version:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install -g bats
      - run: bats -v
```
---

### Step 3: Commit the Workflow File

* Save and commit the workflow file to the `.github/workflows/` directory.
* The workflow will automatically run based on the specified triggers (e.g., a push to the main branch).

---

### Anatomy of a Workflow File

* `name`: The name of your workflow (e.g., CI Workflow).
* `on`: The event(s) that trigger the workflow (e.g., push, pull_request, or schedule).
* `jobs`: The tasks to be performed.
    * `build`: A job name.
    * `runs-on`: Specifies the virtual environment (e.g., ubuntu-latest, windows-latest). You can set up multiple workflows to test your code on various platform to make sure it is compatible with various OS. 
    * `steps`: The individual steps to execute:
    * `uses`: [Predefined GitHub Actions](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/using-pre-written-building-blocks-in-your-workflow) (e.g., actions/checkout@v3).
    * `run`: Custom shell commands.

---

### Example use cases

* [Run Python Tests](https://github.com/LinkedEarth/Pyleoclim_util/blob/master/.github/workflows/testmaster.yml).
* [Create a Docker Container](https://github.com/LinkedEarth/Pyleoclim_util/blob/master/.github/workflows/build.yml).
* [Upload package to Pypi following a GitHub release](https://github.com/LinkedEarth/Pyleoclim_util/blob/master/.github/workflows/publish.yml).
* [Create a static website](https://github.com/LinkedEarth/LeapFROGS/blob/main/.github/workflows/gatsby-publish.yaml). Yes, we use GitHub actions to deploy the platform you are currently using!

---

## GitHub Secrets

On the previous examples, you should have seen several examples of `GitHub secrets`. So what are they? GitHub Secrets are encrypted variables that you can use in your workflows to securely store sensitive information like API keys, access tokens, or passwords. These secrets are not exposed in your repository or workflow logs, ensuring the security of your data.

### How to Add Secrets
1. Go to your repository on GitHub.
2. Navigate to Settings > Secrets and variables > Actions.
3. Click New repository secret.
4. Add a name (e.g., API_KEY) and value (e.g., your actual API key).
5. Click Add Secret.

---
### Using Secrets in Workflows

You can access secrets in your GitHub Actions workflows using the `${{ secrets.<SECRET_NAME> }}` syntax.

**Best Practices:**
* ***Keep Secrets Descriptive***: Use meaningful names for clarity (e.g., AWS_ACCESS_KEY, DB_PASSWORD).
* ***Restrict Access***: Use environment-specific secrets to limit access.
* ***Do Not Hardcode Secrets***: Always store sensitive data in GitHub Secrets, never in your code.
* ***Regularly Rotate Secrets***: Update secrets periodically to enhance security.

GitHub Secrets make it simple to securely integrate sensitive information into your workflows without risking exposure.

---

## Tips for Writing Workflows

* ***Use Pre-Built Actions***: Explore the [GitHub Actions Marketplace](https://github.com/marketplace?type=actions) for reusable actions.
* ***Secure Secrets***: Store sensitive data like API keys in Settings > Secrets and variables.
* ***Debugging***: Use run: echo "Debug message" to output debugging information.
* ***YAML Validation***: Ensure proper YAML indentation to avoid errors. You can use online validators such as [YAML Lint](https://www.yamllint.com), [YAML Checker](https://yamlchecker.com). 

---

## Additional Resources

* [GitHub Actions Documentation](https://docs.github.com/en/actions)
* [Actions Marketplace](https://github.com/marketplace/actions)
* [Learn GitHub Actions](https://docs.github.com/en/actions/learn-github-actions)
---