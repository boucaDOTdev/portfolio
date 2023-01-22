import { component$, Slot } from '@builder.io/qwik'
import { GithubLogo } from '~/components/icons/github'
import { LinkedInLogo } from '~/components/icons/linkedin'

import Header from '../components/header/header'

export default component$(() => {
  return (
    <div class={'min-h-screen min-w-min bg-neutral-800 text-neutral-100'}>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer class={'flex justify-center items-center pt-10'}>
        <div class='flex flex-col items-center gap-2'>
          <div class={'flex gap-2'}>
            <a
              href='https://www.linkedin.com/in/alexandre-bouca/'
              target={'_blank'}
              class={'w-10'}
            >
              <LinkedInLogo />
            </a>
            <a
              href='https://github.com/boucaDOTdev'
              target={'_blank'}
              class={'w-10'}
            >
              <GithubLogo />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
})
