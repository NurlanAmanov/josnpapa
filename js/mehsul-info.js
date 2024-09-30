const url = window.location.search.split("&")
const catagorss = url[0].split("=").at(-1)
const id = url[1].split("=").at(-1)
const   MEHSUL = []
const contentinfo = document.getElementById("contentinfo")
const minisebet = document.getElementById("minisebet")
const minimobsebet = document.getElementById("minimobsebet")
fetch(`https://papajson.vercel.app/${catagorss}/${id}`)
    .then(res => res.json())
    .then(data => {
        MEHSUL.push(data)
        infoadd()
    })

    // <div class="secim-pizza w-[80%] py-4">
    //             <select onchange="deyispizza()" id="enevi" style="display: block;" class="bg-[#AD0F14] outline-none text-[15px] text-white w-full h-[30px]">
    //                 <option value="5.5">Mini pizza, 15 sm - 5.5 M</option>
    //                 <option value="11">Kiçik, 23 sm - 11 M</option>
    //                 <option value="17">Orta, 30 sm - 17 M</option>
    //                 <option value="21">Böyük, 35 sm - 21 M</option>
    //             </select>
    //             <select onchange="deyispizza()" style="display: none;" id="nazik" class="bg-[#AD0F14] outline-none text-[15px] text-white w-full h-[30px]">
    //                 <option value="11">Kiçik, 23 sm - 11 M</option>
    //                 <option value="17">Orta, 30 sm - 17 M</option>
    //                 <option value="21">Böyük, 35 sm - 21 M</option>
    //             </select>


    //         </div>

//     <div class="secim-mehsul flex py-2 flex-row w-[80%] items-center justify-center">
//     <span id="enenvibg" onclick="enevigo()" class="bg-[#0F9675] text-black rounded-l-md flex items-center text-[15px] justify-center w-[60%] h-[30px]">Ənənəvi</span>
//     <span id="nazikbg" onclick="nazikgo()" class="bg-[#F1F1F1] text-black w-[60%] h-[30px] flex items-center rounded-md text-[15px] justify-center">Nazik</span>
// </div>

function infoadd() {

    MEHSUL.map(item => {
        contentinfo.innerHTML = `
        
        <div class="mehsul-infos flex items-center gap-5 lg:flex-row lg:items-start justify-center lg:justify-around flex-col w-full lg:p-6 ">
            <div class="info-left flex lg:w-[20%] w-[80%]  items-start mt-12 lg:h-[full] justify-start p-3 gap-2 flex-col shadow-lg shadow-zinc-600">
                <h2 class="text-[30px] font-bold">${item.title}</h2>
                <p class="text-[19px] font-bold">Tərkib hissəsi: ${item.composition}</p>
                <p class="text-[18px] uppercase font-bold"> category : ${item.category}</p>
               
                
               
                
       <div class="add-say flex items-start w-full justify-start flex-row">
    <button onclick="hesabla(-1)" id="btnDec" class="w-[29px] h-[29px] bg-[#F1F1F1] text-black text-[19px] font-bold">-</button>
    <span id="countDiv" class="bg-[#F1F1F1] flex items-center justify-center w-[49px] h-[29px] mx-4 text-black text-[19px] font-bold">1</span>
    <button onclick="hesabla(1)" class="w-[29px] h-[29px] bg-[#0F9675] text-white text-[19px] font-bold">+</button>
</div>
<p id="qiymetntc" class="text-[19px] font-bold" data-price="${item.price}">Qiymət : ${item.price} ₼</p>

            
                <span onclick="addbbasket('${item.img}', '${item.title}', ${item.price}, '${item.id}')" class="bg-[#0F9675] cursor-pointer rounded-md text-white font-bold p-[5px]">Bunu seç</span>
            </div>
            <div class="info-rght lg:w-[30%] w-[90%] flex items-start rounded-md shadow-lg shadow-slate-800 mb-12 ">
                <img src="${item.img}" class="w-[100%] object-cover" alt="">
            </div>
        </div>`
    })

   
}

function hesabla(arg) {
    const countDiv = document.querySelector("#countDiv"); 
    const qiymetntc = document.getElementById('qiymetntc'); 
    const umumhesabim = parseFloat(qiymetntc.getAttribute('data-price')); 

    let deyer = arg + parseInt(countDiv.innerHTML); 

    
    if (deyer < 1) {
        deyer = 1;
        document.getElementById("btnDec").disabled = true;
    } else {
        document.getElementById("btnDec").disabled = false;
    }

   
    countDiv.innerHTML = deyer;


    const totalPrice = (umumhesabim * deyer).toFixed(2);


    qiymetntc.innerHTML = `Qiymət : ${totalPrice} ₼`;
}

let bbbasket = []

let bbasket = [];


function addbbasket(img, title, price, id) {
    const countDiv = document.querySelector("#countDiv");
    const obj = {
        id,
        img,
        title,
        price,
        count: +countDiv.innerHTML, 
        opsi: price * +countDiv.innerHTML 
    };

 
    const element = bbasket.find(item => item.id == id);

    if (!element) {
      
        bbasket.push(obj);
    } else {
       
        element.count += +countDiv.innerHTML;
        element.opsi = element.price * element.count; 
    }

    say.innerHTML = "Səbətinizdə məhsulların sayı: " + bbasket.reduce((total, item) => total + item.count, 0);
    saydes.innerHTML = "Səbətinizdə məhsulların sayı: " + bbasket.reduce((total, item) => total + item.count, 0);

    const tamcem = bbasket.reduce((total, item) => total + item.opsi, 0);
    umummebcem.innerHTML = "Ümumi məbləğ: " + tamcem.toFixed(2) + '₼';
    mobumcem.innerHTML = "Ümumi məbləğ: " + tamcem.toFixed(2) + '₼';
    minisebet.innerHTML=bbasket.reduce((total, item) => total + item.opsi, 0).toFixed(2)+'₼';
    minimobsebet.innerHTML=bbasket.reduce((total, item) => total + item.opsi, 0).toFixed(2)+'₼';

    sebeteYaz();
}


function sebeteYaz() {
   
    const meshullarelavesi = document.getElementById("meshullarelavesi");
    const desktopmehsuleal = document.getElementById("desktopmehsuleal");
    meshullarelavesi.innerHTML = "";
    desktopmehsuleal.innerHTML = '';

   
    bbasket.map(item => {
        meshullarelavesi.innerHTML += `
           <div class=" border-[1px] flex ">
                <img onclick="deletebbasket('${item.id}')" class="w-[40%]" src="${item.img}" alt="">
                <div>
                   <p>Say: ${item.count} </p>
                    <p>Ad: ${item.title} </p>
                    <p>Qiymət: ${item.opsi.toFixed(2)} ₼</p>
                </div>
            </div>
        `;

        desktopmehsuleal.innerHTML += `
           <div class=" border-[1px] flex ">
                <img onclick="deletebbasket('${item.id}')" class="w-[40%]" src="${item.img}" alt="">
                <div>
                    <p>Say: ${item.count} </p>
                    <p>Ad: ${item.title} </p>
                    <p>Qiymət: ${item.opsi.toFixed(2)} ₼</p>
                </div>
            </div>
        `;
    });
}


function deletebbasket(id) {
  
    bbasket = bbasket.filter(item => item.id !== id);

    
    sebeteYaz();

    
    say.innerHTML = "Səbətinizdə məhsulların sayı: " + bbasket.reduce((total, item) => total + item.count, 0);
    saydes.innerHTML = "Səbətinizdə məhsulların sayı: " + bbasket.reduce((total, item) => total + item.count, 0);
    minisebet.innerHTML=bbasket.reduce((total, item) => total + item.opsi, 0).toFixed(2)+'₼';

    const tamcem = bbasket.reduce((total, item) => total + item.opsi, 0);
    umummebcem.innerHTML = "Ümumi məbləğ: " + tamcem.toFixed(2) + '₼';
    mobumcem.innerHTML = "Ümumi məbləğ: " + tamcem.toFixed(2) + '₼';
}

