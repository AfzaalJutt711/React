import React, { useState } from 'react';
import {useTheme} from '../context/Theme'

function ToggleBtn() {

    const {lightTheme, darkTheme} = useTheme()
    
    function changeTheme(e){
        if(e.target.checked){
            darkTheme()
        }else{
            lightTheme()
        }
    }

  return (
    <div className="dark-mode-toggle">
      <input
        type="checkbox"
        id="darkModeToggle"
        onChange={changeTheme}
      />
    </div>
  );
}

export default ToggleBtn;