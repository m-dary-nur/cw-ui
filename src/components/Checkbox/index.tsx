import React from 'react';
import { View } from 'react-native';
import cx from 'classnames';
import Icon from 'react-native-vector-icons/Feather';

interface Props {
  checked?: boolean;
  iconColor?: string;
}

const Checkbox: React.FC<Props> = ({ checked, iconColor = '#000' }) => {
  const cls = cx(
    'flex justify-center items-center w-5 h-5 rounded-full border border-sky-500',
    {
      'bg-sky-500': checked,
    }
  );

  return (
    <View className={cls}>
      {checked && <Icon name="check" size={14} color={iconColor} />}
    </View>
  );
};

export default Checkbox;
