// ! Elements
const containerPhotos = document.querySelector(".photos");
const uploadPhotos = document.querySelector(".upload-photo");
const textToUploadPhotos = document.querySelector(".lable"); // перевір, що клас саме такий
let page = 1;
// ! API
function fetchPhotos() {
    return fetch(`https://pixabay.com/api/?key=53447549-63e4f657a81894568835d01b5&editors_choice&per_page=20&page=${page}&image_type=photo`).then((res)=>res.json());
}
// console.log(fetchPhotos());
uploadPhotos.addEventListener("click", (event)=>{
    textToUploadPhotos.textContent = "Upload more photos";
    page += 1;
    fetchPhotos().then((res)=>renderPhotos(res.hits));
});
function renderPhotos(array) {
    const item = array.map(({ largeImageURL })=>{
        return `<img src="${largeImageURL}" alt="">`;
    }).join("");
    containerPhotos.insertAdjacentHTML("beforeend", item);
}

//# sourceMappingURL=js-homework17-from-part4.816e7b21.js.map
