/**
 * Import dependencies from node_modules
 * see commented examples below
 */
import * as bootstrap from "bootstrap";
import { LoremIpsum } from "lorem-ipsum";
/**
 * Write any other JavaScript below
 */
bootstrap +
  (function () {
    const university = "UOC";
    console.log(`Hello, ${university}!`);

    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4,
      },
      wordsPerSentence: {
        max: 16,
        min: 4,
      },
    });

    document.getElementById("lorem-title").innerHTML = lorem.generateWords(5);
    document.getElementById("lorem-title-mesInfo").innerHTML =
      lorem.generateWords(8);
    document.getElementById("lorem-titol-contingut").innerHTML =
      lorem.generateWords(4);
    document.getElementById("lorem-contingut").innerHTML =
      lorem.generateParagraphs(1);
  })();
