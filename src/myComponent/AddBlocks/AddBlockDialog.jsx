import { CircleCheck, CircleHelp, Mail, Plus, UserRoundCheck, UserRoundPlus, UsersRound, Zap } from "lucide-react"
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

import { useContext, useState } from "react";


import { EmailListDialog } from "../AddBlocks/EmailListDialog";
import { WaitDialog } from "../Conditions/WaitDialog";
import useFlowStore from "@/lib/store/store";
import { shallow } from "zustand/shallow";

export function AddBlockDialog({ addBlock }) {
    const openAddBlock = useFlowStore((state) => state.openAddBlock,shallow);
    const selectedBlock = useFlowStore((state) => state.selectedBlock,shallow);
    const setOpenAddBlock = useFlowStore((state) => state.setOpenAddBlock);
    const [openWaitDialog, setOpenWaitDialog] = useState(false);
    const [openSelectEmailTempList, setOpenSelectEmailTempList] = useState(false);
    const [showCondition, setShowCondition] = useState(false);
  
    return (
        <>
            <Dialog className="" open={openAddBlock} onOpenChange={setOpenAddBlock}>
                <DialogTrigger asChild>
                    <Plus className='text-sky-400' onClick={() => { setOpenAddBlock(true) }} />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[720px] h-[600px] bg-slate-50 ">
                    <div className="border-b border-gray-200 "></div>
                    <div>
                        <DialogHeader className={""}>
                            <DialogTitle className="flex gap-2 text-center items-center">Add Blocks  <CircleHelp className="font-normal" strokeWidth={""} /></DialogTitle>
                            <DialogDescription className="p-0 m-0">
                                Click on a block to configure and add it in sequence.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="mt-8 mb-3">
                            <h1 className="mb-4">Outreach</h1>
                            <div className="grid grid-cols-2 gap-4 gap-y-6">
                                <div className="border hover:bg-slate-200 shadow-md  p-2 rounded-md flex  items-center gap-4 " onClick={() => {
                                   setOpenAddBlock(false)
                                    setOpenSelectEmailTempList(true)
                                }}>
                                    <div className="text-purple-700 bg-purple-400 p-1 border border-purple-700 rounded-md">  <Mail height={"50px"} width={"50px"} strokeWidth={""} /></div>
                                    <div>
                                        <h1 className=" text-lg">Cold Email</h1>
                                        <p className="font-light text-[14px]">Send an email to a lead</p>
                                    </div>
                                </div>
                                <div className="border hover:bg-slate-200 shadow-md  p-2 rounded-md flex  items-center gap-4">
                                    <div className="text-purple-700 bg-purple-400 p-1 border border-purple-700 rounded-md">  <CircleCheck height={"50px"} width={"50px"} strokeWidth={""} /></div>
                                    <div>
                                        <h1 className=" text-lg">Task</h1>
                                        <p className="font-light text-[14px]">Schedule a manual task</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                       {selectedBlock.length % 2 != 0 && <div className="mt-8 mb-3">
                            <h1 className="mb-4">Conditions</h1>
                            <div className="grid grid-cols-2 gap-4 gap-y-6">
                                <div className="border hover:bg-slate-200 shadow-md  p-2 rounded-md flex  items-center gap-4 " onClick={() => {
                                    // setOpen(false)
                                    setOpenAddBlock(false)
                                    setOpenWaitDialog(true)
                                }}>
                                    <div className="text-sky-700 bg-sky-200 p-1 border border-sky-700 rounded-md">  <Mail height={"50px"} width={"50px"} strokeWidth={""} /></div>
                                    <div>
                                        <h1 className=" text-lg">Wait</h1>
                                        <p className="font-light text-[14px]">Add a delay between blocks</p>
                                    </div>
                                </div>
                                <div className="border hover:bg-slate-200 shadow-md  p-2 rounded-md flex  items-center gap-4">
                                    <div className="text-purple-700 bg-purple-400 p-1 border border-purple-700 rounded-md">  <CircleCheck height={"50px"} width={"50px"} strokeWidth={""} /></div>
                                    <div>
                                        <h1 className=" text-lg">If/Else (Rules)</h1>
                                        <p className="font-light text-[14px]">Route leads through the sequence based on events</p>
                                    </div>
                                </div>
                                <div className="border hover:bg-slate-200 shadow-md  p-2 rounded-md flex  items-center gap-4">
                                    <div className="text-purple-700 bg-purple-400 p-1 border border-purple-700 rounded-md">  <CircleCheck height={"50px"} width={"50px"} strokeWidth={""} /></div>
                                    <div>
                                        <h1 className=" text-lg">A/B Split</h1>
                                        <p className="font-light text-[14px]">Equally split contacts into two separate flows</p>
                                    </div>
                                </div>

                            </div>
                        </div>}
                    </div>
                    <DialogFooter>

                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <WaitDialog open={openWaitDialog} setOpen={setOpenWaitDialog} />
            <EmailListDialog
                openSelectList={openSelectEmailTempList}
                setOpenSelectList={setOpenSelectEmailTempList}
                addBlock={addBlock}
            />
        </>
    )
}
