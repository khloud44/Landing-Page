import React from 'react'
import imgHeader from '../assets/SVG/1.svg'

const Header= () => {
    return (
        <div className='header'>
            <img className='imgHeader' src="https://static.shobly.com/landing/assets/img/graphics/legacy/cut-circle.svg" alt="" />
            <div className="container p-5">
                <div className="row">
                    <div className="col-lg-6  d-flex flex-column justify-content-center align-items-start">
                        <h1 className='mb-5 mainColor fw-bold '>إفتح موقعك الخاص للبيع في دقائق</h1>
                        <h5 className='subColor'>بنسهل عليك فتح ستور للعرض وإستقبال الطلبات</h5>
                        <div className='d-flex justify-content-between flex-lg-row flex-column  '>
                            <input className='form-control  ms-2 my-2' type="text" name="userName" placeholder='الاسم'  />
                            <input className='form-control ms-2 my-2 ' type="tetx" name="userPhone" placeholder='رقم الموبايل' />
                            <button type="submit" className='btn btn-primary text-white ms-2 my-2'>تسجيل</button>
                        </div>
                        <h6 className='py-2 subColor'>بالتسجيل توافق على شروط التواصل والإعلانات</h6>
                    </div>
                    <div className="col-lg-6">
                        <img src={imgHeader} className="w-100" alt="" />
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Header
