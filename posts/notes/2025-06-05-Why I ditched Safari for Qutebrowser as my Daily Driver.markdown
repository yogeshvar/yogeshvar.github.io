---
layout: post
title: "Why I ditched Safari for Qutebrowser as my Daily Driver"
date: 2025-06-05
categories: tools macos
---

The internet was good when PewDiePie was still a YouTuber and I was a kid playing Dragon Ball Z. One day, I stumbled upon a video titled "[I installed Linux (so should you)](https://www.youtube.com/watch?v=pVI_smLgTY0)" from Pews himself. It hit me with a wave of nostalgia — back in college, my Sony VAIO ran Linux Mint like a champ. No Windows, just smooth, clean performance.

But then life happened. iOS development kicked in, and I found myself glued to macOS. The terminal was my second home, but I always thought ricing was reserved for Arch Linux users with custom kernels, posting screenshots to [r/unixporn](https://www.reddit.com/r/unixporn/comments/1g4y8ne/amethyst_my_first_attempt_at_ricing_macos/) like it was their personal gallery.

Turns out, I was wrong.

A few deep Reddit dives, blog reads (shoutout [Nexxel](https://www.nexxel.dev/blog/ricing-macos), [Linkarzu](https://linkarzu.com/posts/macos/macos-ricing-2025/), [Igor](https://igorbedesqui.com/writing/macos-rice)), the YouTube algorithm convinced me — macOS can be riced. And rice I did. (I might share that whole journey in another post… if I'm hydrated enough. No promises, I don't even drink coffee.)

But today, let's talk about something specific and glorious: Qutebrowser. (Yes, it's pronounced "cute".)

## What Even Is Qutebrowser?

Imagine if Vim and your browser had a child. That's [Qutebrowser](https://www.qutebrowser.org/). A minimalist, keyboard-driven web browser that strips away GUI fluff and replaces it with raw power.

No mouse needed. You hint, jump, scroll, and bind your way around the internet.

It runs on QtWebEngine — the same engine behind Chromium — but trades shiny UI for control and speed.

## Why I Switched from Safari to Qutebrowser

Safari is elegant. Qutebrowser is a keyboard-wielding beast. It's like trading a smooth city bicycle for a motorcycle with a sidecar full of shell scripts.

What sold me to Qutebrowser?

- **Keyboard Navigation**: `f` to hint and follow links, `:open` to open a URL, `:tab-close`, `:history`, all without touching the mouse.
- **MPV Integration**: Watching YouTube without ads? Just bind a key to spawn `mpv` directly on the hinted link.
- **Bookmarks**: Stored in a readable JSON file. You can back them up, grep them, or sync across machines.
- **Customization**: Your config is Python. Want shell scripts tied to keystrokes? Do it.

## Configuration Highlights

Here are some of the settings I use that make Qutebrowser feel like home:

```
config.set('auto_save.session', True)               # I don't lose tabs anymore
config.set('tabs.position', 'top')                  # Because muscle memory
config.set('content.blocking.method', 'both')       # Block ads and trackers
config.set('content.cookies.accept', 'no-3rdparty') # Privacy boost
config.set('scrolling.smooth', True)                # Like butter
config.set('url.default_page', 'https://google.com')
```

## Power Moves

```
config.bind(",a", "hint links spawn --detach mpv {hint-url}")
```

No ads, no distractions. I run YouTube through `mpv`. It's like pulling the content out of the noise.

```
config.set('colors.webpage.darkmode.enabled', True)
```

I like my screens dark and my vibes darker.

```
config.bind('<Meta-o>', 'open -t https://google.com') # Meta - Command
```

Default tab launcher. One shortcut away from escape velocity.

## The Trade-Offs

It's not all perfect:

- Avoid using it for banking or sensitive data. (I don't know how safe those security features are.)
- Some modern websites break without a mouse or pop-up support.
- Twitch doesn't work well natively, but hey, there's always `mpv`

## But Is It For You?

If you like Vim, keyboard-driven tools, and obsess over your dotfiles — yes. If you need every Chrome extension under the sun and don't want to tinker — maybe not.

If you're still unsure, ask yourself: "Do I want to launch YouTube, skip all ads, and play it in mpv with a single keystroke?" And mainly without ads? If the answer is yes, welcome to the dark side.

## Final Thoughts

Qutebrowser is not just a browser — it's cool. Most of the modern browsers are too overrated and have too many features — GPU acceleration for what? Watching YouTube? No thanks. I like Qutebrowser because it's simple for me. Just a few keystrokes, and since this is my personal laptop, pretty much surf and entertainment it works.

And yes, I still use Safari for bank logins. I like to live, not die. But for everything else, Qutebrowser is where I live online.

Next time, I might or might not dive into how I riced my full macOS setup with Yabai, Simple Bar, and tmux. Give Qutebrowser a try and you won't be disappointed I guess. A moment of silence for Windows users because I don't even know if the word "Ricing" is present in their dictionary.
