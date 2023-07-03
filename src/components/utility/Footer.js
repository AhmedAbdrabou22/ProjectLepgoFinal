import React from 'react'
import { Container } from "react-bootstrap";
import ccPaypal from "../../images/cc-paypal.svg"
import cash from "../../images/CACH.svg"
import masterCard from "../../images/mastercard.svg"
import visa from "../../images/visa.svg"
import fawry from "../../images/fawry-seeklogo.com-3.svg"
import vodafone from "../../images/vodafone.svg"
import contac1 from "../../images/Group 362.svg"
import contac2 from "../../images/Group 366.svg"
import contac3 from "../../images/Group 367.svg"
import contac4 from "../../images/Group 370.svg"
const Footer = () => {
    return (
        <div className="footer-background footer mt-3 pt-2">
            <Container className="">
                <div className='d-flex justify-content-between s  align-items-center'>
                    <div className='policy w-40'>
                        <div className='d-flex justify-content-center align-items-center s'>
                            <div>
                                <ul>
                                    <h5>الاكثر زياره</h5>
                                    <div className="horzintal"></div>
                                    <li><a href="*">عقارات</a></li>
                                    <li><a href="*">اثاث منزلي </a></li>
                                    <li><a href="*">محلات تجارية</a></li>
                                    <li><a href="*">مساحات عمل</a></li>
                                    <li><a href="*">مخازن</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <h5>الخصوصيه</h5>
                                    <div className="horzintal"></div>
                                    <li><a href="*">عقارات</a></li>
                                    <li><a href="*">اثاث منزلي </a></li>
                                    <li><a href="*">محلات تجارية</a></li>
                                    <li><a href="*">مساحات عمل</a></li>
                                    <li><a href="*">مخازن</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <h5>الخصوصيه</h5>
                                    <div className="horzintal"></div>
                                    <li><a href="*">سياسة الضمان</a></li>
                                    <li><a href="*">شروط الاسترجاع</a></li>
                                    <li><a href="*">شروط الاستخدام</a></li>
                                    <li><a href="*"> شروط الايجار</a></li>
                                    <li><a href="*"> شروط الخصوصية </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='contact w-50'>
                        <div className='d-flex justify-content-evenly align-items-center s'>
                            <div className='contacCashes'>
                                <h4>طرق الدفع</h4>
                                <img src={cash} alt="Cahs" />
                                <img src={ccPaypal} alt="PayPal" />
                                <img src={masterCard} alt="MasterCard" />
                                <img src={visa} alt="Visa" />
                                <div>
                                    <img src={fawry} alt="vodafone" />
                                    <img src={vodafone} alt="fawry" />
                                    <p>حمل تطبيقك من خلال</p>
                                    <p>من خلال متجر أبل</p>
                                    <p>من خلال متجر جوجل</p>
                                </div>
                            </div>

                            <div className='contacCashes'>
                                <h4>تواصل معنا</h4>
                                <img src={contac1} alt="Cahs" />
                                <img src={contac2} alt="PayPal" />
                                <img src={contac3} alt="MasterCard" />
                                <img src={contac4} alt="Visa" />
                                <div>
                                    <span  style={{display:'block'}}>أو من خلال البريد الاليكتروني</span>
                                    <a style={{display:'block'}} href="mailto:info@lepgo.com">info@lepgo.com</a>
                                </div>

                                <div className='mt-2'>
                                    <span style={{display:'block'}}>أو عبر الهاتف</span>
                                    <a style={{display:'block'}} href="tel:+20123456789">+20123456789</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer
