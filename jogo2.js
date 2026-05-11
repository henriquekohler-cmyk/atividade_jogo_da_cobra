const colunas = 20;
const linhas = 20;
const pontos_por_comida = 10;

const velocidade = parseInt(localStorage.getItem("snake_velocidade")) || 130;

let cobra = [];
let direcao = {x: 1, y: 0};
let proximaDirecao = {x:1, y:0};
let comida = {x: 0, y: 0};
let potuacao = 0
let recorde = parseInt(localStorage.getItem("snake_recorde")) || 0;
let intervalo = null;
let emJogo = false;

//GRADE
const grade = document.getElementById("grade");
let celulas = [];

function criarGrade(){
    grade.innerHTML = "";
    celulas = [];

    for(let y = 0; y < linhas; y++){
        const linhas = [];

        for(let x = 0; x < colunas; x++){
            const celula = document.createElement("div");
            celula.className = "celula";
            grade.appendChild(celula);
            linhas.push(celula);
        }
        celulas.push(linhas);
    }
}

function limparGrade(){
    for(let y = 0; y<linhas; y++){
        for(let x = 0; x < linhas; x++){
            celulas[x][y].className = "celula";
        }
    }
}

function renderizar(){
    limparGrade()
    celulas[comida.y][comida.x].classList.add("comida");

    for(let i = 1; i < cobra.length; i++){
        celulas[cobra[i].y][cobra[i].x].classList.add("cobra");
    }
    celulas[cobra[0].y][cobra[0].x].classList.add("cabeca");
}

function iniciar() {
    cobra = [
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 },
    ];

    direcao = { x: 1, y: 0 };
    proximaDirecao = { x: 1, y: 0 };
    potuacao = 0;
    emJogo = true;

    atualizarHUD();
    gerarComida();
    renderizar();
    esconderOverlay();

    if (intervalo) clearInterval(intervalo);
    intervalo = setInterval(tick, velocidade);
}

function reiniciar() {
    iniciar();
}

function tick() {
    direcao = { ...proximaDirecao };

    const novaX = cobra[0].x + direcao.x;
    const novaY = cobra[0].y + direcao.y;

    if (novaX < 0 || novaX >= colunas || novaY < 0 || novaY >= linhas) {
        encerrarJogo();
        return;
    }

    for (let i = 0; i < cobra.length; i++) {
        if (cobra[i].x === novaX && cobra[i].y === novaY) {
            encerrarJogo();
            return;
        }
    }

    cobra.unshift({ x: novaX, y: novaY });

    if (novaX === comida.x && novaY === comida.y) {
        pontuacao += pontos_por_comida;
        atualizarHUD();
        gerarComida();
    } else {
        cobra.pop();
    }

    renderizar();
}

function gerarComida() {
    let posicaoLivre = false;
    let novaComida;

    while (!posicaoLivre) {
        novaComida = {
            x: Math.floor(Math.random() * colunas),
            y: Math.floor(Math.random() * linhas)
        };

        posicaoLivre = true;

        for (let i = 0; i < cobra.length; i++) {
            if (cobra[i].x === novaComida.x && cobra[i].y === novaComida.y) {
                posicaoLivre = false;
                break;
            }
        }
    }
    comida = novaComida;
}

function mudarDirecao(tecla){
    if(tecla === "ArrowUp" && direcao.y != 1){
        proximaDirecao = {x: 0, y: -1};
    };

    if(tecla === "ArrowDown" && direcao.y != -1){
        proximaDirecao = {x: 0, y: 1};
    };

    if(tecla === "ArrowLeft" && direcao.x != 1){
        proximaDirecao = {x: -1, y: 0};
    };

    if(tecla === "ArrowRight" && direcao.x != -1){
        proximaDirecao = {x: 1, y: 0};
    };
}

document.addEventListener("keydown", (evento) => {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(evento.key)) {
        evento.preventDefault();
    }
    
        mudarDirecao(evento.key);
});

function atualizarHUD()
{
    document.getElementById("pontuacao").textContent = "Pontuação: " + pontuacao;
    document.getElementById("recorde").textContent = "Recorde: " + recorde;
}   

function encerrarJogo() {
    emJogo = false;
    clearInterval(intervalo);

    let novoRecorde = false;

    if (pontuacao > recorde) {
        recorde = pontuacao;
        localStorage.setItem("snake_recorde", recorde);
        novoRecorde = true;
    }

    document.getElementById("overlay-pontos").textContent = pontuacao + "pontos";
    document.getElementById("overlay-recorde").textContent = "Recorde: " + recorde;
    document.getElementById("overlay-recorde").classList.add("visivel");
    
}

function esconderOverlay() {
    document.getElementById("overlay").classList.remove("visivel")
}

criarGrade();
iniciar();