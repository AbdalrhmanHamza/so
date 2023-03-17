export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

export function formatDate(createdAt) {
  return new Date(createdAt).toLocaleDateString('en-US', {
    timeZone: 'UTC'
  })
}

export function formatBlogPosts(
  posts,
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined
  } = {}
) {
  const filteredPosts = posts.reduce((acc, post) => {
    const { createdAt, draft } = post.frontmatter
    // filterOutDrafts if true
    // if (filterOutDrafts && draft) return acc
    if (import.meta.env.PROD) {
      posts = posts.filter(post => !post.frontmatter.draft)
      if (filterOutDrafts && draft) return acc
    }

    // filterOutFuturePosts if true
    if (filterOutFuturePosts && new Date(createdAt) > new Date()) return acc

    // add post to acc
    acc.push(post)

    return acc
  }, [])

  // sortByDate or randomize
  if (sortByDate) {
    filteredPosts.sort(
      (a, b) =>
        new Date(b.frontmatter.createdAt) - new Date(a.frontmatter.createdAt)
    )
  } else {
    filteredPosts.sort(() => Math.random() - 0.5)
  }

  // limit if number is passed
  if (typeof limit === 'number') {
    return filteredPosts.slice(0, limit)
  }
  return filteredPosts
}
