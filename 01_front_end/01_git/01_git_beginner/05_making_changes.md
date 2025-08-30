# Making Changes in Git

One of the most common tasks in Git is making changes to files and committing those changes to the repository. This process involves **staging**, **committing**, and sometimes **resetting** files. Below are the essential commands used for handling file changes in Git.

---

## 1. Staging Files

Before committing, changes must be staged. Staging means marking files to be included in the next commit.

### Stage a Specific File

```bash
git add [file]
```

* Adds the specified file to the staging area.
* Example:

```bash
git add index.html
```

### Stage All Changed Files

```bash
git add .
```

* Adds all modified and new files in the current directory and subdirectories to the staging area.

---

## 2. Committing Changes

A commit saves the staged changes into the project’s history. Commits should always include a descriptive message.

### Commit Staged Files

```bash
git commit -m "commit message"
```

* Commits only the files that have been staged.
* Example:

```bash
git commit -m "Added user authentication"
```

### Commit All Tracked Files

```bash
git commit -am "commit message"
```

* Commits changes to all tracked files (files already under version control).
* Does not include new untracked files.

---

## 3. Unstaging Files

If you mistakenly staged a file, you can remove it from the staging area without discarding the changes.

```bash
git reset [file]
```

* Removes the specified file from staging.
* Example:

```bash
git reset main.py
```

---

## 4. Reverting to the Last Commit

Sometimes you may want to discard all current changes and return to the last committed state.

```bash
git reset --hard
```

* Resets the working directory and staging area to the last commit.
* **Warning:** This permanently discards all uncommitted changes.

---

## Summary

* Use `git add` to stage files for commit.
* Use `git commit` to record staged changes with a message.
* Use `git reset` to unstage files or undo changes.
* Use `git reset --hard` to discard all changes and restore the last commit.

This workflow ensures that every meaningful change in your project is properly tracked and versioned in Git.

> 📚 This is part of the GIT beginner chapter.
