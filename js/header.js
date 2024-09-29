const catagory=[]

<<<<<<< HEAD
fetch("https://papajson.vercel.app/category")
=======
fetch("https://papajonss.vercel.app/category")
>>>>>>> 3d09d0a27f1c387f2ae0d45a9c9aa9293e2ae1c5
.then(res=> res.json())
.then(cats =>{
  
catagory.push(...cats)
addmenu()
})

const menudes=document.getElementById('menudes')
const menumobil=document.getElementById('menumobil')
function addmenu(){
    catagory.map(item=>{
        menudes.innerHTML+=`<li>
                    <a href="/pages/category.htm?category=${item.slug}" class="uppercase font-bold text-[26px]">${item.category}</a>
                </li>`
                menumobil.innerHTML+=`<li>
                    <a href="/pages/category.htm?category=${item.slug}" class="uppercase font-bold text-[18px]">${item.category}</a>
                </li>`

        
    })

}
