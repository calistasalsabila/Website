# Observing the Repository in Git

Once a repository has been created and files have been committed, you will often need to inspect the state of your project. Git provides several commands to observe changes, history, and contributions. This is crucial for understanding what is happening inside your repository and for collaborating effectively with others.

---

## 1. Checking the Status of Files

```bash
git status
```

* Displays new, modified, or deleted files that have not yet been committed.
* Helps you see whether files are staged (ready for commit) or unstaged (not yet added).

Example output:

```
On branch main
Changes not staged for commit:
  modified:   index.html
Untracked files:
  new_file.txt
```

---

## 2. Viewing Changes to Files

### Unstaged Changes

```bash
git diff
```

* Shows line-by-line changes in files that have been modified but not staged.

### Staged Changes

```bash
git diff --cached
```

* Displays the differences between the staged snapshot and the last commit.

### All Changes (Staged + Unstaged)

```bash
git diff HEAD
```

* Compares all current changes (both staged and unstaged) against the last commit.

---

## 3. Comparing Two Commits

```bash
git diff commit1 commit2
```

* Shows the differences between two specific commits.
* Useful for tracking how the project evolved between points in time.

Example:

```bash
git diff a1b2c3d 9f8e7d6
```

---

## 4. Viewing File History and Authors

### Finding Who Changed a Line

```bash
git blame [file]
```

* Shows line-by-line information of who last modified each line of a file, along with the commit ID.
* Useful for accountability and debugging.

Example:

```bash
git blame main.py
```

---

## 5. Viewing Commit Details

```bash
git show [commit]:[file]
```

* Shows detailed information about a commit.
* If a file is specified, it displays the file’s state at that commit.

Example:

```bash
git show 123abc:index.html
```

---

## 6. Viewing Commit History

### Full History

```bash
git log
```

* Displays the commit history of the repository.
* Each entry includes the commit ID, author, date, and commit message.

Example output:

```
commit 4e3a1d2
Author: Alice <dokja@example.com>
Date:   Fri Aug 30 14:22 2025

    Added login feature
```

### History with Diffs

```bash
git log -p [file/directory]
```

* Shows the commit history along with the changes introduced in each commit.
* If a file or directory is specified, only that path’s history is shown.

---

## Summary

* Use `git status` to quickly check file states.
* Use `git diff` variants to examine changes before committing.
* Use `git log` to explore commit history.
* Use `git blame` and `git show` for detailed insight into specific changes.

These commands are essential for monitoring progress, identifying issues, and collaborating efficiently in any Git-based project.

> 📚 This is part of the GIT beginner chapter.
