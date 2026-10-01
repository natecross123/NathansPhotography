# Photography uploads

This folder is reserved for Nathan's photography. The site currently displays grey editorial placeholders so the page structure can be reviewed before photos are added.

## Adding a photograph

1. Add the file here, for example `public/photos/amanda-josh-hero.jpg`.
2. Open `data/photos.ts`.
3. Replace the matching empty `src` value with the public path:

   ```ts
   hero: { src: "/photos/amanda-josh-hero.jpg", alt: "Bride and groom in a sunlit field" }
   ```

Use descriptive file names, accurate alternative text, and compressed JPG, WebP, or AVIF files. Keep the `src` empty if you want to retain a layout placeholder.
