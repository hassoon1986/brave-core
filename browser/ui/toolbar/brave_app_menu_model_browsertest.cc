/* Copyright (c) 2019 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

#include "brave/browser/ui/toolbar/brave_app_menu_model.h"

#include <algorithm>
#include <vector>

#include "chrome/app/chrome_command_ids.h"
#include "chrome/browser/ui/views/frame/browser_view.h"
#include "chrome/browser/ui/views/toolbar/toolbar_view.h"
#include "chrome/test/base/in_process_browser_test.h"

using BraveAppMenuBrowserTest = InProcessBrowserTest;

// Test brave menu order test.
// Brave menu is inserted based on corresponding commands enable status.
// So, this doesn't test for each profiles(normal, private, tor and guest).
// Instead, BraveBrowserCommandControllerTest will do that.
IN_PROC_BROWSER_TEST_F(BraveAppMenuBrowserTest, MenuOrderTest) {
  auto* browser_view = BrowserView::GetBrowserViewForBrowser(browser());
  BraveAppMenuModel normal_model(browser_view->toolbar(), browser());
  normal_model.Init();

  int commands_in_order[] = {
    IDC_NEW_TAB,
    IDC_NEW_TOR_CONNECTION_FOR_SITE,
    IDC_NEW_WINDOW,
    IDC_NEW_INCOGNITO_WINDOW,
    IDC_NEW_OFFTHERECORD_WINDOW_TOR,
    IDC_SHOW_BRAVE_REWARDS,
    IDC_RECENT_TABS_MENU,
    IDC_BOOKMARKS_MENU,
    IDC_SHOW_DOWNLOADS,
    IDC_SHOW_BRAVE_WALLET,
    IDC_MANAGE_EXTENSIONS,
    IDC_SHOW_BRAVE_SYNC,
    IDC_SHOW_BRAVE_ADBLOCK,
    IDC_ADD_NEW_PROFILE,
    IDC_OPEN_GUEST_PROFILE,
    IDC_SHOW_BRAVE_WEBCOMPAT_REPORTER
  };

  std::vector<int> commands_index;
  for (int id : commands_in_order) {
    int index = normal_model.GetIndexOfCommandId(id);
    if (index != -1)
      commands_index.push_back(index);
  }

  EXPECT_TRUE(std::is_sorted(std::begin(commands_index),
                             std::end(commands_index)));
}
