---
layout: post
title: "Git Emojis are fun 🎳"
date: 2020-06-22
categories: git tools
---

Remember when your girlfriend got mad at you for not knowing what she said three years ago on Wednesday at 11:17 pm? That's exactly what a git commit is like. And if you've been single all your life, let me explain it to you in more detail.

It is important to write a commit message that is informative and that actually makes sense (don't say your wish or you decide to your GF).

The `git-commit` documentation states:

> Create a new commit containing the current contents of the index and the given log message describing the changes.

## Why git-emoji is fun

Programming, code is inherently flat and sometimes tiresome. git-emoji helps me add faces, colours, and emotions to it. Doesn't it look better with emoji than plain text? Of course, yes.

It makes it easy to understand once you get used to git-emoji. Mostly, it's fun. 💃

## How to get started with git-emoji

To start using git-emoji in your commit messages from the command line you'll need to install gitmoji-cli.

⚠️ Take a break, `npm install` will take a longggggg time. 🤐

(P.S: I was manually checking the emoji and adding it to my commit messages before this. Thanks to [Carlo](https://github.com/carloscuesta) for gitmoji-cli.)

Once installed globally, you're ready to commit messages with emoji. `gitmoji` is an interactive client for using gitmoji on commit messages.

⚠️ You can add gitmoji as your pre-commit hook and make all your teammates follow the same standards.

Some gitmoji commands:

- `gitmoji -l` ⇒ List all the available gitmojis
- `gitmoji -s search_query` ⇒ Search gitmojis

## Why do I think gitmoji is useful?

- Today's code is a future chronicle, so searching commit messages will be hard. Additionally, we can't guarantee that plain text will be meaningful to us later.
- With gitmoji, we can search for commit messages by emoji.

Thanks for reading 👋 Happy Coding 👨‍💻
