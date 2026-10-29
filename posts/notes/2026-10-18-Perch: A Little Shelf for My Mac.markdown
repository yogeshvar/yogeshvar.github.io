---
layout: post
title: "Pullshelf: A Little Shelf for My Mac"
date: 2026-10-18
categories: tools macos opensource ai
---

I built a small Mac app called Pullshelf (it was Perch when I first wrote this). Pull down from the top of the screen with two fingers (or press ⌘⇧L) and a shelf slides out with a terminal, clipboard history, a files shelf and notes.

## Where the idea came from
A friend of mine used Unclutter back in the day: notes and clipboard history, always one gesture away. Easy, handy, a proper productivity tool. I never had the money to buy it. So: why not build one like that, and keep it open?

## What changed since then
These days I work in the terminal a lot, with agents and other AI tools. So Pullshelf also has a terminal and a files shelf next to the clipboard and notes.

## Building it with Claude
Built with Claude Code and a few subagents. Bugs along the way: the pull went the wrong way with natural scrolling, dropping a file crashed the app, and collapsing a pane left a gap. 406 tests cover the TypeScript code.

## Try it
`brew install --cask yogeshvar/pullshelf/pullshelf`. Not notarized, Apple Silicon only, macOS 13+. Code: https://github.com/yogeshvar/pullshelf
