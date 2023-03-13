var product=[
    {
        "id":1,
        "name":"SQUARE 1971 CHROMANCE",
        "price":248,
        "img":"https://images.ray-ban.com/is/image/RayBan/8056597753173__STD__shad__qt.png?impolicy=RB_Product&width=1024&bgc=%23f2f2f2",
        "description":"Polarized Blue",
        "qte" : 1
    },
    {
        "id":2,
        "name":"ERIKA CLASSIC",
        "price":155,
        "img":"https://images.ray-ban.com/is/image/RayBan/8053672565393__STD__shad__qt.png?impolicy=RB_Product&width=1024&bgc=%23f2f2f2",
        "description":"Brown gardient",
        "qte" : 1
    },
    {
        "id":3,
        "name":"AVIATOR CLASSIC",
        "price":160,
        "img":"https://images.ray-ban.com/is/image/RayBan/805289602057__STD__shad__qt.png?impolicy=RB_Product&width=1024&bgc=%23f2f2f2",
        "description":"Green classic",
        "qte" : 1

        
    }
]

const container = document.getElementById("container")

var el=document.createElement("table");
el.setAttribute("id","table");
container.append(el);
for(var i=0; i<product.length;i++)
{
    console.log(i);
    var tr=document.createElement("tr");
    tr.setAttribute("id",`tr${product[i].id}`);
    el.append(tr);

    
        var td=document.createElement("td");
        tr.append(td);
        var img=document.createElement("img");
        img.setAttribute("src",product[i].img)
        img.setAttribute("class","classimage")
       td.append(img);
         td=document.createElement("td");
        td.innerHTML=product[i].name;
        tr.append(td);
         td=document.createElement("td");
        td.innerHTML=product[i].description;
        tr.append(td);
         td=document.createElement("td");
        //  let price = document.getElementById()
        td.innerHTML=product[i].price;
        console.log(product[i].price)
        td.setAttribute("id",`prix${product[i].id}`)
        tr.append(td);
         td=document.createElement("td");
        var inn=document.createElement("input");
        
        tr.append(td);
        inn.setAttribute("id", `${product[i].id}`)
        let quantity = document.getElementById("qte")
        inn.setAttribute("type","number");
        inn.setAttribute("onClick",`total("${product[i].id}","total${product[i].id}")`)
        console.log(`"${product[i].id}"`)
        inn.setAttribute("min","1");
        inn.setAttribute("value",product[i].qte);
        td.append(inn);

        

        //xxxxxxxxxxxxxxxxxxx

        td=document.createElement("td");
        td.classList.add("icons")
        // var del=document.createElement("i");
        tr.append(td);
       

        //xxxxxxxxxxxxxxxxxxx

        let total=document.createElement("td");
        total.setAttribute("id",`total${product[i].id}`)
        tr.appendChild(total);
        total.innerHTML = product[i].price * product[i].qte;
        console.log("jk",quantity)
        // jaime icon
        let heart = document.createElement('i');
        heart.classList.add(['fa-heart']);
        heart.classList.add(['fa-regular']);
        td.append(heart);
        heart.addEventListener("click",function(){
            heart.classList.toggle('fa-solid')
            heart.style.color="red";
           
           

        })
        //heart.style.color = "purple"
            

        // delete item
        let btn =document.createElement("button");
        btn.setAttribute("id",`btn_${product[i].id}`)
        btn.setAttribute("onClick","btn_sup()");
        var del=document.createElement("i");
        btn.append(del)
        del.setAttribute("class","fa-solid fa-trash");
        td.append(btn);

        // var del=document.createElement("button");
        // tr.append(td);
        // del.setAttribute("value",product[i].id);
        // del.innerHTML="sup";
        // td.append(del);

        

}
//`prix${product[i].id}`
//`total${product[i].id}`
// const table = document.getElementById("table")
// const tr_total=document.createElement("tr");
// table.appendChild(tr_total)

// const td_total = document.createElement("td");
// tr_total.appendChild(td_total)



const div_total=document.createElement("div");
div_total.setAttribute("id", "total")
container.appendChild(div_total)
const text = document.createElement("p");
div_total.appendChild(text)
text.innerHTML = "total"
const span = document.createElement("span");
span.setAttribute("id", "span")
div_total.appendChild(span)


    
const span_total = document.getElementById("span")

function fatimaTotal (){
    var tototo=0;
    for(var j=1;j<=3;j++)
    {
        try {
            var total_id=`total${j}`;
        var s=document.getElementById(total_id).innerText;
        tototo+= parseInt(s);
        }
        catch(err) {
           
        }
        
       
       /* var p=parseInt(s)
        tototo+=p;*/
    }
    // alert(tototo);
    span_total.innerHTML = tototo + " $"
}
fatimaTotal ()
function total (b,c)
{
    let prix =product[b-1].price;
    console.log(prix)
    let qte=parseInt(document.getElementById(b).value);
    console.log(qte)
    document.getElementById(c).innerText=prix*qte;
    fatimaTotal ();

}

function btn_sup()
{
    // fatimaTotal ();
    var sup=document.getElementById(event.srcElement.id);
    (sup.parentElement).parentElement.remove();
    fatimaTotal()
    
}

