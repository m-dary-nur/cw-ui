import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import cx from 'classnames';

interface Props extends TouchableOpacityProps {
  className?: string;
  full?: boolean;
  position?: 'left' | 'center' | 'right';
}

const Button: React.FC<Props> = ({
  children,
  className,
  full,
  position,
  ...props
}) => {
  const cls = cx('px-10 py-2 rounded-3xl bg-sky-500 self-center', {
    [`${className}`]: !!className,
    'w-full': full,
    'self-start': !full && position === 'left',
    'self-cneter': !full && position === 'center',
    'self-end': !full && position === 'right',
  });

  return (
    <TouchableOpacity className={cls} {...props}>
      <Text className="font-default text-base text-white text-center">{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
