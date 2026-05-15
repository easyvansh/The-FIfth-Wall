export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'description', type: 'text' },
    { name: 'techStack', type: 'array', of: [{ type: 'string' }] },
    { name: 'githubUrl', type: 'url' },
    { name: 'liveUrl', type: 'url' },
    { name: 'body', type: 'array', of: [{ type: 'block' }] },
    { name: 'featured', type: 'boolean' }
  ]
}
