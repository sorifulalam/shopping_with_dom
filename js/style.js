let serialNo= 0;
//first card
document.getElementById("first-card").addEventListener("click", function(){
    serialNo +=1
    const firsttitel = document.getElementById("first-name").innerText;
    const firstPrice = document.getElementById("first-price").innerText;
    const firstQuentity =document.getElementById("first-quantity").innerText;

    const priceTotal = parseInt(firstPrice) * parseInt(firstQuentity);
    
    // calling function 
     displayData(firsttitel,firstPrice,firstQuentity,priceTotal);

})
//second card
document.getElementById("second-card").addEventListener("click", function(){
    serialNo +=1
    const secondttitel = document.getElementById("secondttitel").innerText;
    const secondPrice = document.getElementById("secondPrice").innerText;
    const secondQuentity =document.getElementById("secondQuentity").innerText;

    const priceTotal = parseInt(secondPrice) * parseInt(secondQuentity);
    
    // calling function 
     displayData(secondttitel,secondPrice,secondQuentity,priceTotal);

})
//third card
document.getElementById("third-card").addEventListener("click", function(){
    serialNo +=1
    const thirdTitle = document.getElementById("third-title").innerText;
    const thirdPrice = document.getElementById("third-price").innerText;
    const thirdQuentity =document.getElementById("third-quantity").innerText;

    const priceTotal = parseInt(thirdPrice) * parseInt(thirdQuentity);
    
    // calling function 
     displayData(thirdTitle,thirdPrice,thirdQuentity,priceTotal);

})
//fourth card
document.getElementById("fourth-card").addEventListener("click", function(){
    serialNo +=1
    const fourthtitel = document.getElementById("fourth-titel").innerText;
    const fourthPrice = document.getElementById("fourth-price").innerText;
    const fourthQuentity =document.getElementById("fourth-quentity").innerText;

    const priceTotal = parseInt(fourthPrice) * parseInt(fourthQuentity);
    
    // calling function 
     displayData(fourthtitel,fourthPrice,fourthQuentity,priceTotal);

})

// display data 
function displayData(firsttitel,firstPrice,firstQuentity,priceTotal){
    const containerTr = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML=`
    <td>${serialNo}</td>
    <td>${firsttitel}</td>
    <td>${firstPrice}</td>
    <td>${firstQuentity}</td>
    <td>${priceTotal }</td>
    `
    containerTr.appendChild(tr);
}