const datos =[
{img:'imagenes/450_1000.jpg',
               desc:"Colores"    
},
{img:'imagenes/450_1000.jpg',
               desc:"Colores"
},
{img:'imagenes/450_1000.jpg',
               desc:"Colores"
},
{img:'imagenes/450_1000.jpg',
               desc:"Colores"
},
]
let proyectos=document.querySelector('#seccion2');
console.log(proyectos);
proyectos.style.background = 'rgb(127, 255, 0)';

function galeria(src,desc) {
    let div= document.createElement("div");
    let img=document.createElement("img");
    img.src=src;
    let para= document.createElement('p');
    para.innerHTML=desc;
    div.appendChild(img);
    div.appendChild(para);
    proyectos.appendChild(div);
}

datos.forEach(({img,desc}) => {
    return galeria(img, desc);
});



