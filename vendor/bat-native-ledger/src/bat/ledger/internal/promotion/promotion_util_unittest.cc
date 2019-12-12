/* Copyright (c) 2019 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#include <memory>

#include "bat/ledger/internal/promotion/promotion_util.h"
#include "bat/ledger/ledger.h"
#include "testing/gtest/include/gtest/gtest.h"

// npm run test -- brave_unit_tests --filter=PromotionUtilTest.*

namespace braveledger_promotion {

class PromotionUtilTest : public testing::Test {
};

TEST_F(PromotionUtilTest, ParseOSToStringForWindows) {
  // Act
  const std::string os_string =
      ParseOSToString(ledger::OperatingSystem::WINDOWS);

  // Assert
  EXPECT_EQ(os_string, "windows");
}

TEST_F(PromotionUtilTest, ParseOSToStringForMacOS) {
  // Act
  const std::string os_string =
      ParseOSToString(ledger::OperatingSystem::MACOS);

  // Assert
  EXPECT_EQ(os_string, "osx");
}

TEST_F(PromotionUtilTest, ParseOSToStringForLinux) {
  // Act
  const std::string os_string =
      ParseOSToString(ledger::OperatingSystem::LINUX);

  // Assert
  EXPECT_EQ(os_string, "linux");
}

TEST_F(PromotionUtilTest, ParseOSToStringForUndefined) {
  // Act
  const std::string os_string =
      ParseOSToString(ledger::OperatingSystem::UNDEFINED);

  // Assert
  EXPECT_EQ(os_string, "undefined");
}

// std::string ParseClientInfoToString(ledger::ClientInfoPtr info);
TEST_F(PromotionUtilTest, ParseClientInfoToStringForAndroid) {
  // Arrange
  const std::string client_info_string = "";

  // Act

  // Assert
  EXPECT_EQ(client_info_string, "android");
}

TEST_F(PromotionUtilTest, ParseClientInfoToStringForIos) {
  // Arrange
  const std::string client_info_string = "";

  // Act
  // TODO

  // Assert
  EXPECT_EQ(client_info_string, "ios");
}

TEST_F(PromotionUtilTest, ParseClientInfoToStringForDesktop) {
  // Arrange
  const std::string client_info_string = "";

  // Act
  // TODO

  // Assert
  EXPECT_EQ(client_info_string, "windows");
}

TEST_F(PromotionUtilTest, ParseClientInfoToStringWithNullptr) {
  // Arrange
  const std::string client_info_string = "";

  // Act
  // TODO

  // Assert
  EXPECT_EQ(client_info_string, "");
}

// ledger::PromotionType ConvertStringToPromotionType(const std::string& type);
TEST_F(PromotionUtilTest, ConvertStringToPromotionTypeForUGP) {
  // Act
  const ledger::PromotionType promotion_type =
      ConvertStringToPromotionType("ugp");

  // Assert
  EXPECT_EQ(promotion_type, ledger::PromotionType::UGP);
}

TEST_F(PromotionUtilTest, ConvertStringToPromotionTypeForADS) {
  // Act
  const ledger::PromotionType promotion_type =
      ConvertStringToPromotionType("ads");

  // Assert
  EXPECT_EQ(promotion_type, ledger::PromotionType::ADS);
}

TEST_F(PromotionUtilTest, ConvertStringToPromotionTypeForInvalid) {
  // Act
  const ledger::PromotionType promotion_type =
      ConvertStringToPromotionType("");

  // Assert
  EXPECT_EQ(promotion_type, ledger::PromotionType::UGP);
}

// ledger::ReportType ConvertPromotionTypeToReportType(
//     const ledger::PromotionType type);
TEST_F(PromotionUtilTest, ConvertPromotionTypeToReportTypeForUGP) {
  // Act
  ledger::ReportType report_type =
      ConvertPromotionTypeToReportType(ledger::PromotionType::UGP);

  // Assert
  EXPECT_EQ(report_type, ledger::ReportType::GRANT);
}

TEST_F(PromotionUtilTest, ConvertPromotionTypeToReportTypeForADS) {
  // Act
  ledger::ReportType report_type =
      ConvertPromotionTypeToReportType(ledger::PromotionType::ADS);

  // Assert
  EXPECT_EQ(report_type, ledger::ReportType::ADS);
}

// bool ParseFetchResponse(
//     const std::string& response,
//     ledger::PromotionList* list);
TEST_F(PromotionUtilTest, ParseFetchResponseWithNullptrList) {
  std::string response;

  // Act
  bool success = ParseFetchResponse(response, nullptr);

  // Assert
  EXPECT_FALSE(success);
}

TEST_F(PromotionUtilTest, ParseFetchResponseWithNoResponseContent) {
  std::string response;
  ledger::PromotionList list;

  // Act
  bool success = ParseFetchResponse(response, &list);

  // Assert
  EXPECT_FALSE(success);
}

TEST_F(PromotionUtilTest, ParseFetchResponseWithInvalidResponseContent) {
  std::string response = "qwertyuyiuoip";
  ledger::PromotionList list;

  // Act
  bool success = ParseFetchResponse(response, &list);

  // Assert
  EXPECT_FALSE(success);
}

TEST_F(PromotionUtilTest, ParseFetchResponseWithCompletePromotion) {
  const std::string response = "{\"id\": \"1234\"}";
  ledger::PromotionList promotion_list;

  // Act
  bool success = ParseFetchResponse(response, &promotion_list);

  // Assert
  EXPECT_TRUE(success);

  EXPECT_EQ(promotion_list.size(), static_cast<uint64_t>(1));

  for (auto& promotion : promotion_list) {
    EXPECT_EQ(promotion->id, "1234");
  }
}

TEST_F(PromotionUtilTest, ParseFetchResponseWithMultipleCompletePromotions) {
}

// std::string ParseClaimTokenResponse(
//     const std::string& response);

//void ParseSignedTokensResponse(
    // const std::string& response,
    // base::Value* result);

//std::unique_ptr<base::ListValue> ParseStringToBaseList(
//    const std::string& string_list);

TEST_F(PromotionUtilTest, VerifyPublicKey) {
  auto promotion = ledger::Promotion::New();
  auto credentials = ledger::PromotionCreds::New();

  // null pointer
  bool result = braveledger_promotion::VerifyPublicKey(nullptr);
  EXPECT_EQ(result, false);

  // credentials are not set
  result = braveledger_promotion::VerifyPublicKey(promotion->Clone());
  EXPECT_EQ(result, false);

  // keys are not formatted correctly
  promotion->credentials = std::move(credentials);
  promotion->public_keys = "fdsfsdds";
  result = braveledger_promotion::VerifyPublicKey(promotion->Clone());
  EXPECT_EQ(result, false);

  // keys doesn't match
  promotion->public_keys = "[\"orBZ6dkSFLwBtQgI+5qXFb0dzDSm4uf+Km6AhytgUT8=\"]";
  promotion->credentials->public_key = "dfsdfsdf";
  result = braveledger_promotion::VerifyPublicKey(promotion->Clone());
  EXPECT_EQ(result, false);

  // keys match
  promotion->public_keys = "[\"orBZ6dkSFLwBtQgI+5qXFb0dzDSm4uf+Km6AhytgUT8=\"]";
  promotion->credentials->public_key =
      "orBZ6dkSFLwBtQgI+5qXFb0dzDSm4uf+Km6AhytgUT8=";
  result = braveledger_promotion::VerifyPublicKey(promotion->Clone());
  EXPECT_EQ(result, true);
}

}  // namespace braveledger_promotion
