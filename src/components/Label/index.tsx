import React from 'react';
import { Text as TextRN, TextProps } from 'react-native';
import cx from 'classnames';

interface Props extends TextProps {
  className?: string;
}

const Text: React.FC<Props> = ({ className, ...props }) => {
  const cls = cx('font-default text-base text-gray-600', {
    [`${className}`]: !!className,
  });

  return <TextRN className={cls} {...props} />;
};

export default Text;
