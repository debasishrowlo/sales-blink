
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
  import { useContext, useState } from "react";
  import { Input } from "@/components/ui/input";

import useFlowStore from "@/lib/store/store";
import { shallow } from "zustand/shallow";
  
  
  export function WaitDialog({open,setOpen}) {
 
    const selectedBlock = useFlowStore((state) => state.selectedBlock,shallow);
    const setSelectedBlock = useFlowStore((state) => state.setSelectedBlock);
    const [inputValue, setInputValue] = useState("");
    const [waitType, setWaitType] = useState("");
    

  
    return (
      <>
      <Dialog className="" open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          
        </DialogTrigger>
        <DialogContent className="sm:max-w-[720px] h-[600px] bg-slate-50 ">
        <div className="border-b border-gray-200 "></div>
        <div>
          <DialogHeader className={""}>
            <DialogTitle className="flex gap-2 text-center items-center">Wait</DialogTitle>
            <DialogDescription className="p-0 m-0">
              Add a delay between blocks.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-8 mb-3"> 
            <h1>Wait For</h1>
          <Input type="number" min="0" max="1000"  onChange= {
            (e)=>{
              setInputValue(e.target.value)
            }
          
          } value={inputValue}/>
          </div>
          <div>
            <h1>Wait Type</h1>
            <select className="w-full border border-gray-300 rounded-md p-2"  onChange={(e)=>{
              if(e.target.value === "") return;
              setWaitType(e.target.value)}}>
              <option></option>
              <option>Hours</option>
              <option>Days</option>
              <option>Weeks</option>
            </select>
          </div>
          <div className="flex w-full justify-end p-0 mt-1
          "><div className="bg-blue-600 text-white p-1 rounded-sm" onClick={
            ()=>{
              setSelectedBlock({type:"wait",value:inputValue+waitType});
              setOpen(false);
              setInputValue("");
              setWaitType("");
            }
          }>
            insert
            </div></div>
          </div>
          <div></div>
          <div></div>
          <DialogFooter>
            
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      </>
    )
  }
  