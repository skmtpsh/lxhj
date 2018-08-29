   $(function(){
   // 紧急联系人认证校验
       $("#submitContact").click(function(){
           var _company_name_direct=$("#company_name_direct").val();
           var _relate_direct=$("#relate_direct").val();
           var _emerg_direct=$("#emerg_direct").val();
           var _company_name_other=$("#company_name_other").val();
           var _relate_other=$("#relate_other").val();
           var _emerg_other=$("#emerg_other").val();
           var _phone=/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
           if (_company_name_direct=="") {
               $('body').toast({
                   position:'fixed',
                   content:'请输入联系人姓名',
                   duration:3000,
                   isCenter:true,
                   background:'rgba(230,0,0,0.5)',
                   animateIn:'bounceIn-hastrans',
                   animateOut:'bounceOut-hastrans',
               });
               return false;
           }else if(_relate_direct==""){
               $('body').toast({
                   position:'fixed',
                   content:'请选择与本人关系',
                   duration:3000,
                   isCenter:true,
                   background:'rgba(230,0,0,0.5)',
                   animateIn:'bounceIn-hastrans',
                   animateOut:'bounceOut-hastrans',
               });
               return false;
           }else if (_emerg_direct==""||!_phone.test($("#emerg_direct").val())) {
               $('body').toast({
                   position:'fixed',
                   content:'请输入紧急联系人电话',
                   duration:3000,
                   isCenter:true,
                   background:'rgba(230,0,0,0.5)',
                   animateIn:'bounceIn-hastrans',
                   animateOut:'bounceOut-hastrans',
               });
               $("#emerg_direct").val("");
               return false;
           }else if (_company_name_other=="") {
               $('body').toast({
                   position:'fixed',
                   content:'请输入其他联系人姓名',
                   duration:3000,
                   isCenter:true,
                   background:'rgba(230,0,0,0.5)',
                   animateIn:'bounceIn-hastrans',
                   animateOut:'bounceOut-hastrans',
               });
               return false;
           }else if (_relate_other=="") {
               $('body').toast({
                   position:'fixed',
                   content:'请选择其他人与本人关系',
                   duration:3000,
                   isCenter:true,
                   background:'rgba(230,0,0,0.5)',
                   animateIn:'bounceIn-hastrans',
                   animateOut:'bounceOut-hastrans',
               });
               return false;
           }else if (_emerg_other==""||!_phone.test($("#emerg_other").val())) {
               $('body').toast({
                   position:'fixed',
                   content:'请输入其他联系人电话',
                   duration:3000,
                   isCenter:true,
                   background:'rgba(230,0,0,0.5)',
                   animateIn:'bounceIn-hastrans',
                   animateOut:'bounceOut-hastrans',
               });
               $("#emerg_other").val("");
               return false;
           }
           contactForm.action="/auth/user/authentication/contactinfo.jhtml";
           document.contactForm.submit();
       })

   });