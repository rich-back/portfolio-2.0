import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolio-2.0 ',

  projectId: 'g467rhdy',
  dataset: 'production',

  plugins: [deskTool(),],
  

  schema: {
    types: schemaTypes,
  },


})
