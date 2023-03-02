import rss from '@astrojs/rss'
import { SITE_TITLE, SITE_DESCRIPTION } from '../config'
import { formatBlogPosts } from '../js/utils'

const postImportResult = import.meta.glob('./posts/**/*.md', { eager: true })
const posts = formatBlogPosts(Object.values(postImportResult))

export const get = () =>
  rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items: posts.map(post => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.createdAt,
      description: post.frontmatter.description
    })),
    customData: `
    <generator>Astro | astro.build</generator>
    <language>en</language>
    `
  })
