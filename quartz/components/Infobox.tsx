import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Infobox: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "infobox-container")} id="infobox-mount">
      <div class="infobox-debug">[Infobox component mounted]</div>
    </div>
  )
}

Infobox.afterDOMLoaded = `
  console.log("[Infobox] afterDOMLoaded script running");

  const container = document.getElementById("infobox-mount");
  if (!container) {
    console.log("[Infobox] No container found with id 'infobox-mount'");
  } else {
    console.log("[Infobox] Container found", container);
  }

  const infobox = document.querySelector(".callout[data-callout='infobox']");
  if (!infobox) {
    console.log("[Infobox] No infobox callout found on this page.");
    if (container) container.style.display = "none";
  } else {
    console.log("[Infobox] Found infobox callout:", infobox);

    // Hide the original in-body infobox
    infobox.style.display = "none";

    if (container) {
      // Clone the infobox and move it into our container
      const cloned = infobox.cloneNode(true);
      cloned.style.display = "";
      cloned.classList.add("infobox-relocated");
      container.appendChild(cloned);

      // Show the container since we have content
      container.style.display = "block";
    }
  }
`

Infobox.css = `
  .infobox-container {
    display: none;
    margin-bottom: 1.5rem;
  }

  .infobox-debug {
    font-size: 0.75rem;
    color: var(--gray);
    margin-bottom: 0.5rem;
  }

  .infobox-relocated {
    border: 2px solid var(--secondary);
    border-radius: 8px;
    padding: 1rem;
    background: var(--highlight);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
`

export default (() => Infobox) satisfies QuartzComponentConstructor
