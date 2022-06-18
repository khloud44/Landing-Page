import React from 'react'
import reqSvgs from '../module'

const Subscription = () => {
    return (
        <div className="text-center my-5 ">
            <h2 className="fw-bold mainColor my-4">باقات الاشتراك</h2>
            <p className="text-muted">سعر الخدمة يتضمن الاستضافة وعنوان الموقع وخدمة شوبلي</p>
            <div  className="pricing-wrapper">
                <div className=" d-flex flex-wrap justify-content-center ">
                    
                <div className="col-md-4 col-12 ">
                    <div className="pricing-box  p-3 m-2">
                    <img src={reqSvgs['products/about1.svg']} alt="" className='w-100' />
                    <h3 className='mb-2 mainColor'>تجريبي</h3>
                    <p>للمشاريع الصغيرة</p>
                    <div className="price">
                        <div className="price-number">
                            <span>مجانا</span>
                        </div>
                    </div>
                    <p>بحد اقصي 10 طلبات شهريا</p>
                    <p>عنوان عادي</p>
                    <p>علامة وينكز</p>
                    <a className="btn btn-primary text-white  py-2 px-4 btn-user w-100" aria-current="page" href="#">فتح موقع</a>
                    </div>
                </div>
                
                <div className="col-md-4 col-12">
                    <div className="pricing-box p-3 m-2">
                    <img src={reqSvgs['products/about1.svg']} alt="" className='w-100' />
                    <h3 className='mb-2 mainColor'>احترافي</h3>
                    <p>للمشاريع المتوسطة و الكبيرة</p>
                    <div className="price">
                        <div className="price-number">
                            <span>150 جنيه</span>
                        </div>
                        <s className='subColor' style={{fontSize: '1rem'}}>250 جنيه</s>
                    </div>
                    <p>بدون حد أقصي</p>
                    <p>عنوان موقعك الخاص</p>
                    <p>بدون علامة وينكز </p>
                    <a className="btn btn-primary text-white  py-2 px-4 btn-user w-100" aria-current="page" href="#">فتح موقع</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Subscription