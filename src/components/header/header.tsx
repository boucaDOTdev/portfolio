import { component$ } from '@builder.io/qwik'

export default component$(() => {
  return (
    <header class={'flex font-medium'}>
      <nav class={'mx-auto text-xl'}>
        <ul class={'m-0 list-none pt-1'}>
          <li class={'inline-block m-0 p-0'}>
            <a
              href='/'
              class={
                'inline-block px-3 py-4 no-underline hover:underline underline-offset-4'
              }
            >
              Home
            </a>
          </li>
          <li class={'inline-block m-0 p-0'}>
            <a
              href='/projects'
              class={
                'inline-block px-3 py-4 no-underline hover:underline underline-offset-4'
              }
            >
              Projects and Demos
            </a>
          </li>
          <li class={'inline-block m-0 p-0'}>
            <a
              href='/about'
              class={
                'inline-block px-3 py-4 no-underline hover:underline underline-offset-4'
              }
            >
              About Me
            </a>
          </li>
          <li class={'inline-block m-0 p-0'}>
            <a
              href='/contact'
              class={
                'inline-block px-3 py-4 no-underline hover:underline underline-offset-4'
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
})
