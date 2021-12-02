// связь с кнопкой
const btn = document.querySelector("#btn-calculate");
btn.addEventListener("click", AllAcid);
btn.addEventListener("click", eEhyd);
btn.addEventListener("click", inputTableOil);
btn.addEventListener("click", summ);
// считаем К.Ч. и все данные по карбосилам
function AllAcid() {
  // получили значения с инпутов
  const WacidInput = document.querySelector("#Wacid").value;
  const WhydInput = document.querySelector("#Whyd").value;
  const WoilInput = document.querySelector("#Woil").value;
  const facidInput = document.querySelector("#facid").value;
  const AcidMolecularMassInput = document.querySelector("#Macid").value;
  const OilMolecularMassInput = document.querySelector("#Moil").value;

  // добавиил в таблицу входные данные (масса кислоты и масла)
  document.getElementById("Wa").innerHTML = WacidInput;
  document.getElementById("Wo").innerHTML = WoilInput;
  //  сумма масс входных

  function calceEacidSumeac(callback) {
    // вычисления и присвоения для кислот
    let Eacid = AcidMolecularMassInput * facidInput;
    let eacid = WacidInput / Eacid;
    let sumeac = Number(eacid) + Number(WoilInput / OilMolecularMassInput);
    let macid = WacidInput / AcidMolecularMassInput;

    // вывод в консоль
    // console.log(sumeac);
    // console.log(Eacid);
    // console.log(eacid);

    // вносим данные кислоты в таблицу
    document.getElementById("Ea").innerHTML = Eacid;
    document.getElementById("ea").innerHTML = eacid;
    document.getElementById("ma").innerHTML = macid;

    // вносим сумму моль.экв.кисл. в таблицу
    document.getElementById("sumea").innerHTML = sumeac;

    // колбэк
    callback(sumeac);
  }
  function AcNum(sumeac) {
    let Wdry = WhydInput + WoilInput + WacidInput;
    let AcNum = (56100 * sumeac) / Wdry;
    document.getElementById("Wd").innerHTML = Wdry;
    console.log(AcNum);
    document.getElementById("Acnum").innerHTML = AcNum;
  }
  calceEacidSumeac(AcNum);
}
//вносим масло в таблицу
function inputTableOil() {
  const WoilInput = document.querySelector("#Woil").value;
  const OilMolecularMassInput = document.querySelector("#Moil").value;
  let Eoil = OilMolecularMassInput;
  let eoil = WoilInput / OilMolecularMassInput;
  let moil = eoil;
  document.getElementById("Eo").innerHTML = Eoil;
  document.getElementById("eo").innerHTML = eoil;
  document.getElementById("mo").innerHTML = moil;

  let sumE;
}

// считаем все данные по гидроксидам
function eEhyd() {
  const WhydInput = document.querySelector("#Whyd").value;
  const fhydInput = document.querySelector("#fhyd").value;
  const HydMolecularMassInput = document.querySelector("#Mhyd").value;

  let mhyd = WhydInput / HydMolecularMassInput;
  let Ehyd = fhydInput * HydMolecularMassInput;
  let ehyd = WhydInput / Ehyd;

  // console.log(Ehyd);
  // console.log(ehyd);

  document.getElementById("Wh").innerHTML = WhydInput;
  document.getElementById("Eh").innerHTML = Ehyd;
  document.getElementById("eh").innerHTML = ehyd;
  document.getElementById("sumeh").innerHTML = ehyd;
  document.getElementById("mh").innerHTML = mhyd;
  // document.getElementById("summ").innerHTML = WoilInput;
}
