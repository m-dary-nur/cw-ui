import React from 'react';
import type { TextProps } from 'react-native';
import { Text } from 'react-native';

interface Props extends TextProps {
  className?: string;
  children?: string;
}

const Label: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <Text
      className={`font-default text-base text-red-500 ${className}`}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Label;
