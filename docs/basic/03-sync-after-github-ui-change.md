# Basic Lab 03 — Sync Local After File Changes from GitHub UI

## Lab Objective
Handle cases where files are created/updated from GitHub web UI and then sync locally.

## Scenario
A file is uploaded or edited in GitHub UI, and your local machine is behind.

## Step 1: Check current branch and status

```bash
git branch
git status
```

## Step 2: Pull latest from remote

```bash
git pull origin main
```

## Step 3: If local commits exist, pull using rebase

```bash
git pull --rebase origin main
```

## Step 4: Resolve conflicts (if any)

When conflict appears:

1. Open conflicted file.
2. Remove markers:
   - `<<<<<<<`
   - `=======`
   - `>>>>>>>`
3. Keep final content.
4. Continue rebase:

```bash
git add <file>
git rebase --continue
```

Abort if needed:

```bash
git rebase --abort
```

## Step 5: Push final state

```bash
git push origin main
```

## Lab validation

- [ ] GitHub UI changes pulled to local successfully
- [ ] One conflict resolved manually
- [ ] Final branch is clean (`git status`)
