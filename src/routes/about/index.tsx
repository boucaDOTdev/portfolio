import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { CSSLogo } from '~/components/icons/css'
import { GithubLogo } from '~/components/icons/github'
import { HTMLLogo } from '~/components/icons/html5'
import { JSLogo } from '~/components/icons/js'
import { MongoDBLogo } from '~/components/icons/mongo'
import { MySQLLogo } from '~/components/icons/mysql'
import { NodeLogo } from '~/components/icons/node'
import { QwikLogo } from '~/components/icons/qwik'
import { ReactLogo } from '~/components/icons/react'
import { TailwindLogo } from '~/components/icons/tailwind'

export default component$(() => {
  return (
    <div class={'flex content-center items-center'}>
      <div class={'xl:w-2/3 mx-4 xl:mx-auto'}>
        <h1 class={'text-center text-4xl mt-10 mb-4'}>About Me</h1>
        <p>
          Hi, I'm Alexndre Bouça, who graduated from Instituto Politécnico de
          Viseu in 2022, under the program Brightstart from Deloitte. Where I
          gained experience in the Agile/Scrum projects. The internship projects
          include building scripts/accelerators and unitary tests.
        </p>
        <h1 class={'text-center text-4xl mt-10 mb-4'}>
          Tech and Tools I have used
        </h1>
        <div class={'flex gap-4 flex-wrap '}>
          <div class={'w-fit mx-auto sm:mx-0'}>
            <h2 class={'text-center'}>React</h2>
            <div class={'w-32'}>
              <ReactLogo />
            </div>
          </div>
          <div class={'w-fit mx-auto sm:mx-0'}>
            <h2 class={'text-center'}>Node js</h2>
            <div class={'w-32'}>
              <NodeLogo />
            </div>
          </div>
          <div class={'w-fit mx-auto sm:mx-0'}>
            <h2 class={'text-center'}>JavaScript</h2>
            <div class={'w-32'}>
              <JSLogo />
            </div>
          </div>
          <div class={'w-fit mx-auto sm:mx-0'}>
            <h2 class={'text-center'}>Github</h2>
            <div class={'w-32'}>
              <GithubLogo />
            </div>
          </div>
          <div class={'w-fit mx-auto sm:mx-0'}>
            <h2 class={'text-center'}>TailwindCSS</h2>
            <div class={'w-32'}>
              <TailwindLogo />
            </div>
          </div>
          <div class={'w-fit mx-auto sm:mx-0'}>
            <h2 class={'text-center'}>HTML</h2>
            <div class={'w-32'}>
              <HTMLLogo />
            </div>
          </div>
          <div class={'w-fit mx-auto sm:mx-0'}>
            <h2 class={'text-center'}>CSS</h2>
            <div class={'w-32'}>
              <CSSLogo />
            </div>
          </div>
          <div class={'w-fit mx-auto sm:mx-0'}>
            <h2 class={'text-center'}>MySQL</h2>
            <div class={'w-32'}>
              <MySQLLogo />
            </div>
          </div>
          <div class={'w-fit mx-auto sm:mx-0'}>
            <h2 class={'text-center'}>Mongodb</h2>
            <div class={'w-32'}>
              <MongoDBLogo />
            </div>
          </div>
          <div class={'w-fit mx-auto sm:mx-0'}>
            <h2 class={'text-center'}>Qwik</h2>
            <div class={'w-32'}>
              <QwikLogo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'About | bouca.dev',
  meta: [
    {
      name: 'description',
      content: "I'm a web developer and this is my portfolio. Contact me for more information.",
    },
  ],
}
