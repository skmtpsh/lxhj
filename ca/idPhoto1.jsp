<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<html>
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0"/>
    <title>证件照片认证</title>
    <link rel="stylesheet" type="text/css" href="/css/styles.css"/>
    <link rel="stylesheet" type="text/css" href="/css/weui.css"/>
    <link rel="stylesheet" type="text/css" href="/css/weui2.css"/>
    <link rel="stylesheet" type="text/css" href="/css/weui3.css"/>
    <link rel="stylesheet" type="text/css" href="/css/authentication/complete_x.css"/>
    <link rel="stylesheet" href="/css/authentication/toast.css"/>
     <style type="text/css">
*,
*:before,
*:after {
  box-sizing: border-box;
}
.cardBox {
	margin:20px 0;
}
        .tag {
            background: #FF6A63 !important;
        }

        .bg-red {
            background: #FF6A63;
        }

        .bg-blue {
            background: #1d7ffe;
        }
        .bg-yellow{
            background: #FF5B06 ;
        }
        html {
            overflow: auto;
        }

        body {
            height: auto;
            overflow: auto;
        }

        .scrollable {
            position: inherit;
        }
        .toast{
			position:absolute;
			left:0;
			top:0;
			right:0;
			bottom:0;
            text-align: center;
            display:none;		
		/*
            height: 120px;
            background-color: #585858;
            border-radius: 10px;
            margin: 0 auto;
            position: absolute;
            top: 40%;
            left: 50%;
            width: 46%;
            transform: translate(-50%,-50%);
            text-align: center;
            opacity: 0.8;
            display:none;
		*/	
        }
		.toastbg {
			position:fixed;
			background-color: #000;
			left:0;
			top:0;
			right:0;
			bottom:0;
			opacity: 0.2;
			z-index:1
		}
		.toastbody {
			position:relative;
			top:20%;
			z-index:2;
			padding:10%;
		}
        .toast p{
            color: #000;
            text-align: center;
        }
        .toast img{
			padding: 20px;
            height: 80px;
        }
		.toast.show {
			display: block;
		}
    </style>
    <script src="/js/authentication/jquery-1.11.2.js"></script>
    <script type="text/javascript" src="/js/authentication/weui.min.js"></script>
    <script src="/js/authentication/toast.js"></script>
    <script src="/js/authentication/lrc.js"></script>
    <script src="/js/fastclick.js"></script>
	<script type="text/javascript" src="/js/authentication/completeMater.js"></script>
</head>
<body style="background:#f8f8f8;overflow-y:scroll;">
<div class="zhimaContent">
    <p>照片上传</p>
    <form method="post" action="" enctype="multipart/form-data" id="userFormJson">
        <div class="verifyId">
			<div class="verbox">
				<div id="result">
					<input type="file" id="file_input" class="inputBtn"/>
				</div>
				<p><span style="color: #FF6A63">*</span>证件照片一</p>
			</div>
            <div class="verbox">
				<div id="result3">
					<input type="file" class="inputBtn" id="file_input3"/>
				</div>
				<p><span style="color: #f00">*</span>证件照片二</p>
			</div>
        </div>
        <div class="verifyId">
			<div class="verbox">
				<div id="result2">
					<input type="file" class="inputBtn" id="file_input2"/>
				</div>
				<p>其他照片一</p>
			</div>
			<div class="verbox">
				<div id="result4">
					<input type="file" class="inputBtn" id="file_input4"/>
				</div>
				<p>其他照片二</p>
			</div>
        </div>
		<input type="hidden" id="hidden5" name="requestToken" value="${token}">
		<input type="hidden" id="hidden6" name="type" value="${type}">
		<input type="hidden" id="hidden7" name="appId" value="${appId}">
		<input type="hidden" id="hidden9" name="phone" value="${phone}">
		<input type="hidden" id="hidden10" name="platform" value="${platform}">
		<div class="cardBox">
			<p class="titleCard"><span style="color: #f00">*</span>证件照片一、二为必填项</p>
			<p class="cardDesc">请您在身份证明、户口本、社保卡、驾驶证、工作证、收入证明、征信报告、职业资格证书中任选两项上传。</p>
			<p class="titleCard">其他照片一、二为非必填项</p>
			<p class="cardDesc">您可以选择上传证明类材料或其他照片，您的授信额度会随认证材料的完善而提升。</p>
		</div>
        <div class="weui_btn_area">
            <c:choose>
                <c:when test="${appColor=='#FF6A63'}">
                    <button type="button" class="weui_btn bg-red" id="submitPhone">提交</button>
                </c:when>
                <c:when test="${appColor=='#1d7ffe'}">
                    <button type="button" class="weui_btn bg-blue" id="submitPhone">提交</button>
                </c:when>
                <c:when test="${appColor=='#FF5B06'}">
                    <button type="button" class="weui_btn bg-yellow" id="submitPhone">提交</button>
                </c:when>
                <c:otherwise>
                    <button type="button" class="weui_btn bg-red" id="submitPhone">提交</button>
                </c:otherwise>
            </c:choose>

        </div>
    </form>

</div>
<div class="toast">
	<div class="toastbody">
		<img src="/img/authentication/loading.gif">
		<p>数据处理中</p>
	</div>
	<div class="toastbg"></div>	
</div>
<script type="text/javascript">

      // 上传证件照开始 
	inputchage('#file_input', 'result', 'img1')
	inputchage('#file_input2', 'result2', 'img2')
	inputchage('#file_input3', 'result3', 'img3')
	inputchage('#file_input4', 'result4', 'img4')
	
	function inputchage(fileid, result, img) {
	if(!formData) {
		formData = new FormData();
		formData.append("file", $(fileid)[0].files[0]);
	}		
	 document.querySelector(fileid).addEventListener('change', function () {
		var _this = this;
        var file = _this.files[0];
		if(!/image\/\w+/.test(file.type)){
			alert("请确保文件为图像类型");
			return false;
		}		
		lrz(file)
		.then(function (rst) {
			// 处理成功会执行
			console.log(rst); 
			var str = '<img id="'+img+'" src="'+rst.base64+'" />'
			$("#"+result).css({"background-image":"none"}).html(str) 
		})
		.catch(function (err) {
			// 处理失败会执行
		})
		.always(function () {
			// 不管是成功失败，都会执行
		});		 
	 });
	}
	
    $("#submitPhone").click(function () {		
        $(".toast").addClass("show");
        var src1 = $("#img1").attr('src');
        var src2 = $("#img2").attr('src');
        var src3 = $("#img3").attr('src');
        var src4 = $("#img4").attr('src');

        var inputValue = document.getElementById("hidden5").value;
        var inputValue2 = document.getElementById("hidden6").value;
        var inputValue3 = document.getElementById("hidden7").value;
        var inputValue5 = document.getElementById("hidden9").value;
        var inputValue6 = document.getElementById("hidden10").value;

        if (src1 == "" || src3 == "" || src1 == undefined || src3 == undefined) {
            $('body').toast({
                position: 'fixed',
                content: '请上传必要证件照片！',
                duration: 3000,
                isCenter: true,
                background: 'rgba(230,0,0,0.5)',
                animateIn: 'bounceIn-hastrans',
                animateOut: 'bounceOut-hastrans',
            });
            $(".toast").css({"display":"none"});
            return false;
        }
        /*$(".toast").css({"display":"block"});*/
        $.ajax({
            url: '/auth/user/authentication/authIdPhoto.jhtml',
            async: false,
            type: 'post',
            dataType: 'json',
            data: {
                src1: src1,
                src2: src2,
                src3: src3,
                src4: src4,
                requestToken: inputValue,
                type: inputValue2,
                appId: inputValue3,
                phone: inputValue5,
                platform: inputValue6
            },
            success: function (result) {
				$(".toast").removeClass("show");
                if (result.code == 200) {
                    var token = result.datas.token;
                    var type = result.datas.type;
                    var appId = result.datas.appId;
                    var phone = result.datas.mobile;
                    var platform = result.datas.platform;

                    window.location.href = "/auth/authentication/status.jhtml?token=" + token + "&appId=" + appId + "&type=" + type + "&mobile=" + phone + "&platform=" + platform);
                    // $("#userFormJson").submit();
                     

                } else if (result.code == 40101) {
                    $('body').toast({
                        position: 'fixed',
                        content: result.message,
                        duration: 3000,
                        isCenter: true,
                        background: 'rgba(230,0,0,0.5)',
                        animateIn: 'bounceIn-hastrans',
                        animateOut: 'bounceOut-hastrans',
                    });
                }
            },
            error: function (e) {
                console.log('请求失败');
                console.log(e);
            }
        });


        /*$.ajax({
            //使用servlet中的post方法
           type: "post",
           url: "/auth/user/authentication/authIdPhoto.jhtml",
           data: {
               src1: src1,
               src2: src2,
               src3: src3,
               src4: src4,
               requestToken:inputValue
           },
           statusCode: {
              404: function() {
                  alert("找不到该页面");//失败报错
              }
           },
           success: function(data) {
               var token1 = data.token;
               // $.ajax({
               //     type: "post",
               //     url: "/auth/authentication/status.jhtml",
               //     data: {
               //         token1: token1
               //     },
               // });
               window.location.href="http:www.baidu.com";
           }

        });*/
    });
</script>
</body>
</html>