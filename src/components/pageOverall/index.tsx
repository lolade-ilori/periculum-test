import React from 'react'
import { OverallWrap } from './pageOverall.styles'

const PageOverall = ({children}:any) => {
  return (
    <OverallWrap>
        {children}
    </OverallWrap>
  )
}

export default PageOverall