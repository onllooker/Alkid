// const btnCalculate = document.querySelector("#btn-calculate");
// // inputs
// const eHydroxylInput = document.querySelector("#eHydroxyl");
// const eAcidInput = document.querySelector("#eAcid");
// const massInput = document.querySelector("#mass");
// const molecularMassInput = document.querySelector("#molecularMass");
// const factorEquivalentInput = document.querySelector("#factorEquivalent");
// const massEquivalentInput = document.querySelector("#massEquivalent");

// let allElements = {};
// // получение значений с инпутов
// const getInputValue = (selector, key) => {
//   let value = Number(selector.value);
//   // добавление в общий объект элементов
//   allElements[key] = value;
//   return value;
// };

// // считаем избыток гидроксильных и карбосильных групп
// const calcR = () => {
//   const eHydroxyl = getInputValue(eHydroxylInput, "eHydroxyl");
//   const eAcid = getInputValue(eAcidInput, "eAcid");
//   // добавление в общий объект элементов
//   allElements["R"] = eHydroxyl / eAcid;
//   return eHydroxyl / eAcid;
// };

// const calcMassEquivalent = () => {
//   const molecularMass = getInputValue(molecularMassInput, "molecularMass");
//   const factorEquivalent = getInputValue(
//     factorEquivalentInput,
//     "factorEquivalentInput"
//   );
//   // добавление в общий объект элементов
//   allElements["massEquivalent"] = molecularMass * factorEquivalent;
//   massEquivalentInput.value = molecularMass * factorEquivalent;
// };

// // назначение значений массы и молекуряной массы в общий объект
// const setMass = () => {
//   const mass = getInputValue(massInput, "mass");
//   // const molecularMass = getInputValue(molecularMassInput, 'molecularMass');
//   // const factorEquivalent = getInputValue(factorEquivalentInput, 'factorEquivalent');
//   // const massEquivalent = getInputValue(massEquivalentInput, 'massEquivalent');
// };

// // произвести рассчет
// btnCalculate.addEventListener("click", () => {
//   setMass();
//   calcMassEquivalent();
//   calcR();
//   console.log(allElements);
//   // render
//   // if all'R' > 1
//   const result = document.querySelector(".result");
//   result.innerHTML = `
//   <div>Избыток гидроксильных групп: ${allElements["R"]}</div>

//   `;
// });

const WacidInput = document.getElementById("Wacid");
const WhydInput = document.getElementById("Whyd");
const WoilInput = document.getElementById("Woil");
const facidInput = document.getElementById("facid");
const fhydInput = document.getElementById("fhyd");
const AcidMolecularMassInput = document.getElementById("Macid");
const HydMolecularMassInput = document.getElementById("Mhyd");
const OilMolecularMassInput = document.getElementById("Moil");
console.log(WacidInput);
let allElements = {};
// получение значений с инпутов
const getInputValue = (selector, key) => {
  let value = Number(selector.value);
  // добавление в общий объект элементов
  allElements[key] = value;
  return value;
};

// считаем E гидроксильных и карбосильных групп ОПТИМИЗИРОВАТЬ
const calcEhyd = () => {
  const MHydroxyl = getInputValue(HydMolecularMassInput, "Mhyd");
  const fhyd = getInputValue(fhydInput);

  //   добавление в общий список элементов
  allElements[Ehyd] = MHydroxyl * fhyd;
  let Ehyd = MHydroxyl * fhyd;
  return Ehyd;
};
// считаем е гидроксильных групп
function calcehyd() {
  const Ehyd = calcEhyd();
  const fhyd = getInputValue(facidInput, "facid");
  //   добавление в общий список элементов
  allElements["ehyd"] = Ehyd * fhyd;
  let ehyd = Ehyd * fhyd;

  console.log(Ehyd);
  return ehyd;
}
calcehyd();
// считаем E кислот
const calcEacid = () => {
  const MAcid = getInputValue(AcidMolecularMassInput, "Macid");
  const facid = getInputValue(facidInput, "facid");
  //   добавление в общий список элементов
  allElements["Eacid"] = MAcid * facid;
  let Eacid = MAcid * facid;

  return Eacid;
};

const calceacid = () => {
  const facid = getInputValue(facidInput, "facid");
  //   добавление в общий список элементов
  allElements["eacid"] = Eacid * facid;
  let eacid = Eacid * facid;

  return eacid;
};

// считаем e гидроксильных групп
// const calcR = () => {
//   const eHydroxyl = getInputValue(eHydroxylInput, "eHydroxyl");
//   const eAcid = getInputValue(eAcidInput, "eAcid");
//   // добавление в общий объект элементов
//   allElements["R"] = eHydroxyl / eAcid;
//   return eHydroxyl / eAcid;
// };

// // считаем избыток гидроксильных и карбосильных групп
// const calcR = () => {
//   const eHydroxyl = getInputValue(eHydroxylInput, "eHydroxyl");
//   const eAcid = getInputValue(eAcidInput, "eAcid");
//   // добавление в общий объект элементов
//   allElements["R"] = eHydroxyl / eAcid;
//   return eHydroxyl / eAcid;
// };

// const calcMassEquivalent = () => {
//   const molecularMass = getInputValue(molecularMassInput, "molecularMass");
//   const factorEquivalent = getInputValue(
//     factorEquivalentInput,
//     "factorEquivalentInput"
//   );
//   // добавление в общий объект элементов
//   allElements["massEquivalent"] = molecularMass * factorEquivalent;
//   massEquivalentInput.value = molecularMass * factorEquivalent;
// };
