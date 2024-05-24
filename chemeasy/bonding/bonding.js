/*var elec_negativity = {
  "H": 2.20,
  "He": 0.00,
  "Li": 0.98,
  "Be": 1.57,
  "B": 2.04,
  "C": 2.55,
  "N": 3.04,
  "O": 3.44,
  "F": 3.98,
  "Ne": 0.00,
  "Na": 0.93,
  "Mg": 1.31,
  "Al": 1.61,
  "Si": 1.90,
  "P": 2.19,
  "S": 2.58,
  "Cl": 3.16,
  "Ar": 0.00,
  "K": 0.82,
  "Ca": 1.00,
  "Sc": 1.36,
  "Ti": 1.54,
  "V": 1.63,
  "Cr": 1.66,
  "Mn": 1.55,
  "Fe": 1.83,
  "Co": 1.88,
  "Ni": 1.91,
  "Cu": 1.90,
  "Zn": 1.65,
  "Ga": 1.81,
  "Ge": 2.01,
  "As": 2.18,
  "Se": 2.55,
  "Br": 2.96,
  "Kr": 3.00,
  "Rb": 0.82,
  "Sr": 0.95,
  "Y": 1.22,
  "Zr": 1.33,
  "Nb": 1.60,
  "Mo": 2.16,
  "Tc": 1.90,
  "Ru": 2.20,
  "Rh": 2.28,
  "Pd": 2.20,
  "Ag": 1.93,
  "Cd": 1.69,
  "In": 1.78,
  "Sn": 1.96,
  "Sb": 2.05,
  "Te": 2.10,
  "I": 2.66,
  "Xe": 2.60,
  "Cs": 0.79,
  "Ba": 0.89,
  "La": 1.10,
  "Ce": 1.12,
  "Pr": 1.13,
  "Nd": 1.14,
  "Pm": 1.13,
  "Sm": 1.14,
  "Eu": 1.14,
  "Gd": 1.12,
  "Tb": 1.10,
  "Dy": 1.10,
  "Ho": 1.10,
  "Er": 1.10,
  "Tm": 1.10,
  "Yb": 1.10,
  "Lu": 1.10,
  "Hf": 0.30,
  "Ta": 1.50,
  "W": 2.36,
  "Re": 1.90,
  "Os": 2.20,
  "Ir": 2.20,
  "Pt": 2.28,
  "Au": 2.54,
  "Hg": 2.00,
  "Tl": 1.62,
  "Pb": 2.33,
  "Bi": 2.02,
  "Po": 2.00,
  "At": 2.20,
  "Rn": 2.20,
  "Fr": 0.70,
  "Ra": 0.90,
  "Ac": 1.10,
  "Th": 1.30,
  "Pa": 1.50,
  "U": 1.30,
  "Np": 1.30,
  "Pu": 1.30,
  "Am": 1.30,
  "Cm": 1.30,
  "Bk": 1.30,
  "Cf": 1.30,
  "Es": 1.30,
  "Fm": 1.30,
  "Md": 1.30,
  "No": 1.30,
  "Lr": 1.30,
  "Rf": 0.00,
  "Db": 0.00,
  "Sg": 0.00,
  "Bh": 0.00,
  "Hs": 0.00,
  "Mt": 0.00,
  "Ds": 0.00,
  "Rg": 0.00,
  "Cn": 0.00,
  "Nh": 0.00,
  "Fl": 0.00,
  "Mc": 0.00,
  "Lv": 0.00,
  "Ts": 0.00,
  "Og": 0.00
}*/


function display(value) {
  var output = document.getElementById("input");
  var input = value;
  output.value += " " + input;
}

function calculateElectronegativityDifference(molecule) {

  // Split the molecule into individual elements (assuming single-letter symbols)
  // for (const char of molecule) {
  //   if (/[A-Z]/.test(char)) {
  //     elements[char] = (elements[char] || 0) + 1; // Count element occurrences
  //   }
  // }

  var elements = molecule.split(" ");


  const electronegativityData = {
    "H": 2.20,
    "He": 0.00,
    "Li": 0.98,
    "Be": 1.57,
    "B": 2.04,
    "C": 2.55,
    "N": 3.04,
    "O": 3.44,
    "F": 3.98,
    "Ne": 0.00,
    "Na": 0.93,
    "Mg": 1.31,
    "Al": 1.61,
    "Si": 1.90,
    "P": 2.19,
    "S": 2.58,
    "Cl": 3.16,
    "Ar": 0.00,
    "K": 0.82,
    "Ca": 1.00,
    "Sc": 1.36,
    "Ti": 1.54,
    "V": 1.63,
    "Cr": 1.66,
    "Mn": 1.55,
    "Fe": 1.83,
    "Co": 1.88,
    "Ni": 1.91,
    "Cu": 1.90,
    "Zn": 1.65,
    "Ga": 1.81,
    "Ge": 2.01,
    "As": 2.18,
    "Se": 2.55,
    "Br": 2.96,
    "Kr": 3.00,
    "Rb": 0.82,
    "Sr": 0.95,
    "Y": 1.22,
    "Zr": 1.33,
    "Nb": 1.60,
    "Mo": 2.16,
    "Tc": 1.90,
    "Ru": 2.20,
    "Rh": 2.28,
    "Pd": 2.20,
    "Ag": 1.93,
    "Cd": 1.69,
    "In": 1.78,
    "Sn": 1.96,
    "Sb": 2.05,
    "Te": 2.10,
    "I": 2.66,
    "Xe": 2.60,
    "Cs": 0.79,
    "Ba": 0.89,
    "La": 1.10,
    "Ce": 1.12,
    "Pr": 1.13,
    "Nd": 1.14,
    "Pm": 1.13,
    "Sm": 1.14,
    "Eu": 1.14,
    "Gd": 1.12,
    "Tb": 1.10,
    "Dy": 1.10,
    "Ho": 1.10,
    "Er": 1.10,
    "Tm": 1.10,
    "Yb": 1.10,
    "Lu": 1.10,
    "Hf": 0.30,
    "Ta": 1.50,
    "W": 2.36,
    "Re": 1.90,
    "Os": 2.20,
    "Ir": 2.20,
    "Pt": 2.28,
    "Au": 2.54,
    "Hg": 2.00,
    "Tl": 1.62,
    "Pb": 2.33,
    "Bi": 2.02,
    "Po": 2.00,
    "At": 2.20,
    "Rn": 2.20,
    "Fr": 0.70,
    "Ra": 0.90,
    "Ac": 1.10,
    "Th": 1.30,
    "Pa": 1.50,
    "U": 1.30,
    "Np": 1.30,
    "Pu": 1.30,
    "Am": 1.30,
    "Cm": 1.30,
    "Bk": 1.30,
    "Cf": 1.30,
    "Es": 1.30,
    "Fm": 1.30,
    "Md": 1.30,
    "No": 1.30,
    "Lr": 1.30,
    "Rf": 0.00,
    "Db": 0.00,
    "Sg": 0.00,
    "Bh": 0.00,
    "Hs": 0.00,
    "Mt": 0.00,
    "Ds": 0.00,
    "Rg": 0.00,
    "Cn": 0.00,
    "Nh": 0.00,
    "Fl": 0.00,
    "Mc": 0.00,
    "Lv": 0.00,
    "Ts": 0.00,
    "Og": 0.00
  }

  let maxDifference = 0;
  var element1, element2;

  for (i = 0; i < elements.length - 1; i++) {
    for (j = i + 1; j < elements.length; j++) {
      var difference = Math.abs(electronegativityData[elements[i]] - electronegativityData[elements[j]]);
      if (difference > maxDifference) {
        maxDifference = difference;
        element1 = elements[i];
        element2 = elements[j];
      }
    }
  }

  // Calculate electronegativity differences for all element pairs
  // for (var element1 in elements) {
  //   for (var element2 in elements) {
  //     if (element1 !== element2) {
  //       const difference = Math.abs(electronegativityData[element1] - electronegativityData[element2]);
  //       if (difference > maxDifference) {
  //         maxDifference = difference;
  //         element1 = element1;
  //         element2 = element2;
  //       }
  //     }
  //   }
  // }

  return { difference: maxDifference, elements: elements };
}

function determinePolarity(difference) {
  if (difference > 0.4 && difference <= 2) {
    return 'polar';
  } else if (difference <= 0.4) {
    return 'non-polar';
  } else if (difference > 2) {
    return 'ionic';
  }
  else {
    return 'Please Enter Single Character valid Elements only.'
  }
}

function main() {
  var output = document.getElementById("output");
  var element1 = document.getElementById("element1").value;
  var element2 = document.getElementById("element2").value;
  var molecule = element1 + " " + element2;

  if (!molecule) {
    output.innerHTML = "Please enter a valid molecule.";
    return;
  }

  var { difference, elements } = calculateElectronegativityDifference(molecule);
  var polarity = determinePolarity(difference);
  output.innerHTML = `${molecule} is ${polarity}.`;
}

function reset() {
  var display = document.getElementById("input");
  display.value = "";
}