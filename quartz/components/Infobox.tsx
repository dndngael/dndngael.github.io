import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Infobox: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "infobox-container")} id="infobox-mount">
      {/* Infobox content will be inserted here client-side if present */}
    </div>
  )
}

// IMPORTANT: everything in this string must be plain JavaScript, no "as", no ": type"
Infobox.afterDOMLoaded = `
  console.log("[Infobox] afterDOMLoaded script running");

  var container = document.getElementById("infobox-mount");
  if (!container) {
    console.log("[Infobox] No container found with id 'infobox-mount'");
    return;
  }

  // Find all infobox callouts in the page
  var infoboxes = document.querySelectorAll(".callout[data-callout='infobox']");
  if (!infoboxes || infoboxes.length === 0) {
    console.log("[Infobox] No infobox callout found on this page.");
    container.style.display = "none";
    return;
  }

  console.log("[Infobox] Found", infoboxes.length, "infobox callout(s)");

  // Hide all original infoboxes in the body
  infoboxes.forEach(function (el) {
    el.style.display = "none";
  });

  // Clone the first infobox into our container
  var first = infoboxes[0];
  var cloned = first.cloneNode(true);
  cloned.style.display = "";
  cloned.classList.add("infobox-relocated");

  container.appendChild(cloned);
  container.style.display = "block";
`

Infobox.css = `
  .infobox-container {
    display: none; /* hidden unless an infobox exists */
    margin-bottom: 1.5rem;
  }

  /* Optional extra styling for relocated infobox */
  .infobox-relocated {
    /* Customize as you like, e.g.: */
    /* border: 2px solid var(--secondary); */
    /* border-radius: 8px; */
    /* padding: 1rem; */
    /* background: var(--highlight); */
  }
`

export default (() => Infobox) satisfies QuartzComponentConstructor
