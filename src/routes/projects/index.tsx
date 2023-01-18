import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <div class={'flex content-center items-center'}>
      <div class={'xl:w-2/3 mx-auto'}>
        <h1 class={'text-center text-4xl mt-10 mb-4'}>Projects and Demos</h1>
        <h2 class={'text-center text-xl  mb-6'}>
          This page links to{' '}
          <span class={'underline underline-offset-4 decoration-lime-500'}>
            Projects
          </span>{' '}
          and{' '}
          <span class={'underline underline-offset-4 decoration-cyan-500'}>
            Demos
          </span>
        </h2>
        <div class={'grid grid-cols-4 gap-6 mx-4'}>
          <div
            class={
              'bg-neutral-600 hover:bg-neutral-500 rounded-xl p-4 shadow-md shadow-cyan-500 col-span-4 sm:col-span-2 2xl:col-span-1'
            }
          >
            <a href='/react'>
              <h2 class={'text-2xl'}>React</h2>
              <p>Integrating React components from MUI into QUIK</p>
            </a>
          </div>
          <div
            class={
              'bg-neutral-600 hover:bg-neutral-500 rounded-xl p-4 shadow-md shadow-lime-500 col-span-4 sm:col-span-2 2xl:col-span-1'
            }
          >
            <a
              href='https://github.com/boucaDOTdev/react-admin-dash'
              target={'_blank'}
            >
              <h2 class={'text-2xl'}>Admin Dashbord</h2>
              <p>Admin style Dashboard in React</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Projects and Demos | bouca.dev',
  meta: [
    {
      name: 'description',
      content:
        "I'm a web developer and this is my portfolio. Contact me for more information.",
    },
  ],
}
