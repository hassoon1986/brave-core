/* Copyright (c) 2019 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

#ifndef BRAVE_COMPONENTS_BRAVE_SHIELDS_BROWSER_AD_BLOCK_BASE_SERVICE_H_
#define BRAVE_COMPONENTS_BRAVE_SHIELDS_BROWSER_AD_BLOCK_BASE_SERVICE_H_

#include <stdint.h>

#include <memory>
#include <string>
#include <utility>
#include <vector>

#include "base/files/file_path.h"
#include "base/memory/weak_ptr.h"
#include "base/sequence_checker.h"
#include "base/values.h"
#include "brave/components/brave_shields/browser/base_brave_shields_service.h"
#include "brave/components/brave_component_updater/browser/dat_file_util.h"
#include "content/public/common/resource_type.h"

class AdBlockServiceTest;

using brave_component_updater::BraveComponent;
namespace adblock {
class Engine;
}

namespace brave_shields {

// The base class of the brave shields service in charge of ad-block
// checking and init.
class AdBlockBaseService : public BaseBraveShieldsService {
 public:
  using GetDATFileDataResult =
      brave_component_updater::LoadDATFileDataResult<adblock::Engine>;

  explicit AdBlockBaseService(BraveComponent::Delegate* delegate);
  ~AdBlockBaseService() override;

  bool ShouldStartRequest(const GURL &url, content::ResourceType resource_type,
    const std::string& tab_host, bool* did_match_exception,
    bool* cancel_request_explicitly, std::string* mock_data_url) override;
  void AddResources(const std::string& resources);
  void EnableTag(const std::string& tag, bool enabled);
  bool TagExists(const std::string& tag);

  base::Optional<base::Value> HostnameCosmeticResources(
          const std::string& hostname);
  std::string ClassIdStylesheet(
          const std::vector<std::string>& classes,
          const std::vector<std::string>& ids,
          const std::vector<std::string>& exceptions);

 protected:
  friend class ::AdBlockServiceTest;
  bool Init() override;
  void Cleanup() override;

  void GetDATFileData(const base::FilePath& dat_file_path);
  void AddKnownTagsToAdBlockInstance();
  void AddKnownResourcesToAdBlockInstance();
  void ResetForTest(const std::string& rules, const std::string& resources);

  std::unique_ptr<adblock::Engine> ad_block_client_;

 private:
  void UpdateAdBlockClient(
      std::unique_ptr<adblock::Engine> ad_block_client,
      brave_component_updater::DATFileDataBuffer buffer);
  void OnGetDATFileData(GetDATFileDataResult result);
  void OnPreferenceChanges(const std::string& pref_name);

  brave_component_updater::DATFileDataBuffer buffer_;
  std::vector<std::string> tags_;
  std::string resources_;
  base::WeakPtrFactory<AdBlockBaseService> weak_factory_;
  DISALLOW_COPY_AND_ASSIGN(AdBlockBaseService);
};

}  // namespace brave_shields

#endif  // BRAVE_COMPONENTS_BRAVE_SHIELDS_BROWSER_AD_BLOCK_BASE_SERVICE_H_
