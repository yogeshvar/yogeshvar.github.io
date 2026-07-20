---
layout: post
title: "Cache Issues with Telegram on Mac OS"
date: 2020-06-29
categories: macos automation
---

If you don't know what's the real issue, please check out this link on [Telegram on Mac OS taking no care about your disk storage](https://medium.com/@eugene_lazarev/telegram-on-mac-os-takes-no-care-about-your-disk-storage-and-feels-great-about-it-2c62ded92924).

I have made a few modifications to the bash script created by [Eugene Lazarev](https://medium.com/@eugene_lazarev) because I'm lazy enough to not want to run this bash script manually.

So, I have automated the cache clearing with the help of Automator and LaunchDaemons.

Why Automator? LaunchDaemons will not run if your Mac is off.

`clear_telegram_cache.sh` — here is what the updated script looks like:

```
#!/bin/bash
set -e

telegramfolder=$(find ~/Library/Group\ Containers -type d -maxdepth 1 -name "*.keepcoder.Telegram")
telegramaccountfolder=$(find "${telegramfolder}" -type d -maxdepth 1 -name "account-*")

if [ -d "${telegramaccountfolder}" ]; then
  echo "No such file or directory"
else
  rm -r "${telegramaccountfolder}/postbox/media"
  echo "Deleted telegram cache"
fi
```

## Automate using LaunchDaemons

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.zerowidth.launched.clear_telegram</string>
  <key>ProgramArguments</key>
  <array>
    <string>sh</string>
    <string>-c</string>
    <!-- Update your script path here -->
    <string>/path/to/clear_telegram_cache.sh</string>
  </array>
  <key>RunAtLoad</key>
  <true/>
  <key>StartCalendarInterval</key>
  <dict>
    <!-- Runs at 9:30 everyday -->
    <key>Hour</key>
    <integer>9</integer>
    <key>Minute</key>
    <integer>30</integer>
  </dict>
</dict>
</plist>
```

Installation:

```
mkdir -p ~/Library/LaunchAgents
curl https://gist.githubusercontent.com/yogeshvar/2910712810dadcb709c3517f4b228390/raw/clear_telegram_cache.plist > ~/Library/LaunchAgents/clear_telegram.plist
launchctl load -w ~/Library/LaunchAgents/clear_telegram.plist
```

## Automate using Automator

1. Open `Automator` application → select `Application` → click `Choose`.
2. Select `Run Shell Script` → copy & paste `clear_telegram_cache.sh` → click `Test Run`.
3. Provide a name for the application.
4. Open `System Preferences` → search for `Login Items` → add your application.

Please let me know if this helps — a huge thanks to Eugene Lazarev for the original bash script. You can also find the gist [here](https://gist.github.com/yogeshvar/2910712810dadcb709c3517f4b228390).

Thanks for reading 👋 Happy Coding 👨‍💻
