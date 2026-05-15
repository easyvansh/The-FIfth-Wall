import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import post from './post'
import fragment from './fragment'
import project from './project'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([post, fragment, project])
})
