# Git Commands Overview

This document provides a structured introduction to some of the most essential Git commands. It covers creating a repository, making changes, observing repository states, synchronizing with remote repositories, and working with branches and tags.

---

## 1. Create

These commands are used to create or clone a repository.

### `git init`

Initializes a new Git repository in the current directory.

```bash
git init
```

This command creates a hidden `.git` folder that contains all the necessary repository files.

### `git clone`

Clones an existing repository into a new directory.

```bash
git clone <repository_url>
```

This command copies the entire repository, including history and branches.

---

## 2. Make a Change

These commands are used when making changes to files and recording them in Git.

### `git add <file>`

Stages a specific file for commit.

```bash
git add file.txt
```

### `git add .`

Stages all modified and new files in the current directory.

```bash
git add .
```

### `git commit -m "message"`

Records the staged changes in the repository with a descriptive commit message.

```bash
git commit -m "Add initial project structure"
```

### `git reset <file>`

Unstages a file from the staging area while keeping changes in the working directory.

```bash
git reset file.txt
```

### `git reset --hard`

Resets the repository to the last commit, discarding all local changes.

```bash
git reset --hard
```

---

## 3. Observe

These commands help inspect the state and history of the repository.

### `git status`

Displays the status of the working directory and staging area.

```bash
git status
```

### `git diff`

Shows the differences between changes in the working directory and the index.

```bash
git diff
```

### `git show`

Displays detailed information about a specific commit.

```bash
git show <commit_id>
```

### `git log`

Shows the commit history of the repository.

```bash
git log
```

---

## 4. Sync

These commands are used to synchronize with remote repositories.

### `git push`

Uploads local commits to a remote repository.

```bash
git push origin main
```

### `git pull`

Fetches and merges changes from a remote repository into the local branch.

```bash
git pull origin main
```

### `git fetch`

Downloads changes from a remote repository without merging them.

```bash
git fetch origin
```

---

## 5. Branch

These commands are used for branching, merging, and tagging.

### `git branch`

Lists all branches or creates a new branch.

```bash
git branch feature-branch
```

### `git checkout`

Switches to a specified branch.

```bash
git checkout feature-branch
```

### `git merge`

Merges a specified branch into the current branch.

```bash
git merge feature-branch
```

### `git tag .`

Creates a new tag (lightweight or annotated) for a commit.

```bash
git tag v1.0.0
```

---

## Conclusion

These Git commands form the foundation for effective version control. Mastery of these commands is essential for collaborating in software development projects and maintaining clean, traceable code history.

> 📚 This is part of the GIT beginner chapter.
