
$("#zengxiangbao").click(function () {
    $.ajax({
        type: "POST",
        //提交的网址
        url: "/blacklist/v1/free/filter.jhtml",
        data: {
            appId: "",
            signSystem: "",
            timestamp: "",
            name: "于士奇",
            idcard: "230230199405050210",
            phone: "18006489152"
        },
        datatype: "html",
        success: function (data) {
            $("#filterhtml").html(data);
        },
        error: function () {
        }
    });
});

$("#gongxinbao-taobao-button").click(function () {
    $.ajax({
        type: "POST",
        url: "/ecommerce/v1/gxb/getTaoBaoInfo.jhtml",
        data: {name: "于士奇", idcard: "230230199405050210", phone: "18006489152"},
        datatype: "html",
        success: function (data) {
            $("#gongxinbaohtml").html(data);
            console.log(data);
        },
        error: function () {
        }
    });
    $.ajax({
        type: "POST",
        url: "/test/v1/getZhongZhiChengInfo.jhtml",
        data: {
            name: "盛勇胜",
            idNo: "362330199612032097",
            mobile: "13870251667",
            loan_type: "1",
            device_type: "1",
            ip_address: "223.104.10.149",
            gps_longitude: "116.017106",
            gps_latitude: "28.676788"
        },
        datatype: "html",
        success: function (data) {
            console.log(data);
            $("#zhongzhichenghtml").html(data);
        },
        error: function () {
            console.log("这行不能出来");
        }
    });
});

$(function () {
    $.ajax({
        type: "POST",
        url: "/binding/v1/getBindingInfo.jhtml",
        data: {name: "赵辉", certNo: "372501197608020319", mobile: "15006389766"},
        datatype: "html",
        success: function (data) {
            $("#bqs-binding").html(data);
            console.log(data);
        },
        error: function () {
        }
    });
    $.ajax({
        type: "POST",
        url: "/loan/v1/getLoanInfo.jhtml",
        data: {name: "赵辉", certNo: "372501197608020319", mobile: "15006389766"},
        datatype: "html",
        success: function (data) {
            $("#bqs-loan").html(data);
            console.log(data);
        },
        error: function () {
        }
    });
    $.ajax({
        type: "POST",
        url: "/blacklist/v1/free/filter.jhtml",
        data: {name: "赵辉", idCard: "372501197608020319", mobile: "15006389766",pipeType: "bqs"},
        datatype: "html",
        success: function (data) {
            $("#bqs-black").html(data);
            console.log(data);
        },
        error: function () {
        }
    });
});



