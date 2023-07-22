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
6. Copy the `assets` folder and paste it into the cloned repository.
7. Create a new file, call it `index.html`.
8. Paste the page source into the file, save it and close.
9. Copy the CSS file from the `assets` folder (which you saved earlier from the Discord login page) 
10. Open up the JS files inside of the `assets` folder in a code editor, or Notepad. I'll be using Visual Studio Code for familiarity purposes.
11. Look through each JS file (there should only be a handful) until you see one which looks something like this:

![A screenshot of VSCode.](https://github.com/not-nullptr/discord-selfhosting-guide/assets/62841684/8755c08c-caf5-479e-be73-1e414bafc706)

12. Format the JS file. You can do this in a myriad of ways, but I recommend using Prettier since it makes your job the easiest.
13. Scroll down until you find the FIRST list. It should look like this:

![image](https://github.com/not-nullptr/discord-selfhosting-guide/assets/62841684/ef4a4e11-ae9d-4611-97f6-75dbc039f915)

14. Ensure that the list values aren't repeating. If they are, you're looking at the wrong list. Scroll up until you find the other one.
15. Copy the list (it is VERY important you only copy between those angle brackets):

![GIF of the user copying the list](https://github.com/not-nullptr/discord-selfhosting-guide/blob/main/resources/copylist.gif)

16. Now, open up `asset-exporter.js`
17. Look around line 25 until you see `const chunks = {`.
18. Start selecting where the angle brackets are, and keep scrolling down until you reach the end of the angle brackets.
19. Hit Ctrl + V to paste the chunks.
20. Save the file.
21. Go back into `assets`, copy the CSS file and paste it into the cloned repository. Rename it to `css-to-search.css`
22. Open up `cmd` and run `node asset-exporter.js`. 
23. This is important. When it says something like `Successfully extracted [x] assets! Beginning full JS search.`, restart it! Chances are, it did not retrieve all assets due to rate limiting. Continue restarting it until it only outputs the afformentioned message. This means all files have downloaded.
24. From here, don't restart it anymore. It'll keep iterating over itself in order to download all files. This may take a while.
25. Just wait. Let it run until all it outputs is `Pass [x] is done! (No output? It's probably done.)`. If it stops outputting anything for more than 10 seconds, restart it. As of writing (22/07/23), there are 5438 assets, but don't panic if you have more or less. That's normal since Discord isn't static.
26. Once this has finished, go back into the `assets` directory from the saved webpage, copy the contents of it and paste it into the new `assets` directory in the cloned repository.
27. Now, inside of the repository folder, run `npm i` to install the modules for the server. Then, run `node .` to run it. It should say `Server is running at http://localhost:3000`. If you now go to http://localhost:3000, you should hopefully see the Discord login page!

## Fixing up index.html
Is it broken? Does it complain about scripts in Devtools? Follow this guide.

1. Open up index.html in a code editor of your choice.
2. Find and replace any references to `</link>` to be empty.
3. Format the file (optional, will make your life easier)
4. Find each instance of `integrity` and remove the prop from the element it's on. This is because integrity won't hold up for our server.
5. Remember the backend I warned you about earlier? This is where it comes in. If you run the frontend over HTTP, the backend also needs to use HTTP. The same goes for HTTPS.
6. Look around the top of the file until you see something like this:

![image](https://github.com/not-nullptr/discord-selfhosting-guide/assets/62841684/b18f6a93-877a-457c-9993-51bef7458361)

7. Change the values to reflect your API. If you wrote your API for HTTPS you can forward both the frontend and backend through a Cloudflare tunnel in order to get HTTPS without doing anything extra.
8. Voila! It should work now.

# Other reasons to do this
Following these steps is also an effective way to preserve historical Discord builds. By following these steps, you have a fully working, local build of Discord, frozen in time.

# Legality?
I'm not sure on the legal side of things. If this repository is taken down, there's your answer. With that being said, everything is legal till it isn't; laws are for horses. All software in this repository is free for you to redistribute, re-use and repurpose. It comes with no warranty, bla bla bla, but I'm happy to help you if it breaks. This isn't a must, but if you're feeling generous, please consider crediting me.


