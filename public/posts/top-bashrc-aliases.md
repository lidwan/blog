# Top .bashrc Aliases to Save Time

The command line is already faster than pointing and clicking at things. Aliases make it faster still.

The idea is simple: you take commands you type constantly and give them shorter, easier-to-type names. Less keystrokes, less time, and honestly there's something deeply satisfying about having a terminal configured exactly the way you want it.

---

## Finding and opening your .bashrc

The file lives at `~/.bashrc`. Open it with whatever text editor you prefer Nano, Vim, whatever. If you can escape Vim, that is.

If the file doesn't exist, create it with:

```bash
sudo touch ~/.bashrc
```

A small aside: in my own .bashrc, I have `alias mkfile='touch'`, so I can just type `mkfile` instead of `touch`. Completely unnecessary, completely correct. That's the kind of small, pointless-yet-delightful customization that makes the whole thing worth it.

---

## Structure

Aliases follow a simple format:

```bash
alias yourAlias='actual command here'
```

That's it. One line per alias, drop them anywhere in the file, and they'll be available in every new terminal session.

---

## Categories

1. Navigation
2. Git Shortcuts
3. Managing Updates
4. System Commands
5. File Management
6. Misc.

---

## 1. Navigation

If you find yourself typing `cd ..` over and over, or constantly navigating to the same folder, these will feel instantly obvious in hindsight:

```bash
alias ..="cd .."          # up one directory
alias ...="cd ../.."      # up two directories
alias ....="cd ../../.."  # up three directories
alias ~="cd ~"            # go home
alias projects="cd ~/projects"  # replace with your own path
```

## 2. Git Shortcuts

I type git commands constantly. These save a lot of keystrokes:

```bash
alias gs="git status"
alias ga.="git add ."
alias gcm="git commit -m"
alias gc='git clone '
alias gp="git push"
alias gd="git diff"
alias gds="git diff --staged"
```

## 3. Managing Updates

Adjust these to match your Linux distribution the ones below are for Arch. If you're on something else, just swap in the equivalent commands.

**Pacman:**
```bash
alias ps="sudo pacman -S"
alias psy="sudo pacman -Sy"
alias psyu="sudo pacman -Syu"
alias pr="sudo pacman -R"
alias ro='sudo pacman -Rns $(pacman -Qtdq)'  # remove orphaned packages
```

**Yay (AUR helper):**
```bash
alias ys="yay -S"
alias ysy="yay -Sy"
alias ysyu="yay -Syu"
alias yr="yay -R"
alias yqu="yay -Qu"  # list packages with available updates
```

**Flatpak:**
```bash
alias fs="flatpak install"
alias fsyu="flatpak update"
alias fqu="flatpak remote-ls --updates"  # list available flatpak updates
```

## 4. System Commands

If you dual-boot Windows and Linux, Windows updates have a tendency to trample your GRUB bootloader at the most inconvenient times. This alias has saved me more than once:

```bash
alias grubupdate='sudo grub-mkconfig -o /boot/grub/grub.cfg'
```

## 5. File Management

These turn `ls` from functional into actually pleasant to read:

```bash
alias l="ls --color=auto -h --group-directories-first"
alias ls="ls --color=auto -h --group-directories-first"   # override default ls
alias la="ls --color=auto -ha --group-directories-first"  # include hidden files
alias ll="ls --color=auto -hal --group-directories-first" # full long format
```

## 6. Misc.

For scheduling shutdowns useful when you're rendering something overnight and don't want the machine running until morning:

```bash
alias sdn="shutdown now"
alias sd30="shutdown +X"    # replace X with desired minutes
alias sds="shutdown --show" # check scheduled shutdown
alias sdc="shutdown -c"     # cancel scheduled shutdown
```

---

[Check out my own .bashrc on GitHub](https://github.com/lidwan/dotfiles/blob/main/arch-hypr-script/.bashrc) if you want to see what I actually use.

---

Start small. Pick the commands you type most often and alias them. You'll wonder how you put up with the extra keystrokes before.

#
