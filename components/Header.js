import React from 'react'

function Header({headerText,headerText2,headerText3}) {
  return (
    <div>
        <div className='head text-headTxt1'>
           {headerText}
            <br/>
            {headerText2} <span className='text-headTxt2'>{headerText3}</span>
        </div>
    </div>
  )
}

export default Header