//关于表格table中自带的一些获取的属性
//tBodies:获取的当前表格下 的所有的tbody,获取的是一个元素集合
//rows:获取所有的行（tr）
//tHead:获取tab中唯一的一个tHead
//cells:获取每一行中所有的列（TD/TH）


var oTab=document.getElementById("tab");
var tBoby=oTab.tBodies[0];//tBodies是表格自带的属性。


var rows=tBoby.rows;
var tHead=oTab.tHead;
var oRows = tBoby.rows;
var oThs=tHead.rows[0].cells;

//1,数据绑定->把Json.js.4l.
function bindData(){
    var frg = document.createDocumentFragment();
    for(var i=0;i<data.length;i++)
}