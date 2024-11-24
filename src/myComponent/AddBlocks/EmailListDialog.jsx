import { CircleHelp, Plus, UserRoundCheck, UserRoundPlus, UsersRound, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useContext, useEffect, useState } from "react";




import { emailField } from "@/constant";
import SelectEmailAs from "./SelectEmailAs";
import SelectEmailTempOptions from "./SelectEmailTemp";
import { shallow } from "zustand/shallow";
import useFlowStore from "@/lib/store/store";




export function EmailListDialog({
  openSelectList, 
  setOpenSelectList,
  addBlock,
}) {
  const selectedEmailTemp = useFlowStore((state) => state.selectedEmailTemp,shallow);
  const currentSelectingEmailAs = useFlowStore((state) => state.currentSelectingEmailAs,shallow);
  const selected = useFlowStore((state) => state.selected,shallow);
  useEffect(() => {

   
   let a = selectedEmailTemp.find((item) =>{ 

   return item.value === currentSelectingEmailAs.value
    
   })
  
  },[currentSelectingEmailAs,selected]);

  const [selectedEmailAs, setSelectedEmailAs] = useState([]);
  const [selectedMailTemp, setSelectedMailTemp] = useState([]);
  
  return (
    <Dialog className="" open={openSelectList} onOpenChange={setOpenSelectList} >
      {/* <DialogTrigger>
      <div className="border hover:bg-slate-200 shadow-md  p-2 rounded-md flex justify-center items-center gap-4" onClick={
          ()=>{
            setOpen(false)
              setOpenSelectList(true)
          }    
      }>
            <div className="text-pink-700 bg-pink-400 p-1 border border-pink-700 rounded-md">  <UserRoundPlus height={"50px"} width={"50px"} strokeWidth={""}/></div>
            <div>
            <h1 className=" text-lg">Leads from List(s)</h1>
           <p className="font-light text-[14px]">Connect multiple list as source for this sequence</p>
           </div>
          </div>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-[720px] h-[600px] bg-slate-100 ">
        <div className="border-b border-gray-200 "></div>
        <div>
          <DialogHeader className={""}>
            <DialogTitle className="flex gap-2 text-center items-center ">Cold Email</DialogTitle>
            <DialogDescription className="p-0 m-0">
              Send an email to a lead
            </DialogDescription>
          </DialogHeader>
          <div className="mt-10">
          <h1 className="font-bold">Email Template</h1>
          <SelectEmailTempOptions addBlock={addBlock} />
          </div>
          <div>
          <h1 className="font-bold">Send Email As</h1>
          <SelectEmailAs setSelectedEmailAs={setSelectedEmailAs} />
          <>{
            // find a way to get the selected email template and display it here
            selectedEmailTemp.some(item => item.value === currentSelectingEmailAs.value) &&
            <div>
              <p>
              since you are sending the email as "{selectedEmailTemp.find(item => item.value === currentSelectingEmailAs.value).name}",
              </p>
              <p>
                Subject Line of this template will be ignored & follow-up email will be sent in same thread as a reply to the last email
              </p>
            </div>
            
            }</>

          </div>
          
                     <div className='w-full flex justify-end  mt-1'>
                        <button className='bg-blue-600 p-1 rounded-md mr-10' onClick={
                            ()=>{
                                
                            }
                        }>
                            insert
                        </button>
                    </div>
                
          </div>
          
          <div></div>
       
      
        <DialogFooter>

        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
