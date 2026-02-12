# Advanced Lab 02 — Conflict Resolution Drill

## Lab Objective
Simulate a conflict and resolve it using rebase workflow.

## Create conflict state

### Branch A (feature)

```bash
git checkout -b feature/conflict-demo
echo "Version from feature branch" > docs/scenarios/conflict-demo.txt
git add docs/scenarios/conflict-demo.txt
git commit -m "Feature version of conflict demo"
```

### Branch B (main)

```bash
git checkout main
echo "Version from main branch" > docs/scenarios/conflict-demo.txt
git add docs/scenarios/conflict-demo.txt
git commit -m "Main version of conflict demo"
```

## Trigger conflict

```bash
git checkout feature/conflict-demo
git rebase main
```

## Resolve conflict

1. Edit `docs/scenarios/conflict-demo.txt`
2. Keep final desired content
3. Continue:

```bash
git add docs/scenarios/conflict-demo.txt
git rebase --continue
```

## Verify result

```bash
git log --oneline --graph --decorate -10
cat docs/scenarios/conflict-demo.txt
```

## Recovery commands

```bash
git rebase --abort
git reset --soft HEAD~1
```
