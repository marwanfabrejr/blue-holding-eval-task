import React, { useState } from 'react'
import ReactSwitch from 'react-switch'

function ToggleSwitch() {
  const [checked, setChecked] = useState(false)

  const handleChange = (val: number) => {
    setChecked(val)
  }

  return (
    <div className='app' style={{ textAlign: 'center' }}>
      <ReactSwitch
        checked={checked}
        onChange={handleChange}
        onColor='#3B82F6'
      />
    </div>
  )
}

export default ToggleSwitch
