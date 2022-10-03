import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'
import projects from './projects'
import about from './about'
import skills from './skills'
import contact from './contact'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([projects, about, skills, contact]),
})
