# Git Global Configuration

When working with Git, it is important to set your global configuration so that every commit you make is associated with your name and email. This helps identify authorship across repositories.

---

## Setting Global Username and Email

Use the following commands to configure your global Git identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

* `user.name` → This will be the name displayed in your commit history.
* `user.email` → This will be the email address associated with your commits.

---

## Checking Your Configuration

To verify what you have configured, run:

```bash
git config --global --list
```

This will show something like:

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

## Summary

* Use `git config --global` to set your identity globally.
* Check your configuration with `git config --global --list`.
* Edit manually via `~/.gitconfig` if needed.
* Use local config (without `--global`) for repository-specific settings.

> 📚 This is part of the GIT beginner chapter.
