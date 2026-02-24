import React from 'react'
import { cn } from '../utils/utils';

export const Container = ({children, className}:{
    children: React.ReactNode,
    className?: string;
}) => {
  return (
    <div className={cn('max-w-4xl mx-auto', className)}>
      {children}
    </div>
  )
}


