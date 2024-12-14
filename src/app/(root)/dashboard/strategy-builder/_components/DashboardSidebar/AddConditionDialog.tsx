"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useNodeStore } from "@/lib/store/nodeStore"
import { handleAddNode, NodeTypes } from "../../_utils/nodeTypes"

type AddConditionDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ConditionDialog({ open, onOpenChange }: AddConditionDialogProps) {

  const { nodes, edges, setEdges, setNodes } = useNodeStore();
  const handleAction = (name:string) => {
    //@ts-ignore
    const { newEdges, newNode } = handleAddNode(nodes, edges, {
      type: NodeTypes.CONDITION,
      data:{
        label: name
      }
    });
    setNodes([...nodes, newNode]);
    setEdges(newEdges);
  };


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Add Condition</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-[2fr,3fr] gap-4 p-4">
          <div className="space-y-4">
            <Button
              variant="outline"
              size="lg"
              className="w-full h-24 border-2 border-dashed flex flex-col items-center justify-center hover:border-primary"
              onClick={() => {
                handleAction('Entry Condition')
                onOpenChange(false)
              }}
            >
              <span className="text-sm">Entry Condition</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full h-24 border-2 border-dashed flex flex-col items-center justify-center hover:border-primary"
              onClick={() => {
                handleAction('Exit Condition')
                onOpenChange(false)
              }}
            >
              <span className="text-sm">Exit Condition</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full h-24 border-2 border-dashed flex flex-col items-center justify-center"
              disabled
            >
              <span className="text-sm">Adjustments</span>
              <span className="text-sm text-muted-foreground">Coming Soon</span>
            </Button>
          </div>
          <Button
            variant="outline"
            size="lg"
            className="h-full flex flex-col items-center justify-center"
            disabled
          >
            <span className="text-lg">Select From Templates</span>
            <span className="text-sm text-muted-foreground mt-2">Coming Soon</span>
          </Button>
        </div>
        <div className="flex justify-end">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            DONE
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}