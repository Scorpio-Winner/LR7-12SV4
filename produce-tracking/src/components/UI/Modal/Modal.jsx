import React from 'react';
import { Dialog, DialogContent } from '@mui/material';

const Modal = ({ children, visible, setVisible }) => {
  const handleClose = () => {
    setVisible(false);
  };

  return (
    <Dialog open={visible} onClose={handleClose}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
