import { QuartzTransformerPlugin } from "../types"

export const StripDmCallouts: QuartzTransformerPlugin = () => ({
  name: "StripDmCallouts",
  htmlPlugins() {
    return [
      {
        name: "strip-dm-callouts",
        transformHtml: ({ html }) => {
          // This regex finds any <blockquote ... data-callout="dm"> ... </blockquote>
          // and removes it entirely from the HTML output.
          const dmCalloutRegex =
            /<blockquote\b[^>]*\bdata-callout=["']dm["'][\s\S]*?<\/blockquote>/gi

          const sanitized = html.replace(dmCalloutRegex, "")
          return { html: sanitized }
        },
      },
    ]
  },
})
