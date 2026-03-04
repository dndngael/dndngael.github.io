import { QuartzTransformerPlugin } from "../../types"
import { visit } from "unist-util-visit"
import type { Root, Element } from "hast"

export const StripMetadataCallouts: QuartzTransformerPlugin = () => {
  return {
    name: "StripMetadataCallouts",
    htmlPlugins() {
      return [
        () => {
          return (tree: Root) => {
            visit(tree, "element", (node: Element, index, parent: any) => {
              if (!parent || typeof index !== "number") return

              const props = node.properties || {}
              const dataCallout = props["data-callout"]
              const className = props.className

              const classes: string[] =
                typeof className === "string"
                  ? className.split(/\s+/)
                  : Array.isArray(className)
                  ? className.map(String)
                  : []

              const isMetadata =
                dataCallout === "frontmatter" ||
                dataCallout === "metadata" ||
                classes.includes("frontmatter") ||
                classes.includes("metadata") ||
                classes.includes("callout-frontmatter") ||
                classes.includes("callout-metadata")

              if (isMetadata) {
                // Remove this node
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
