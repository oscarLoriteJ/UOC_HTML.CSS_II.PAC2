/**
 * Import dependencies from node_modules
 * see commented examples below
 */
import * as bootstrap from "bootstrap";
/**
 * Write any other JavaScript below
 */
+(function () {
  bootstrap;
  const university = "UOC";
  console.log(`Hello, ${university}!`);

  const urlActual = new URL(location.href);

  let path = urlActual.pathname;

  console.log(path);

  if (path == "/index.html") {
    document.getElementById("botoInici").classList.add("active");
  } else if (path == "/membres.html") {
    document.getElementById("botoMembres").classList.add("active");
  } else if (path == "/noticies.html") {
    document.getElementById("botoNoticies").classList.add("active");
  } else if (path == "/contacte.html") {
    document.getElementById("botoContacte").classList.add("active");
  }
})();
