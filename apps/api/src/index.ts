import { defineAbilityFor, projectSchema } from '@saas/auth'

const ability = defineAbilityFor({ role: 'MEMBER', id: 'user.id' })

const project = projectSchema.parse({ id: 'project-id', ownerId: 'user-id' })

console.log('MEMBER')
console.log('can get Billing: ', ability.can('get', 'Billing'))
console.log('can create Invite: ', ability.can('create', 'Invite'))
console.log('can delete my Project: ', ability.can('delete', project))
