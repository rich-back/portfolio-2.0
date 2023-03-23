import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolio-2.0 ',

  projectId: 'g467rhdy',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],
  

  schema: {
    types: schemaTypes,
  },


})
