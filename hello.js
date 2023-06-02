function del(){
    var num=document.getElementById('display').value;
    num = num.substr(0, num.length - 1);
    document.getElementById('display').value=num;
  }

function equal() {
    var num = document.getElementById('display').value;
    num = eval(num);
    document.getElementById('display').value = num;
}