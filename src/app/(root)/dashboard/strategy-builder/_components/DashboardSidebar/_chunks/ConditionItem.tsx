import { TooltipProvider, Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import { Edit2, X } from 'lucide-react';

interface ConditionItemProps {
  nodeId: string;
  name: string;
  onEdit: (nodeId: string) => void;
  onRemove: (nodeId: string) => void;
}

export const ConditionItem: React.FC<ConditionItemProps> = ({ nodeId, name, onEdit, onRemove }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex items-center justify-between p-2 bg-gray-50 relative dark:bg-gray-800 rounded-md">
          <div className="flex items-center gap-2">
            <span className="text-sm">{name}</span>
          </div>
          <div className="absolute right-1 z-10">
          <div className="flex items-center space-x-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit(nodeId);
              }}
              className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <Edit2 className="w-4 h-4 text-blue-500" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemove(nodeId);
              }}
              className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-blue-500" />
            </button>
          </div>
          </div>
        </div>
      </TooltipTrigger>
    </Tooltip>
  </TooltipProvider>
);

