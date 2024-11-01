import React from 'react';
import { View } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

const Ads = () => {
  return (
    <View>
      <BannerAd
        unitId={__DEV__ ? TestIds.BANNER : 'YOUR_AD_UNIT_ID'}
        size={BannerAdSize.BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
};

export default Ads;
