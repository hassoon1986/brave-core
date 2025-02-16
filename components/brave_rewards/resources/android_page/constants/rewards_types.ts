/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

export const enum types {
  CREATE_WALLET = '@@rewards/CREATE_WALLET',
  WALLET_CREATED = '@@rewards/WALLET_CREATED',
  WALLET_CREATE_FAILED = '@@rewards/WALLET_CREATE_FAILED',
  ON_SETTING_SAVE = '@@rewards/ON_SETTING_SAVE',
  ON_WALLET_PROPERTIES = '@@rewards/ON_WALLET_PROPERTIES',
  GET_WALLET_PROPERTIES = '@@rewards/GET_WALLET_PROPERTIES',
  FETCH_PROMOTIONS = '@@rewards/FETCH_PROMOTIONS',
  ON_PROMOTIONS = '@@rewards/ON_PROMOTIONS',
  CLAIM_PROMOTION = '@@rewards/CLAIM_PROMOTION',
  DELETE_PROMOTION = '@@rewards/DELETE_PROMOTION',
  ON_PROMOTION_FINISH = '@@rewards/ON_PROMOTION_FINISH',
  GET_WALLLET_PASSPHRASE = '@@rewards/GET_WALLLET_PASSPHRASE',
  ON_WALLLET_PASSPHRASE = '@@rewards/ON_WALLLET_PASSPHRASE',
  RECOVER_WALLET = '@@rewards/RECOVER_WALLET',
  ON_RECOVER_WALLET_DATA = '@@rewards/ON_RECOVER_WALLET_DATA',
  ON_MODAL_BACKUP_CLOSE = '@@rewards/ON_MODAL_BACKUP_CLOSE',
  ON_MODAL_BACKUP_OPEN = '@@rewards/ON_MODAL_BACKUP_OPEN',
  ON_CLEAR_ALERT = '@@rewards/ON_CLEAR_ALERT',
  ON_RECONCILE_STAMP = '@@rewards/ON_RECONCILE_STAMP',
  ON_CONTRIBUTE_LIST = '@@rewards/ON_CONTRIBUTE_LIST',
  ON_BALANCE_REPORTS = '@@rewards/ON_BALANCE_REPORTS',
  ON_EXCLUDE_PUBLISHER = '@@rewards/ON_EXCLUDE_PUBLISHER',
  ON_RESTORE_PUBLISHERS = '@@rewards/ON_RESTORE_PUBLISHERS',
  CHECK_WALLET_EXISTENCE = '@@rewards/CHECK_WALLET_EXISTENCE',
  ON_WALLET_EXISTS = '@@rewards/ON_WALLET_EXISTS',
  ON_CONTRIBUTION_AMOUNT = '@@rewards/ON_CONTRIBUTION_AMOUNT',
  GET_ADS_DATA = '@@rewards/GET_ADS_DATA',
  ON_ADS_DATA = '@@rewards/ON_ADS_DATA',
  ON_ADS_SETTING_SAVE = '@@rewards/ON_ADS_SETTING_SAVE',
  GET_TRANSACTION_HISTORY = '@@rewards/GET_TRANSACTION_HISTORY',
  ON_TRANSACTION_HISTORY = '@@rewards/ON_TRANSACTION_HISTORY',
  ON_TRANSACTION_HISTORY_CHANGED = '@@rewards/ON_TRANSACTION_HISTORY_CHANGED',
  INIT_AUTOCONTRIBUTE_SETTINGS = '@@rewards/INIT_AUTOCONTRIBUTE_SETTINGS',
  GET_CONTRIBUTE_LIST = '@@rewards/GET_CONTRIBUTE_LIST',
  GET_DONATION_TABLE = '@@rewards/GET_DONATION_TABLE',
  ON_RECURRING_DONATION_UPDATE = '@@rewards/ON_RECURRING_DONATION_UPDATE',
  ON_CURRENT_TIPS = '@@rewards/ON_CURRENT_TIPS',
  ON_REMOVE_RECURRING = '@@rewards/ON_REMOVE_RECURRING',
  ON_REWARDS_ENABLED = '@@rewards/ON_REWARDS_ENABLED',
  GET_PENDING_CONTRIBUTION_TOTAL = '@@rewards/GET_PENDING_CONTRIBUTION_TOTAL',
  ON_PENDING_CONTRIBUTION_TOTAL = '@@rewards/ON_PENDING_CONTRIBUTION_TOTAL',
  GET_CURRENT_REPORT = '@@rewards/GET_CURRENT_REPORT',
  GET_REWARDS_ENABLED = '@@rewards/GET_REWARDS_ENABLED',
  ON_RECURRING_TIP_REMOVED = '@@rewards/ON_RECURRING_TIP_REMOVED',
  ON_INLINE_TIP_SETTINGS_CHANGE = '@@rewards/ON_INLINE_TIP_SETTINGS_CHANGE',
  GET_EXCLUDED_SITES = '@@rewards/GET_EXCLUDED_SITES',
  ON_EXCLUDED_LIST = '@@rewards/ON_EXCLUDED_LIST',
  GET_BALANCE = '@@rewards/GET_BALANCE',
  ON_BALANCE = '@@rewards/ON_BALANCE',
  ONLY_ANON_WALLET = '@@rewards/ONLY_ANON_WALLET',
  ON_ONLY_ANON_WALLET = '@@rewards/ON_ONLY_ANON_WALLET'
}
