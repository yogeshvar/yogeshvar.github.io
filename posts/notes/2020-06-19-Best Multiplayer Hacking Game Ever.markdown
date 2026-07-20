---
layout: post
title: "Best Multiplayer Hacking Game Ever"
date: 2020-06-19
categories: games
---

Hacking is the gaining of unauthorised access to data in a system or computer. It's more fun when things are gamified.

Out of boredom, I started playing games on Steam a lot. Thanks to COVID for bringing out the gamer in me, that too on macOS. I started with Dota 2, Counter-Strike, and Overcooked 2. Then I came across a game called Grey Hack.

First impressions:

- Easily understandable by the name itself, it was a type of tech game that involves a gamified hacking experience.
- Costs 459 bucks (I have never spent that much money for a Steam macOS game).

Then, after my salary day, I bought [Grey Hack](https://store.steampowered.com/app/605230/Grey_Hack/). :P

Grey Hack is a massively multiplayer hacking simulator game. You're a hacker with full freedom to hack any machine in the game. The game allows the user to experience a single-player and multiplayer mode as well. Both gameplays are more or less the same, but in multiplayer mode, you might have these differences:

- Any player in the game can hack your machine.
- You can chat with other players using the chat.
- Buy hacking scripts from other hackers.

The game's interface replicates one of the Linux distributions with a terminal, file explorer, text editors, and a few more essential applications.

If you start as a new hacker, getting the WiFi password is hard. Sometimes you can get it from a `Gift.txt` file. If not, you have to hack the WiFi networks and get the password. 🎉 Once you're connected to the internet, let's get some important things done to run the show.

**Creating a mail account** (hackable in multiplayer mode):

- Open Browser, then search for Mail. Provide a username & password.
- Once you've created the mail account, you'll receive a mail from an anonymous person.

**Creating a bank account** (hackable in multiplayer mode):

- Open Browser, then search for Bank. Provide your in-game email & password.
- You can earn more money by stealing from other players or doing jobs.

**Shops Network:**

- Open Browser, then search for Shop. You can find tools useful for hacking a machine. Check the description and get it.
- You can also upgrade your hardware with money.

**Hacker Network:**

- You can visit the IP address you received from the anonymous person.
- You can find jobs, tools, and exploits.

## Let's do some dirty work

Find a job to earn money. In this example, we try to change academic grades for a client. Once you accept the contract, you get information from the client.

- Grab `nmap` from the Shops Market, and run `nmap` on the victim.
- Next, try to find exploits in the Hacker Network. Check the description of each exploit — for example, `gine5un5` and `odgescript` both get bank credentials, but `odgescript` only works if the target machine has an active user, whereas `gine5un5` has no such restriction.
- Using the browser, log in to other bank accounts and transfer the money to your account.
- Use a different exploit, `chscript`, to gain access for a user (say, named `Nellet`).
- Passwords are stored in `etc/passwd`. Copy the content to a text file and decipher it to obtain the root password.
- Modify the student's academic grades after opening up `StudentViewer.exe`, and save it.

**Do it neat and clear**: hackers don't leave any trace behind. Make sure the victim does not suspect anything weird or strange. Check `LogViewer.exe` and delete the logs of your IP — if you fail to do this, the victim can hack you back and steal your money, mail account, and so on.

**Contract disclosure**: reply to the mail with "Done". If the customer is satisfied with the job, check your bank for the reward.

## How to level up

- Head to the Hacker Network. Find a job and accept the contract.
- Get basic tools like `nmap` and suitable exploits.
- Do it right and neat.

Leave a comment if you want to know more about [Grey Hack](https://store.steampowered.com/app/605230/Grey_Hack/) tips and hacks.

Thanks for reading 👋 Happy Hacking 👨‍💻
