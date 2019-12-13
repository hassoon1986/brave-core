/* Copyright (c) 2019 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

#include "brave/browser/brave_local_state_prefs.h"
#include "brave/browser/brave_profile_prefs.h"
#include "brave/components/brave_sync/brave_sync_prefs.h"
#include "chrome/browser/profiles/profile.h"
#include "third_party/widevine/cdm/buildflags.h"

#if BUILDFLAG(ENABLE_WIDEVINE)
#include "brave/browser/widevine/widevine_utils.h"
#endif

#if !defined(OS_ANDROID)
#include "brave/browser/themes/brave_dark_mode_utils.h"
#endif

#define MigrateObsoleteProfilePrefs MigrateObsoleteProfilePrefs_ChromiumImpl
#include "../../../../chrome/browser/prefs/browser_prefs.cc"  // NOLINT
#undef MigrateObsoleteProfilePrefs

// This method should be periodically pruned of year+ old migrations.
void MigrateObsoleteProfilePrefs(Profile* profile) {
  MigrateObsoleteProfilePrefs_ChromiumImpl(profile);

#if BUILDFLAG(ENABLE_WIDEVINE)
  // Added 11/2019.
  MigrateWidevinePrefs(profile);
#endif
  // Added 11/2019.
  MigrateBraveSyncPrefs(profile->GetPrefs());

#if !defined(OS_ANDROID)
  // Added 12/2019.
  dark_mode::MigrateBraveDarkModePrefs(profile);
#endif
}
