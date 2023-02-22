import { useState } from "react";

export default function useProductModal() {
  const [isOpen, setisOpen] = useState(false);
  const [removeIsOpen, setRemoveIsOpen] = useState(false);
  const [deleteIsOpen, setdeleteIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  const toggleDelete =()=>{
    setdeleteIsOpen(!deleteIsOpen)
  }
  
  const toggleRemove =()=>{
    setRemoveIsOpen(!removeIsOpen)
  }

    
  const toggleEdit =()=>{
    setEditIsOpen(!editIsOpen)
  }
  
  return {
    isOpen,
    deleteIsOpen,
    toggle,
    toggleDelete,
    removeIsOpen,
    toggleRemove,
    editIsOpen,
    toggleEdit
  };
}