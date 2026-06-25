import slugify from "slugify"

export const makeSlugFromText = (text: string) => {
    const slug = slugify(text, {
        lower: true,
        strict: true,
        trim: true
    })

    return slug
}