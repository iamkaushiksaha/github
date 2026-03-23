# Basic Lab 01 — Mac Setup for Git + GitHub

## Lab Objective
Prepare a Mac machine for Git development and GitHub authentication.

## Step 1: Install Git tools

```bash
xcode-select --install
```

Verify:

```bash
git --version
```

## Step 2: Optional package manager (Homebrew)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Step 3: Configure Git globally

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
git config --global color.ui auto
```

Check config:

```bash
git config --global --list
```

## Step 4: GitHub authentication options

### Option A (recommended): GitHub CLI

```bash
brew install gh
gh auth login
```

### Option B: HTTPS + Personal Access Token
Use PAT instead of password when prompted.

### Option C: SSH key

```bash
ssh-keygen -t ed25519 -C "you@example.com"
cat ~/.ssh/id_ed25519.pub
```

Add key at: GitHub → Settings → SSH and GPG keys.

## Lab Checklist

- [ ] `git --version` works
- [ ] `git config --global --list` shows your name/email
- [ ] GitHub auth is complete
