import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Infobox: QuartzComponent = ({ displayClass, fileData }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "infobox-container")} id="infobox-mount">
      {/* Content will be injected here via client-side script */}
    </div>
  )
}

Infobox.afterDOMLoaded = `
  const container = document.getElementById('infobox-mount');
  if (container) {
    const infobox = document.querySelector('.callout[data-callout="infobox"]');
    if (infobox) {
      // Hide the original in the body
      infobox.style.display = 'none';
      
      // Clone and insert into our container
      const cloned = infobox.cloneNode(true);
      cloned.style.display = '';
      cloned.classList.add('infobox-relocated');
      
      container.appendChild(cloned);
      container.style.display = 'block';
    } else {
      // No infobox found, hide the container
      container.style.display = 'none';
    }
  }
`

Infobox.css = `
  .infobox-container {
    display: none; /* Hidden by default, shown only if infobox exists */
    margin-bottom: 1.5rem;
  }

  .infobox-relocated {
    border: 2px solid var(--secondary);
    border-radius: 8px;
    padding: 1rem;
    background: var(--highlight);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .infobox-relocated .callout-title {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
`

export default (() => Infobox) satisfies QuartzComponentConstructor
