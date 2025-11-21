import { QuartzTransformerPlugin } from "../../types"
import { visit } from "unist-util-visit"
import type { Root, Element } from "hast"

export const StripDmCallouts: QuartzTransformerPlugin = () => {
  return {
    name: "StripDmCallouts",
    htmlPlugins() {
      // htmlPlugins must return a rehype plugin list (PluggableList)
      return [
        () => {
          // This is the actual rehype transformer
          return (tree: Root) => {
            visit(tree, "element", (node: Element, index, parent: any) => {
              if (!parent || typeof index !== "number") return

              const dataCallout = node.properties?.["data-callout"]
              if (node.tagName === "blockquote" && dataCallout === "dm") {
                // Remove the entire <blockquote ... data-callout="dm">...</blockquote>
                parent.children.splice(index, 1)
                // Adjust index so we don't skip the next node
                index--
              }
            })
          }
        },
      ]
    },
  }
}
