---
layout: post
title: "MiniForge & MiniConda on M1"
date: 2022-08-23
categories: macos python
---

Working with MacBook M1 which is shipped with ARM64 instead of Intel's x86–64 processors was superb fun.

Hold my beer, it is no fun when it comes to running Tensorflow on M1.

## Why MiniForge & MiniConda

Here's the answer [nerohmot](https://stackoverflow.com/users/2161598/nerohmot) from Stackoverflow,

miniforge is the community (conda-forge) driven minimalistic `conda` installer. Subsequent package installations come thus from `conda-forge` channel.

miniconda is the Anaconda (company) driven minimalistic `conda` installer. Subsequent package installations come from the `anaconda` channels (default or otherwise).

For several projects, we might tend to use different versions of python. One of the shortcomings of MiniForge is no back-port compatibility for older versions of Python. So we have to settle with `python 3.8` where MiniConda helps us to run older versions on Mac M1 with the help of Rosetta.

If you are not using [Homebrew](https://brew.sh/), GET IT NOW bruh. It makes your life easier, a free and open-source software package management system that makes installation of any software on your macOS.

Installing Homebrew:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Installing MiniConda & MiniForge

For installing both `MiniConda` & `MiniForge`:

```
brew install miniforge
```

We cannot use `Homebrew` for both, as it will not allow since 'miniconda' conflicts with 'miniforge'. For 'miniconda' installation, we can go with the classic bash installation after getting the installer link from [MiniConda](https://docs.conda.io/en/latest/miniconda.html). The following commands will make `miniforge` active on your machine.

```
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh
chmod +x Miniforge3-MacOSX-arm64.sh
sh Miniforge3-MacOSX-arm64.sh
source ~/miniforge3/bin/activate
```

## Installing Tensorflow

```
conda install -c apple tensorflow-deps
python -m pip install tensorflow-macos
```

Now we have `TensorFlow` successfully installed and we have miniconda for using older versions as well. For switching between miniconda and miniforge, we initialize conda with what we want. For conda initialization, I have tweaked the `.zshrc`.

You can also find the gist [here](https://gist.github.com/yogeshvar/d168249188742eb015aa1a6c09b2d177).

Thanks for reading 👋 Happy Coding 👨‍💻
