import { QuartzTransformerPlugin } from "../types"

const START_MARK = ":::h"
const END_MARK = ":::"

function stripSecrets(text: string): string {
  let result = ""
  let i = 0

  while (true) {
    const start = text.indexOf(START_MARK, i)
    if (start === -1) {
      result += text.slice(i)
      break
    }

    // add public part before secret
    result += text.slice(i, start)

    const end = text.indexOf(END_MARK, start + START_MARK.length)
    if (end === -1) {
      // fail-safe: drop everything after START_MARK
      break
    }

    // continue after END_MARK
    i = end + END_MARK.length
  }

  return result
}

export const StripSecrets: QuartzTransformerPlugin = () => ({
  name: "StripSecrets",
  htmlPlugins() {
    return [
      {
        name: "strip-secrets",
        transformHtml: ({ html }) => {
          // The Markdown has already been converted to HTML.
          // Our markers are HTML comments, so they still appear in `html`.
          const sanitized = stripSecrets(html)
          return { html: sanitized }
        },
      },
    ]
  },
})