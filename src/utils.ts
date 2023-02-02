const formatDate = (createdAt: string): string => {
  return new Date(createdAt).toLocaleDateString('en-uk', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export { formatDate }
