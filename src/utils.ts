const formatDate = (createdAt: string): string => {
  return new Date(createdAt).toLocaleDateString('en-uk', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export { formatDate }
