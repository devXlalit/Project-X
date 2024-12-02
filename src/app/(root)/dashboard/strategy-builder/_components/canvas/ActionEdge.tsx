import React from 'react';
import { getBezierPath, EdgeProps } from '@xyflow/react';
import { Trash2, Unplug } from 'lucide-react';
import { useNodeStore } from '@/lib/store/nodeStore';

interface ActionEdgeProps extends EdgeProps {
  sourceHandle?: string;
  targetHandle?: string;
}

const ActionEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {}
}: ActionEdgeProps) => {
  const { edges, setEdges } = useNodeStore();
  
  const [edgePath, centerX, centerY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetPosition,
    targetX,
    targetY,
  });

  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation();
    setEdges(edges.filter(edge => edge.id !== id));
  };

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path stroke-emerald-400 dark:stroke-emerald-500"
        strokeWidth={2}
        d={edgePath}
      />
      <foreignObject
        width={24}
        height={24}
        x={centerX - 12}
        y={centerY - 12}
        className="overflow-visible"
      >
        <button
          onClick={handleDelete}
          className="flex items-center justify-center w-6 h-6 rounded-full bg-white hover:bg-red-50 dark:bg-gray-800 dark:hover:bg-red-950 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 shadow-md transition-colors duration-200 border border-transparent hover:border-red-200 dark:hover:border-red-800"
        >
          <Unplug className="w-3.5 h-3.5" />
        </button>
      </foreignObject>
    </>
  );
};

export default ActionEdge;