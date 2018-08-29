$(document).ready(function() {
    // 轮播图特效开始
    // Store variables
    var accordion_head = $('.accordion > li > a'),
        accordion_body = $('.accordion li > .sub-menu');
    // Open the first tab on load
    accordion_head.first().addClass('active').siblings().removeClass('active');
    $("#accordion_r ul li:gt(2)>.sub-menu").css("display","none")
    // Click function
    // accordion_head.on('click', function(event) {
    //     // Disable header links
    //     event.preventDefault();
    //     // Show and hide the tabs on click
    //     if ($(this).attr('class') != 'active'){
    //         accordion_body.slideUp('normal');
    //         $(this).next().stop(true,true).slideToggle('normal');
    //         accordion_head.removeClass('active');
    //         $(this).addClass('active');
    //     }
    // });
    $(".Div1_main div span").mouseover(function(){
        $(this).addClass("Div1_main_span1").siblings("span").removeClass("Div1_main_span1");
    }).mouseout(function(){
        $(this).removeClass("Div1_main_span1").siblings("span");
    })


    var
        index = 0 ;
    Swidth = 1000 ;
    timer = null ;
    len = $(".Div1_title span a").length ;

    function NextPage()
    {
        if(index>2)
        {
            index = 0 ;
        }
        $(".Div1_title span a").removeClass("Div1_title_a1").eq(index).addClass("Div1_title_a1");
        $(".Div1_main").stop(true, false).animate({left: -index*Swidth+"px"},600)
    }

    function PrevPage()
    {
        if(index<0)
        {
            index = 2 ;
        }
        $(".Div1_title span a").removeClass("Div1_title_a1").eq(index).addClass("Div1_title_a1");
        $(".Div1_main").stop(true, false).animate({left: -index*Swidth+"px"},600)
    }

    $(".Div1_title span a").each(function(a){
        $(this).mouseover(function(){
            index = a ;
            NextPage();
        });
    });
    //下一页
    $(".Div1_next img").click(function(){
        index++ ;
        NextPage();
    });
    //上一页
    $(".Div1_prev img").click(function(){
        index-- ;
        PrevPage();
    });
    // 轮播图特效结束
    // 特殊字段标注开始
    var _hdblacklist=$("#hd_blacklist").text().trim();
    var _zxbblacklist=$("#zxb_blacklist").text().trim();
    var _Riskscore=$("#Riskscore").text().trim();
    var _cardStatus=$("#cardStatus").text().trim();

    // 白骑士黑名单 捆版 贷款
    var _Idmonth1_1=$("#Idmonth1_1").text().trim();
    if (_Idmonth1_1>=15&&_Idmonth1_1<=25) {
        $("#Idmonth1_1").addClass("yellow");
    }
    else if (_Idmonth1_1>25) {
        $("#Idmonth1_1").addClass("red");
    }
    var _Idmonth1_2=$("#Idmonth1_2").text().trim();
    if (_Idmonth1_2>=15&&_Idmonth1_2<=25) {
        $("#Idmonth1_2").addClass("yellow");
    }
    else if (_Idmonth1_2>25) {
        $("#Idmonth1_2").addClass("red");
    }
    var _Idmonth1_3=$("#Idmonth1_3").text().trim();
    if (_Idmonth1_3>=15&&_Idmonth1_3<=25) {
        $("#Idmonth1_3").addClass("yellow");
    }
    else if (_Idmonth1_3>25) {
        $("#Idmonth1_3").addClass("red");
    }
    var _Idlong3_1=$("#Idlong3_1").text().trim();
    if (_Idlong3_1>0) {
        $("#Idlong3_1").addClass("red");
    }
    var _Idlong3_2=$("#Idlong3_2").text().trim();
    if (_Idlong3_2>0) {
        $("#Idlong3_2").addClass("red");
    }
    var _Idlong3_3=$("#Idlong3_3").text().trim();
    if (_Idlong3_3>0) {
        $("#Idlong3_3").addClass("red");
    }
    var _Idlong7_1=$("#Idlong7_1").text().trim();
    if (_Idlong7_1>=8) {
        $("#Idlong7_1").addClass("red");
    }
    else{
        $("#Idlong7_1").addClass("yellow");
    }
    var _Idlong7_2=$("#Idlong7_2").text().trim();
    if (_Idlong7_2>=8) {
        $("#Idlong7_2").addClass("red");
    }
    else{
        $("#Idlong7_2").addClass("yellow");
    }
    var _Idlong7_3=$("#Idlong7_3").text().trim();
    if (_Idlong7_3>=8) {
        $("#Idlong7_3").addClass("red");
    }
    else{
        $("#Idlong7_3").addClass("yellow");
    }



    if (_hdblacklist=='否') {
        $("#hd_blacklist span").addClass("green");
    }else {
        $("#hd_blacklist span").addClass("red");
    }
    if (_zxbblacklist=='未命中') {
        $("#zxb_blacklist span").addClass("green");
    }else if(_zxbblacklist=='黑名单'){
        $("#zxb_blacklist span").addClass("red");
    }else if(_zxbblacklist=='灰名单'){
        $("#zxb_blacklist span").addClass("yellow");
    }else {
        $("#zxb_blacklist span").addClass("yellow");
    }
    if(_Riskscore=='O'||_Riskscore=='P'||_Riskscore=='Q'){
        $("#Riskscore span").addClass("green");
    }else if(_Riskscore=='A'||_Riskscore=='B'||_Riskscore=='C'||_Riskscore=='D'||_Riskscore=='E'||_Riskscore=='F'){
        $("#Riskscore span").addClass("red");
    }else{
        $("#Riskscore span").addClass("yellow");
    }
    if (_cardStatus=="不活跃客户" || _cardStatus=="长期忠诚客户"||_cardStatus=="活跃上升客户"||_cardStatus=="活跃下降客户") {
        $("#cardStatus span").addClass("green");
    }else if(_cardStatus=="睡眠客户"){
        $("#cardStatus span").addClass("red");
    }else {
        $("#cardStatus span").addClass("yellow");
    }
    //百融支付行为 套现模型分类（仅信用卡）
    var _taoXianScore=$("#taoXianScore").text().trim();
    if(_taoXianScore=='高套现风险'||_taoXianScore=='中高套现风险'||_taoXianScore=='套现可能性极大'){
        $("#taoXianScore span").addClass("red");
    }else if(_taoXianScore=='中套现风险'||_taoXianScore=='中低套现风险'){
        $("#taoXianScore span").addClass("yellow");
    }else {
        $("#cardStatus span").addClass("green");
    }
    //百融支付行为 消费趋势得分
    var _xiaofeiScore=$("#xiaofeiScore").text().trim();
    if (_xiaofeiScore==' 1：（与行业相比）显著低' || _xiaofeiScore==" 2：（与行业相比）低 "||_xiaofeiScore==" 3：（与行业相比）相当") {
        $("#xiaofeiScore span").addClass("green");
    }else if(_xiaofeiScore==" 4：（与行业相比）高 "||_xiaofeiScore=="5：（与行业相比）显著高"||_xiaofeiScore==" 6：（与行业相比）不稳定"){
        $("#xiaofeiScore span").addClass("yellow");
    }else {
        $("#xiaofeiScore span").addClass("red");
    }
    // 正文标注开始

    // 正文内容标注开始
    var _testLive=$(".testLive>span").text().trim();
    var _age=$(".age>span").text().trim();
    var _huji=$(".huji>span").text().trim();
    var _minzu=$(".minzu>span").text().trim();
    var _Idlong3=$(".Idlong3>span").text().trim();
    var _Idlong7=$(".Idlong7>span").text().trim();
    var _Phonelong3=$(".Phonelong3>span").text().trim();
    var _Phonelong7=$(".Phonelong7>span").text().trim();
    var _Idmonth1=$(".Idmonth1>span").text().trim();
    var _Phonemonth1=$(".Phonemonth1>span").text().trim();
    var _Hitblacklist=$(".Hitblacklist>span").text().trim();
    var _Hitgreylist=$(".Hitgreylist>span").text().trim();
    var _loanSoftware=$(".loanSoftware>span").text().trim();
    var _Riskrate=$(".Riskrate>span").text().trim();
    var _Breachrate=$(".Breachrate>span").text().trim();
    var _Riskdetail=$(".Riskdetail").text().trim();
    var _repayStatus301=$(".repayStatus301>span").text().trim();
    var _repayStatus302=$(".repayStatus302>span").text().trim();
    var _internetLogo=$(".internetLogo>span").text().trim();
    var _registerTime=$(".registerTime>span").text();
    var _calls=$(".calls>span").text().trim();
    var _callsDuration=$(".callsDuration>span").text().trim();
    var _quiteStatus=$(".quiteStatus>span").text().trim();
    var _thirdContact=$(".thirdContact>span").text().trim();
    var _internetLogo_contacts=$(".internetLogo_contacts>span").text();
    var _contacts_match=$(".contacts_match>span").text().trim();
    var _record_number=$(".record_number>span").text().trim();
    var _huluscore=$(".huluscore>span").text().trim();
    var _direct_black=$(".direct_black>span").text().trim();
    var _isBlack=$(".isBlack>span").text().trim();
    var _loanStatus=$(".loanStatus>span").text().trim();
    var _riskLevel=$(".riskLevel>span").text().trim();
    var _searchResult=$(".searchResult>span").text().trim();
    var _mechanR=$(".mechanR>span").text().trim();
    var _Sesame=$(".Sesame>span").text().trim();



    if (_testLive>=0.98) {
        $(".testLive>span").addClass("red");
    }
    if (_age>40) {
        $(".age>span").addClass("red");
    }
    if(_huji.indexOf('新疆','西藏')!=-1){
        $(".huji>span").addClass("red");
    }
    if (_minzu.indexOf('维吾尔','藏','内蒙')!=-1) {
        $(".minzu>span").addClass("red")
    }
    if (_Idlong3>0) {
        $(".Idlong3>span").addClass("red");
    }
    if (_Idlong7>0) {
        $(".Idlong3>span").addClass("red");
    }
    if (_Phonelong3>=8) {
        $(".Phonelong3>span").addClass("red");
    }else{
        $(".Phonelong3>span").addClass("orange");
    }
    if (_Phonelong7>=8) {
        $(".Phonelong7>span").addClass("red");
    }
    else{
        $(".Phonelong7>span").addClass("orange");
    }
    if (_Idmonth1>=15&&_Idmonth1<=25) {
        $(".Idmonth1>span").addClass("orange");
    }
    else if (_Idmonth1>25) {
        $(".Idmonth1>span").addClass("red");
    }
    if (_Phonemonth1>=15&&_Phonemonth1<=25) {
        $(".Phonemonth1>span").addClass("yellow");
    }
    else if (_Phonemonth1>25) {
        $(".Phonemonth1>span").addClass("red");
    }
    if (_Hitblacklist=="是") {
        $(".Hitblacklist>span").addClass("red");
    }
    if (_Hitgreylist=="是") {
        $(".Hitgreylist>span").addClass("yellow");
    }else{
        $(".Hitgreylist>span").removeClass("red");
    }
    if (_loanSoftware>5) {
        $(".loanSoftwar>span").addClass("red");
    }
    if (_Riskrate=='A'||_Riskrate=='B'||_Riskrate=='C'||_Riskrate=='D'||_Riskrate=='E'||_Riskrate=='F') {
        $(".Riskrate>span").addClass("red");
    }else{
        $(".Riskrate>span").addClass("yellow")
    }
    if (_Breachrate=="73.6%") {
        $(".Breachrate>span").addClass("red");
    }else if(_Breachrate=="51.8%"){
        $(".Breachrate>span").addClass("yellow");
    }
    if (_Riskdetail.indexOf('黑名单','违约')!=-1) {
        $(".Riskdetail").addClass("yellow");
    }
    if (_repayStatus301>3) {
        $(".repayStatus301>span").addClass("yellow");
    }
    if (_repayStatus302>0) {
        $(".repayStatus302>span").addClass("yellow");
    }
    if (_internetLogo.indexOf('中介')!=-1) {
        $(".internetLogo>span").addClass("yellow");
    }
    // 判断是否在3个月内
    function p(s) {
        return s < 10 ? '0' + s: s;
    }
    var myDate = new Date();
    //获取当前年
    var year=myDate.getFullYear();
    //获取当前月
    var month=myDate.getMonth()+1;
    //获取当前日
    var date=myDate.getDate();
    var h=myDate.getHours();       //获取当前小时数(0-23)
    var m=myDate.getMinutes();     //获取当前分钟数(0-59)
    var s=myDate.getSeconds();

    var now=year+'-'+p(month)+"-"+p(date)+" "+p(h)+':'+p(m)+":"+p(s);

    if (now-_registerTime>0) {
        // alert("111");
    }else{
        // alert("222");
    }
    // 3个月时间判断结束

    if (_callsDuration>1000) {
        $(".callsDuration>span").addClass("red");
    }
    if (_calls>3) {
        $(".calls>span").addClass("red");
    }
    if (_quiteStatus>=12&&_quiteStatus<=20) {
        $(".quiteStatus>span").addClass("yellow");
    }else if (_quiteStatus>20) {
        $(".quiteStatus>span").addClass("red");
    }
    if (_thirdContact<=20) {
        $(".thirdContact>span").addClass("yellow");
    }
    if (_internetLogo_contacts.indexOf('金融中介','律师','新闻媒体')!=-1) {
        $(".internetLogo_contacts>span").addClass("red");
    }
    if (_record_number>30) {
        $(".record_number>span").addClass("yellow");
    }
    if (_huluscore<10) {
        $(".huluscore>span").addClass("yellow");
    }
    if (_direct_black>0) {
        $(".direct_black>span").addClass("red");
    }
    if (_isBlack=="是") {
        $(".isBlack>span").addClass("red");
    }
    if (_loanStatus=="逾期") {
        $(".loanStatus>span").addClass("yellow");
    }
    if (_loanStatus=="正常"&&loanRecord>4) {
        $(".loanStatus>span").addClass("yellow");
    }
    if (_riskLevel=="A"||_riskLevel=="B") {
        $(".riskLevel>span").addClass("red");
    }else if (_riskLevel=="C"||_riskLevel=="D") {
        $(".riskLevel>span").addClass("yellow");
    }
    if (_searchResult=="建议拉黑") {
        $(".searchResult>span").addClass("red");
    }
    if (_mechanR=="是") {
        $(".mechanR>span").addClass("red");
    }
    if (_Sesame>350&&_Sesame<550) {
        $(".Sesame>span").addClass("red");
    }else if (_Sesame>=550&&_Sesame<=600) {
        $(".Sesame>span").addClass("yellow");
    }


    // 正文标注结束

});
