# For the Snowcord Discord Bot

This Node.js program allows you to quickly convert text sent by the **Snowcord** Discord bot into valid text by replacing invalid characters.
Only use this for research purposes.. obviously.

## How to Use

To use this program, you must download Node.js and install the included packages for this program.
Afterwards, you just need to run `node index.js` in your terminal, and watch mode will start.
Once activated, open your `data/data.txt` file. Everytime you change the contents of the file and save, the cleaned code will automatically be copied to your clipboard.

## How it Works

When **Snowcord** sends a typing race minigame, random characters are replaced with charcode lookalikes.
This program automatically replaces all lookalikes with their real characters, allowing you to finish a typing race in arounf 3-10 seconds if fast enough.

https://rodevs.com/snowcord