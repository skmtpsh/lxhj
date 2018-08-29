 $(function(){
   $("#submitBasic").click(function(){
      var _company_name=$("#company_name").val();
      var _company_address=$("#company_address").val();
      var _company_witness=$("#company_witness").val();
      var _company_phone=$("#company_phone").val();
      var _income_month=$("#income_month").val();
      var _current_address=$("#current_address").val();
      var _mailbox=$("#mailbox").val();
      var reg_mail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/; 
		if (_company_name=="") {
			$('body').toast({
              position:'fixed',
              content:'请输入单位名称',
              duration:30000,
              isCenter:true,
              left:'50%',
              background:'rgba(230,0,0,0.5)',
              animateIn:'bounceIn-hastrans',
              animateOut:'bounceOut-hastrans',
           });
			return false;
            }else if(_company_address==""){
                $('body').toast({
              position:'fixed',
              content:'请输入单位地址',
              duration:3000,
              isCenter:true,
              background:'rgba(230,0,0,0.5)',
              animateIn:'bounceIn-hastrans',
              animateOut:'bounceOut-hastrans',
           });
          return false;
            }else if (_company_witness=="") {
              $('body').toast({
              position:'fixed',
              content:'请输入单位证明人',
              duration:3000,
              isCenter:true,
              background:'rgba(230,0,0,0.5)',
              animateIn:'bounceIn-hastrans',
              animateOut:'bounceOut-hastrans',
           });
          return false;
            }else if (_company_phone=="") {
              $('body').toast({
              position:'fixed',
              content:'请输入正确的单位电话',
              duration:3000,
              isCenter:true,
              background:'rgba(230,0,0,0.5)',
              animateIn:'bounceIn-hastrans',
              animateOut:'bounceOut-hastrans',
           });
          return false;
            }else if (_income_month=="") {
              $('body').toast({
              position:'fixed',
              content:'请输入正确的月收入',
              duration:3000,
              isCenter:true,
              background:'rgba(230,0,0,0.5)',
              animateIn:'bounceIn-hastrans',
              animateOut:'bounceOut-hastrans',
           });
          return false;
            }else if (_current_address=="") {
              $('body').toast({
              position:'fixed',
              content:'请输入现住址',
              duration:3000,
              isCenter:true,
              background:'rgba(230,0,0,0.5)',
              animateIn:'bounceIn-hastrans',
              animateOut:'bounceOut-hastrans',
           });
          return false;
            }else if (_mailbox=="") {
              $('body').toast({
              position:'fixed',
              content:'请输入正确的QQ号',
              duration:3000,
              isCenter:true,
              background:'rgba(230,0,0,0.5)',
              animateIn:'bounceIn-hastrans',
              animateOut:'bounceOut-hastrans',
           });
          return false;
      /*}else if (!reg_mail.test($("#mailbox").val())) {
              $('body').toast({
              position:'fixed',
              content:'请输入正确的QQ邮箱',
              duration:3000,
              isCenter:true,
              background:'rgba(230,0,0,0.5)',
              animateIn:'bounceIn-hastrans',
              animateOut:'bounceOut-hastrans',
           });*/
            }else{
               $('body').toast({
              position:'fixed',
              content:'信息提交中',
              duration:3000,
              isCenter:true,
              background:'rgba(230,0,0,0.5)',
              animateIn:'bounceIn-hastrans',
              animateOut:'bounceOut-hastrans',
           });
            basicForm.action="/auth/user/authentication/basicinfo.jhtml";
            }
        });

	/*	
		
     // 上传证件照开始
     var result= document.getElementById("result");
     var input = document.getElementById("file_input");
     if(typeof FileReader === 'undefined'){
         result.innerHTML = "抱歉，你的浏览器不支持";
         input.setAttribute('disabled','disabled');
     }else{
         input.addEventListener('change',readFile,false);
     }
     function readFile(){
         var file = this.files[0];
         if(!/image\/\w+/.test(file.type)){
             alert("请确保文件为图像类型");
             return false;
         }
         var reader = new FileReader();
         reader.readAsDataURL(file);
         // var base = new Base64();
         // base.encode(file)
         reader.onload = function(e){
             $("#result").css({"background-image":"none"});
             result.innerHTML = '<img id="img1" src="'+this.result+'" alt=""/>';
         }
         // alert(this.files[0].size);

     }

     var result2= document.getElementById("result2");
     var input2 = document.getElementById("file_input2");
     if(typeof FileReader === 'undefined'){
         result2.innerHTML = "抱歉，你的浏览器不支持";
         input2.setAttribute('disabled','disabled');
     }else{
         input2.addEventListener('change',readFile2,false);
     }
     function readFile2(){
         var file = this.files[0];
         if(!/image\/\w+/.test(file.type)){
             alert("请确保文件为图像类型");
             return false;
         }
         var reader = new FileReader();
         reader.readAsDataURL(file);
         //  var base = new Base64();
         // base.encode(file)
         reader.onload = function(e){
             $("#result2").css({"background-image":"none"});
             result2.innerHTML = '<img id="img2" src="'+this.result+'" alt=""/>';
         }

     }
     var result3= document.getElementById("result3");
     var input3 = document.getElementById("file_input3");
     if(typeof FileReader === 'undefined'){
         result3.innerHTML = "抱歉，你的浏览器不支持";
         input3.setAttribute('disabled','disabled');
     }else{
         input3.addEventListener('change',readFile3,false);
     }
     function readFile3(){
         var file = this.files[0];
         if(!/image\/\w+/.test(file.type)){
             alert("请确保文件为图像类型");
             return false;
         }
         var reader = new FileReader();
         reader.readAsDataURL(file);

         reader.onload = function(e){
             $("#result3").css({"background-image":"none"});
             result3.innerHTML = '<img id="img3" src="'+this.result+'" alt=""/>';
         }

     }
     var result4= document.getElementById("result4");
     var input4 = document.getElementById("file_input4");
     if(typeof FileReader === 'undefined'){
         result4.innerHTML = "抱歉，你的浏览器不支持";
         input4.setAttribute('disabled','disabled');
     }else{
         input4.addEventListener('change',readFile4,false);
     }
     function readFile4(){
         var file = this.files[0];
         if(!/image\/\w+/.test(file.type)){
             alert("请确保文件为图像类型");
             return false;
         }
         var reader = new FileReader();
         reader.readAsDataURL(file);

         reader.onload = function(e){
             $("#result4").css({"background-image":"none"});
             result4.innerHTML = '<img id="img4" src="'+this.result+'" alt=""/>'
         }
     }
*/
   $("#submitContact").click(function(){  
      var _company_name_direct=$("#company_name_direct").val();
      var _relate_direct=$("#relate_direct").val();
      var _emerg_direct=$("#emerg_direct").val();
      var _company_name_other=$("#company_name_other").val();
      var _relate_other=$("#relate_other").val();
      var _emerg_other=$("#emerg_other").val();

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
            }else if (_emerg_direct=="") {
              $('body').toast({
              position:'fixed',
              content:'请选择其他联系人',
              duration:3000,
              isCenter:true,
              background:'rgba(230,0,0,0.5)',
              animateIn:'bounceIn-hastrans',
              animateOut:'bounceOut-hastrans',
           });
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
            }else if (_emerg_other=="") {
              $('body').toast({
              position:'fixed',
              content:'请输入现住址',
              duration:3000,
              isCenter:true,
              background:'rgba(230,0,0,0.5)',
              animateIn:'bounceIn-hastrans',
              animateOut:'bounceOut-hastrans',
           });
            }
      }); 
 });
 