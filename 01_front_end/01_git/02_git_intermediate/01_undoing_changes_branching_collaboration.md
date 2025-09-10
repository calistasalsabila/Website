# Git Learning Materials

This document summarizes and explains the key topics covered in the provided Git learning materials. Each section corresponds to one of the lessons, offering detailed explanations, commands, and context for practical use.

---

## 1. Undoing Changes with Git Restore

Git introduced the `git restore` command in version 2.23 to simplify the process of discarding local changes. Before this, developers primarily used `git checkout` for multiple purposes, which was often confusing.

### Key Commands:

* **Discard changes in a file:**

  ```bash
  git restore <filename>
  ```

  This command discards changes in the working directory for the specified file, restoring it to the state of the last commit.

* **Discard changes for all files:**

  ```bash
  git restore .
  ```

* **Restore from a specific commit:**

  ```bash
  git restore --source=<commit_hash> <filename>
  ```

This is useful when you want to undo modifications in the working directory without affecting the staging area.

---

## 2. Git Reset and Git Restore for Staged Files

While `git restore` works on the working directory, it can also be used with the `--staged` option to unstage files.

### Key Commands:

* **Unstage a file:**

  ```bash
  git restore --staged <filename>
  ```

* **Unstage all files:**

  ```bash
  git restore --staged .
  ```

Alternatively, you can use `git reset` to achieve the same effect:

* **Unstage a file with reset:**

  ```bash
  git reset <filename>
  ```

Both approaches remove changes from the staging area but do not delete modifications in the working directory.

---

## 3. Returning to Previous Commits with Git Reset

The `git reset` command is used to move the HEAD pointer to a previous commit, effectively changing the commit history. There are three main modes:

* **Soft Reset:**

  ```bash
  git reset --soft <commit_hash>
  ```

  Moves HEAD to the specified commit but keeps changes staged.

* **Mixed Reset (default):**

  ```bash
  git reset <commit_hash>
  ```

  Moves HEAD to the commit and unstages changes, but keeps modifications in the working directory.

* **Hard Reset:**

  ```bash
  git reset --hard <commit_hash>
  ```

  Completely resets HEAD, staging area, and working directory to match the specified commit. All changes are lost.

This command is powerful but must be used with caution, especially with `--hard`.

---

## 4. Branching and Merging

Branching allows developers to work on new features or bug fixes in isolation, without affecting the main codebase. Merging integrates changes from different branches.

### Key Commands:

* **Create a new branch:**

  ```bash
  git branch feature-branch
  ```

* **Switch to a branch:**

  ```bash
  git switch feature-branch
  ```

  or

  ```bash
  git checkout feature-branch
  ```

* **Merge a branch into the current branch:**

  ```bash
  git merge feature-branch
  ```

If there are conflicts, Git will notify you and you must resolve them manually before completing the merge.

---

## 5. Revising Commits with Git Revert

Unlike `git reset`, which rewrites history, `git revert` creates a new commit that undoes the effects of a previous commit.

### Key Commands:

* **Revert a commit:**

  ```bash
  git revert <commit_hash>
  ```

* **Revert multiple commits:**

  ```bash
  git revert <commit1>..<commitN>
  ```

This method is safer for shared repositories because it preserves history and avoids conflicts caused by force pushing.

---

## 6. Starting and Creating a Repository on GitHub

Creating a repository on GitHub allows you to collaborate, back up, and manage your code remotely.

### Steps:

1. Go to GitHub and create a new repository.
2. Initialize your local project as a Git repository:

   ```bash
   git init
   ```
3. Add remote origin:

   ```bash
   git remote add origin https://github.com/username/repository.git
   ```
4. Add files and commit:

   ```bash
   git add .
   git commit -m "Initial commit"
   ```
5. Push to GitHub:

   ```bash
   git push -u origin main
   ```

---

## 7. Git Clone and Git Push

* **Cloning:** Copies an existing repository (from GitHub or elsewhere) into your local machine.

  ```bash
  git clone https://github.com/username/repository.git
  ```

* **Pushing:** Uploads local commits to a remote repository.

  ```bash
  git push origin main
  ```

If you are pushing for the first time, you may need:

```bash
git push -u origin main
```

---

## 8. GitHub Pull Request

Pull Requests (PRs) are a GitHub feature used to propose changes to a repository. They allow team members to review and discuss code before merging it into the main branch.

### Workflow:

1. Create a new branch locally and commit your changes.
2. Push the branch to GitHub.

   ```bash
   git push origin feature-branch
   ```
3. On GitHub, open a Pull Request from `feature-branch` to `main`.
4. Reviewers can comment, request changes, or approve the PR.
5. Once approved, the branch can be merged into `main`.

---

# Conclusion

This collection of Git lessons covers essential operations for managing repositories effectively:

* Undoing changes with `git restore`
* Managing the staging area with `git reset` and `git restore`
* Returning to previous commits with `git reset`
* Using branches and merges for parallel development
* Reverting commits safely with `git revert`
* Initializing repositories on GitHub
* Cloning and pushing code
* Collaborating with Pull Requests

Together, these commands and workflows form the foundation of modern Git usage in software development.

> 📚 This is part of the GIT Intermediate chapter.
