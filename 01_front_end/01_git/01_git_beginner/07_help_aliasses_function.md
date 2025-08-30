# Git Help and Aliases

## Using `git help`

Git provides built-in help documentation. You can access it in different ways:

* `git help <command>` → Opens the manual page for the specified command.
* `git <command> --help` → Same as above.
* `man git-<command>` → Opens the man page (Linux/Unix).

Example:

```bash
git help commit
git commit --help
man git-commit
```

---

## Git Aliases

Aliases make Git commands shorter and easier to use. They can be defined either directly in Git configuration or in your shell profile (`~/.bashrc` or `~/.bash_profile`).

### Adding Aliases via Git Config

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm "commit -m"
```

Usage:

```bash
git st
git co main
git br
git cm "update"
```

---

## Shell Functions for Git Automation

Instead of only using Git aliases, you can define functions inside your shell profile (`~/.bashrc` or `~/.bash_profile`) to automate repetitive Git workflows.

### Example: Simple Auto Commit Function

```bash
nano ~/.bashrc

if [[ $- != *i* ]]; then
    return
fi

function ok() {
    git add .
    git commit -m "update"
    git push origin main
}

if [ -f ~/.bash_aliases ]; then
    source ~/.bash_aliases
fi
```

### Example: Integration with Conda and Git in `~/.bash_profile`

```bash
nano ~/.bash_profile

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
if [ -f '/c/Users/VICTUS/anaconda3/Scripts/conda.exe' ]; then
    eval "$(/c/Users/VICTUS/anaconda3/Scripts/conda.exe 'shell.bash' 'hook')"
fi
# <<< conda initialize <<<

function ok() {
    git add .
    git commit -m "update"
    git push origin main
}

if [ -f ~/.bash_aliases ]; then
    source ~/.bash_aliases
fi

source ~/.bashrc
```

---

## Safer Versions of Git Function

You can enhance the `ok` function to make it safer and more interactive.

### Safe Commit with Confirmation

```bash
function ok() {
    git status
    read -p "Lanjut commit? (y/n) " confirm
    if [[ $confirm == "y" ]]; then
        read -p "Commit message: " msg
        git add .
        git commit -m "$msg"
        git push origin main
    else
        echo "Commit dibatalkan."
    fi
}
```

### Safe Commit with Pull First

```bash
function ok() {
    git pull origin main  # Auto pull dulu biar up-to-date
    git status
    read -p "Lanjut commit? (y/n) " confirm
    if [[ $confirm == "y" ]]; then
        read -p "Commit message: " msg
        git add .
        git commit -m "$msg"
        git push origin main
    else
        echo "Commit dibatalkan."
    fi
}
```

### Commit with Default Message

```bash
function ok() {
  git add .
  git commit -m "${1:-update}"
  git push
  echo "Pushed with message: ${1:-update}"
}
```

---

## Summary

* Use `git help` to explore Git commands and options.
* Create Git aliases for shorthand commands.
* Define `ok` functions in your shell config to automate common Git workflows.
* Make your functions interactive and safe to avoid mistakes.

> 📚 This is part of the GIT beginner chapter.
