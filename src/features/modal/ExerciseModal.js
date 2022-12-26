import { useState } from "react";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";

const ExerciseModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
        <div className="d-grid m-5">
            <Button 
            onClick={() => setModalOpen(true)}
            type="submit" 
            color="primary"
            size="lg"
            >
                Submit
            </Button>
        </div>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Exercise:
                </ModalHeader>
                <ModalBody></ModalBody>
            </Modal>
        </>
    );
};

export default ExerciseModal;
