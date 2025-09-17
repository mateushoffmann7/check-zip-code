//https://viacep.com.br/ws/01001000/json/

const buttonAdd = document.querySelector(".button-add");
const inputCep = document.querySelector(".input-cep");
const listUl = document.querySelector(".list-ul");

const handleClickAdd = async () => {
  try {
    if (inputCep.value !== "") {
      let response = await fetch(
        `https://viacep.com.br/ws/${inputCep.value}/json`
      );
      let json = await response.json();
      if (json.cep === undefined) {
        throw new Error("");
      }
      const address = json.logradouro !== "" ? json.logradouro : `não definida`;
      const newLi = document.createElement("li");
      newLi.innerHTML = `O CEP ${json.cep} é do estado ${json.estado}, cidade ${json.localidade} e sua rua é ${address}.`;
      newLi.classList.add("newLi");
      listUl.append(newLi);
      inputCep.value = "";
    }
  } catch (error) {
    alert("CEP inexistente ou incorreto...");
  }
};

const handleEnterAdd = async (e) => {
  try {
    if (inputCep.value !== "" && e.key === "Enter") {
      let response = await fetch(
        `https://viacep.com.br/ws/${inputCep.value}/json`
      );
      let json = await response.json();
      if (json.cep === undefined) {
        throw new Error("");
      }
      const address = json.logradouro !== "" ? json.logradouro : `não definida`;
      const newLi = document.createElement("li");
      newLi.innerHTML = `O CEP ${json.cep} é do estado ${json.estado}, cidade ${json.localidade} e sua rua é ${address}.`;
      newLi.classList.add("newLi");
      listUl.append(newLi);
      inputCep.value = "";
    }
  } catch (error) {
    alert("CEP inexistente ou incorreto...");
  }
};

const handleOnlyNumbers = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
};

buttonAdd.addEventListener("click", handleClickAdd);
inputCep.addEventListener("keyup", handleEnterAdd);
inputCep.addEventListener("input", handleOnlyNumbers);
