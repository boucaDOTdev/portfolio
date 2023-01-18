import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { WorkerLoadingLogo } from '~/components/icons/workerLoading'

export default component$(() => {
  return (
    <div>
      <div class={'items-center justify-center flex py-10'}>
        <div class='w-80'>
          <WorkerLoadingLogo />
        </div>
      </div>
      <p class={'items-center justify-center flex py-10 text-2xl'}>
        Being Built
      </p>
      <p class={'items-center justify-center flex text-lg'}>
        alexandre@bouca.dev
      </p>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Contact | bouca.dev',
  meta: [
    {
      name: 'description',
      content:
        "I'm a web developer and this is my portfolio. Contact me for more information.",
    },
  ],
}
