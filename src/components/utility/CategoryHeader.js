import React from 'react'
import { Container } from "react-bootstrap";
import UnopDropdown from "unop-react-dropdown";
import cash from "../../images/sort.png"
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const CategoryHeader = () => {
    const handler = () => { };
    return (
        <Container fluid={true}>
            <Navbar expand="lg"  style={{ background: "white", alignItems: "center" }}>


                <Nav.Link className='mt-4'>
                    <UnopDropdown
                        onAppear={handler}
                        onDisappearStart={handler}
                        trigger={
                            <p className="mx-1" style={{ border: "1px solid #0000001A", padding: "10px", marginTop: "-10px", textAlign: "right" }}>
                                <img
                                    width="20px"
                                    height="20px"
                                    className="ms-1"
                                    src={cash}
                                    alt=""
                                />
                                جميع المفات
                            </p>
                        }
                        delay={0}
                        align="right"
                        hover>
                        <div className="card-filter d-flex justify-content-between align-items-center">
                            <div className="groubFilter">
                                <div className="card-filter-item">عقارات</div>
                                <div className="card-filter-item">اثاث منزلي </div>
                                <div className="card-filter-item">مساحات عمل</div>
                                <div className="card-filter-item">محلات تجارية</div>
                                <div className="card-filter-item">عقارات</div>
                                <div className="card-filter-item">اثاث منزلي </div>
                                <div className="card-filter-item">مساحات عمل</div>
                                <div className="card-filter-item">محلات تجارية</div>
                            </div>
                            <div className="groubFilter">
                                <div className="card-filter-item">عقارات</div>
                                <div className="card-filter-item">اثاث منزلي </div>
                                <div className="card-filter-item">مساحات عمل</div>
                                <div className="card-filter-item">محلات تجارية</div>
                                <div className="card-filter-item">عقارات</div>
                                <div className="card-filter-item">اثاث منزلي </div>
                                <div className="card-filter-item">مساحات عمل</div>
                                <div className="card-filter-item">محلات تجارية</div>
                            </div>
                            <div className="groubFilter">
                                <div className="card-filter-item">عقارات</div>
                                <div className="card-filter-item">اثاث منزلي </div>
                                <div className="card-filter-item">مساحات عمل</div>
                                <div className="card-filter-item">محلات تجارية</div>
                                <div className="card-filter-item">عقارات</div>
                                <div className="card-filter-item">اثاث منزلي </div>
                                <div className="card-filter-item">مساحات عمل</div>
                                <div className="card-filter-item">محلات تجارية</div>
                            </div>
                            <div className="groubFilter">
                                <div className="card-filter-item">عقارات</div>
                                <div className="card-filter-item">اثاث منزلي </div>
                                <div className="card-filter-item">مساحات عمل</div>
                                <div className="card-filter-item">محلات تجارية</div>
                                <div className="card-filter-item">عقارات</div>
                                <div className="card-filter-item">اثاث منزلي </div>
                                <div className="card-filter-item">مساحات عمل</div>
                                <div className="card-filter-item">محلات تجارية</div>
                            </div>
                        </div>
                    </UnopDropdown>
                </Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='NavBarHeader'>
                    <Nav className="mx-4">
                        <div className="cat-text-header">العروض المتاحة</div>
                        <div className="cat-text-header">أجهزة الكترونية</div>
                        <div className="cat-text-header">عقارات</div>
                        <div className="cat-text-header"> ملابس</div>
                        <div className="cat-text-header">اثاث منزلي</div>
                        <div className="cat-text-header">نقل بري</div>
                        <div className="cat-text-header">نقل بحري</div>
                        <div className="cat-text-header">نقل جوي</div>
                        <div className="cat-text-header">مخازن</div>
                        <div className="cat-text-header">متعلقات الصناعة</div>
                        <div className="cat-text-header">أدوات بناء</div>
                        <div className="cat-text-header">أغراض مناسبات</div>
                        <div className="cat-text-header">ادوات الصيد</div>
                        <div className="cat-text-header">ادوات الصيد</div>
                        <div className="cat-text-header">أراض زراعية</div>
                    </Nav>
                </Navbar.Collapse>


            </Navbar>
        </Container>
    )
}

export default CategoryHeader
