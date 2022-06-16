import React from 'react'

const Footer = () => {
    return (
        <div className='footer-light-medium'>
            <div className="container">
                <div className="footer-head flex-md-row flex-column ">
                    <h3 className='subColor'>هل لديك أسئلة عن الخدمة؟</h3>
                    <div className="head-section">
                    <a className=" btn btn-primary text-white  py-2 px-4 btn-user" aria-current="page" href="#"> افتح موقع جديد</a>
                    <a className=" btn  text-primary  py-2 px-4" aria-current="page" href="#"> تحدث معنا </a>
                    </div>
                </div>
                
                <div className="footer-body row">
                    <div className="col-4">
                        <div className="pt-3 pb-5 text-end text-muted">
                            <a className="text-decoration-none fs-1 text-dark fw-bold" href="#">W<span className='text-danger'>i</span>nkez</a>
                            <p>شوبلي خدمة تسهل على مستخدميها فتح موقعهم الخاص
لعرض وبيع المنتجات والخدمات من خلال الإنترنت بسهولة.</p>
                            <p>تجدنا على منصات التواصل الآتية:</p>
                            <div className='d-flex justify-content-start align-items-center '>
                            <i className="fab fa-facebook-f text-muted mx-2"></i>
                            <i class="fab fa-twitter text-muted mx-2"></i>
                            <i class="fab fa-linkedin-in text-muted mx-2"></i>
                            <i class="fab fa-instagram text-muted mx-2"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 ">
                        <ul className='list-unstyled text-end pt-3 footerList'>
                            <li className='column-header'>وينكز</li>
                            <li className='text-muted'>الرئيسية</li>
                            <li className='text-muted'>تسجيل الدخول</li>
                            <li className='text-muted'>فتح موقع جديد</li>
                            <li className='text-muted'>مدونة وينكز</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul className='list-unstyled text-end pt-3 footerList'>
                            <li className='column-header'>روابط أخرى</li>
                            <li className='text-muted'>خريطة تطوير الخدمة</li>
                            <li className='text-muted'>المساعدة</li>
                            <li className='text-muted'>اسئلة متكررة</li>
                            <li className='text-muted'>عن الخدمة</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul className='list-unstyled text-end pt-3 footerList'>
                            <li className='column-header'>شروط الاستخدام</li>
                            <li className='text-muted'>شروط وأحكام</li>
                            <li className='text-muted'>سياسة الخصوصية</li>
                            <li className='text-muted'>عن الشركة</li>
                        </ul>
                    </div>
                    <p className='text-muted text-center p-2'>جميع الحقوق محفوظة لشركة شوبلي المحدودة بالمملكة المتحدة | Shobly Ltd</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer