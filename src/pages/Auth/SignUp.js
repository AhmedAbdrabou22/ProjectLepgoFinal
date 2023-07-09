import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import lepgoLogo from "../../images/photo_2023-03-10_16-10-07.jpg"
import lock from "../../images/lock.svg"
import gmail from "../../images/gmail.svg"
import user from "../../images/user.svg"
import phone from "../../images/phone.svg"
import logo from "../../images/logoIt.png"
// import Login from './Login';
function SignUp() {
    const [show, setShow] = useState(false);
    const [showRegise, setShowRegister] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShowRegister(false)
        setShow(true)
    };

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

            <Modal show={show} onHide={handleClose} style={{ position: "absluote", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "400px" }} dir="ltr" className='text-center'>
                <Modal.Header closeButton>
                    <Modal.Title>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className='mx-auto'>
                            <img src={logo} alt="Lepgo Logo" style={{ width: "150px", height: "150px", borderRadius: "50%" }} />
                            <p style={{ color: "#424750" }}>مرحبا بك</p>
                            <p style={{ color: "#424750" }}>قم بالتسجيل الدخول للمتابعة</p>
                            <p style={{ color: "#424750" }}>ليس لديك حساب؟<span onClick={handleShowRegister} style={{ color: "#CB955B", cursor: "pointer" }}>اشترك دلوقتي</span></p>
                        </div>
                        <from className='w-100 d-block py-2 text-center'>
                            <div className='formInput w-75 mx-auto'>
                                <img src={gmail} className='imgInput' alt="img" />
                                <input type='email' className='w-100 py-2 form-control' placeholder='البريد الالكتروني' style={{ textAlign: "right", margin: "auto" }} />
                            </div>
                            <div className='formInput w-75 mx-auto'>
                                <img src={lock} className='imgInput lock' alt="img" />
                                <input type='password' className='w-100 py-2 mt-4 form-control' placeholder='كلمة السر' style={{ textAlign: "right", margin: "auto" }} />
                                <span style={{ textAlign: "right" }}><a href="*" style={{ textDecoration: "none", color: "#666666" }}>هل نسيت كلمة السر</a></span>
                            </div>
                            <button className='mt-3 w-75 button' style={{ background: "#CB955B", border: "1px solid #CB955B", color: "#08324B" }}>تسجيل الدخول</button>
                        </from>
                    </div>
                </Modal.Body>
            </Modal>


            <Modal show={showRegise} onHide={handleCloseRegister} style={{ position: "absluote", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "400px" }} dir="ltr" className='text-center'>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className='mx-auto'>
                            <img src={logo} alt="Lepgo Logo" style={{ width: "150px", borderRadius: "50%" }} />
                            <p style={{ color: "#08324B" }}>يرجي تعبئة المعلومات التالية</p>
                            <p style={{ color: "#424750" }}> لديك حساب؟<span onClick={handleShow} style={{ color: "#CB955B", cursor: "pointer" }}>تسجيل الدخول</span></p>
                        </div>
                        <from className='w-100 d-block py-2 text-center'>
                            <div className='formInput w-75 mx-auto'>
                                <img src={user} className='imgInput' alt="img" />
                                <input type='text' className='w-100 py-2 form-control mb-4' placeholder='الاسم' style={{ textAlign: "right", margin: "auto" }} />
                            </div>

                            <div className='formInput w-75 mx-auto'>
                                <img src={phone} className='imgInput' alt="img" />
                                <input type='tel' className='w-100 py-2 form-control mb-4' placeholder='رقم الهاتف' style={{ textAlign: "right", margin: "auto" }} />
                            </div>

                            <div className='formInput w-75 mx-auto'>
                                <img src={gmail} className='imgInput' alt="img" />
                                <input type='email' className='w-100 py-2 form-control' placeholder='البريد الالكتروني' style={{ textAlign: "right", margin: "auto" }} />
                            </div>
                            <div className='formInput w-75 mx-auto'>
                                <img src={lock} className='imgInput lock' alt="img" />
                                <input type='password' className='w-100 py-2 mt-4 form-control' placeholder='كلمة السر' style={{ textAlign: "right", margin: "auto" }} />
                                <span style={{ textAlign: "right" }}><a href="*" style={{ textDecoration: "none", color: "#666666" }}>هل نسيت كلمة السر</a></span>
                            </div>
                            <button className='mt-3 w-75 button' style={{ background: "#CB955B", border: "1px solid #CB955B", color: "#08324B" }}>تسجيل الدخول</button>
                        </from>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default SignUp;