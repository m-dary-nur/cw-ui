import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'carrywise-ui' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type CarrywiseUiProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'CarrywiseUiView';

export { default as Button } from './components/Button';
export { default as Checkbox } from './components/Checkbox';
export { default as Icon } from './components/Icon';
export { default as Label } from './components/Label';
export { default as TextField } from './components/TextField';

export const CarrywiseUiView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<CarrywiseUiProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
