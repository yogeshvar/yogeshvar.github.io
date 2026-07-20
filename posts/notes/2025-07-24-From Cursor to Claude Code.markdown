---
layout: post
title: "From Cursor to Claude Code"
date: 2025-07-24
categories: ai tools coding
---

I used Cursor for AI-driven development on my personal projects. It was sleek, smart, and productive — until the pricing changed drastically.

A true "what the heck" moment for the Cursor community, with that sudden bump in price. But Cursor is essentially paying API costs for every AI request we make, with a huge context window for a big codebase. To stay afloat, they either had to limit usage or charge a lot more for heavy use. This realization made me dig deeper into how Cursor works and whether there was a more cost-effective way to leverage AI for coding.

When this price change happened, Amazon dropped Kiro. Coincidence? Maybe it was an AI civil war between tech giants to claim the throne. 😄

## Under the Hood: Cursor Uses Claude (and Others)

It turns out Cursor itself is not an AI model — it's a smart interface. I'm impressed with Cursor's smarty-pants move of making a fancy VSCode fork with a chat sidebar. Under the hood, Cursor is powered by a combination of models, including Anthropic's Claude and OpenAI's models. In fact, for complex coding tasks, Cursor users (myself included) often preferred Claude because of its extensive context window and strong coding capabilities.

The new pricing confirmed this: Claude became expensive on Cursor, while GPT-4.1 (or older models) were "as much as you can suffer" for free. Essentially, Claude was the secret sauce behind Cursor's most useful coding assistance, especially when dealing with larger codebases or tricky problems.

This led me to ask: if Cursor is just calling Claude's API behind the scenes, could I call Claude's API directly? The answer was yes — and Anthropic actually provides a tool for that. It's called Claude Code, and it's like having Claude as your personal coding assistant without the Cursor middleman.

## Claude Code: CLI vs GUI

Claude Code is Anthropic's official command-line tool for coding tasks. Yes, this is a CLI — Command Line Interface. I'll admit, my first reaction was skepticism. Going from a sleek editor interface to typing commands in a terminal felt like taking a step backward. I love working in terminals though. (80s hacker setup is so cool.)

But I was wrong. Claude Code is surprisingly powerful. It understands your entire codebase and can turn natural language instructions into actual code changes. It's the same Claude "brain" that powers Cursor, but you're accessing it directly through command-line interactions. It has some drawbacks, which we will discuss later.

Setting it up was painless — just a quick npm install and I was ready to go. Now I can navigate to any project and run claude to start an interactive chat session. Voilà, we have a Cursor — but not a fancy VSCode fork. This is only available on the command line interface and gets the job done.

## Breaking Down the Pros and Cons

Let me give you the real talk on both options:

**Cursor's Strengths:**

- Let everyone code — Download, install, start coding. No API keys to manage or configurations to worry about. Anyone can just code whatever they want and find developers to fix it. 😛
- Steps Interface — The inline suggestions and chat sidebar feel natural, like having your manager constantly watching over your shoulder.
- All chaos in one place — Everything happens in one place: file browsing, diffs, change reviews.
- Minimize your bugs — Cursor can introduce 100 bugs, but you have the checkpoints to restore since every chat is considered a Git commit.

**Cursor's Pain Points:**

- Tokens = Money — If you lean on AI for all your work, then you need approx. $200.
- Limited autonomy — Complex multi-file refactors often require lots of hand-holding and step-by-step prompting, even with MCP servers.
- Context limitations — To manage costs, Cursor might not use the full context window unless you're on a premium plan. This can cause it to miss important details in large projects.
- Platform dependency — You're locked into Cursor's editor environment, which might not mesh with your existing workflow.

**Claude Code's Advantages:**

- Better economics — Direct API usage or a Claude Pro subscription often works out cheaper. And you can pick the model for your tasks and keep it economical with the same throughput.
- Beast mode — You get the complete context window and can customize how requests are made. Claude Code's agentic abilities mean it can handle complex, multi-step tasks with a single command.
- Ultimate flexibility — Works with any editor or development environment. No dependency on anything.
- Always current — Direct access to Anthropic's latest models and features as soon as they're released.

**Claude Code's Challenges:**

- Not for all — It's a command-line tool that requires comfort with terminal usage and some documentation R E A D I N G.
- No GUI — No visual diffs or guided change reviews. You don't have any checkpoints. The prompt will change the files, and you will have to review the changes — otherwise, you won't know what API is exposed.
- Token responsibility — You're in charge of monitoring usage. Go wild with huge context windows repeatedly, and you might burn through your budget quickly.

Pro Tip: Use Claude-monitor for checking usage. Thanks to [Maciej](https://github.com/Maciek-roboblog)

## My Real-World Experience

After working with both tools, I've found Cursor is good for a novice or any non technical person who wanted to do some quick prototyping without having any coding knowledge. It can lookup for documentation, build, fix, create bugs, rewrite the whole codebase.

The hiccups starts when the projects grew larger and I start hitting cursor's limits more frequently, Claude Code become my go-to AI-driven development tool. When I'm deep in a complex refactor, it can handle multiple files, run tests, fixes failures and commits everything. It's not perfect yet it's better than Cursor in some way.

One thing I noticed: Claude Code often maintains better context in large projects, probably because I allow it to use more of its context window. Cursor (unless in Max mode) would sometimes miss connections between files that were far apart in the project structure.

The bottom line? Both tools are powerful, but they serve different types of developers and workflows. The good news is you don't have to choose forever — you can always switch between them based on what you're working on.
