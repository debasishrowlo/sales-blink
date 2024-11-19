import React, { useCallback } from 'react';
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    addEdge,
    Controls,
    MiniMap,
    Background,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { DialogDemo } from './MyDialog';

const initialNodes = [
    {
        id: '1', position: { x: 80, y: 100 }, data: {
            label:
               <DialogDemo/>
            ,
        },
        style:{
            
          
            borderRadius: '10px',
           padding:1,
            width: '300px',
            // Ensure no padding is applied
            margin: 0,
            textAlign: 'center',
            
         
        },
       
    },
    {
      id: '2', position: { x: 80, y: 250 }, data: {
          label: <div className='flex flex-col justify-center items-center' >
              <p>+</p>
              <p >Add Lead Source</p>
              <p>Click to add leads from List or CRM</p>
          </div>,
      },
      style:{
          
        
          borderRadius: '10px',
          padding: '10px',
          width: '200px',
          height: '100px',
          textAlign: 'center',
          fontSize: '12px',
       
      },
     
  },
];
const initialEdges = [{ id: 'e1-2', target: '2' }];

export default function ReactFlowBox() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );
    const handleNodeClick = useCallback(
      (event, node) => {
        if (node.id === '1') {

          const newNodeId = `${nodes.length + 1}`;
         
          const newNode = {
            id: newNodeId,
            position: { x: node.position.x , y: node.position.y  }, // Position new box to the right
            data: {
              label: (
                <div style={{ textAlign: 'center', padding: '10px' }}>
                  <p>New Box</p>
                  <p style={{ fontSize: '12px', color: '#888' }}>Click me too!</p>
                </div>
              ),
            },
            style: {
              width: 150,
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '10px',
            },
          };
  
          // Add the new node to the nodes state
          setNodes((prevNodes) => [...prevNodes, newNode]);
         
          // // Optionally, connect the new node to the clicked node
          setEdges((prevEdges) => [
            ...prevEdges,
            { id: `e${node.id}-${newNodeId}`, source: '2', target: newNodeId,type:"straight" },
          ]);
        }
       
      },
      [nodes, setNodes, setEdges],
    );
    return (
        <div style={{ width: '95vw', height: '70vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeClick={handleNodeClick}
            >
                <Controls />
                <MiniMap />
                <Background variant="dots" gap={12} size={1} />
            </ReactFlow>
        </div>


    );
}