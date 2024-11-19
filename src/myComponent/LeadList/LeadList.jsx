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
import { useState } from "react";


export function LeadList({setOpen}) {
  const [openSelectList, setOpenSelectList] = useState(false);
  return (
    <Dialog className="" open={openSelectList} >
      <DialogTrigger>
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
      </DialogTrigger>
      <DialogContent className="sm:max-w-[720px] h-[600px] bg-slate-50 ">
      <div className="border-b border-gray-200 "></div>
      <div>
        <DialogHeader className={""}>
          <DialogTitle className="flex gap-2 text-center items-center">Select List <CircleHelp className="font-normal" strokeWidth={""} /></DialogTitle>
          <DialogDescription className="p-0 m-0">
           
          </DialogDescription>
        </DialogHeader>
        <div className="mt-8 mb-3">Sources</div>
        {/* <div className="grid grid-cols-2 gap-4 gap-y-6 ">
         
          <div className="border hover:bg-slate-200 shadow-md  p-2 rounded-md flex justify-center items-center gap-4">
          <div className="text-pink-700 bg-pink-400 p-1 border border-pink-700 rounded-md">  <UserRoundCheck height={"50px"} width={"50px"} strokeWidth={""}/></div>
            <div>
            <h1 className=" text-lg">Segment By Events</h1>
            <p className="font-light text-[14px]">Create a segment of leads who have engaged with emails previously</p>
          </div>
          </div>
          <div className="border hover:bg-slate-200 shadow-md p-2 rounded-md flex justify-center items-center gap-4">
          <div className="text-pink-700 bg-pink-400 p-1 border border-pink-700 rounded-md">  <UsersRound height={"50px"} width={"50px"} strokeWidth={""}/></div>
            <div>
            <h1 className=" text-lg">
                Segment Of List
            </h1>
            <p className="font-light text-[14px]">
                Create a segment of leads which match SalesBlink Variables
            </p>
          </div>
          </div>
          <div className="border  shadow-md hover:bg-slate-200 p-2 rounded-md flex justify-center items-center gap-4">
          <div className="text-pink-700 bg-pink-400 p-1 border border-pink-700 rounded-md">  <Zap height={"50px"} width={"50px"} strokeWidth={""}/></div>
            <div>
            <h1 className=" text-lg">Lead from CRM Integration</h1>
            <p className="font-light text-[14px]">Pulls leads from your CRM integrations</p>
            </div>
          </div>
        </div> */}
        </div>
        <DialogFooter>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
