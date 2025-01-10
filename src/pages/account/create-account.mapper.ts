import {AccountVm} from './create-account.vm'
import {Account} from './api/create-account.api-model'

export const mapCreateAccountFromVmToApi = (newAccount: AccountVm) : Partial<Account> => ({
    id: newAccount.type , //or type:
    name: newAccount.name,
})