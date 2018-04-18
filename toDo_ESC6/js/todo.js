
window.onload = function () {
  let todo_num = 0; //@TODO localの値を代入する
  // 常に使用しそうなDOMは最初に用意しておく
  var input_todo = document.getElementById("input_todo");
  var todo_list = document.getElementById("todo_list");
  var under_text = document.getElementById("under_text");

  //todoの入力のイベント
  input_todo.addEventListener("keypress", onKeyPress);
  input_todo.addEventListener("blur", addToDoList);
  function onKeyPress(e){
    if ( e.keyCode !== 13) {
      return false;
    }
    addToDoList();
  }
  function addToDoList(){
      if(input_todo.value == ""){
        return false;
      }
      todo_num++;

      var tr = document.createElement("TR");
      var td_check = document.createElement("TD");
      var td_text = document.createElement("TD");

      //todoのチェックボタン作成
      var chk = document.createElement("INPUT");
      chk.setAttribute("type", "checkbox");
      chk.setAttribute('name', 'todo_check');
      chk.value = "todo_" + todo_num;

      //todoの内容のテキストの作成
      var todo_text = document.createElement("SPAN");
      todo_text.innerHTML = value;

      //todoを削除するボタンの作成
      var btn = document.createElement("BUTTON");
      btn.setAttribute("type", "button");
      btn.value = todo_num;
      btn.onclick = deleteTodo(todo_num);

      //整形
      td_check.appendChild(chk);
      td_text.appendChild(todo_text);
      td_text.appendChild(btn);
      tr.appendChild(td_check);
      tr.appendChild(td_text);
      todo_list.appendChild(todo_tr);

      //input_todoの内容を
      input_todo.value = "";

      if(todo_num > 0){
          setAllCheckBtn(false);
      }
  }

  function deleteTodo(number){

  }
  function setAllCheckBtn(flg){
      if(flg){

      }else{
        
      }
  }
};