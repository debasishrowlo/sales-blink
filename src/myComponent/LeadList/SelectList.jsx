import React from 'react';

import { OPTIONS } from '@/constant';
import MultipleLeadSelector from '@/myComponent/LeadList/multiple-selector';



const SelectList = () => {
  return (
    <div className="w-full px-10 ">
      <MultipleLeadSelector
        defaultOptions={OPTIONS}
        placeholder="Select frameworks you like..."
        emptyIndicator={
          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
            no results found.
          </p>
        }
      />
    </div>
  );
};

export default SelectList;
