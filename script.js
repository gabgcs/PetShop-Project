
const formAgendamento = document.getElementById("formAgendamento");

const resultadoAgendamento = document.getElementById("resultadoAgendamento");

const data = document.getElementById("dataAgendamento").value;
const dataFormatada = data.split("-").reverse().join("/");

formAgendamento.addEventListener("submit", function(event) {
    event.preventDefault();

    const nomeCliente = document.getElementById("nomeCliente").value;
    const nomePet = document.getElementById("nomePet").value;
    const servico = document.getElementById("servico").value;
    const data = document.getElementById("dataAgendamento").value;
    const hora = document.getElementById("horaAgendamento").value;

    resultadoAgendamento.textContent = `Cadastro enviado com sucesso!
        Cliente: ${nomeCliente}
        Pet: ${nomePet}
        Serviço: ${servico}
        Data: ${dataFormatada}
        Horário: ${hora}`;
    resultadoAgendamento.classList.remove("d-none");

    formAgendamento.reset();
});

function atualizarRelogio() {
    const agora = new Date();
    const dataHora = agora.toLocaleString("pt-BR");

    document.getElementById("relogio").textContent = dataHora;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();