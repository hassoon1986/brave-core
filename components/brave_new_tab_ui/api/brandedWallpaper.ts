// Copyright (c) 2019 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at http://mozilla.org/MPL/2.0/.

// import wallpaperImageUrl from '../data/dummy-branded-wallpaper/background.jpg'
// import brandingImageUrl from '../data/dummy-branded-wallpaper/logo.png'
// import newTab from '../containers/newTab'

export function getHasBrandedWallpaper () {
  return Promise.resolve(true)
}

export function getBrandedWallpaper (): Promise<undefined | NewTab.BrandedWallpaper> {
  return window.cr.sendWithPromise<undefined | NewTab.BrandedWallpaper>('getBrandedWallpaperData')
}

// const viewsTillShouldShowStorageKey = 'NTP.BrandedWallpaper.ViewsTillShouldShow'
// const maxViewCountUntilBranded = 4


export function registerViewCount (): Promise<void> {
  return window.cr.sendWithPromise<void>('registerNewTabPageView')
}
