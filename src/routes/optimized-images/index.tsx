import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <div class={'grid grid-cols-2 p-4'}>
      <div>
        <h1 class={'text-center text-xl sm:text-4xl p-4 font-semibold'}>
          Not Optimized
        </h1>
        <img
          src='/src/routes/optimized-images/imgset/squoosh-Original.jpg'
          alt='squoosh'
          class={'w-11/12 p-2  mx-auto'}
        />
      </div>
      <div>
        <h1 class={'text-center text-xl sm:text-4xl p-4 font-semibold'}>
          Optimized
        </h1>
        <picture>
          <source
            type='image/webp'
            srcSet='/src/routes/optimized-images/imgset/squooh3872.webp 3872w,
        /src/routes/optimized-images/imgset/squoosh3500.webp 3500w,
        /src/routes/optimized-images/imgset/squoosh3000.webp 3000w,
        /src/routes/optimized-images/imgset/squoosh2500.webp 2500w,
        /src/routes/optimized-images/imgset/squoosh2000.webp 2000w,
        /src/routes/optimized-images/imgset/squoosh1500.webp 1500w,
        /src/routes/optimized-images/imgset/squoosh1000.webp 1000w'
          />
          <img
            src='/src/routes/testset/imgset/squoosh-Original.jpg'
            alt='squoosh'
            class={'w-11/12 aspect-[1500/1004] p-2  mx-auto'}
          />
        </picture>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Optimized Images | bouca.dev',
  meta: [
    {
      name: 'description',
      content:
        "I'm a web developer and this is my portfolio. Contact me for more information.",
    },
  ],
}
