import classNames from 'classnames';
import React, { ButtonHTMLAttributes, useMemo } from 'react';

import TypedMemo from '../../utils/typedMemo';
import css from './Button.module.sass';

function Button({
  children: _,
  className: className_,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  const className = useMemo(
    () =>
      classNames(css.button, className_, "tw-text-right", "tw-border-red-500"),
    [className_]
  );
  return (
    <button className={className} {...props}>
      {className}
    </button>
  );
}

export default TypedMemo(Button);
