export const getMaterialHandled = (categoryname) => {
  const materialHandledData = {
    aluminiumdiecasting: [
      { id: 1, name: "A356" },
      { id: 2, name: "A380" },
      { id: 3, name: "ADC12" },
      { id: 4, name: "A413" },
      { id: 5, name: "A413" },
      { id: 6, name: "EN AC-46000" },
      { id: 7, name: "EN AC-46100" },
      { id: 8, name: "AlSi10Mg" },
    ],
    sandcasting: [
      { id: 1, name: "Steel Casting" },
      { id: 2, name: "Cr-Mo Castings" },
      { id: 3, name: "Manganese Steel Castings" },
      { id: 4, name: "Stainless Steel" },
      { id: 5, name: "Duplex Castings" },
      { id: 6, name: "Super Duplex Castings" },
      { id: 7, name: "Cast Iron" },
      { id: 8, name: "Hi-Cr Castings" },
      { id: 9, name: "Ni-Hard Casting" },
      { id: 10, name: "Gray Cast Iron" },
      { id: 11, name: "Ductile Iron/ SG Iron" },
      { id: 12, name: "Non Ferrous Casting" },
    ],
    investmentcasting: [
      { id: 1, name: "Alloy Steel" },
      { id: 2, name: "Stainless Steel" },
      { id: 3, name: "Copper Alloy" },
      { id: 4, name: "Nickel Alloy" },
      { id: 5, name: "Aluminum Alloy" },
      { id: 6, name: "Cobalt Alloy" },
    ],
    opendieforging: [
      { id: 1, name: "Ferrous" },
      { id: 2, name: "Non Ferrous" },
    ],
    closeddieforging: [
      { id: 1, name: "Ferrous" },
      { id: 2, name: "Non Ferrous" },
    ],
    cncmachining: [
      { id: 1, name: "Soft Material (up to 200 BHN)" },
      { id: 2, name: "Hard Material (201 - 500 BHN)" },
    ],
    conventionalmachining: [
      { id: 1, name: "Soft Material (up to 200 BHN)" },
      { id: 2, name: "Hard Material (201 - 500 BHN)" },
    ],
    equipmentfabrication: [
      { id: 1, name: "Normal Structural Steel - Grade E250 to E350" },
      { id: 2, name: "Stainless Steel" },
      { id: 3, name: "Special Alloy Steel" },
    ],
    sheetmetalfabrication: [
      { id: 1, name: "Normal Structural Steel - Grade E250 to E350" },
      { id: 2, name: "Stainless Steel" },
      { id: 3, name: "Special Alloy Steel" },
    ],
    structuralfabrication: [
      { id: 1, name: "Normal Structural Steel - Grade E250 to E350" },
      { id: 2, name: "Stainless Steel" },
      { id: 3, name: "Special Alloy Steel" },
    ],
    aluminiumextrusion: [
      { id: 1, name: "Al-Mg Alloy" },
      { id: 2, name: "Al-Cu Alloy" },
      { id: 3, name: "Al-Mn-Mg Alloy" },
      { id: 4, name: "Al-Cu-Mn-Mg-Zn Alloy" },
    ],
    plasticmolding: [
      { id: 1, name: "Polyethylene (PE)" },
      { id: 2, name: "Polypropylene (PP)" },
      { id: 3, name: "Poly Carbonate (PC)" },
      { id: 4, name: "Poly Vinyl Chloride (PVC)" },
      { id: 5, name: "Acrylonitrile Butadiene Styrene (ABS)" },
    ],
    injectionmolding: [
      { id: 1, name: "Thermoplastics (ABS, Polypropylene, Polystyrene, etc.)" },
      { id: 2, name: "Thermosetting Plastics (Polyurethane, Epoxy Resin)" },
      { id: 3, name: "Elastomers (Rubber-like Polymers)" },
      { id: 4, name: "Glass" },
    ],
  };

  return materialHandledData[categoryname] || [];
};
