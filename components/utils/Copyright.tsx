import React from 'react';
import { Typography } from '@mui/material';
import Link from 'next/link';


type CopyProps = {
    site: string,
    sx?: object,
};

export default function Copyright(props: CopyProps) {
  return (
    <Typography>
			{'Copyright ©️ - '}
			<Link color='inherit' href={props.site}>
					{props.site} 
			</Link> {' - '}
			{ new Date().getFullYear() }
			{ '.' }
    </Typography>
	)
}
