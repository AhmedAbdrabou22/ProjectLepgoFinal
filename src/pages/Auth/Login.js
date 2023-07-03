import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Login = () => {
    const [showRegise, setShowRegister] = useState(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => {
        setShowRegister(true)
    };
    return (
        <div>
            <Button style={{ background: "transparent", color: "black", border: "none", fontSize: "19px", fontWeight: "700" }} onClick={handleShowRegister}>
                حسابي
            </Button>
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
    )
}

export default Login
