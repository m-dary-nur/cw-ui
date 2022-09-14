import React from 'react';
import type { TextProps } from 'react-native';
import cx from 'classnames';

import { Text } from 'react-native';

interface Props extends TextProps {
  className?: string;
  children?: string;
}

const Label: React.FC<Props> = ({ children, className, ...props }) => {
  const cls = cx('font-default text-base text-gray-600', {
    [`${className}`]: !!className,
  });
  return (
    <Text className={cls} {...props}>
      {children}
    </Text>
  );
};

export default Label;
