import React, { useContext, useEffect } from 'react'
import { Container, Spinner } from "react-bootstrap";
import UnopDropdown from "unop-react-dropdown";
import cash from "../../images/sort.png"
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from "react-redux"
import { getAllCategory } from "../../redux/action/categoryAction.js"
import { Dropdown } from 'react-bootstrap';
const CategoryHeader = () => {
    const handler = () => { };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategory());
    }, [])

    const DataCate = useSelector(state => state.allCategory.category)




    return (
        <Container fluid={true} style={{ background: "white" }}>
            <Navbar expand="lg" style={{ background: "white", alignItems: "center" }}>
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        جميع المفات
                    </Dropdown.Toggle>

                    <Dropdown.Menu align="right">
                        <div className="card-filter d-flex justify-content-center align-items-center">
                            <div className="groubFilter">
                                {
                                    DataCate.data ? (
                                        DataCate.data.slice(1, 8).map((ele) => {
                                            return (
                                                <div className="card-filter-item">
                                                    <a className="cat-text-header allfilesLink" href={`/categorydetails/${ele.id}`}>{ele.title_ar}</a>
                                                </div>
                                            )
                                        })
                                    ) : null
                                }
                            </div>

                            <div className="groubFilter">
                                {
                                    DataCate.data ? (
                                        DataCate.data.slice(9, 16).map((ele) => {
                                            return (
                                                <div className="card-filter-item">
                                                    <a className="cat-text-header allfilesLink" href={`/categorydetails/${ele.id}`}>{ele.title_ar}</a>
                                                </div>
                                            )
                                        })
                                    ) : null
                                }
                            </div>

                            {/* <div className="groubFilter">
                                    {
                                        DataCate.data ? (
                                            DataCate.data.slice(10, 17).map((ele) => {
                                                return (
                                                    <div className="card-filter-item">
                                                        <a className="cat-text-header" href={`/categorydetails/${ele.id}`}>{ele.title_ar}</a>
                                                    </div>
                                                )
                                            })
                                        ) : null
                                    }
                                </div> */}
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='NavBarHeader'>
                    <Nav className="mx-4">
                        {
                            DataCate.data ? (
                                DataCate.data.map((ele) => {
                                    return (
                                        <div>
                                            <a className="cat-text-header" href={`/categorydetails/${ele.id}`}>{ele.title_ar}</a>
                                        </div>
                                    )
                                })
                            ) : null
                        }
                    </Nav>
                </Navbar.Collapse>


            </Navbar>
        </Container>
    )
}

export default CategoryHeader
