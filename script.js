let selectImgBtn = document.querySelector(".select-img-btn");
let postImgInput = document.querySelector(".post-img-input");
let selectedImgPreview = document.querySelector(".selected-img-preview");


selectImgBtn.addEventListener("click", e=>{
    postImgInput.click();
})

postImgInput.addEventListener("change", e=>{
    console.log(postImgInput.value);
    selectedImgPreview.setAttribute("src", postImgInput.value);
    selectedImgPreview.setAttribute("width", 200);
    selectedImgPreview.setAttribute("height", 200);
})