/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import { action } from 'typesafe-actions'

// Constant
import { types } from '../constants/rewards_types'

export const createWallet = () => action(types.CREATE_WALLET)

export const onWalletCreated = () => action(types.WALLET_CREATED)

export const onWalletCreateFailed = () => action(types.WALLET_CREATE_FAILED)

export const onSettingSave = (key: string, value: any) => action(types.ON_SETTING_SAVE, {
  key,
  value
})

export const updateAdsRewards = () => action(types.UPDATE_ADS_REWARDS)

export const getWalletProperties = () => action(types.GET_WALLET_PROPERTIES)

export const onWalletProperties = (properties: {status: number, wallet: Rewards.WalletProperties, monthlyAmount: number}) =>
  action(types.ON_WALLET_PROPERTIES, {
    properties
  })

export const fetchPromotions = () => action(types.FETCH_PROMOTIONS)

export const onPromotions = (properties: Rewards.PromotionResponse) => action(types.ON_PROMOTIONS, {
  properties
})

export const claimPromotion = (promotionId: string) => action(types.CLAIM_PROMOTION, {
  promotionId
})

export const onClaimPromotion = (properties: Rewards.Captcha) => action(types.ON_CLAIM_PROMOTION, {
  properties
})

export const attestPromotion = (promotionId: string, x: number, y: number) => action(types.ATTEST_PROMOTION, {
  promotionId,
  x,
  y
})

export const onPromotionFinish = (properties: Rewards.PromotionFinish) => action(types.ON_PROMOTION_FINISH, {
  properties
})

export const resetPromotion = (promotionId: string) => action(types.RESET_PROMOTION, {
  promotionId
})

export const deletePromotion = (promotionId: string) => action(types.DELETE_PROMOTION, {
  promotionId
})

export const getWalletPassphrase = () => action(types.GET_WALLLET_PASSPHRASE)

export const onWalletPassphrase = (pass: string) => action(types.ON_WALLLET_PASSPHRASE, {
  pass
})

export const recoverWallet = (key: string) => action(types.RECOVER_WALLET, {
  key
})

export const onRecoverWalletData = (properties: Rewards.RecoverWallet) => action(types.ON_RECOVER_WALLET_DATA, {
  properties
})

export const onModalBackupClose = () => action(types.ON_MODAL_BACKUP_CLOSE)

export const onModalBackupOpen = () => action(types.ON_MODAL_BACKUP_OPEN)

export const onClearAlert = (property: string) => action(types.ON_CLEAR_ALERT, {
  property
})

export const onReconcileStamp = (stamp: number) => action(types.ON_RECONCILE_STAMP, {
  stamp
})

export const onContributeList = (list: Rewards.Publisher[]) => action(types.ON_CONTRIBUTE_LIST, {
  list
})

export const onExcludedList = (list: Rewards.ExcludedPublisher[]) => action(types.ON_EXCLUDED_LIST, {
  list
})

export const onBalanceReports = (reports: Record<string, Rewards.Report>) => action(types.ON_BALANCE_REPORTS, {
  reports
})

export const getCurrentReport = () => action(types.GET_CURRENT_REPORT, {})

export const excludePublisher = (publisherKey: string) => action(types.ON_EXCLUDE_PUBLISHER, {
  publisherKey
})

export const checkWalletExistence = () => action(types.CHECK_WALLET_EXISTENCE)

export const onWalletExists = (exists: boolean) => action(types.ON_WALLET_EXISTS, {
  exists
})

export const restorePublishers = () => action(types.ON_RESTORE_PUBLISHERS)

export const onContributionAmount = (amount: number) => action(types.ON_CONTRIBUTION_AMOUNT, {
  amount
})

export const onRecurringTips = (list: Rewards.Publisher[]) => action(types.ON_RECURRING_TIPS, {
  list
})

export const removeRecurringTip = (publisherKey: string) => action(types.REMOVE_RECURRING_TIP, {
  publisherKey
})

export const onCurrentTips = (list: Rewards.Publisher[]) => action(types.ON_CURRENT_TIPS, {
  list
})

export const getTipTable = () => action(types.GET_TIP_TABLE)

export const getContributeList = () => action(types.GET_CONTRIBUTE_LIST)

export const onInitAutoContributeSettings = (properties: any) => action(types.INIT_AUTOCONTRIBUTE_SETTINGS, {
  properties
})

export const checkImported = () => action(types.CHECK_IMPORTED)

export const onImportedCheck = (imported: boolean) => action(types.ON_IMPORTED_CHECK, {
  imported
})

export const getAdsData = () => action(types.GET_ADS_DATA)

export const onAdsData = (adsData: Rewards.AdsData) => action(types.ON_ADS_DATA, {
  adsData
})

export const getAdsHistory = () => action(types.GET_ADS_HISTORY)

export const onAdsHistory = (adsHistory: Rewards.AdsHistory[]) => action(types.ON_ADS_HISTORY, {
  adsHistory
})

export const toggleAdThumbUp = (uuid: string, creativeSetId: string, likeAction: number) => action(types.TOGGLE_AD_THUMB_UP, {
  uuid,
  creativeSetId,
  likeAction
})

export const onToggleAdThumbUp = (result: Rewards.ToggleLikeAction) => action(types.ON_TOGGLE_AD_THUMB_UP, {
  result
})

export const toggleAdThumbDown = (uuid: string, creativeSetId: string, likeAction: number) => action(types.TOGGLE_AD_THUMB_DOWN, {
  uuid,
  creativeSetId,
  likeAction
})

export const onToggleAdThumbDown = (result: Rewards.ToggleLikeAction) => action(types.ON_TOGGLE_AD_THUMB_DOWN, {
  result
})

export const toggleAdOptInAction = (category: string, optAction: number) => action(types.TOGGLE_AD_OPT_IN_ACTION, {
  category,
  optAction
})

export const onToggleAdOptInAction = (result: Rewards.ToggleOptAction) => action(types.ON_TOGGLE_AD_OPT_IN_ACTION, {
  result
})

export const toggleAdOptOutAction = (category: string, optAction: number) => action(types.TOGGLE_AD_OPT_OUT_ACTION, {
  category,
  optAction
})

export const onToggleAdOptOutAction = (result: Rewards.ToggleOptAction) => action(types.ON_TOGGLE_AD_OPT_OUT_ACTION, {
  result
})

export const toggleSaveAd = (uuid: string, creativeSetId: string, savedAd: boolean) => action(types.TOGGLE_SAVE_AD, {
  uuid,
  creativeSetId,
  savedAd
})

export const onToggleSaveAd = (result: Rewards.ToggleSaveAd) => action(types.ON_TOGGLE_SAVE_AD, {
  result
})

export const toggleFlagAd = (uuid: string, creativeSetId: string, flaggedAd: boolean) => action(types.TOGGLE_FLAG_AD, {
  uuid,
  creativeSetId,
  flaggedAd
})

export const onToggleFlagAd = (result: Rewards.ToggleFlagAd) => action(types.ON_TOGGLE_FLAG_AD, {
  result
})

export const onAdsSettingSave = (key: string, value: any) => action(types.ON_ADS_SETTING_SAVE, {
  key,
  value
})

export const getReconcileStamp = () => action(types.GET_RECONCILE_STAMP)

export const getPendingContributions = () => action(types.GET_PENDING_CONTRIBUTIONS)

export const onPendingContributions = (list: Rewards.PendingContribution[]) =>
  action(types.ON_PENDING_CONTRIBUTIONS, {
    list
  })

export const onRewardsEnabled = (enabled: boolean) => action(types.ON_REWARDS_ENABLED, {
  enabled
})

export const onTransactionHistory = (data: {adsEstimatedPendingRewards: number, adsNextPaymentDate: string, adsNotificationsReceivedThisMonth: number}) =>
  action(types.ON_TRANSACTION_HISTORY, {
    data
  })

export const getTransactionHistory = () => action(types.GET_TRANSACTION_HISTORY)

export const onTransactionHistoryChanged = () => action(types.ON_TRANSACTION_HISTORY_CHANGED)

export const getRewardsMainEnabled = () => action(types.GET_REWARDS_MAIN_ENABLED)

export const onRecurringTipSaved = (success: boolean) => action(types.ON_RECURRING_TIP_SAVED, {
  success
})

export const onRecurringTipRemoved = (success: boolean) => action(types.ON_RECURRING_TIP_REMOVED, {
  success
})

export const onInlineTipSettingChange = (key: string, value: boolean) => action(types.ON_INLINE_TIP_SETTINGS_CHANGE, {
  key,
  value
})

export const removePendingContribution = (id: number) =>
  action(types.REMOVE_PENDING_CONTRIBUTION, {
    id
  })

export const removeAllPendingContribution = () => action(types.REMOVE_ALL_PENDING_CONTRIBUTION)

export const restorePublisher = (publisherKey: string) => action(types.ON_RESTORE_PUBLISHER, {
  publisherKey
})

export const getExcludedSites = () => action(types.GET_EXCLUDED_SITES)

export const getBalance = () => action(types.GET_BALANCE)

export const onBalance = (status: number, balance: Rewards.Balance) => action(types.ON_BALANCE, {
  status,
  balance
})

export const getExternalWallet = (type: Rewards.WalletType) => action(types.GET_EXTERNAL_WALLET, {
  type
})

export const onExternalWallet = (result: number, wallet: Rewards.ExternalWallet) => action(types.ON_EXTERNAL_WALLET, {
  result,
  wallet
})

export const onOnBoardingDisplayed = () => action(types.ON_ON_BOARDING_DISPLAYED)

export const processRewardsPageUrl = (path: string, query: string) => action(types.PROCESS_REWARDS_PAGE_URL, {
  path,
  query
})

export const onProcessRewardsPageUrl = (data: Rewards.ProcessRewardsPageUrl) => action(types.ON_PROCESS_REWARDS_PAGE_URL, {
  data
})

export const hideRedirectModal = () => action(types.HIDE_REDIRECT_MODAL)

export const disconnectWallet = (walletType: string) => action(types.DISCONNECT_WALLET, {
  walletType
})

export const onlyAnonWallet = () => action(types.ONLY_ANON_WALLET)

export const onOnlyAnonWallet = (only: boolean) => action(types.ON_ONLY_ANON_WALLET, {
  only
})
