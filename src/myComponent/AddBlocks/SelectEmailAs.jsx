import React, { useContext, useRef } from 'react';
import MultipleEmailTempSelector from './MultipleEmailTempSelec';
import { emailField, emailTempOptions } from '@/constant';

import { debounce } from '@/lib/utils';
import useFlowStore from '@/lib/store/store';
import { shallow } from 'zustand/shallow';







const SelectEmailAs = ({setSelectedEmailAs}) => {
 
    
    const selectedBlock = useFlowStore((state) => state.selectedBlock,shallow);
   
    
  

    return (
        <div className="w-full px-10 ">
            <select name="email" id="email" className='w-full p-1 border' onChange={
                (e)=>{
               
                    setSelectedEmailAs(e.target.value)
                   
                }
            } >
                <option value=""></option>
                {
                    emailTempOptions.map((item, index) => {
                        return (
                            <option key={index} value={item.name}>{item.name}</option>
                        )
                    })
                }
               
            </select>
          
        </div>
    )
};

export default SelectEmailAs;
