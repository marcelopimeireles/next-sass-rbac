import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'ADMIN' })

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteOtherUsers = ability.can('delete', 'User')

const userCannotDeleteOtherUsers = ability.cannot('delete', 'User')

console.log('ADMIN')
console.log('userCanInviteSomeoneElse: ', userCanInviteSomeoneElse)
console.log('userCanDeleteOtherUsers: ', userCanDeleteOtherUsers)
console.log('userCannotDeleteOtherUsers: ', userCannotDeleteOtherUsers)
