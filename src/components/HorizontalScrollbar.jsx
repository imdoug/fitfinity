import React from 'react'
import { Box } from '@mui/material'
import BodyPartCard from './BodyPartCard'

const HorizontalScrollbar = ({data, setBodyPart, bodyPart}) => {
  return (
    <div>
      {data.map((item)=>(
            <Box 
                  key={item.id || item}
                  itemId={item.id || item}
                  title={item.id || item}
                  m="0 40px"
                  >
                        <BodyPartCard 
                              item={item} 
                              setBodyPart={setBodyParts}
                              bodyPart={bodyPart}
                        /> {item}
            </Box>
      ))}
    </div>
  )
}

export default HorizontalScrollbar