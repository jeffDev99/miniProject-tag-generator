let tagContainerEl = document.querySelector("#tagContainer");
let tagContainerInputEl = document.querySelector("#tagContainer input");
let tagCounterValue = document.querySelector(".tagCounterValue");
let removeAllTagsEl = document.querySelector(".removeAllTags");
let maxTagsCount = 10;
let tagsArray = [];

tagContainerInputEl.addEventListener("keydown", (e) => {
  if (
    e.key === "Enter" &&
    tagContainerInputEl.value &&
    tagsArray.length <= 10 &&
    !tagsArray.includes(tagContainerInputEl.value.toLowerCase())
  ) {
    if (
      Number(tagCounterValue.innerHTML) <= 10 &&
      Number(tagCounterValue.innerHTML) > 0
    ) {
      // first way
      /*  if (tagContainerInputEl.value.includes(",")) {
          tagContainerInputEl.value.split(",").forEach((splittedTag) => {
            addTagToArr(splittedTag);
            addTagToDom(tagsArray);
            tagsCounter();
          });
        } else {
          addTagToArr(tagContainerInputEl.value);
          addTagToDom(tagsArray);
          tagsCounter();
        }
        */
      // secound way
      tagContainerInputEl.value.split(",").forEach((splittedTag) => {
        addTagToArr(splittedTag.toLowerCase());
        addTagToDom(tagsArray);
        tagsCounter();
      });
    }
  }
});

removeAllTagsEl.addEventListener("click", () => {
  tagsArray = [];
  addTagToDom(tagsArray);
  tagsCounter();
});

function tagsCounter() {
  tagContainerInputEl.focus();
  tagCounterValue.innerHTML = maxTagsCount - tagsArray.length;
}
function addTagToArr(tagTitle) {
  tagsArray.push(tagTitle);
  tagContainerInputEl.value = "";
  tagContainerInputEl.focus();
}
function addTagToDom(tagArr) {
  tagContainerEl.querySelectorAll("li").forEach((liTag) => liTag.remove());
  tagArr.forEach((tag) => {
    tagContainerInputEl.insertAdjacentHTML(
      "beforebegin",
      `<li>${tag}
                  <i class="uit uit-multiply" onclick="tagRemove(this,'${tag}')"></i>
              </li>`
    );
  });
}
function tagRemove(iEl, tagValue) {
  let findedTagToRemove = tagsArray.findIndex((tag) => {
    return tag === tagValue;
  });
  tagsArray.splice(findedTagToRemove, 1);
  iEl.parentElement.remove();
  tagsCounter();
}
