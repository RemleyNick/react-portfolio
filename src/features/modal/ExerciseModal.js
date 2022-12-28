import { useState } from "react";
import { useSelector } from "react-redux";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import { selectCount } from "../counter/counterSlice";
import { EXERCISES } from "../../app/EXERCISES";

const ExerciseModal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const count = useSelector(selectCount);
    const exercise = EXERCISES.find((e) => e.rating === count);

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
                    <h1>{exercise.name}</h1>
                </ModalHeader>
                <ModalBody>
                    <img src={exercise.image} alt={exercise.name} className='img-fluid mx-auto d-block' />
                    <p className="mt-3">{exercise.description}</p>
                </ModalBody>
            </Modal>
        </>
    );
};

export default ExerciseModal;
