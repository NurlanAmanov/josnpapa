const url = window.location.search.split("=").at("-1")
const Data=[]
<<<<<<< HEAD
fetch(`https://papajson.vercel.app/${url}`)
=======
fetch(`https://papajonss.vercel.app/${url}`)
>>>>>>> 3d09d0a27f1c387f2ae0d45a9c9aa9293e2ae1c5
.then(res=>res.json())
.then(mehsulum=>{
    Data.push(...mehsulum)
    gomehsul()
})
.catch(err=>{
    alert("Məhsul tapılmadı...")
})

function gomehsul(){
    Data.map(item=>{
        mehsullar.innerHTML += `
           <div onclick="popup('${item.img}', '${item.title}', '${item.price}', '${item.id}')" class="mehsul-pizza  my-[10px] w-[95%] mx-auto lg:mx-0 lg:w-[20%] lg:my-[15px] lg:h-[350px]  ">
                        <div class="pizza-img">
                            <img src="${item.img}" class="w-full object-cover lg:w-[100%] h-[220px] " alt="">
                        </div>
                        <div class="title-pizza pt-2 flex justify-between">
                            <span class="text-[20px] font-bold">${item.title}</span>
                            <span class="bg-[#0F9675] cursor-pointer rounded-md text-white font-bold p-[5px]">Bunu seç</span>
                        </div>
                        <p class="text-[16px] pt-4">${item.composition}</p>
                    </div> `
                
    })
                
                }
