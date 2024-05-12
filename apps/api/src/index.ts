import { ability } from '@saas/auth'

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteOtherUsers = ability.can('delete', 'User')

const userCannotDeleteOtherUsers = ability.cannot('delete', 'User')

console.log('userCanInviteSomeoneElse: ', userCanInviteSomeoneElse)
console.log('userCanDeleteOtherUsers: ', userCanDeleteOtherUsers)
console.log('userCannotDeleteOtherUsers: ', userCannotDeleteOtherUsers)
