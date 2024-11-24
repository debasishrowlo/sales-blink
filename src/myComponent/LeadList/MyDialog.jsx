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
import { LeadListDialog } from "./LeadListDialog"
import { useState } from "react";

export function LeadSourceDialog({ addBlock }) {
  const [open, setOpen] = useState(false);
  const [openSelectList, setOpenSelectList] = useState(false);
  return (
    <>
      <Dialog className="" open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="flex flex-col w-[100%] h-[100%] hover:bg-white px-2 py-4 font-normal " onClick={() => { setOpen(true) }}><Plus />
            <p>Add Lead Source</p>
            <p>Click to add leads from List or CRM</p>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[720px] h-[600px] bg-slate-50 ">
          <div className="border-b border-gray-200 "></div>
          <div>
            <DialogHeader className={""}>
              <DialogTitle className="flex gap-2 text-center items-center">Add a Source Block  <CircleHelp className="font-normal" strokeWidth={""} /></DialogTitle>
              <DialogDescription className="p-0 m-0">
                Pick a block & configure any new leads that match rules will be added to sequence automatically
              </DialogDescription>
            </DialogHeader>
            <div className="mt-8 mb-3">Sources</div>
            <div className="grid grid-cols-2 gap-4 gap-y-6 ">
              <div className="border hover:bg-slate-200 shadow-md  p-2 rounded-md flex justify-center items-center gap-4" onClick={() => {
                setOpen(false)
                setOpenSelectList(true)
              }}>
                <div className="text-pink-700 bg-pink-400 p-1 border border-pink-700 rounded-md">  <UserRoundPlus height={"50px"} width={"50px"} strokeWidth={""} /></div>
                <div>
                  <h1 className=" text-lg">Leads from List(s)</h1>
                  <p className="font-light text-[14px]">Connect multiple list as source for this sequence</p>
                </div>
              </div>
              <div className="border hover:bg-slate-200 shadow-md  p-2 rounded-md flex justify-center items-center gap-4">
                <div className="text-pink-700 bg-pink-400 p-1 border border-pink-700 rounded-md">  <UserRoundCheck height={"50px"} width={"50px"} strokeWidth={""} /></div>
                <div>
                  <h1 className=" text-lg">Segment By Events</h1>
                  <p className="font-light text-[14px]">Create a segment of leads who have engaged with emails previously</p>
                </div>
              </div>
              <div className="border hover:bg-slate-200 shadow-md p-2 rounded-md flex justify-center items-center gap-4">
                <div className="text-pink-700 bg-pink-400 p-1 border border-pink-700 rounded-md">  <UsersRound height={"50px"} width={"50px"} strokeWidth={""} /></div>
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
                <div className="text-pink-700 bg-pink-400 p-1 border border-pink-700 rounded-md">  <Zap height={"50px"} width={"50px"} strokeWidth={""} /></div>
                <div>
                  <h1 className=" text-lg">Lead from CRM Integration</h1>
                  <p className="font-light text-[14px]">Pulls leads from your CRM integrations</p>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>

          </DialogFooter>
        </DialogContent>
      </Dialog>
      <LeadListDialog
        openSelectList={openSelectList}
        setOpenSelectList={setOpenSelectList}
        addBlock={addBlock}
      />
    </>
  )
}
