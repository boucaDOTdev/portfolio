import { component$, useSignal } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { MUIButton, MUISlider, TableApp } from '~/integrations/react/mui'

export default component$(() => {
  const show = useSignal(false)
  const count = useSignal(0)
  const variant = useSignal<'contained' | 'outlined' | 'text'>('contained')

  return (
    <div class={'xl:w-2/3 mx-4 xl:mx-auto'}>
      <h1>Qwik/React demos</h1>
      <select
        class={'text-neutral-900 rounded-md p-1 m-2'}
        value={variant.value}
        onChange$={(ev) => {
          variant.value = (ev.target as any).value
        }}
      >
        <option>text</option>
        <option>outlined</option>
        <option selected>contained</option>
      </select>

      <MUISlider
        aria-label='Slider'
        value={count.value}
        onChange$={(_, value) => {
          count.value = value as number
        }}
      />
      <div class={'flex items-center content-center'}>
        <MUIButton
          className='bg-blue-900'
          variant={variant.value}
          host:onClick$={() => alert('click')}
        >
          Slider is {count.value}
        </MUIButton>

        <button class={'m-2'} onClick$={() => (show.value = true)}>
          Show table
        </button>
      </div>
      {show.value && (
        <TableApp client:visible>Slider is {count.value}</TableApp>
      )}
    </div>
  )
})

export const head: DocumentHead = {
  title: 'React in Qwik Demo | bouca.dev',
  meta: [
    {
      name: 'description',
      content: "I'm a web developer and this is my portfolio. Contact me for more information.",
    },
  ],
}
