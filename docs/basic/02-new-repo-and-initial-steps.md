# Basic Lab 02 — Create New Repo + Initial Git Commands

## Lab Objective
Create a local project, connect to GitHub, and practice essential first-day Git commands.

Target GitHub repo:
- `https://github.com/iamkaushiksaha/github`

## Step 1: Create local folder

```bash
mkdir github
cd github
```

## Step 2: Initialize git

```bash
git init
```

## Step 3: Create folders/files with CLI

```bash
mkdir -p docs/basic docs/advanced docs/scenarios
touch README.md docs/basic/notes.md docs/advanced/notes.md docs/scenarios/issues.md
```

## Step 4: Inspect working tree

```bash
git status
```

## Step 5: Stage and commit

```bash
git add .
git commit -m "Initial structure for Git learner lab"
```

## Step 6: View short history

```bash
git log --oneline
```

## Step 7: View tree/list

```bash
find . -maxdepth 3 -print
```

If `tree` is installed:

```bash
tree
```

## Step 8: Connect to GitHub remote and push

```bash
git remote add origin https://github.com/iamkaushiksaha/github.git
git branch -M main
git push -u origin main
```

## Commands covered

- `git init`
- `git status`
- `git add`
- `git commit`
- `git log`
- `mkdir`
- `touch`
- `find` / `tree`
- `git push`

## Lab validation

- [ ] Initial commit visible in `git log --oneline`
- [ ] `origin` remote set correctly (`git remote -v`)
- [ ] Files visible on GitHub repository page
