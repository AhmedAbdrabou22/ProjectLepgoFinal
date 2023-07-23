import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Pen from "../../images/pen.svg"
const UserData = () => {
    let userData = '';

    if (localStorage.getItem('user') != null) {
        userData = JSON.parse(localStorage.getItem('user'))
    } else {
        userData = ""
    }
    return (
        <div>
            <div>
                <div className="user-address-card my-3 px-2">
                    <Row className="d-flex justify-content-between pt-2">
                        <Col xs="6" className="d-flex">
                            <div className="p-2">الاسم:</div>
                            <div className="p-1 item-delete-edit">{userData.data.user.name}</div>
                        </Col>
                        <Col xs="6" className="d-flex justify-content-end text-center updateWidth" style={{ background: "#CB955B", borderTopLeftRadius: "20px", borderBottomRightRadius: "20px", textAlign: "center" }}>
                            <div className="d-flex mx-2">
                                <img
                                    alt=""
                                    className="ms-1 mt-2"
                                    src={Pen}
                                    height="17px"
                                    width="15px"
                                />
                                <p className="item-delete-edit" style={{ color: "white", fontSize: "18px" }}> تعديل</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="">
                        <Col xs="12" className="d-flex">
                            <div className="p-2">رقم الهاتف:</div>
                            <div className="p-1 item-delete-edit">{userData.data.user.phone_number}</div>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col xs="12" className="d-flex">
                            <div className="p-2">الايميل:</div>
                            <div className="p-1 item-delete-edit">{userData.data.user.email}</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" className="d-flex">
                            <div className="p-2">العنوان:</div>
                            <div className="p-1 item-delete-edit">{
                                userData.data.user.address ? (
                                    userData.data.user.address
                                ) :('لم يتم تسجيل')
                            }</div>
                        </Col>
                        <Col xs="12" className="d-flex">
                            <div className="p-2">تفيعل الحساب:</div>
                            <div className="p-1 item-delete-edit">{
                                userData.data.user.is_verified ? (
                                    userData.data.user.is_verified === "1" ? ("الحساب مفعل") : ('فعل حسابك يسط')
                                ) :('لم يتم تسجيل')
                            }</div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default UserData
