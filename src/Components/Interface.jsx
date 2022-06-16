import React from "react";
import reqSvgs from "../module";

const Interface = () => {
  return (
    <div className="container py-5">
      <div className=" d-flex flex-column justify-content-center align-items-md-start">
        <h2 className="mainColor fw-bold mb-4">مظهر احترافي لموقعك</h2>
        <p className="text-muted">
          واجهة شوبلي للمواقع مصنوعة بعناية لمظهر حديث وعملي لسهولة الاستخدام
        </p>
      </div>
      <div className="row">
        <div className=" col-md-4 my-3">
          <img src={reqSvgs["interface1.png"]} />
        </div>
        <div className=" col-md-4  my-3">
          <img src={reqSvgs["interface2.png"]} />
        </div>
        <div className=" col-md-4  my-3">
          <img src={reqSvgs["interface3.png"]} />
        </div>
      </div>
      <div className="row my-5 align-items-center">
        <div className="col-md-4 d-flex px-3 my-4">
            <div className="mt-2 h-100">
          <i
            class="fas fa-building"
            style={{ fontSize: "40px", color: "#2196F3" ,marginLeft:"30px" }}
          ></i>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-start">
          <h3 className="mainColor fw-bold">واجهة مصممة للإستخدام السهل</h3>
          <p className="subColor text-end">
            ‏كثرة الاختيارات ليست بالضرورة ميزة للمستخدمين، ‏واجهة عرض شوبلي
            مصممة لتجربة استخدام سهلة وعملية بيع وشراء ناجحة باقل مجهود
          </p>
          </div>
        </div>
        <div className="col-md-4 d-flex px-3 my-4">
        <div className="mt-2  h-100">
          <i
            class="fas fa-store"
            style={{ fontSize: "40px", color: "#2196F3" ,marginLeft:"30px" }}
          ></i>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-start">
          <h3 className="mainColor fw-bold">واجهة سطح مكتب متفاعلة</h3>
          <p className="subColor text-end">
            ‏ما زال ‏شكل ‏موقعك على سطح المكتب مهم للذين يفضلون التسوق من خلال
            الشاشات الكبيرة ولذلك من المهم أيضا أن تكون واجهة عرض موقعك مميزة
            على سطح المكتب
          </p>
          </div>
        </div>
        <div className="col-md-4 d-flex px-3 my-4">
        <div className="mt-2 h-100 ">
          <i
            class="fas fa-gear"
            style={{ fontSize: "40px", color: "#2196F3" ,marginLeft:"30px" }}
          ></i>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-start">
          <h3 className="mainColor fw-bold">واجهة موبايل مميزة</h3>
          <p className="subColor text-end">
            ‏كثرة الاختيارات ليست بالضرورة ميزة للمستخدمين، ‏واجهة عرض شوبلي
            مصممة لتجربة استخدام سهلة وعملية بيع وشراء ناجحة باقل مجهود
          </p>
          </div>
        </div>
      </div>
      <a className="btn btn-primary  btn-lg text-white mb-5  py-2 px-5 btn-user" aria-current="page" href="#">تسجيل موقع جديد</a>

    </div>
  );
};

export default Interface;
