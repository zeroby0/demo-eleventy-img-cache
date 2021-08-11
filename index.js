const Image = require("@11ty/eleventy-img")

const imageTx = async(
    src,
    alt="image",
    widths = [300, 600, 900],
    formats = ['avif', 'webp', 'jpeg'],
    sizes = '(min-width: 640px) 90vw, (min-width: 768px) 80vw, 60vw',
    loading = 'lazy',
) => {

    let metadata = await Image(src, {
        widths,
        formats,
        outputDir: '_site/img/'
    })

    let imageAttributes = {
        alt,
        sizes,
        loading,
        decoding: 'async',
        whitespaceMode: 'inline',
    }

    return Image.generateHTML(metadata, imageAttributes)
}

const sources = [
    'https://unsplash.com/photos/3__dGvSIPh8/download?force=true&w=1920',
    'https://unsplash.com/photos/775lZlBpRC0/download?force=true&w=1920',
    'https://unsplash.com/photos/775lZlBpRC0/download?force=true&w=1920',
    'https://unsplash.com/photos/zCD3j6Dkqwg/download?force=true&w=1920',
    'https://unsplash.com/photos/2sY0VM6MN3k/download?force=true&w=1920',
    'https://unsplash.com/photos/hak8cWlNgGY/download?force=true&w=1920',
    'https://unsplash.com/photos/Ew58aqfWnP0/download?force=true&w=1920',
    'https://unsplash.com/photos/uLRggMfyZPc/download?force=true&w=1920',
    'https://unsplash.com/photos/-s9_zfWIzO8/download?force=true&w=1920',
    'https://unsplash.com/photos/GzfPyf9Pwyc/download?force=true&w=1920',
    'https://unsplash.com/photos/aBQwkdCsoH0/download?force=true&w=1920',
    'https://unsplash.com/photos/SjEY_R0y82M/download?force=true&w=1920',
    'https://unsplash.com/photos/efSUMaIC8lw/download?force=true&w=1920',
    'https://unsplash.com/photos/bP3UIEylUT0/download?force=true&w=1920',
    'https://unsplash.com/photos/-7jcvlk7_BY/download?force=true&w=1920',
    'https://unsplash.com/photos/1VrhwxmhPmo/download?force=true&w=1920',
    'https://unsplash.com/photos/A3EN0CrsrQg/download?force=true&w=1920',
    'https://unsplash.com/photos/NEHr44foE54/download?force=true&w=1920',
    'https://unsplash.com/photos/u_K3eBV0ogE/download?force=true&w=1920',
    'https://unsplash.com/photos/WVNQqAn1BVc/download?force=true&w=1920'
]

sources.map(async src => {
    await imageTx(src)
})