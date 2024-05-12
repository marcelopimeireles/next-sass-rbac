import {
  AbilityBuilder,
  CreateAbility,
  createMongoAbility,
  ForcedSubject,
  MongoAbility,
} from '@casl/ability'

export const actions = ['manage', 'invite', 'delete'] as const
export const subjects = ['User', 'all'] as const

export type Abilities = [
  (typeof actions)[number],
  (
    | (typeof subjects)[number]
    | ForcedSubject<Exclude<(typeof subjects)[number], 'all'>>
  ),
]
export type AppAbility = MongoAbility<Abilities>
export const createAbility = createMongoAbility as CreateAbility<AppAbility>

const { build, can, cannot } = new AbilityBuilder(createAbility)

can('invite', 'User')
cannot('delete', 'User')

export const ability = build()
