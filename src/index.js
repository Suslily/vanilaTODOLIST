import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得してリセット
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // alert(inputText);
  createIncompleteList(inputText);
};
// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加
const createIncompleteList = (text) => {
  // 完了ボタンを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(div.parentNode);

    // 完了リストに追加する
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    const p = document.createElement("p");
    p.innerText = text;
    addTarget.appendChild(p);
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    addTarget.appendChild(backButton);

    backButton.addEventListener("click", () => {
      //戻すボタンの親要素を全て削除
      const deleteTarget = addTarget;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストを取得
      const text = addTarget.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // console.log(addTarget);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタンを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(div.parentNode);
  });

  // pを作成
  const p = document.createElement("p");
  p.innerText = text;

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
