import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Infobox: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "infobox-container")} id="infobox-mount">
      <div class="infobox-placeholder">[Infobox area]</div>
    </div>
  )
}

// NOTE: pure JavaScript only inside the string
Infobox.afterDOMLoaded = `
  console.log("[Infobox] afterDOMLoaded running");

  var container = document.getElementById("infobox-mount");
  if (!container) {
    console.log("[Infobox] No container with id 'infobox-mount'");
    return;
  }
  console.log("[Infobox] Container found:", container);

  // Find ALL infobox callouts on the page
  var infoboxes = document.querySelectorAll(".callout[data-callout='infobox']");
  console.log("[Infobox] Found", infoboxes.length, "infobox callout(s)");

  if (!infoboxes || infoboxes.length === 0) {
    // No infobox: hide the container entirely
    container.style.display = "none";
    return;
  }

  // Show the container (in case it was hidden by CSS)
  container.style.display = "block";

  // Hide all original infoboxes in the body
  infoboxes.forEach(function (el) {
    // Do NOT hide anything that's already inside our container
    if (!container.contains(el)) {
      el.style.display = "none";
      console.log("[Infobox] Hiding original infobox in body:", el);
    } else {
      console.log("[Infobox] Infobox already in container, not hiding:", el);
    }
  });

  // Take the first infobox (which should be in the body) and clone it into container
  var first = infoboxes[0];

  // If the first one is already inside the container (from a previous build),
  // fall back to using it as-is instead of cloning from elsewhere.
  var cloned;
  if (!container.contains(first)) {
    cloned = first.cloneNode(true);
    console.log("[Infobox] Cloned first infobox:", cloned);
  } else {
    // Already in container; just use it directly
    cloned = first;
    console.log("[Infobox] First infobox already in container, using it directly");
  }

  // Remove placeholder
  var placeholder = container.querySelector(".infobox-placeholder");
  if (placeholder) {
    placeholder.remove();
  }

  // If we cloned, append the clone
  if (!container.contains(cloned)) {
    cloned.classList.add("infobox-relocated");
    cloned.style.display = "";
    container.appendChild(cloned);
  } else {
    // Ensure visible
    cloned.style.display = "";
    cloned.classList.add("infobox-relocated");
  }

  console.log("[Infobox] Final infobox in container:", cloned);
`

Infobox.css = `
  .infobox-container {
    /* We'll explicitly show/hide via JS; default to visible for debugging */
    margin-bottom: 1.5rem;
    border: 1px dashed var(--gray);
    padding: 0.5rem;
  }

  .infobox-placeholder {
    font-size: 0.8rem;
    color: var(--gray);
    margin-bottom: 0.5rem;
  }

  /* Optional extra styling for the relocated infobox */
  .infobox-relocated {
    /* customize as desired */
  }
`

export default (() => Infobox) satisfies QuartzComponentConstructor
