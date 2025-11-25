import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Infobox: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "infobox-container")} id="infobox-mount">
      {/* Infobox content will be inserted / reused here */}
    </div>
  )
}

Infobox.afterDOMLoaded = `
  console.log("[Infobox] afterDOMLoaded running");

  var container = document.getElementById("infobox-mount");
  if (!container) {
    console.log("[Infobox] No container with id 'infobox-mount'");
    return;
  }

  var infoboxes = document.querySelectorAll(".callout[data-callout='infobox']");
  console.log("[Infobox] Found", infoboxes.length, "infobox callout(s)");

  if (!infoboxes || infoboxes.length === 0) {
    container.style.display = "none";
    return;
  }

  // Show container
  container.style.display = "block";

  // Hide all original infoboxes in the body that are NOT already in the container
  infoboxes.forEach(function (el) {
    if (!container.contains(el)) {
      el.style.display = "none";
    }
  });

  // Prefer an infobox already inside the container, if present
  var existingInside = container.querySelector(".callout[data-callout='infobox']");
  if (existingInside) {
    existingInside.style.display = "block";
    existingInside.classList.add("infobox-relocated");
    console.log("[Infobox] Using existing infobox in container");
    return;
  }

  // Otherwise, clone the first one from the body into the container
  var first = infoboxes[0];
  var cloned = first.cloneNode(true);
  cloned.style.display = "block";
  cloned.classList.add("infobox-relocated");
  container.appendChild(cloned);
  console.log("[Infobox] Cloned first infobox into container");
`

Infobox.css = `
  .infobox-container {
    margin-bottom: 1.5rem;
  }

  /* Force infobox inside the container to be visible, even if global CSS hides infobox callouts */
  .infobox-container .callout[data-callout="infobox"],
  .infobox-container .infobox-relocated {
    display: block !important;
  }
`

export default (() => Infobox) satisfies QuartzComponentConstructor
