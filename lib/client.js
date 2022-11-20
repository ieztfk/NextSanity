import sanityClient from '@sanity/client'
import  ImageUrlBuilder  from '@sanity/image-url'
export const client =  sanityClient({
    projectId: "32r1lan3",
    dataset:  'production',
    apiVersion: '2022-11-19',
    useCdn:true,
    token:'skXwsnkS8Uysb98w0ohbOqyoAGcasVY3le2Wgrbrv3EcPSpb9dsOo9iBj5xJnuMqnGeg0nRCaNv7Yi5tqk9BhLZxduwbiUOH280mn2dfw6GglOqOtEGHDI5RlWawKgQ5Nrd57bkLiCaFvNTnjGnyRgVZrtlaUPVd0buQw07jZDcngYf5IlLI'
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) =>  builder.image(source)