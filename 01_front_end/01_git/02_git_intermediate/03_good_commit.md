# Writing Good Commits in Git

## 1. Introduction

A well-written commit message is crucial for collaboration and long-term project maintenance. Good commits make it easier to understand project history, track changes, and identify the purpose of modifications. Following conventions also ensures consistency across the team.

---

## 2. Structure of a Commit Message

A standard commit message typically has three parts:

1. **Header**: A single line describing the change (type, scope, and subject).
2. **Body**: A more detailed explanation of what and why changes were made (optional but recommended).
3. **Footer**: Additional information such as breaking changes or issue references.

Example:

```
feat(auth): add JWT-based authentication

This commit introduces JWT for managing user sessions securely.
It replaces the old cookie-based authentication method.

BREAKING CHANGE: The login endpoint now returns a JWT instead of a session ID.
```

---

## 3. Conventional Commit Types

The [Conventional Commits](https://www.conventionalcommits.org/) specification is a widely adopted standard. Common commit types include:

* **fix**: Bug fixes (correlates with PATCH in Semantic Versioning)
* **feat**: New features (correlates with MINOR in Semantic Versioning)
* **BREAKING CHANGE**: Introduces API-breaking changes (correlates with MAJOR in Semantic Versioning)
* **chore**: Maintenance tasks not affecting application logic
* **docs**: Documentation updates
* **style**: Formatting changes, no logic affected
* **refactor**: Code restructuring without changing functionality
* **perf**: Performance improvements
* **test**: Adding or updating tests
* **build/ci**: Changes to build tools or CI configuration

---

## 4. Examples of Commit Messages

### Commit with Description and Breaking Change Footer

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Commit with `!` to Draw Attention to Breaking Change

```
feat!: send an email to the customer when a product is shipped
```

### Commit with Scope and `!` to Draw Attention to Breaking Change

```
feat(api)!: send an email to the customer when a product is shipped
```

### Commit with Both `!` and Breaking Change Footer

```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6
```

### Commit with No Body

```
docs: correct spelling of CHANGELOG
```

### Commit with Scope

```
feat(parser): add ability to parse arrays
```

---

## 5. Best Practices for Writing Good Commits

1. **Keep commits focused**: Each commit should address a single logical change.
2. **Use imperative mood**: Write messages like commands, e.g., `fix bug`, not `fixed bug`.
3. **Limit header length**: Keep the subject line under 50 characters if possible.
4. **Separate subject and body with a blank line**.
5. **Explain why, not just what**: The body should describe the reasoning behind the change.
6. **Reference issues or tickets**: Use `Closes #123` or `Refs #456` in the footer when applicable.
7. **Use consistent style**: Align with team or project guidelines (e.g., Conventional Commits).
8. **Avoid unnecessary commits**: Do not commit generated files or temporary changes.
9. **Write commits incrementally**: Smaller commits are easier to review and revert.

---

## 6. Advanced Commit Practices

* **Atomic Commits**: Each commit should be self-contained and logically independent.
* **Signed Commits**: Use GPG signing for verifying commit authenticity (`git commit -S`).
* **Amending Commits**: Use `git commit --amend` to update the latest commit if necessary.
* **Squashing Commits**: Combine multiple commits into one for a cleaner history (`git rebase -i`).
* **Rewording Commits**: Change only the commit message without altering content (`git commit --amend -m`).

---

## 7. Benefits of Good Commit Messages

* Clearer project history
* Easier debugging and code reviews
* Improved collaboration across teams
* Better automated release notes when using tools that parse Conventional Commits
* Easier reverts when needed due to isolated logical changes

---

## 8. Summary

Writing good commits is a habit that improves the quality of software projects. By keeping commits small, meaningful, and consistent with conventions like Conventional Commits, developers create a maintainable and professional codebase. Advanced practices such as signed commits, squashing, and rewording help maintain a clean, trustworthy, and collaborative version history.

> 📚 This is part of the Git Intermediate chapter.
