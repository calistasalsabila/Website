# Understanding `git branch` vs `git checkout -b`

## Purpose

This document explains the difference between `git branch` and `git checkout -b`, and why `git checkout -b` is often used when working from a tag or a specific commit.

---

## Theory Explanation

### `git branch <branch_name>`

* Creates a new branch.
* Does **not** switch to the new branch.
* After running this command, you remain on your current branch.

Example:

```bash
git branch feature-x
```

Result:

* A new branch `feature-x` is created.
* You are still on your current branch (e.g., `main`).
* To start working on `feature-x`, you must explicitly run:

  ```bash
  git checkout feature-x
  ```

---

### `git checkout -b <branch_name>`

* Creates a new branch **and** immediately switches to it.
* This is a shortcut for:

  ```bash
  ```

git branch \<branch\_name>
git checkout \<branch\_name>

````

Example:
```bash
git checkout -b feature-x
````

Result:

* A new branch `feature-x` is created.
* HEAD is moved to `feature-x`, so you are now working inside that branch.

---

### `git checkout -b <branch_name> <tag/commit>`

* Creates a new branch starting from the given **tag** or **commit**.
* Useful when you want to continue development from a previously tagged version.

Example:

```bash
git checkout -b fix-old-version v1.0.0
```

Result:

* A new branch `fix-old-version` is created from the commit tagged `v1.0.0`.
* HEAD is now on `fix-old-version`, allowing you to safely commit new changes without being in a detached HEAD state.

---

## Conclusion

* Use `git branch <branch_name>` when you want to create a branch but not switch immediately.
* Use `git checkout -b <branch_name>` when you want to create and move to the branch in one step.
* Use `git checkout -b <branch_name> <tag/commit>` when you want to branch off from a specific tag or commit and continue development from that point.
