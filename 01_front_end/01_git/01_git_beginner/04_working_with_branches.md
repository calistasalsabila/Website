# Working with Branches in Git

Branches in Git allow developers to work on different features, bug fixes, or experiments independently without affecting the main project codebase. Branching is one of Git’s most powerful features, enabling parallel development and easy integration.

---

## 1. Listing Branches

### Local Branches

```bash
git branch
```

* Displays all local branches.
* The currently active branch is marked with an asterisk (`*`).

### Local and Remote Branches

```bash
git branch -av
```

* Shows both local and remote branches.
* Useful to see which branches exist on the remote repository in addition to local ones.

---

## 2. Switching Between Branches

```bash
git checkout my_branch
```

* Switches to the branch named `my_branch`.
* Updates the working directory to match the state of that branch.
* Any uncommitted changes in the current branch must be committed or stashed before switching.

Example:

```bash
git checkout feature-login
```

---

## 3. Creating a New Branch

```bash
git branch new_branch
```

* Creates a new branch called `new_branch`.
* Does not automatically switch to it.

To create and switch in one command:

```bash
git checkout -b new_branch
```

---

## 4. Deleting a Branch

```bash
git branch -d my_branch
```

* Deletes the branch named `my_branch` locally.
* Git prevents deletion if the branch has unmerged changes (to avoid data loss).
* To force deletion:

```bash
git branch -D my_branch
```

---

## 5. Merging Branches

Merging integrates changes from one branch into another.

### Example: Merge `branch_a` into `branch_b`

```bash
git checkout branch_b
git merge branch_a
```

* First, switch to the branch that will receive the changes (`branch_b`).
* Then merge the source branch (`branch_a`) into it.

If there are conflicts, Git will pause and require manual resolution before completing the merge.

---

## 6. Tagging a Commit

```bash
git tag my_tag
```

* Creates a tag pointing to the current commit.
* Tags are commonly used to mark release versions (e.g., `v1.0`, `v2.1`).

Example:

```bash
git tag v1.0.0
```

To list all tags:

```bash
git tag
```

---

## Summary

* Use `git branch` to view, create, or delete branches.
* Use `git checkout` to switch between branches.
* Use `git merge` to combine changes from different branches.
* Use `git tag` to mark important commits (e.g., releases).

Branching enables multiple workflows simultaneously, making Git an essential tool for collaborative software development.

> 📚 This is part of the GIT beginner chapter.
