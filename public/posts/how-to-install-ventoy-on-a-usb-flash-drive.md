# How to Install Ventoy on a USB Flash Drive

If you've ever needed to boot from a USB drive whether to install an OS, run a live Linux environment, or just have something useful in your back pocket you've probably dealt with the tedious dance of formatting and re-flashing the drive every single time.

Ventoy solves that in a way that feels almost too simple.

## What is Ventoy?

Ventoy is a tool that turns a USB drive into a multi-boot drive that can hold as many ISO files as the drive's storage allows. You don't need to reformat or burn anything each time you just copy ISO files onto the drive like it's a regular folder.

That means one USB can have Windows 11, Windows 10, a couple of Linux distros, and a recovery tool, all at the same time. Need to swap something out? Delete the old ISO and drop a new one in. No formatting required.

---

## How to install it

The install process is slightly different depending on your OS:

1. **Linux**

    Install it with your package manager. On Arch Linux:

    ```bash
    yay -S ventoy-bin
    ```

2. **Windows**
    - Visit the [Ventoy website](https://www.ventoy.net/).
    - Navigate to the [Download section](https://www.ventoy.net/en/download.html).
    - Grab the latest version from [SourceForge](https://sourceforge.net/projects/ventoy/files) (something like *ventoy-1.1.00-windows.zip*).
    - Extract the ZIP file.
    - Find **Ventoy2Disk** in the extracted folder, open it, and click "Yes" when prompted.

---

## How to use Ventoy

### Getting it onto your USB drive

Plug in the USB drive you want to use. If it doesn't show up, hit the green refresh button.

**Important:** This will completely wipe the selected drive. Double-check you've got the right one before clicking anything.

Once you're sure, click "Install" and confirm your choice.

### Adding ISOs

Open the Ventoy drive like any normal drive and drag your ISO files onto it. No configuration needed just drop them in.

### Booting from it

1. Shut down your machine and plug in the Ventoy USB drive.
2. Boot into your boot menu (the key varies by device look it up for your specific machine).
3. Select the Ventoy USB drive.

You'll see a list of all the ISOs you added and can boot into whichever one you need.

---

## Customizing the theme

If you want Ventoy to look less like a bare-bones boot menu:

1. **Find a theme** at [Gnome-Look.org](https://www.gnome-look.org/browse?cat=109&ord=rating)
2. **Set it up:**
    - Create a folder called `Ventoy` on your Ventoy drive.
    - Extract the downloaded theme into that folder.
3. **Create a config file:** Inside the `Ventoy` folder, create a file called `ventoy.json` with this content:

    ```bash
    {
      "theme": {
        "file": "HereTypeInThePathToTheme.txt"
      }
    }
    ```

    Replace `"HereTypeInThePathToTheme.txt"` with the relative path from the `Ventoy` folder to the `theme.txt` file inside the theme you downloaded.

4. **Boot from it** the theme will apply automatically next time.

For more advanced customizations, check out the [VentoyPlugson](https://www.ventoy.net/en/plugin_plugson.html) tool.

#
