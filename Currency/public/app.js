let img_URL = "https://flagsapi.com/PK/flat/64.png";
let dropdown = document.querySelectorAll("#dropdown");
let base_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.3.2/v1/currencies/eur.json";
let btn = document.getElementById("btn");
let amount = document.getElementById("amount")



for (select of dropdown){
    for (currCode in countryList){
        newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);

        if (select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }

        if (select.name === "to" && currCode === "PKR"){
            newOption.selected = "selected";
        }
    }   
}


let from = dropdown[0].value;
let to = dropdown[1].value





let updateFlag_value = function (){
    if (dropdown[0].value !=  from){
        currCode = dropdown[0].value;
        countryCode = countryList[currCode]
        img_URL = `https://flagsapi.com/${countryCode}/flat/64.png`
        document.getElementById("img1").src = img_URL;
        from = currCode;
    }else{
        currCode = dropdown[1].value;
        countryCode = countryList[currCode]
        img_URL = `https://flagsapi.com/${countryCode}/flat/64.png`
        document.getElementById("img2").src = img_URL;
        to = currCode;
    }
}

let getData = async (from,to)=>{
    let api_from = from.toLowerCase();
    let api_to = to.toLowerCase();
    base_URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.3.2/v1/currencies/${api_from}.json`;
    let rate = await fetch(base_URL);
    let data = await rate.json();
    let text_1 = `1 ${from} =`
    if (amount.value){
        text_1 = `${userInput} ${from} =`
        text_2 = `${data[api_from][api_to] * userInput} ${to}`
    }else{
        text_2 = `${data[api_from][api_to]} ${to}`
    } 
    document.getElementById("result-from").innerHTML = text_1
    document.getElementById("result-to").innerText = text_2    
}






dropdown[0].addEventListener("change",() => {
    updateFlag_value();
    getData(from,to)
})

dropdown[1].addEventListener("change",() => {
    updateFlag_value();
    getData(from,to)
})

btn.addEventListener("click",()=>{
    getData(from,to)
})

amount.addEventListener("change",()=>{
    userInput = amount.value
    getData(from,to)
})























// let updateFlag_value = function (element){
//     currCode = element.value;
//     countryCode = countryList[currCode]
//     img_URL = `https://flagsapi.com/${countryCode}/flat/64.png`
//     if (element.name === "from"){
//         document.getElementById("img1").src = img_URL;
//         from = currCode;
//     }else{
//         document.getElementById("img2").src = img_URL;
//         to = currCode;
//     }
// }


// dropdown[0].addEventListener("change",(evt) => {
//     updateFlag_value(evt.target);
//     getData(from,to)
// })

// dropdown[1].addEventListener("change",(evt) => {
//     updateFlag_value(evt.target);
//     getData(from,to)
// })



































