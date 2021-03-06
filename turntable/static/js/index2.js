import Vue from 'vue';
// import $ from "jQuery";

import 'jqueryplugin/jquery.datetimepicker.full.js';

import './plugin/jquery/jquery.datetimepicker.min.css';

var app = new Vue({
    el:"#app",
    data:{
        text:"this is index2.js ！！",
        msg:"测试 webpack --watch，npm run watch !!!!"
    },
    methods:{
        alertFn:function(){
            alert(this.text + "__wangmaomao");
        }
    }
});

$('.jquery_btn').on("click",function(){
    console.log("jquery_btn");
});

// 日期
$.datetimepicker.setLocale('zh');
$('#startDate').datetimepicker({        
    timepicker:false,
    format:'Y.m.d',
    parentID:"html",
    onShow:function( ct ){
        console.log(123)
        this.setOptions({
            maxDate:$('#endDate').val()?$('#endDate').val():false
        })
    },
});

$('#endDate').datetimepicker({
    timepicker:false,
    format:'Y.m.d',
    parentID:"html",
    onShow:function( ct ){
        this.setOptions({
            minDate:$('#startDate').val()?$('#startDate').val():false
        })
    },
});