/**
 * Import dependencies from node_modules
 * see commented examples below
 */
import { LoremIpsum } from "lorem-ipsum";
/**
 * Write any other JavaScript below
 */
+(function () {
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

  document.getElementById("lorem-card-subtitle").innerHTML =
    lorem.generateWords(25);
  document.getElementById("lorem-title").innerHTML = lorem.generateWords(10);
  document.getElementById("lorem-paragraph1").innerHTML =
    lorem.generateParagraphs(2);
  document.getElementById("lorem-enum1").innerHTML = lorem.generateWords(25);
  document.getElementById("lorem-enum2").innerHTML = lorem.generateWords(25);
  document.getElementById("lorem-enum3").innerHTML = lorem.generateWords(25);

  document.getElementById("lorem-bloquote").innerHTML = lorem.generateWords(5);

  document.getElementById("lorem-paragraph2").innerHTML =
    lorem.generateParagraphs(1);
  document.getElementById("lorem-paragraph3").innerHTML =
    lorem.generateParagraphs(2);
})();
