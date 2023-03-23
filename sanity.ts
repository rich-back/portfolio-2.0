import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "pv8y60vp"
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION // "2022-11-16"

export const client = createClient({
  projectId: 'g467rhdy',
  dataset: 'production',
  apiVersion: '2021-10-21', // https://www.sanity.io/docs/api-versioning
  useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})

export const builder = imageUrlBuilder(client)

export const urlFor = (source: any) =>
    builder.image(source);