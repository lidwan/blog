# **How to install Ventoy on a USB flash drive**

#### Watch this video if you are a visual learner:

<div class="centerVideo">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/UKE5NmUmxRY?si=Joah5Kwum6jY8xSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Click on this link if the embedded video doesn't load for some reason.
[https://youtu.be/cmSJpkOhAZs](https://youtu.be/cmSJpkOhAZs)

## What is Ventoy?

Ventoy is a tool for creating bootable USB drives that can hold multiple ISO files simultaneously. With Ventoy, you can simply copy ISO files onto the USB drive without the need to reformat or burn them each time.

This means you can have a single USB drive containing Windows 11, Windows 10, and various Linux ISOs, while also being able to easily update or replace the ISOs as needed.

---

## How to install it?

The process for installing Ventoy differs depending on your operating system (Windows or Linux):

1. **Linux**
    
    Use your preferred package manager to install Ventoy. For example, on Arch Linux, simply run:
    
    ```bash
    yay -S ventoy-bin
    ```
    
2. **Windows**
    - Visit the [Ventoy website](https://www.ventoy.net/).
    - Navigate to the [Download section](https://www.ventoy.net/en/download.html).
    - Click on this link: [SourceForge Ventoy files](https://sourceforge.net/projects/ventoy/files).
    - Download the latest version (e.g., *ventoy-1.1.00-windows.zip* as of this writing).
    - Extract the downloaded ZIP file.
    - In the extracted folder, locate the file named **Ventoy2Disk**, open it, and click "Yes" when prompted.

---

## How to use Ventoy?

#### Installing Ventoy on a USB Drive

Plug in the USB drive you want to use with Ventoy. If the drive doesn’t appear, click the green refresh button to detect it.

**Important:** The selected drive will be completely wiped!

Double-check that you have selected the correct drive. Once confirmed, click "Install" and proceed to confirm your choice.

#### Adding ISOs to the Ventoy Drive

Simply open the Ventoy drive and copy the desired ISO files directly onto it. There’s no need for additional formatting or setup—just drag and drop!

#### Accessing the Ventoy Drive

1. Turn off your machine and plug in the Ventoy USB drive.
2. Use the boot menu key (varies by device—search for the correct key for your PC or laptop) to access the boot menu.
3. Select the USB drive where Ventoy is installed.

That’s it! You’ll now see and be able to boot from the ISOs you added.

---

## Customizing Ventoy’s Theme

1. **Download a Theme**
    
    Visit [Gnome-Look.org](https://www.gnome-look.org/browse?cat=109&ord=rating) to find and download a theme you like.
    
2. **Set Up the Theme**
    - Create a folder named `Ventoy` inside your Ventoy drive.
    - Extract the downloaded theme into the `Ventoy` folder.
3. **Create the Configuration File**
    - Inside the `Ventoy` folder, create a file named `ventoy.json`.
    - Use the following template for the JSON file:
        
        ```bash
        {
          "theme": {
            "file": "HereTypeInThePathToTheme.txt"
          }
        }
        ```
        
    - Locate the `theme.txt` file in the extracted theme folder. Replace `"HereTypeInThePathToTheme.txt"` with the relative path from the `Ventoy` folder to the `theme.txt` file.
4. **Apply the Theme**
    
    The next time you boot from the Ventoy drive, the theme will be applied.
    

For more advanced customizations, you can use the [**VentoyPlugson**](https://www.ventoy.net/en/plugin_plugson.html) tool to further tweak the theme and other settings.

#