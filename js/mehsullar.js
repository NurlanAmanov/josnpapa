const urls = window.location.search.split("=").at("-1")
const Data=[]
fetch(`http://localhost:3000/${urls}`)



.then(res=>res.json())
.then(mehsulum=>{
    Data.push(...mehsulum)
    gomehsul()
})


function gomehsul(){
    Data.map(item=>{
        mehsullar.innerHTML += `
           <a href="/pages/mehsullarim.htm?catagory=${item.category}&id=${item.id}"  class="mehsul-pizza  my-[10px] w-[95%] mx-auto lg:mx-0 lg:w-[20%] lg:my-[15px] lg:h-[350px]  ">
                        <div class="pizza-img">
                            <img src="${item.img}" class="w-full object-cover lg:w-[100%] h-[220px] " alt="">
                        </div>
                        <div class="title-pizza pt-2 flex justify-between">
                            <span class="text-[20px] font-bold">${item.title}</span>
                            <span class="bg-[#0F9675] w-[30%] h-[30px] lg:h-[40px] text-center cursor-pointer rounded-md text-white font-bold p-[5px]">Bunu seç</span>
                        </div>
                        <p class="text-[16px] pt-4">${item.composition}</p>
                    </a> `
                
    })
                
 }
