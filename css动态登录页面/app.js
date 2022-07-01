const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
	//通过classList属性给对应的Dom添加css类名
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
	// 移除对应的css类名
  container.classList.remove("sign-up-mode");
});
