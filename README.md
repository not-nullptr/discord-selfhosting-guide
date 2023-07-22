# Discord Selfhosting Guide
A guide to downloading Discord's files and running it locally.

> **Warning**<br>
> You will need a backend for this! It won't function otherwise.

# Why?
There are a few reasons someone could want to self-host an instance of Discord. If your community has little internet but is on an intranet, or if your country censors online activity, or if you just want to see if it works.

# How?
1. Clone this repository by clicking Download or doing it from git.
2. Go to the login page of Discord's website.
3. Save it. This could be right clicking and clicking "Save as" (which probably won't work since Discord captures right click events), pressing Ctrl + S (which also probably won't work because Discord also captures keyboard events), or opening Devtools (Ctrl + Shift + I), clicking on the Devtools window so it has focus then pressing Ctrl + S (which should work). 

![A GIF of a user saving the aforementioned page.](https://github.com/not-nullptr/discord-selfhosting-guide/blob/main/resources/savepage.gif)

4. View the page source by pressing Ctrl + U, and copy the whole thing.
5. Open up the folder where you saved the login page on.
6. Rename the `.htm` file to `index.html`, and rename the folder to `assets`.
7. Open up `index.html`, delete the contents and paste in the other one from earlier. We do this because saving a page takes a snapshot of it, but we want the original which Discord uses to generate pages.
8. Now, open up the cloned repository from the beginning, and go into `asset-exporter`. This will download all Discord assets (svg, png, mp3, webm, etc) onto your PC.
9. Copy the CSS file from the `assets` folder (which you saved earlier from the Discord login page) 
10. Open up the JS files inside of the `assets` folder in a code editor, or Notepad. I'll be using Visual Studio Code for familiarity purposes.
11. Look through each JS file (there should only be a handful) until you see one which looks something like this:
![A screenshot of VSCode.](https://github.com/not-nullptr/discord-selfhosting-guide/assets/62841684/8755c08c-caf5-479e-be73-1e414bafc706)

12. Go into Explorer, and copy the JS file.
13. Paste it into the same directory as `asset-exporter.js.` Rename it to `js-to-search.js`.
14. Go back into the `assets` folder, copy the CSS file, and paste it into the same directory. Name it `css-to-search.css`.
15. Open up `cmd` and run `node asset-exporter.js`.

# Legality?
I'm not sure on the legal side of things. If this repository is taken down, there's your answer. With that being said, everything is legal till it isn't; laws are for horses. All software in this repository is free for you to redistribute, re-use and repurpose. It comes with no warranty, bla bla bla, but I'm happy to help you if it breaks. This isn't a must, but if you're feeling generous, please consider crediting me.


