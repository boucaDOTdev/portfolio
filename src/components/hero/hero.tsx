import { component$ } from '@builder.io/qwik'
import { Avatar } from '../icons/avatar'
//import { CHText } from '~/integrations/react/mui'

export default component$(() => {
  return (
    <div
      class={
        'flex flex-col sm:flex-row align-middle justify-center sm:justify-between m:gap-80 w-full'
      }
    >
      <div
        class={'flex flex-col my-6 mx-auto sm:my-14 sm:mx-24 justify-center'}
      >
        <p
          class={
            'w-min text-6xl sm:text-9xl xl:text-10xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500'
          }
        >
          Hello,
        </p>
        <p
          class={
            'w-min text-6xl sm:text-9xl xl:text-10xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500'
          }
        >
          I am Alexandre,
        </p>
        <p
          class={
            'w-min text-6xl sm:text-9xl xl:text-10xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500'
          }
        >
          a Web Developer
        </p>
      </div>
      <div class={' sm:w-1/3 mx-auto my-auto'}>
        <div class={' h-96 w-64 sm:h-full sm:w-4/5  my-2'}>
          <Avatar />
        </div>
      </div>
    </div>
  )
})
