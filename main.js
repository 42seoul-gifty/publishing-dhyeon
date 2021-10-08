// 메뉴 모달창 예시
const modal = document.querySelector(".menu-modal");
const modalBody = document.querySelector(".menu-modal-body");

function onClickMenu() {
  modal.classList.toggle("show");
  modalBody.classList.toggle("show");
}

function onExitMenu() {
  modal.classList.toggle("show");
  modalBody.classList.toggle("show");
}

window.addEventListener("click", (e) => {
  e.target === modal ? onExitMenu() : false;
});

// 보내는분 연락처 정보 잘못 입력 했을때

const wrongnumModal = document.querySelector(".wrongnum-modal");
const wrongnumModalBody = document.querySelector(".wrongnum-modal-body");

function onWrongnumModal() {
  wrongnumModal.classList.toggle("show");
  wrongnumModalBody.classList.toggle("show");
}

window.addEventListener("click", (e) => {
  e.target === wrongnumModal ? onWrongnumModal() : false;
});

const wrongnumRewriteBtn = document.querySelector(".wrongnum-modal-body__btn");

wrongnumRewriteBtn.addEventListener("click", () => {
  onWrongnumModal();
});

const temp = document.querySelector(".test_button");

temp.addEventListener("click", () => {
  onWrongnumModal();
});
