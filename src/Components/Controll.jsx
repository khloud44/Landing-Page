import React, { useState } from "react";
import reqSvgs from "../module";

const Controll = () => {
  return (
    <div className="mockup-wrap text-center my-5 ">
        <div  className="image-wrap">
      <h2 className="fw-bold mainColor my-4">لوحة تحكم متكاملة</h2>
      <p className="text-muted">تحكم في جميع النواحي التقنية من مكان واحد</p>
      <img src={reqSvgs["controll.png"]} />

 <div className="container d-flex justify-content-center px-5">
      <div className= "row  px-md-5 ">


      <div className="col-md-6  d-flex my-4">
        <div className="mt-2 d-flex align-items-center">
          <i
            class="fas fa-store"
            style={{ fontSize: "30px", color: "#2196F3" ,marginLeft:"30px" }}
          ></i>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-start">
          <h5 className="mainColor fw-bold">تقارير المبيعات
</h5>
          <p className="text-muted text-end" style={{fontSize: ".9rem"}}>
          كن على ‏علم بجميع الإحصائيات المهمة لأخذ القرار السليم لتجارتك ‏مع تقارير واضحة عن المبيعات و الزيارات وغيرها من الإحصائيات المهمة عن موقعك
          </p>
          </div>
        </div>

        <div className="col-md-6 d-flex  my-4">
        <div className="mt-2 d-flex align-items-center">
          <i
            class="fas fa-credit-card"
            style={{ fontSize: "30px", color: "#2196F3" ,marginLeft:"30px" }}
          ></i>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-start">
          <h5 className="mainColor fw-bold">معلومات العملاء</h5>
          <p className="text-muted text-end" style={{fontSize: ".9rem"}}>
          تابع عملاء موقعك ‏من بداية الطلب حتى المبيعات المؤكدة وكن على تواصل دائم مع عملائك ‏من خلال صفحة العملاء في لوحة التحكم
          </p>
          </div>
        </div>


        <div className="col-md-6 d-flex my-4">
        <div className="mt-2  d-flex align-items-center">
          <i
            class="fas fa-parachute-box"
            style={{ fontSize: "30px", color: "#2196F3" ,marginLeft:"30px" }}
          ></i>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-start">
          <h5 className="mainColor fw-bold">اضافة ومتابعة المنتجات</h5>
          <p className="text-muted text-end" style={{fontSize: ".9rem"}}>
          ‏قم باضافة المنتجات بسهولة و تابع المنتجات المعروضة والمخفية من خلال لوحة التحكم وصفحة المنتجات الخاصة بموقعك
          </p>
          </div>
        </div>


              <div className="col-md-6 d-flex  my-4">
        <div className="mt-2  d-flex align-items-center">
          <i
          
            class="fas fa-gear"
            style={{ fontSize: "30px", color: "#2196F3" ,marginLeft:"30px" }}
          ></i>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-start">
          <h5 className="mainColor fw-bold">تحكم في الموقع</h5>
          <p className="text-muted text-end" style={{fontSize: ".9rem"}}>
          ‏تحكم في محتوى موقعك والهوية البصرية للموقع من خلال الإعدادات الموجودة في لوحة التحكم الخاصة بموقعك
          </p>
          </div>
        </div> 


        </div>
        </div>
      </div>
      <a className="btn btn-primary  btn-lg text-white mb-5  py-1 px-5 " aria-current="page" href="#">فتح موقع جديد</a>

    </div>
  );
};

export default Controll;
