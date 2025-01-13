import * as apiModel from "./api";
import * as viewModel from "./transfer.vm";

export const mapAccountFromApiToVm = (
  account: apiModel.Account
): viewModel.AccountVm => ({
  id: account.id,
  alias: account.name, //re leftside is what you get out of it
  iban: account.iban
});

export const mapTransferFromVmToApi = (//this is putting the Vm UI info back into Api format to update the API. APis only work with srings so the dates needs to be strings
  transfer: viewModel.TransferVm 
): apiModel.Transfer => ({
  accountId: transfer.accountId,//right side is the param TransferVm
  iban: transfer.iban,//left side it what we are getting out, the apimodel tranfer
  name: transfer.name,
  amount: transfer.amount,
  concept: transfer.concept,
  notes: transfer.notes,
  transferDate: new Date().toDateString(),//has to be a string as string in apimodel. Here we are making a new Date. the obj wasnt a date before
  realTransferDate: transfer.realDateTransfer ?? '',
  //as the api model is all strings, we need to convert to a date
});
//email is part of Vm but not on api so we dont include
