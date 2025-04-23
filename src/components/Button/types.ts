import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'secondary' | 'gray' | 'white';
	size?: 'small' | 'medium' | 'large';
};
