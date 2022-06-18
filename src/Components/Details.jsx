import React, { useState } from 'react'
import reqSvgs from '../module';

const Details = () => {
    const [details , setDetails]=useState([
        {id: 1 , image:"details1.svg" , title: "موقعك وعنوانك الخاص على الانترنت" , description: "أحجز عنوانك الخاص على الإنترنت لتكمل ‏بذلك امتلاك هويتك التجارية في الفضاء الإلكتروني (الانترنت) وليستطيع الجميع زيارت تجارتك من"}
        ,{id: 2 , image:"details2.svg" , title: "مصنوع بعناية لمستخدمي الموبايل اولا" , description: "أحجز عنوانك الخاص على الإنترنت لتكمل ‏بذلك امتلاك هويتك التجارية في الفضاء الإلكتروني (الانترنت) وليستطيع الجميع زيارت تجارتك من"}
        ,{id: 3 , image:"details3.svg" , title: "تجربة بيع شراء سهلة لك ولعملائك" , description: "أحجز عنوانك الخاص على الإنترنت لتكمل ‏بذلك امتلاك هويتك التجارية في الفضاء الإلكتروني (الانترنت) وليستطيع الجميع زيارت تجارتك من"}
        ,{id: 4 , image:"details4.svg" , title: "تقارير مؤثرة لزيادة المبيعات" , description: "أحجز عنوانك الخاص على الإنترنت لتكمل ‏بذلك امتلاك هويتك التجارية في الفضاء الإلكتروني (الانترنت) وليستطيع الجميع زيارت تجارتك من"}
        ,{id: 5 , image:"details5.svg" , title: "صمم من قبل مختصين لزيادة نسبة المبيعات" , description: "أحجز عنوانك الخاص على الإنترنت لتكمل ‏بذلك امتلاك هويتك التجارية في الفضاء الإلكتروني (الانترنت) وليستطيع الجميع زيارت تجارتك من"}
        ,{id: 6 , image:"details6.svg" , title: "بدون عمولة على مبيعاتك" , description: "أحجز عنوانك الخاص على الإنترنت لتكمل ‏بذلك امتلاك هويتك التجارية في الفضاء الإلكتروني (الانترنت) وليستطيع الجميع زيارت تجارتك من"}
    ])
    return (
        <div className='container my-5'>
            {details.map((detail, index) => (
                <div className={`row my-5 align-items-center ${index % 2 ===0 ? "flex-row-reverse" : ""} ` }key={detail.id}>
                            <div className="col-md-6 col-12">
                                <div className='d-flex flex-column justify-content-center align-items-start'>
                                    <h2 className='mainColor fw-bold'>{detail.title}</h2>
                                    <p className='subColor text-end'>{detail.description}</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <img src={reqSvgs[`${detail.image}`]} alt="" className='w-100' />
                            </div>
                    </div>
                ))}

                <button type="submit" className='btn btn-style btn-primary px-5 py-2'>فتح موقع جديد</button>
        </div>
    )
}

export default Details