import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'secondary' | 'gray' | 'white' | 'blue' | 'pink';
	size?: 'small' | 'medium' | 'large' | 'mediumL';
};
