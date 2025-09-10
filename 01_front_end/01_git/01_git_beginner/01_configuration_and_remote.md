# Git Global Configuration and Remote

When working with Git, it is important to set your global configuration so that every commit you make is associated with your name and email. Additionally, you will often connect your local repository to a remote repository (e.g., GitHub, GitLab, Bitbucket) so you can push and pull changes.

---

## Setting Global Username and Email

Use the following commands to configure your global Git identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

* `user.name` → The name displayed in your commit history.
* `user.email` → The email address associated with your commits.

---

## Checking Your Configuration

To verify what you have configured, run:

```bash
git config --global --list
```

Example output:

```
user.name=Your Name
user.email=your.email@example.com
```

---

## Editing Configuration Manually

You can also edit the configuration file directly:

```bash
nano ~/.gitconfig
```

Example content:

```ini
[user]
    name = Your Name
    email = your.email@example.com
```

---

## Repository-Specific Configuration

If you want to set a username and email **only for a specific repository**, use the same command without `--global` inside that repository:

```bash
git config user.name "Repo Specific Name"
git config user.email "repo.specific@example.com"
```

This will override the global configuration for that repository only.

---

## Adding a Remote Repository

Once you have initialized your local repository with `git init`, you can add a remote repository:

```bash
git remote add origin <repository-URL>
```

* `origin` → This is the default name given to the remote repository.
* `<repository-URL>` → This is the HTTPS or SSH URL of your remote repository.

---

## Checking Remote

To see the remotes connected to your repository:

```bash
git remote -v
```

Example output:

```
origin  https://github.com/username/repo.git (fetch)
origin  https://github.com/username/repo.git (push)
```

---

## Removing or Changing a Remote

Remove a remote:

```bash
git remote remove origin
```

Change the URL of a remote:

```bash
git remote set-url origin <new-repository-URL>
```

---

## Typical Workflow with Remote

```bash
git init
git remote add origin <repository-URL>
git branch -M main
git add .
git commit -m "Initial commit"
git push -u origin main
```

---

## Summary

* Use `git config --global` to set your identity globally.
* Use `git config` without `--global` for repository-specific settings.
* Add a remote repository with `git remote add origin <URL>`.
* Verify remotes with `git remote -v`.
* Push your commits to the remote with `git push -u origin main`.

> 📚 This is part of the GIT beginner chapter.


