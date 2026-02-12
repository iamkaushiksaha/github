# Advanced Lab 01 — Feature Branch + Rebase Workflow

## Lab Objective
Use feature branches and rebase to keep history clean before merge.

## Steps

### 1) Create a feature branch

```bash
git checkout -b feature/add-lab-template
```

### 2) Add a change and commit

```bash
touch docs/basic/lab-template.md
git add docs/basic/lab-template.md
git commit -m "Add reusable lab template"
```

### 3) Update local main

```bash
git checkout main
git pull origin main
```

### 4) Rebase feature branch onto updated main

```bash
git checkout feature/add-lab-template
git rebase main
```

### 5) Push branch

```bash
git push -u origin feature/add-lab-template
```

### 6) Open pull request

Create PR from `feature/add-lab-template` to `main`.

## Lab validation

- [ ] Feature branch created and pushed
- [ ] Rebase completed
- [ ] PR opened with clear title/body
