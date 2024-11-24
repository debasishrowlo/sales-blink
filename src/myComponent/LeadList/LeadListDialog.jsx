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
import SelectList from "./SelectList";

export function LeadListDialog({
  openSelectList, 
  setOpenSelectList, 
  setSelectedLeadList,
  addBlock,
}) {
  return (
    <Dialog className="" open={openSelectList} onOpenChange={setOpenSelectList}>
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
            <DialogTitle className="flex gap-2 text-center items-center ">Edit Leads from List(s)<CircleHelp className="font-normal" strokeWidth={""} /></DialogTitle>
            <DialogDescription className="p-0 m-0">
              Connect multiple list as source for this sequence
            </DialogDescription>
          </DialogHeader>
          <div className=""></div>
          <SelectList setSelectedLeadList={setSelectedLeadList} addBlock={addBlock} />
        </div>
        <div></div>
        <div></div>
        <DialogFooter>

        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}