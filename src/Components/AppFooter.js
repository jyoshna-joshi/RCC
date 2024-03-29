import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">Rover Car Club of Australia Inc @ 2023</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
