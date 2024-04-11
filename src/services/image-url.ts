import imagePlaceholder from '../assets/no-image-placeholder-6f3882e0.webp'
const optimizedImageUrl = (url: string) => {
  if (!url) return imagePlaceholder

  const target = 'media/'
  if (!url?.includes(target)) return url

  url = url.replace(target, target + 'crop/600/400/')
  return url
}

export default optimizedImageUrl
