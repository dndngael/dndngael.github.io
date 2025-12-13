import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "YouTube Playlist": "https://youtu.be/dQw4w9WgXcQ?si=-lip_jG7-u9OLR-O",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      component: Component.Graph(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    //Component.ArticleTitle(),
    //Component.ContentMeta(),
    //Component.TagList(),
    //Component.MobileOnly(Component.Infobox()),
  
    ],
  left: [
    
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  
  ],
  right: [
    //Component.Infobox(),
    //Component.DesktopOnly(Component.Infobox()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [/*Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()*/],
  left: [
    
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
    
  ],
  right: [],
}
