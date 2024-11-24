import { create } from 'zustand';

const useFlowStore = create((set) => ({
  selected: [],
  selectedBlock: [], // Initialize as an empty array
  selectedEmailTemp: [],
  setSelected: (selected) =>
    set((state) => ({ ...state, selected })), // Replace the selected array
  setSelectedBlock: (newBlock) =>
    set((state) => ({
      ...state,
      selectedBlock: [
        ...state.selectedBlock, 
        { type: newBlock.type, value: newBlock.value }
      ],
    })), // Add newBlock to the selectedBlock array
  setSelectedEmailTemp: (selectedEmailTemp) =>
    set((state) => ({ ...state, selectedEmailTemp })), // Replace the selectedEmailTemp array
  openAddBlock: false,
  setOpenAddBlock: (openAddBlock) => set({ openAddBlock }), // Update openAddBlock
}));

export default useFlowStore;
