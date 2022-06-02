import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得してリセット
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // alert(inputText);

  // 完了ボタンを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  // 削除ボタンを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  completeButton.addEventListener("click", () => {
    alert("削除");
  });

  // pを作成
  const p = document.createElement("p");
  p.innerText = inputText;

  //li
  const li = document.createElement("li");

  //divを生成
  const div = document.createElement("div"); // liの下に各要素を追加

  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
