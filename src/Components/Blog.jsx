import React from 'react'
import reqSvgs from '../module'

const Blog = () => {
  return (
    <div className='content-wrapper container'>
        <h2 className="fw-bold mainColor my-4">المدونة </h2>
        <p className="text-muted">تعرف عن المزيد عن البيع على الانترنت</p>
        <div className="d-flex flex-column flex-md-row">
            <div className="col-12 col-md-6 ms-4">
            <img src={reqSvgs['sub1.png']} alt="" className='w-100 blog-img ' />
            <div className='blog-content text-end'>
           <h3 className='my-4'> <a href="#" >كيف تحمي علامتك التجارية من سرقة الهوية على الإنترنت ؟</a></h3> 
          <p className='text-muted'>مع الأسف أصبحت الأعمال التجارية عبر الإنترنت معرضة إلى سرقة الهوية بشكل غير مسبوق و في جميع المجالات دون حصر؛ حيث يستطيع المحتالون الآن إنشاء مواقع إلكترونية كاملة تشبه موقعك الخاص تماما، و قد يصلون حتى لصنع صفحات على وسائل التواصل الإجتماعي تدعي أنها مرتبطة بعلامتك التجارية. ...</p>
          <a class="read-more" href="#">المزيد<i className='fas fa-long-arrow-alt-right mx-2' style={{fontSize:'20px'}}></i></a>
            </div>
            </div>
            <div className="col-12 col-md-6">
              <div className='blog-post'>
              <div class="post-image">
                 <img src={reqSvgs['sub2.png']} alt="كيف تبدأ مشروعا للملابس عبر الإنترنت من الألف إلى الياء" className=' blog-img'/>
             </div>
             <div class="post-content d-flex flex-column justify-content-center align-items-start">
               <h3><a href="#" className='text-decoration-none'>كيف تبدأ مشروعا للملابس عبر الإنترنت من الألف إلى الياء</a></h3>
                <p className='text-end'>هل تساءلت يوما كيف تبدأ مشروعا للملابس عبر الإنترنت؟ ما الذي سوف تحتاج إليه لتسوق علامتك التجارية؟ و كيف ستخطط لإستراتيجية عملك؟ للإجابة على جميع تساؤلاتك، سنعمل في مقالتنا هذه على مساعدتك في معرفة كيفية تحديد منهج لبدء نشاطك التجاري في مجال الملابس عبر الإنترنت و إيجاد فرصة للتأقلم و البقاء في سوق مشبعة بالعملاء و المنافسين و اتجاهات الموضة المتغيرة باستمرار. ...</p>
              </div>
              </div>

              <div className='blog-post'>
              <div class="post-image">
                 <img src={reqSvgs['sub3.png']} alt="5 أخطاء يرتكبها أصحاب المشاريع الصغيرة في مواقعهم الإلكترونية" className=' blog-img'/>
             </div>
             <div class="post-content d-flex flex-column justify-content-center align-items-start">
               <h3 className='text-end'><a href="#" className='text-decoration-none'>5 أخطاء يرتكبها أصحاب المشاريع الصغيرة في مواقعهم الإلكترونية</a></h3>
                <p className='text-end'>أصبح الجميع الآن أكثر إلماما بعالم المعلومات و بالمواقع الإلكترونية بدرجة أكبر من أي وقت مضى و أصبحوا كذلك معتادين على جميع الخيارات و الخدمات التي تسوقها أغلب الشركات عبر الإنترنت! هذه الميزة من شأنها أن تشجع و ترفع من عزيمة كل صاحب مشروع صغير ليعمل على تصميم مواقعه الإلكتروني بطريقة احترافية و حسن إدارتها و تنظيمها بهدف إرضاء العملاء و كسب ثقتهم و ولائهم. ...</p>
              </div>
              </div>

              <div className='blog-post'>
              <div class="post-image">
                 <img src={reqSvgs['sub4.png']} alt="أفكار تجارية مربحة في عالم الأطعمة و الغذاء" className=' blog-img'/>
             </div>
             <div class="post-content d-flex flex-column justify-content-center align-items-start">
               <h3><a href="#" className='text-decoration-none'>أفكار تجارية مربحة في عالم الأطعمة و الغذاء</a></h3>
             <p className='text-end'>قد تتغير الأذواق من شخص لآخر، و لكن هناك شيء واحد مؤكد : الجميع بحاجة إلى تناول الطعام! يدل الحجم الهائل لمحبي الطعام أن هناك الكثير و الكثير من العملاء، و أنه بغض النظر عن عدد أصحاب المشاريع في عالم الأطعمة و الغذاء، هناك دائما متسع لشخص آخر. ...</p>
              </div>
              </div>

              <div className='blog-post'>
              <div class="post-image">
                 <img src={reqSvgs['sub5.png']} alt="كيفية بناء علامة تجارية ناجحة بخطوات بسيطة" className=' blog-img'/>
             </div>
             <div class="post-content d-flex flex-column justify-content-center align-items-start">
               <h3><a href="#" className='text-decoration-none'>كيفية بناء علامة تجارية ناجحة بخطوات بسيطة</a></h3> 
               <p className='text-end'>لا يمكنك أن تلوح بعصا سحرية و تجعل العملاء يختارون خدماتك أو منتجاتك أنت دونا عن غيرك في سوق مليء بالمنافسة و التحدي لأن ما ستحتاجه يتجاوز ذلك و يتطلب إستراتيجيات تسويق و اتصال قوية، ذكية و عصرية. في الواقع، لتحديد كيفية نظر الآخرين من منافسين و جمهور مستهدف إلى عملك و قيمته و لتحقيق ما ذكرناه سابقا ستحتاج بكل بساطة إلى علامة تجارية تقوم عليها جميع نشاطاتك. ...</p>
              </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Blog