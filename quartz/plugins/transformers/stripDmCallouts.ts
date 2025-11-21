import { QuartzTransformerPlugin } from "../../types"
import { visit } from "unist-util-visit"
import type { Root, Element } from "hast"

export const StripDmCallouts: QuartzTransformerPlugin = () => {
  return {
    name: "StripDmCallouts",
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

              const isDm =
                dataCallout === "dm" ||
                classes.includes("dm") ||
                classes.includes("callout-dm")

              if (isDm) {
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
