import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Login from './Login';
function SignUp() {
    const [show, setShow] = useState(false);
    const [showRegise, setShowRegister] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => {
        setShowRegister(true)
        setShow(false)
    };

    return (
        <div>
            <Button style={{ background: "transparent", color: "black", border: "none", fontSize: "19px", fontWeight: "700" }} onClick={handleShow}>
                حسابي
            </Button>

            <Modal show={show} onHide={handleClose} style={{ position: "absluote", top: "30%", left: "10%", transform: "translate(-10%,-10%)" }} dir="ltr">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    <Button style={{ background: "transparent", color: "black", border: "none", fontSize: "19px", fontWeight: "700" }} onClick={handleShowRegister}>
                        سجل
                    </Button>
                    {/* <Login onClick={handleClose}/> */}
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                    <Button style={{ background: "transparent", color: "black", border: "none", fontSize: "19px", fontWeight: "700" }} onClick={handleShowRegister}>
                        سجل
                    </Button>
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal show={showRegise} onHide={handleCloseRegister} style={{ position: "absluote", top: "30%", left: "10%", transform: "translate(-10%,-10%)" }} dir="ltr">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseRegister}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseRegister}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default SignUp;