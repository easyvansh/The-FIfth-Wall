export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    { name: 'subtitle', type: 'string', title: 'Subtitle' },
    { name: 'publishedAt', type: 'datetime', title: 'Published at' },
    { name: 'category', type: 'string' },
    { name: 'tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'excerpt', type: 'text' },
    { name: 'coverImage', type: 'image' },
    { name: 'body', type: 'array', of: [{ type: 'block' }] },
    { name: 'marginNotes', type: 'array', of: [{ type: 'block' }] },
    { name: 'featured', type: 'boolean' }
  ]
}
