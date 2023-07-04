import React from 'react'
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CategoryHeader from './CategoryHeader';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { FormControl } from 'react-bootstrap'
import lepgoImage from "../../images/LEPGO.svg"
import IconProduct from "../../images/add_to_photos.svg"
import IconProfile from "../../images/674aaa8a5939fb3fb007e77121fb1581.svg"
import IconChat from "../../images/chat.svg"
import IconShopping from "../../images/bdcb0c3f6d67999723518ef3c2ad5494.svg"
import IconFavourite from "../../images/6f0a18fad030e38fc7194c6a4c334793.svg"
import notifyLepgo from "../../images/notification-new.svg"
import SignUp from '../../pages/Auth/SignUp';
const NavBar = () => {

    return (
        <div>
            <Navbar className="navbar-top bgNavBar" style={{ padding: "20px" , borderBottom:"1px solid #0000001A" , background:"white" }} expand="sm">
                <Container>
                    <Navbar.Brand className='mx-2'>
                        <a href="/">
                            <img src={lepgoImage} className="logo" alt="sfvs" />
                        </a>
                    </Navbar.Brand>
                    <Nav className='mx-1'>
                        <Nav.Link>
                            <div className=''>
                                <img src={notifyLepgo} alt="notify" />
                                <span>الاشعارات</span>
                            </div>
                        </Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link>
                            <div className='formloaction'>
                                <select style={{border:"none"}}>
                                    <option>التسليم الي المنصورة</option>
                                </select>
                            </div>
                        </Nav.Link>
                    </Nav>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <FormControl
                            type="search"
                            placeholder="انت بدور علي ايه"
                            className="mx-2 w-100"
                            aria-label="Search"
                        />
                        <Nav>
                            <Nav.Link style={{ borderRight: "3px solid #0000001A", width: "200px", height: "40px", padding: "0 5px" }}
                                href=""
                                className="nav-text d-flex align-items-center text-center justify-content-center">
                                <p style={{ color: "black", marginTop: "15px" }}>اضافة منتج للحجز</p>
                                <img style={{ paddingRight: "8px" }} src={IconProduct} className="login-img" alt="sfvs" />
                            </Nav.Link>

                            <Nav.Link style={{ borderRight: "3px solid #0000001A", height: "40px", padding: "0 15px" }}
                                href=""
                                
                                className="nav-text d-flex align-items-center justify-content-center">
                                <p style={{ color: "black", marginTop: "15px" }}><SignUp/></p>
                                {/* <p><SignUp/></p> */}
                                <img style={{ paddingRight: "8px" }} src={IconProfile} className="login-img" alt="sfvs" />
                            </Nav.Link>
                            <Nav.Link style={{ borderRight: "3px solid #0000001A", height: "40px", padding: "0 15px" }}
                                href=""
                                className="nav-text d-flex align-items-center justify-content-center">
                                <p style={{ color: "black", marginTop: "15px" }}>الدردشه</p>
                                <img style={{ paddingRight: "8px" }} src={IconChat} className="login-img" alt="sfvs" />
                            </Nav.Link>
                            <Nav.Link style={{ borderRight: "3px solid #0000001A", height: "40px", padding: "0 15px" }}
                                href="/favourite"
                                className="nav-text d-flex align-items-center justify-content-center">
                                <p style={{ color: "black", marginTop: "15px" }}>المفضله</p>
                                <img style={{ paddingRight: "8px" }} src={IconFavourite} className="login-img" alt="sfvs" />
                            </Nav.Link>
                            <Nav.Link style={{ borderRight: "3px solid #0000001A", height: "40px", padding: "0 15px" }}
                                href=""
                                className="nav-text d-flex align-items-center justify-content-center">
                                <p style={{ color: "black", marginTop: "15px" }}>العربه</p>
                                <img style={{ paddingRight: "8px" }} src={IconShopping} className="login-img" alt="sfvs" />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <CategoryHeader/>
        </div>
    )
}

export default NavBar
