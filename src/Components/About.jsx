import React, { useState } from 'react';
import reqSvgs from '../module';

const About = () => {
    const [services , setServices] = useState([
        {id:1 , image: 'about1.svg' , name : "منتجات تجارية"}
        ,{id:2 , image: 'about2.svg' , name : "منتجات غذائية"}
        ,{id:3 , image: "about3.svg" , name : "منتجات تقنية"}
        ,{id:4 , image: "about4.svg" , name : "صناعات يدوية"}
        ,{id:5 , image: "about5.svg" , name : "منتجات أخرى"}
        ,{id:6 , image: "about6.svg" , name : "خدمات"}
    ])
    return (
        <div className='p-5 text-center  my-5 '>
            <h2 className='fw-bold mainColor my-4'>افتح موقع لبيع المنتجات والخدمات</h2>
            <h5 className='text-muted'>متناسب مع جميع الانشطة التجارية والخدمية</h5>
            <div className=" mb-5 d-flex justify-content-center">
                <div className="row about-container col-12 col-lg-6 ">
                    {services.map( service => (
                        <div className="col-6 col-md-4 p-2"key={service.id}>
                            <div className=" p-3 about-card " >
                                <div className='about-icons'>
                                    <img src={reqSvgs[`${service.image}`]} className="w-100" alt="..."/>
                                    </div>
                                    <p className='subColor my-2'>{service.name}</p>
                            </div>
                        </div>
                    ) )}
                </div>
            </div>
        </div>
    )
}

export default About