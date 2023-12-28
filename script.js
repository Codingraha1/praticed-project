const a="h4kesq7JlEYCE6RMKt3YXkVDU6h_6zVlT12XsR5caPQ";
const searching_image=document.querySelector('#search_input');
const form_select=document.querySelector("form");
const all_images=document.querySelector(".contain_all_images");
const show_more=document.querySelector("#show_more")
let input_data="";
let page=1;

async function searchIMages(){
    input_data=searching_image.value;
    const url=`https://ani.unsplash.com/search/photos?page=${page}&query=${input_data}&client_id=${a}`;


    const response=await fetch(url);
    const data=await response.json();

    const results=data.results;
}


if(page===1){
 all_images.innerHTML="" ;

}

results.map((result)=>{
const ImageWrapper=document.createElement('div') 
ImageWrapper.classList.add("first_image");
const image=document.createElement("img");
image.src=result.urls.small;
image.alt=result.alt_description;
const image_link=document.createElement("a");
image_link.href=result.links.html;
image_link.target="_blank";
image_link.textContent=result.alt_description;
 

imageWrapper.appendChild(image);
imageWrapper.appendChild(image_link);
all_images.appendChild(ImageWrapper);
    
});


page++;
 if(page>1){
    show_more.style.display="block";
 }



form_select.addEventListener("submit",(Event)=>{
  Event.preventdefault();
  page=1;
  searchIMages();
});

form_select.addEventListener("click",(Event)=>{
    Event.preventdefault();
    page=1;
    searchIMages();
  });





