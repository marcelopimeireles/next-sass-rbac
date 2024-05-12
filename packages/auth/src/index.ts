import {
  AbilityBuilder,
  CreateAbility,
  createMongoAbility,
  MongoAbility,
} from '@casl/ability'

import { User } from './models/User'
import { permissions } from './permissions'
import { ProjectSubject } from './subjects/project'
import { UserSubject } from './subjects/user'

export type Abilities = UserSubject | ProjectSubject | ['manage', 'all']

export type AppAbility = MongoAbility<Abilities>
export const createAbility = createMongoAbility as CreateAbility<AppAbility>

export function defineAbilityFor(user: User) {
  const builder = new AbilityBuilder(createAbility)

  if (typeof permissions[user.role] !== 'function') {
    throw new Error(`Permissions for role ${user.role} not found.`)
  }

  permissions[user.role](user, builder)

  const ability = builder.build()

  return ability
}
