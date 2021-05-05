offerBtns = document.querySelectorAll(".offer_btn");
offerSections = document.querySelectorAll(".about_offer");


for (let i = 0; i < offerBtns.length; i++) {
  offerBtns[i].addEventListener("click", () => {
        offerBtns.forEach((el) => {el.classList.remove('offer_active')});
        const clickedBtn = offerBtns[i];
        for (let j = 0; j < offerSections.length; j++) {
            const sectionId = offerSections[j]
            if(clickedBtn.id === sectionId.id){
                sectionId.classList.remove("hidden_offer");
                clickedBtn.classList.add("offer_active");
            } else {
                sectionId.classList.add("hidden_offer");
            }
        }
    })
}
        