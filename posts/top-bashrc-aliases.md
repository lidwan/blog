###### Posted on January 23, 2025 by Loay Idwan.
# **Top .bashrc Aliases to Save Time**

## Why use bashrc aliases?

- Using aliases enhances your command-line productivity noticeably, saving you key strokes and time.
- It’s just cool and enjoyable since you’re customizing your command-line experience exactly to your liking.

---

## Where to find bashrc file?

The file can be found in “~/.bashrc” and you can open it with your favourite text editor Nano or Vim (if you can manage quitting Vim ofc).

If the file doesn’t exist you can just run “sudo mkfile ~/.bashrc”, wait a minute! “mkfile” isn’t actually a linux command, is it? That’s the beauty of using aliases, in my bashrc file i have this line “ alias mkfile='touch’ ” which allows me to use “mkfile” instead of “touch”, ofc you don’t have to the same, it’s all personal preference.

Ok now actually how do you create the file if it doesn’t exist? run the following command “sudo touch ~/.bashrc”.

 

---

## How is the .bashrc file structured?

initially the file is empty, you start by typing “ alias YourDesiredAlias=’ActualCommand’ “, view the examples below to understand it better.

---

## **Categories of Aliases**

1. Navigation
2. Git Shortcuts
3. Managing Updates
4. System Commands
5. File Management
6. Misc.

---

Let’s dive right in!

## 1. Navigation

#### Find yourself typing “cd ..” or “cd SomeSpecificDict”?

##### Use the following aliases: ( without the [] )

- [alias ..="cd .."] #navigates up one directory
- [alias ...="cd ../.."] #navigates up Two directories
- [alias ....="cd ../../.."] #navigates up Three directories
- [alias ~="cd ~"] #navigates to your home directory
- [alias projects="cd ~/projects"] # Replace with your specific folder path

## 2. Git Shortcuts

#### Use git for version control a lot?

##### Use the following aliases: (don’t feel like explaining the commands :) )

- [alias gs="git status"]
- [alias ga.="git add ."]
- [alias gcm="git commit -m"]
- [alias gc='git clone ']
- [alias gp="git push"]
- [alias gd="git diff"]
- [alias gds="git diff --staged"]

## 3. Managing Updates

#### Tired of typing “sudo pacman -Syu” or “sudo apt update”?

##### Use the following aliases: (Adjust commands to match your Linux distribution, the current aliases are meant for Arch)

- Pacman aliases
    - [alias ps="sudo pacman -S"]
    - [alias psy="sudo pacman -Sy"]
    - [alias psyu="sudo pacman -Syu"]
    - [alias pr="sudo pacman -R"]
    - [alias ro='sudo pacman -Rns $(pacman -Qtdq)'] #remove orphan packages
- Yay aliases
    - [alias ys="yay -S"]
    - [alias ysy="yay -Sy"]
    - [alias ysyu="yay -Syu"]
    - [alias yr="yay -R"]
    - [alias yqu="yay -Qu"] #lists the names of packages that need updating
    - [s] #lists all manually installed packages on your system
- Flatpak aliases
    - [alias fs="flatpak install"]
    - [alias fsyu="flatpak update"]
    - [alias fqu="flatpak remote-ls --updates"] #lists the names of all flatpak updates

## 4. System Commands

#### Dual booting windows and linux? Then windows updates probably messes up grub every once and a while.

##### Use the following alias:

- [alias grubupdate='sudo grub-mkconfig -o /boot/grub/grub.cfg' #updates grub]

## 5. File Management

#### Want to make “ls” colorfull, grouped or ordered but you don’t want to type long commands each time?

##### Use the following aliases: (feel free to change the alias if you don’t like the ones i chose)

- [alias l="ls --color=auto -h --group-directories-first"] #Lists files with colors, human-readable sizes, and directories displayed before files
- [alias ls="ls --color=auto -h --group-directories-first"] #Overrides “ls” to act just like “l” that we just made
- [alias la="ls --color=auto -ha --group-directories-first"] #Lists all files, including hidden ones, with colors, human-readable sizes, and directories first
- [alias ll="ls --color=auto -hal --group-directories-first"] #Provides a detailed list (long format) of all files, including hidden ones, with colors, human-readable sizes, and directories first

## 6. Misc.

#### Want your system to shutdown after X time passes?

##### Use the following: (replace X with desired time, add as many aliases as you want with different times)

- [alias sdn="shutdown now"] #immediately shuts down
- [alias sd30="shutdown +X"] #shuts down after X minutes passes
- [alias sds="shutdown --show”] #shows scheduled shutdown
- [alias sdc="shutdown -c”] #cancels the scheduled shutdown

---

#### [Check out my own .bachrc on github.](https://github.com/lidwan/dotfiles/blob/main/arch-hypr-script/.bashrc)

---

#### Now create your own aliases for your most used commands so that can save time!
###### Tags: bashrc, .bashrc, alias, time, save, top, file, command
###### Last updated on January 23, 2025 by Loay Idwan.