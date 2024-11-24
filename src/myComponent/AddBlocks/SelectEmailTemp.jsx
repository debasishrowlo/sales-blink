import React, { useContext, useRef } from 'react';
import MultipleEmailTempSelector from './MultipleEmailTempSelec';
import { emailField, emailTempOptions } from '@/constant';

import { debounce } from '@/lib/utils';
import useFlowStore from '@/lib/store/store';
import { shallow } from "zustand/shallow";







const SelectEmailTempOptions = () => {
   
   
    const selectedBlock = useFlowStore((state) => state.selectedBlock,shallow);
    const setSelectedBlock = useFlowStore((state) => state.setSelectedBlock);
    
   
    const [selectedEmailAs, setSelectedEmailAs] = React.useState([]);
  
       
        
   
    return (
        <div className="w-full px-10 ">
            <select name="email" id="email" className='w-full p-1 border' onChange={
                (e)=>{
                   
                       
                
                  setSelectedBlock({type:"mail",value:e.target.value});
                    
                }
            } >
                <option value=""></option>
                {
                    emailTempOptions.map((item, index) => {
                        return (
                            <option key={index} value={item.label}>{item.label}</option>
                        )
                    })
                }
               
            </select>
          
        </div>
    )
};

export default SelectEmailTempOptions;
