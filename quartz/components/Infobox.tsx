import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Infobox: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "infobox-container")} id="infobox-mount">
      {/* Content will be inserted here after DOM load if there is an infobox callout */}
    </div>
  )
}

Infobox.afterDOMLoaded = `
  console.log("[Infobox] afterDOMLoaded script running");

  const container = document.getElementById("infobox-mount");
  if (!container) {
    console.log("[Infobox] No container found with id 'infobox-mount'");
    return;
  }

  // Find the first infobox callout in the page
  const infobox = document.querySelector(".callout[data-callout='infobox']");
  if (!infobox) {
    console.log("[Infobox] No infobox callout found on this page.");
    container.style.display = "none";
    return;
  }

  console.log("[Infobox] Found infobox callout:", infobox);

  // Hide all infobox callouts in the body
  const allInfoboxes = document.querySelectorAll(".callout[data-callout='infobox']");
  allInfoboxes.forEach(el => {
    (el as HTMLElement).style.display = "none";
  });

  // Clone the first one into our container
  const cloned = infobox.cloneNode(true) as HTMLElement;
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

  .infobox-relocated {
    /* optional extra styling if you want the relocated infobox to stand out */
  }
`

export default (() => Infobox) satisfies QuartzComponentConstructor
