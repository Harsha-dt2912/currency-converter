const base="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
const dropdown=document.querySelectorAll(".dropdown select");
const btn=document.querySelector(".button");
const fromcur=document.querySelector(".fr");
const tocur=document.querySelector(".t");
const msg=document.querySelector(".msg");
 for(let select of dropdown){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        select.append(newOption);
        if(select.name==="from" &&  currCode==="USD")
        {
            newOption.selected="selected";
        }
        else  if(select.name==="to" &&  currCode==="INR")
        {
            newOption.selected="selected";
        }

        }
        select.addEventListener("change" ,(evt)=>{
         flag(evt.target);
        }
        )
    }
    function flag(element){
        let currcode=element.value;
        let countrycode=countryList[currcode];
        let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
        let img=element.parentElement.querySelector("img");
        img.src=newsrc;
    }
btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
let amount=document.querySelector(".in");
let amtvalue=amount.value;
if(amtvalue===0 || amtvalue<1)
{
    amount.value="1";
}

const url=`${base}/${fromcur.value.toLowerCase()}/${tocur.value.toLowerCase()}.json`;
let response=await fetch(url);
let data=await response.json();
let rate=data[tocur.value.toLowerCase()];
let finalamt=amtvalue*rate;

msg.innerText=`${amtvalue}${fromcur.value}=${finalamt}${tocur.value}`;

})
 