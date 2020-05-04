import { IConfig, createOvermind } from 'overmind'
import { namespaced } from 'overmind/config'

import * as auth from './auth'

export const config = namespaced({
  auth,
})

declare module 'overmind' {
  // @ts-ignore
  type Config = IConfig<typeof config>
}

export const overmind = createOvermind(config)
