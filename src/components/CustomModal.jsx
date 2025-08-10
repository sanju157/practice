import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function CustomModal({
    size="md",
    open=false,
    onClose=()=>{},
    title="",
    body="",
    footer=true,
    primaryAction={
        active: false,
        content: 'Save',
        onAction: () => {},
    },
    secondaryAction={
        active: false,
        content: 'Close',
        variant: 'primary',
        onAction: () => {},
    }
}) {
  return (
    <Modal show={open} onHide={onClose} size={size}>
        {
            title &&
            <Modal.Header closeButton>
                <Modal.Title>{ title }</Modal.Title>
            </Modal.Header>
        }
        <Modal.Body>
            { body }
        </Modal.Body>
        {
            footer &&
            <Modal.Footer>
                { 
                    secondaryAction.active && 
                    <Button 
                        variant="secondary" 
                        onClick={secondaryAction.onAction}
                    >
                        { secondaryAction.content || 'Close'}
                    </Button>
                }
                {
                    primaryAction.active && 
                    <Button 
                        variant={primaryAction.variant}
                        onClick={primaryAction.onAction}
                    >
                        { primaryAction.content || "Save" }
                    </Button>
                }
            </Modal.Footer>
        }
    </Modal>
  )
}
