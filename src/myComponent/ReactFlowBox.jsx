import React, { useCallback, useContext, useEffect, useRef } from 'react';
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

import { LeadSourceDialog } from './LeadList/MyDialog';

import { Mail, Plus } from 'lucide-react';
import { AddBlockDialog } from './AddBlocks/AddBlockDialog';
import { nodeStyles } from '@/constant';
import CustomBlockNode from './CustomBlockNode';
import { debounce } from '@/lib/utils';
import useFlowStore from '@/lib/store/store';
import { shallow } from "zustand/shallow";


const initialEdges = [{ id: 'e1-2', target: '3', source: '2', type: "straight" }];

export default function ReactFlowBox() {
    const addBlock = (nodeData) => {
        // update data in zustand
        setSelectedBlock(nodeData)

        const updatedNodes = nodes.map((node) => {
            if (node.id === '3') {
                return {
                    ...node,
                    position: {
                        ...node.position,
                        y: node.position.y + 200, // Increment position
                    },
                };
            }
            return node;
        });

        const newNodeId = `${updatedNodes.length + 1}`; // use UUID

        const newNode = {
            id: newNodeId,
            position: newNodePosition,
            data: {
                label: (
                    <CustomBlockNode
                        component={Mail}
                        type={blockNode.type}
                        data={blockNode.value}
                    />
                ),
            },
            style: nodeStyles.Blocks,
        };

        updatedNodes.push(newNode);

        setNodes(updatedNodes)

        // add new edge in ReactFlowBox

        const updatedEdges = prevEdges.map((edge) => {
            if (edge.target === '3') {
                return { ...edge, source: `${updatedNodes[updatedNodes.length - 1]?.id}` };
            }
            return edge;
        });

        selectedBlock.forEach((_, index) => {
            const newNodeId = `${updatedNodes.length - selectedBlock.length + index}`;
            const latestNodeId = updatedNodes[updatedNodes.length - selectedBlock.length]?.id;

            updatedEdges.push({
                id: `e${prevEdges.length}-${newNodeId}`,
                source: latestNodeId,
                target: newNodeId,
                type: 'straight',
            });
        });

        let newUpdatedEdge =  updatedEdges.map((edge) => {
            console.log("edge ==========",edge)
            if (edge.id === 'e2-4') {
                return { ...edge, source: '2', target: updatedNodes[updatedNodes.length - 1]?.id };
            }
            if (edge.id === 'e3-4') {
                return { ...edge, source: '2',target: updatedNodes[updatedNodes.length - 1]?.id };
            }
            return edge;
        });

        setEdges(newUpdatedEdge)
    }

    const initialNodes = [
        {
            id: '1', position: { x: 80, y: 100 }, data: {
                label: <LeadSourceDialog addBlock={addBlock} />,
            },
            style: {


                padding: 1,
                width: '300px',
                // Ensure no padding is applied
                margin: 0,
                textAlign: 'center',


            },

        },
        {
            id: '2', position: { x: 125, y: 250 }, data: {
                label: <div className='flex flex-col justify-center items-center' >
                    <p>Sequence Start Point</p>

                </div>,
            },
            style: {
                width: '200px',
                textAlign: 'center',
                fontSize: '12px',

            },
        },
        {
            id: '3', position: { x: 200, y: 350 }, data: {
                label: <AddBlockDialog addBlock={addBlock} />,
            },
            style: {
                width: '50px',
                textAlign: 'center',
                fontSize: '12px',
                border: '3px solid skyblue',
            },
        },
    ];

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const selectedBlock = useFlowStore((state) => state.selectedBlock, shallow);
    const setSelectedBlock = useFlowStore((state) => state.setSelectedBlock);
    // const [latestNode, setLatestNode] = React.useState({});

    const selected = useFlowStore((state) => state.selected, shallow);
    const selectedEmailTemp = useFlowStore((state) => state.selectedEmailTemp, shallow);
    const setSelectedEmailTemp = useFlowStore((state) => state.setSelectedEmailTemp);

    // delete block
        // remove block from zustand store
        // remove node in ReactFlowBox
        // delete all edges connecting from deleted node to other nodes

    // useEffect(() => {
    //     if (selected.length === 0 || selected.length > 1) {
    //         return;
    //     }
    //     let xD = nodes[0].position.x;
    //     let yD = nodes[0].position.y;
       
    //     const newNode = {
    //         id: 'ALS-1',
    //         position: { x: xD + 45, y: yD }, // Position new box to the right
    //         data: {
    //             label: (
    //                 <CustomBlockNode component={Mail} type="lead" data={selected[0].label} />
    //             ),
    //         },
    //         style: nodeStyles.default,
    //     };
    //     setNodes((prevNodes) => {
    //         // prevNodes[0].position.x = prevNodes[0].position.x +150;
    //         let updatedNodes = prevNodes.map((prevNd) => {
    //             // return prevNd === '1' ? {...prevNd,position:{...prevNd.position,x:prevNd.position.x + 150}} : prevNd
    //             if (prevNd.id === '1') {
                  
    //                 return { ...prevNd, position: { x: prevNd.position.x + 250, y: prevNd.position.y } }
    //             }
    //             return prevNd
    //         })
    //         return [...updatedNodes, newNode];
    //     });
    //     setEdges((prevEdges) => [...prevEdges, { id: `ela-1`, source: newNode.id, target: nodes[1].id, type: "straight" }])

    // }, [selected])

    console.log(selected);
    //     const updateNodesAndEdges =useCallback((selectedBlock, nodes, setNodes, setEdges) =>{
    //         selectedBlock.forEach((node) => {
    //             const newNodeId = `${nodes.length + 1}`;
    //             const latestNode = nodes[nodes.length - 1];
    //             const latestNodelength = nodes.length;
    //             console.log("new Node id", newNodeId);
    //             // Update nodes
    //             setNodes((prevNodes) => {
    //                 const updatedNodes = prevNodes.map((prevNode) => {
    //                     if (prevNode.id === '3') {
    //                         return {
    //                             ...prevNode,
    //                             position: {
    //                                 x: prevNode.position.x,
    //                                 y: latestNode.id === "ALS-1"
    //                                     ? latestNode.position.y + 400
    //                                     : latestNode.position.y + 300,
    //                             },
    //                         };
    //                     }
    //                     return prevNode;
    //                 });

    //                 const newNodePosition = {
    //                     x: latestNode.id === "ALS-1" ? latestNode.position.x : latestNode.position.x,
    //                     y: latestNode.id === "ALS-1"
    //                         ? nodes[1].position.y + 80
    //                         : latestNode.position.y + 150,
    //                 };

    //                 const newNode = {
    //                     id: newNodeId,
    //                     position: { x: newNodePosition.x, y: newNodePosition.y },
    //                     data: {
    //                         label: (
    //                             <CustomBlockNode
    //                                 component={Mail}
    //                                 type={node.type}
    //                                 data={node.value}
    //                             />
    //                         ),
    //                     },
    //                     style: nodeStyles.Blocks,
    //                 };

    //                 return [...updatedNodes, newNode];
    //             });

    //             // Update edges
    //             setEdges((prevEdges) => {
    //                 const newEdges = [
    //                     ...prevEdges,
    //                     {
    //                         id: `e${latestNodelength}-${newNodeId}`,
    //                         source: nodes[nodes.length - 1]?.id,
    //                         target: newNodeId,
    //                         type: 'straight',
    //                     },
    //                 ];

    //                 return newEdges.map((edge) => {
    //                     if (edge.target === '3') {
    //                         return { ...edge, source: newNodeId };
    //                     }
    //                     if (edge.id === 'e4-5') {
    //                         return { ...edge, source: '2' };
    //                     }
    //                     return edge;
    //                 });
    //             });

    //             console.log('Node should be created');
    //         });
    //     },[selectedBlock]
    // )

    const updateNodesAndEdges = useCallback(() => {
        if (selectedBlock.length === 0) return;
    
        // Calculate updated nodes
        setNodes((prevNodes) => {
            const updatedNodes = [...prevNodes.map((node) => {
                if (node.id === '3') {
                    return {
                        ...node,
                        position: {
                            ...node.position,
                            y: node.position.y + 200, // Increment position
                        },
                    };
                }
                return node;
            })];
    
            // Add new nodes based on selectedBlock
            selectedBlock.forEach((blockNode) => {
                const newNodeId = `${updatedNodes.length + 1}`;
                const latestNode = updatedNodes[updatedNodes.length - 1];
    
                const newNodePosition = {
                    x: latestNode.position.x,
                    y: latestNode.id === "ALS-1"
                        ? updatedNodes[1]?.position.y + 80
                        : latestNode.position.y + 150,
                };
    
                const newNode = {
                    id: newNodeId,
                    position: newNodePosition,
                    data: {
                        label: (
                            <CustomBlockNode
                                component={Mail}
                                type={blockNode.type}
                                data={blockNode.value}
                            />
                        ),
                    },
                    style: nodeStyles.Blocks,
                };
    
                updatedNodes.push(newNode);
            });
    
            // Immediately calculate edges based on the new node list
            setEdges((prevEdges) => {
                const updatedEdges = prevEdges.map((edge) => {
                    if (edge.target === '3') {
                        return { ...edge, source: `${updatedNodes[updatedNodes.length - 1]?.id}` };
                    }
                   return edge;
                });
    
                selectedBlock.forEach((_, index) => {
                    const newNodeId = `${updatedNodes.length - selectedBlock.length + index}`;
                    const latestNodeId = updatedNodes[updatedNodes.length - selectedBlock.length]?.id;
    
                    updatedEdges.push({
                        id: `e${prevEdges.length}-${newNodeId}`,
                        source: latestNodeId,
                        target: newNodeId,
                        type: 'straight',
                    });
                });

                let newUpdatedEdge =  updatedEdges.map((edge) => {
                    console.log("edge ==========",edge)
                    if (edge.id === 'e2-4') {
                        return { ...edge, source: '2', target: updatedNodes[updatedNodes.length - 1]?.id };
                    }
                    if (edge.id === 'e3-4') {
                        return { ...edge, source: '2',target: updatedNodes[updatedNodes.length - 1]?.id };
                    }
                    return edge;
                });
    
                return newUpdatedEdge;
            });
    
            return updatedNodes; // Ensure nodes are returned correctly
        });
    }, [selectedBlock]);
    
    // useEffect(() => {
    //     if (selected.length === 0 || selectedBlock.length === 0) return;
    //     updateNodesAndEdges(selectedBlock, nodes, setNodes, setEdges);
    // }, [selectedBlock]);

    /**
     * Hello
     */
    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );
    console.log("edges", edges)
    console.log("nodes", nodes)
    //     console.log("selected ==",selected)
    //     console.log("selectedEmailTemp",selectedEmailTemp)
  
    return (
        <div style={{ width: '95vw', height: '70vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                // onNodeClick={handleNodeClick}
            >
                <Controls />
                <MiniMap />
                <Background variant="dots" gap={12} size={1} />
            </ReactFlow>
        </div>
    );
}