# Git Learner Lab (Mac Local + GitHub)

A practical, lab-based repository to learn Git from zero to advanced level.

Repository target used in labs:
- GitHub URL: `https://github.com/iamkaushiksaha/github`
- Git clone URL: `https://github.com/iamkaushiksaha/github.git`

## Learning Tracks

1. **Basic**
   - Mac setup
   - Create repository + first commit using CLI
   - `status`, `add`, `commit`, `push`, `touch`, folder creation
   - Pull local updates when files are changed/uploaded from GitHub UI

2. **Advanced**
   - Feature branch flow
   - Rebase and clean history
   - Conflict handling labs

3. **Scenarios (Common Issues)**
   - Real mistakes and quick recovery commands

## Repository Layout

```text
.
├── README.md
└── docs
    ├── basic
    │   ├── 01-setup-mac.md
    │   ├── 02-new-repo-and-initial-steps.md
    │   └── 03-sync-after-github-ui-change.md
    ├── advanced
    │   ├── 01-feature-branch-rebase-lab.md
    │   └── 02-conflict-lab.md
    ├── scenarios
    │   └── common-issues.md
    └── git-learner-guide.doc
```

## Suggested Order

- Start: `docs/basic/01-setup-mac.md`
- Then: `docs/basic/02-new-repo-and-initial-steps.md`
- Then: `docs/basic/03-sync-after-github-ui-change.md`
- Continue with advanced labs
- Use scenarios as daily troubleshooting reference

## Lab Rules

- Run commands yourself (do not just read).
- After each lab, verify with `git status` and `git log --oneline -5`.
- Keep commits small and meaningful.
