
const mehsullar = document.getElementById('mehsullar')
const sebetopen = document.getElementById('sebetopen')
const desktopsebet = document.getElementById('desktopsebet')
const numre = document.getElementById('numre')
const email = document.getElementById('email')
const meshullarelavesi=document.getElementById('meshullarelavesi')
const desktopmehsuleal=document.getElementById('desktopmehsuleal')
// const qiymetntc = document.getElementById('qiymetntc')
const popmehsulsebet = document.getElementById('popmehsulsebet')
const umummebcem = document.getElementById('umummebcem')
const mobumcem = document.getElementById('mobumcem')
const say = document.getElementById('say')
const saydes = document.getElementById('saydes')
function opensebet() {
    if (sebetopen.style.display === 'none' || sebetopen.style.display === '') {

        sebetopen.style.display = 'block'
    } else {
        sebetopen.style.display === 'none'
    }
}
function sebetbagla() {
    sebetopen.style.display = 'none'
}
function desktopopenn() {
    if (desktopsebet.style.display === 'none' || desktopsebet.style.display === '') {

        desktopsebet.style.display = 'block'
    } else {
        desktopsebet.style.display === 'none'
    }
}
function desclosd() {
    if (desktopsebet.style.display === 'block') {
        desktopsebet.style.display = 'none'
    } else {
        desktopsebet.style.display === 'block'
    }
}
function emailgo() {
    if (numre.style.display === "flex") {
        numre.style.display = "none"
        email.style.display = 'flex'
    } else {
        numre.style.display === "flex"

    }
}
function numgo() {

    if (numre.style.display === "none") {
        numre.style.display = "flex"
        email.style.display = 'none'
    } else {
        numre.style.display = "flex"
        email.style.display = 'none'

    }
}
function openLogin() {
    const overlay = document.getElementById('login-overlay');
    overlay.classList.remove('hidden');
}
function clossebet() {
    const overlay = document.getElementById('login-overlay');
    overlay.classList.add('hidden');
}

// function popup(img, name, price, id) {
//     popmehsulsebet.innerHTML = `
//     <div  class="mehsul-al">
//         <div class="bg-black opacity-50 fixed inset-0 z-[90]" onclick="desclosd()"></div> 
//         <div class="mehsulal-content px-2 flex bg-[#fff] fixed inset-0 z-[100] mx-auto top-[25%] lg:top-[30%] h-[67%] flex-col items-center justify-center w-[95%] lg:w-[25%]">
//             <div class="bagla-mehsul flex pb-2 items-end justify-end w-[80%]">
//                 <span onclick="secbagla()" class="text-[16px] font-bold">Bağla <i class="fa-solid fa-circle-xmark"></i></span>
//             </div>
//             <div class="img-mehsulal w-[320px] flex items-center justify-center">
//                 <img src="${img}" class="w-[90%] object-cover" alt="">
//             </div>
//             <div class="mehsul-al-info flex items-start justify-start">
//                 <p class="text-[22px] font-bold">${name}</p>
//             </div>
//             <div class="secim-mehsul flex py-2 flex-row w-[80%] items-center justify-center">
//                     <span id="enenvibg" onclick="enevigo()" class="bg-[#0F9675] text-black rounded-l-md flex items-center text-[15px] justify-center w-[60%] h-[30px]">Ənənəvi</span>
//                     <span id="nazikbg" onclick="nazikgo()" class="bg-[#F1F1F1] text-black w-[60%] h-[30px] flex items-center rounded-md text-[15px] justify-center">Nazik</span>
//              </div>
//                         <div class="secim-pizza w-[80%] py-4">
//                 <select onchange="deyispizza()" id="enevi" style="display: block;" class="bg-[#AD0F14] outline-none text-[15px] text-white w-full h-[30px]">
//                     <option value="5.5">Mini pizza, 15 sm - 5.5 M</option>
//                     <option value="11">Kiçik, 23 sm - 11 M</option>
//                     <option value="17">Orta, 30 sm - 17 M</option>
//                     <option value="21">Böyük, 35 sm - 21 M</option>
//                 </select>
//                 <select onchange="deyispizza()" style="display: none;" id="nazik" class="bg-[#AD0F14] outline-none text-[15px] text-white w-full h-[30px]">
//                     <option value="11">Kiçik, 23 sm - 11 M</option>
//                     <option value="17">Orta, 30 sm - 17 M</option>
//                     <option value="21">Böyük, 35 sm - 21 M</option>
//                 </select>
//             </div>
//             <div class="sebet-mehsulelave flex items-start lg:w-[80%] w-[90%]  justify-start py-4">
//                 <div class="add-say flex items-start w-full justify-start flex-row">
//                     <button onclick="hesabla(-1)" id="btnInc" class="w-[29px] h-[29px] bg-[#F1F1F1] text-black text-[19px] font-bold">-</button>
//                     <span id="countDiv" class="bg-[#F1F1F1] flex items-center justify-center w-[49px] h-[29px] mx-4 text-black text-[19px] font-bold">1</span>
//                     <button onclick="hesabla(1)" class="w-[29px] h-[29px] bg-[#0F9675] text-white text-[19px] font-bold">+</button>
//                 </div>
//                 <p id="qiymetntc" class="text-black text-[15px] font-bold">${price}₼</p>
//             </div>
//             <div class="sebet-at flex items-end justify-end w-[80%] py-4">
//                 <button class="bg-[#0F9675] cursor-pointer rounded-md text-white font-bold p-[5px]" onclick="addbbasket('${img}', '${name}', '${price}', '${id}')">Səbətə at  </button>
//             </div>
//         </div>
//     </div>`

// }



function opensebet() {
    if (sebetopen.style.display === 'none' || sebetopen.style.display === '') {

        sebetopen.style.display = 'block'
    } else {
        sebetopen.style.display === 'none'
    }
}
function sebetbagla() {
    sebetopen.style.display = 'none'
}
function desktopopenn() {
    if (desktopsebet.style.display === 'none' || desktopsebet.style.display === '') {

        desktopsebet.style.display = 'block'
    } else {
        desktopsebet.style.display === 'none'
    }
}
function desclosd() {
    if (desktopsebet.style.display === 'block') {
        desktopsebet.style.display = 'none'
    } else {
        desktopsebet.style.display === 'block'
    }
}
function emailgo() {
    if (numre.style.display === "flex") {
        numre.style.display = "none"
        email.style.display = 'flex'
    } else {
        numre.style.display === "flex"

    }
}
function numgo() {

    if (numre.style.display === "none") {
        numre.style.display = "flex"
        email.style.display = 'none'
    } else {
        numre.style.display = "flex"
        email.style.display = 'none'

    }
}
function openLogin() {
    const overlay = document.getElementById('login-overlay');
    overlay.classList.remove('hidden');
}
function clossebet() {
    const overlay = document.getElementById('login-overlay');
    overlay.classList.add('hidden');
}




// function hesabla(arg) {
//     const countDiv = document.querySelector("#countDiv")
//     let deyer = arg + +countDiv.innerHTML

//     if (deyer < 1) {
//         countDiv.innerHTML = 1
//         document.getElementById("btnInc").disabled = true
//     } else {
//         document.getElementById("btnInc").disabled = false
//         countDiv.innerHTML = deyer
//     }
//     deyispizza()
//     deyispizza2()
// }


// let bbbasket = []
// function addbbasket(img, name, price, id) {
 
//     const meshullarelavesi = document.getElementById("meshullarelavesi")
//     const obj = {
//         id, img, name, price, count: +countDiv.innerHTML, opsi: price * +countDiv.innerHTML
//     }

//     const element = bbasket.find(item => item.id == id)

//     if (!element) {
//         bbasket.push(obj)
//     } else {
//         element.count += +countDiv.innerHTML
//     }
//     say.innerHTML=  "Səbətinizdə məhsulların sayı: "+  bbasket.length
//     saydes.innerHTML=  "Səbətinizdə məhsulların sayı: "+  bbasket.length
//     sebeteYaz()
//     const tamcem = bbasket.reduce((total, item) => total + item.opsi, 0);

//     umummebcem.innerHTML= "Ümumi məbləğ:" + tamcem +'₼'
//     mobumcem.innerHTML= "Ümumi məbləğ:" + tamcem +'₼'
   

// }


// function sebeteYaz() {
//     meshullarelavesi.innerHTML = ""
//     desktopmehsuleal.innerHTML=''
//     bbasket.map(item => {
//         meshullarelavesi.innerHTML += `
//            <div class=" border-[1px] flex ">
//                 <img onclick="deletebbasket('${item.id}')" class="w-[40%]" src="${item.img}" alt="">
//                 <div>
//                    <p>Say: ${item.count} </p>
//                     <p>Ad:${item.name} </p>
//                     <p>Qiymət: ${item.opsi}</p>
//                 </div>
//             </div>
//         `
//         desktopmehsuleal.innerHTML += `
//            <div class=" border-[1px] flex ">
//                 <img onclick="deletebbasket('${item.id}')" class="w-[40%]" src="${item.img}" alt="">
//                 <div>
//                     <p>Say: ${item.count} </p>
//                     <p>Ad:${item.name} </p>
//                     <p>Qiymət: ${item.opsi}</p>
//                 </div>
//             </div>
//         `
//     })
// }



function secbagla() {
    popupDiv.innerHTML = ""
}

function deletebbasket(id) {
    bbasket = bbasket.filter(item => item.id != id);
    sebeteYaz()
}


// function toplam() {

//     const qiymet = bbasket.reduce((acc, item) => acc + item.opsi, 0);


//     const qiymetntc = document.getElementById('qiymetntc');
//     qiymetntc.innerHTML = `${qiymet.toFixed(2)}₼`; 
// }

function deyispizza() {
    const enevi = document.getElementById('enevi'); 
    const qiymetntc = document.getElementById('qiymetntc');
    const countDiv = document.getElementById('countDiv'); 
   



    let secilenQiymet = parseFloat(enevi.value); 
    let say = parseInt(countDiv.innerHTML, 10); 

  
    let toplamQiymet = secilenQiymet * say;

   
    qiymetntc.innerHTML = `${toplamQiymet.toFixed(2)}₼`; 
}



function deyispizza2() {
    const qiymetntc = document.getElementById('qiymetntc');
    const nazik = document.getElementById('nazik');
    const countDiv = document.getElementById('countDiv');

    let secilenQiymet = parseFloat(nazik.value); 
    let say = parseInt(countDiv.innerHTML, 10); 

    let toplamQiymet = secilenQiymet * say;
    qiymetntc.innerHTML = `${toplamQiymet}₼`; 
}


function secbagla() {
    document.querySelector('.mehsul-al').classList.add('hidden');
}
function nazikgo() {

    document.getElementById('enevi').style.display = 'none';
    document.getElementById('nazik').style.display = 'block';
    document.getElementById('nazikbg').style.background = '#0F9675';
    document.getElementById('enenvibg').style.background = '#F1F1F1';
}

function enevigo() {

    document.getElementById('nazik').style.display = 'none';
    document.getElementById('enevi').style.display = 'block';
    document.getElementById('enenvibg').style.background = '#0F9675';
    document.getElementById('nazikbg').style.background = '#F1F1F1';
}




