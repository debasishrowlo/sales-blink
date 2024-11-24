import { cn } from '@/lib/utils';
import React from 'react';
import PropTypes from "prop-types"

const CustomBlockNode = ({ component:Component,data,type }) => {
    const className = cn('border rounded-md', {
        
        'text-pink-700 bg-pink-400 border-pink-700': type === 'lead',
        'text-purple-700 bg-purple-200 border-purple-700': type === 'mail',
        'text-sky-700 bg-sky-200 border-sky-700': type === 'wait',
      });
      const dataClassName = cn('font-light text-[14px]',{
        'text-pink-700': type === 'mail',
        'text-sky-700': type === 'wait',
      });
      const title = type === 'lead' ? 'Leads From' : type === 'mail' ? 'Email' : type === 'wait' ? 'Wait' : '';
      const desc = type === 'mail' ? 'Tempelate:' : type === 'wait' ? 'Wait:' : '';
  return (
    <div className="border hover:bg-slate-200 shadow-md  p-2 rounded-md flex justify-center items-center gap-4" onClick={() => {
        
      }}>
        <div className={className}> <Component height={"50px"} width={"50px"} strokeWidth={""}/></div>
        <div>
          <h1 className=" text-base">{title}</h1>
          <p className={dataClassName}>{desc} {data}</p>
        </div>
      </div>
  );
};

export default CustomBlockNode;
