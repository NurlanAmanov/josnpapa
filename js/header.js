const catagory=[]


fetch("http://localhost:3000/category")

fetch("http://localhost:3000/category")
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
