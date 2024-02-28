const alumnos = [
    {
        nombre:"Valpardo",
        email:"santiago@gmail.com",
        materia:"Redes"
    },
    {
        nombre:"Laucha",
        email:"lauchaGPT@gmail.com",
        materia:"hasta el recreo"
    },
    {
        nombre:"Ezequiel",
        email:"presidente@gmail.com",
        materia:"Llegar temprano"
    },
    {
        nombre:"Sebastian",
        email:"sebaBicicleta@gmail.com",
        materia:"Bajar de cerrros"
    },
    {
        nombre:"Luca R",
        email:"luca@gmail.com",
        materia:"Before the"
    },
    {
        nombre:"Farid",
        email:"faridAlfajores@gmail.com",
        materia:"Cumplir apuestas"
    }
]

const btn = document.querySelector(".submit-btn");

for(let alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = ` 
    <div class="grid-content">
        <div class="name">${nombre}</div>
        <div class="email">${email}</div>
        <div class="subject">${materia}</div>
        <div class="week">
            <select class="select-week">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>
        </div>
    </div>`
    document.querySelector(".students-weeks").innerHTML += htmlCode;
}
let weekConfirm
btn.addEventListener("click",(e)=>{
    if(weekConfirm == 1){
        return console.log("Mesas ya confirmadas");
    } else {
        let confirmAnswer = confirm("Confirma las mesas?");
        if(confirmAnswer){
            weekConfirm = 1;
            let weeks = document.querySelectorAll(".week");
            let selectWeek = document.querySelectorAll(".select-week");
            for(let week in weeks){
                let semana = weeks[week];
                semana.innerHTML = selectWeek[week].value;
            }
        }
    }
    
})