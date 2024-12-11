import { readFile, watch } from "fs";
import { copy } from "copy-paste";
import cycrillicLetters from "./data/CycrillicLetters.json";

const TextPath = './data/data.txt';

function main(_err, data) {
    const splitChars = data.split("");
    let returnValue = "";
    
    splitChars.forEach((character, i) => {
        splitChars[i] = cycrillicLetters[character] || character;
        returnValue += character;
    });
    
    copy(returnValue);
    console.log("copied to clipboard: ", returnValue);
}

watch(TextPath, () => readFile("./data.txt", 'utf8', main));
readFile(TextPath, 'utf8', main);