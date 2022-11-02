import * as React from 'react';
import ProgressLoader from 'rn-progress-loader';
import {connect} from 'react-redux';
import {Colors} from '../../Theme';
import { SekeltonLoadingView } from './SkeletonPlaceHolder';

type AppLoaderProps = {
  hudColor?: string;
  color?: string;
  isHUD?: boolean;
  isModal?: boolean;
  isLoading?: boolean;
};
const AppScreenLoader = (props: AppLoaderProps) => {
  const {
    isLoading = false,
    hudColor = Colors.black,
    color = Colors.white,
    isHUD = true,
    isModal = true,
  } = props;

  return <>{isLoading ? <SekeltonLoadingView /> : <></>}</>;
};

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.NewsIdsSlice.loading,
  };
};

export default connect(mapStateToProps)(AppScreenLoader);
