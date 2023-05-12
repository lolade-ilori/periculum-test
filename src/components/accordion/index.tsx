import React from 'react'
import { AccordionCard, AccordionContent } from './accordion.styles'

import plus from '../../assets/images/svg/plus.svg'
import minus from '../../assets/images/svg/minuss.svg'

const Accordion = ({list, onToggle, active}:any) => {
  return (
    <AccordionCard active={active ? true : false}>
        <div className="accordion-header" onClick={onToggle}>
            <p>{list.header}</p>

            {
                active ?
                <img src={minus} /> :
                <img src={plus} />
            }
            
        </div>

        <AccordionContent active={active ? true : false}>
            <div className="content-text">
                {list.content}
            </div>
        </AccordionContent>
    </AccordionCard>
  )
}

export default Accordion