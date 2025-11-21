import { QuartzTransformerPlugin } from "../../types"

export const StripDmCallouts: QuartzTransformerPlugin = () => {
  return {
    name: "StripDmCallouts",
    htmlPlugins() {
      return [
        {
          name: "strip-dm-callouts",
          // this runs after Markdown → HTML conversion
          transformHtml: ({ html }) => {
            const dmCalloutRegex =
              /<blockquote\b[^>]*\bdata-callout=["']dm["'][\s\S]*?<\/blockquote>/gi

            const sanitized = html.replace(dmCalloutRegex, "")
            return { html: sanitized }
          },
        },
      ]
    },
  }
}
