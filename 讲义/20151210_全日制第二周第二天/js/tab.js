//���ڱ��table���Դ���һЩ��ȡ������
//tBodies:��ȡ�ĵ�ǰ����� �����е�tbody,��ȡ����һ��Ԫ�ؼ���
//rows:��ȡ���е��У�tr��
//tHead:��ȡtab��Ψһ��һ��tHead
//cells:��ȡÿһ�������е��У�TD/TH��


var oTab=document.getElementById("tab");
var tBoby=oTab.tBodies[0];//tBodies�Ǳ���Դ������ԡ�


var rows=tBoby.rows;
var tHead=oTab.tHead;
var oRows = tBoby.rows;
var oThs=tHead.rows[0].cells;

//1,���ݰ�->��Json.js.4l.
function bindData(){
    var frg = document.createDocumentFragment();
    for(var i=0;i<data.length;i++)
}