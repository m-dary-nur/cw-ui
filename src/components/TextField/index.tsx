import React from 'react';
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import cx from 'classnames';

interface Props extends TextInputProps {
  className?: string;
  iconConfig?: IconConfig;
  rightIconConfig?: IconConfig;
}

interface IconConfig {
  name: string;
  color?: string;
  size?: number;
  onPress?: () => void;
}

const TextField: React.FC<Props> = ({
  className,
  style,
  iconConfig,
  rightIconConfig,
  ...props
}) => {
  const cls = cx(
    'flex-1 flex-row justify-between items-center bg-gray-200 border-2 border-transparent focus:border-sky-500 rounded-xl',
    {
      [`${className}`]: !!className,
    },
  );

  return (
    <View className={cls} style={style}>
      {iconConfig && (
        <TouchableOpacity onPress={iconConfig?.onPress} className="pl-4">
          <Icon size={iconConfig?.size ?? 14} {...iconConfig} />
        </TouchableOpacity>
      )}
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        spellCheck={false}
        className="w-full flex-1 px-4 h-10 pt-0 font-default"
        style={{ fontSize: 16 }}
        {...props}
      />
      {rightIconConfig && (
        <TouchableOpacity onPress={rightIconConfig?.onPress} className="pr-4">
          <Icon size={rightIconConfig?.size ?? 14} {...rightIconConfig} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextField;
