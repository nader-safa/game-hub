const optimizedImageUrl = (url: string) => {
  if (!url) return url

  const target = 'media/'
  if (!url?.includes(target)) return url

  url = url.replace(target, target + 'crop/600/400/')
  return url
}

export default optimizedImageUrl
