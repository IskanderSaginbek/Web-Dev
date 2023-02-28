export interface Product {
  image : string[];
  id: number;
  name: string;
  price: number;
  description: string;
  rating : number;
  likes : number;
  category : number;
  isRemoved : boolean;
  curimg : number;
}

export interface Category {
  id : number;
  name : string;
  description : string;

  image : string;
}

export const categories : Category[] =
  [
    {
      id : 0,
      name : "Resistors",
      description : "Carbon film resistive passive elements of different resistance values.",
      image : "images.jpg",
    },
    {
      id : 1,
      name : "Capacitors",
      description : "Through hole capacitors of different types.",
      image : "Capacitors_(7189597135).jpg",
    },
    {
      id : 2,
      name : "Transistors",
      description : "BJT and MOSFET transistors.",
      image : "transistors.png",
    },
    {
      id : 3,
      name : "ICs",
      description : "Integrated circuits 74LS series.",
      image : "Product-Img3.jpg",
    },
    {
      id : 4,
      name : "Diodes",
      description : "LEDs, general purpose and Zener diodes.",
      image : "Different-types-of-Diodes.jpg",
    },
  ];

export const products : Product[] =
  [
    {
      image : ["61EpqrBkwhL._AC_SL1100_.jpg"],
      id : 0,
      name : "CF 220ohm",
      price : 1,
      description : "Carbon film resistor 220ohm.",
      rating : 5,
      likes : 0,
      category : 0,
      isRemoved : false,
      curimg : 0,
    },
    {
      image : ["s-l1600.jpg"],
      id : 1,
      name : "CF 330ohm",
      price : 1,
      description : "Carbon film resistor 330ohm.",
      rating : 5,
      likes : 0,
      category : 0,
      isRemoved : false,curimg : 0,
    },
    {
      image : ["image.jpg"],
      id : 2,
      name : "CF 47000ohm",
      price : 1,
      description : "Carbon film resistor 47000ohm.",
      rating : 5,
      likes : 0,
      category : 0,
      isRemoved : false,curimg : 0,
    },
    {
      image : ["s-l400.jpg"],
      id : 3,
      name : "CF 1Kohm",
      price : 1,
      description : "Carbon film resistor 1Kohm.",
      rating : 5,
      likes : 0,
      category : 0,
      isRemoved : false,curimg : 0,
    },
    {
      image : ["2cf27e50ecfeb6a6a5620a5869cf7cb4.jpg"],
      id : 4,
      name : "CF 10Kohm",
      price : 1,
      description : "Carbon film resistor 10Kohm.",
      rating : 5,
      likes : 0,
      category : 0,
      isRemoved : false,curimg : 0,
    },

    {
      image : ["ceramics_10PF_50V-1280x720.jpg","ceramic-disc-capacitor.jpg"],
      id : 5,
      name : "Ceramic disk 10pF",
      price : 1,
      description : "Ceramic disk capacitor 10pF.",
      rating : 5,
      likes : 0,
      category : 1,
      isRemoved : false,curimg : 0,
    },
    {
      image : ["understanding_ceramic_disc_capacitor_value-300_large.jpg","ceramic-disc-cap-5.jpg"],
      id : 6,
      name : "Ceramic disk 10000pF",
      price : 1,
      description : "Ceramic disk capacitor 10000pF.",
      rating : 5,
      likes : 0,
      category : 1,
      isRemoved : false,curimg : 0,
    },
    {
      image : ["Electrolytic-capacitor.jpg"],
      id : 7,
      name : "Electrolytic 47microF",
      price : 1,
      description : "Electrolytic 47microF 450V.",
      rating : 5,
      likes : 0,
      category : 1,
      isRemoved : false,curimg : 0,
    },
    {
      image : ["F5194059-01.jpg"],
      id : 8,
      name : "Electrolytic 100microF",
      price : 1,
      description : "Electrolytic 100microF 25V.",
      rating : 5,
      likes : 0,
      category : 1,
      isRemoved : false,curimg : 0,
    },
    {
      image : ["s-l500.jpg"],
      id : 9,
      name : "Plastic film capacitor 1000pF",
      price : 1,
      description : "Plastic film capacitor 1000pF 1000V.",
      rating : 5,
      likes : 0,
      category : 1,
      isRemoved : false,curimg : 0,
    },

    {
      image : ["bc212b.jpg"],
      id : 10,
      name : "BC212B",
      price : 1,
      description : "BJT PNP",
      rating : 5,
      likes : 0,
      category : 2,
      isRemoved : false,curimg : 0,
    },
    {
      image : ["s-l500 (1).jpg"],
      id : 11,
      name : "BC238C",
      price : 1,
      description : "BJT NPN",
      rating : 5,
      likes : 0,
      category : 2,
      isRemoved : false,curimg : 0,
    },
    {
      image : ["to92.jpg"],
      id : 12,
      name : "BC239",
      price : 1,
      description : "BJT PNP",
      rating : 5,
      likes : 0,
      category : 2,
      isRemoved : false,curimg : 0,
    },
    {
      image : ["31b7ljKPMqL._SY355_.jpg"],
      id : 13,
      name : "TIP31C",
      price : 1,
      description : "BJT NPN",
      rating : 5,
      likes : 0,
      category : 2,
      isRemoved : false,curimg : 0,
    },
    {
      image : ["AD258-2.jpg"],
      id : 14,
      name : "2N7000",
      price : 1,
      description : "MOSFET Enh. n-channel",
      rating : 5,
      likes : 0,
      category : 2,
      isRemoved : false,curimg : 0,
    },

    {
      image : ["F0307480-01.jpg","7400_Quad_2-input_NAND_Gates.png"],
      id : 15,
      name : "SN74LS00N",
      price : 1,
      description : "Quad 2-input NAND gate",
      rating : 5,
      likes : 0,
      category : 3,
      isRemoved : false,curimg : 0,
    },
    {
      image : ["F0307503-01.jpg","51ZClf8s3L-500x500.jpg"],
      id : 16,
      name : "SN74LS04N",
      price : 1,
      description : "Hex inverter",
      rating : 5,
      likes : 0,
      category : 3,
      isRemoved : false,curimg : 0,
    },
    {
      image : ["F0307519-01.jpg","61cgH-OT8FL.jpg","Dip_gate_package_5408-7408.jpg"],
      id : 17,
      name : "SN74LS08N",
      price : 1,
      description : "Quad 2-input AND gate",
      rating : 5,
      likes : 0,
      category : 3,
      isRemoved : false,curimg : 0,
    },
    {
      image : ["F0307569-01.jpg","7432pinout.png"],
      id : 18,
      name : "SN74LS32N",
      price : 1,
      description : "Quad 2-input OR gate",
      rating : 5,
      likes : 0,
      category : 3,
      isRemoved : false,curimg : 0,
    },
    {
      image : ["s-l1600 (1).jpg","7486_Quad_2-input_ExOR_Gates.png"],
      id : 19,
      name : "SN74LS86N",
      price : 1,
      description : "Quad 2-input XOR gate",
      rating : 5,
      likes : 0,
      category : 3,
      isRemoved : false,curimg : 0,
    },

    {
      image : ["41JWxeWy7rL.jpg"],
      id : 20,
      name : "1N4001",
      price : 1,
      description : "Diode 50V 0.7V",
      rating : 5,
      likes : 0,
      category : 4,
      isRemoved : false,curimg : 0,
    },
    {
      image : ["red-LED-e1605162894181.jpg"],
      id : 21,
      name : "Red LED",
      price : 1,
      description : "Red light emitting diode 1.8V",
      rating : 5,
      likes : 0,
      category : 4,
      isRemoved : false,curimg : 0,
    },
    {
      image : ["5mm_blue_clear.png"],
      id : 22,
      name : "Blue LED",
      price : 1,
      description : "Blue light emitting diode 3.0V",
      rating : 5,
      likes : 0,
      category : 4,
      isRemoved : false,curimg : 0,
    },
    {
      image : ["70015971.jpg"],
      id : 23,
      name : "1N4005",
      price : 1,
      description : "General purpose diode 600V 1.1V",
      rating : 5,
      likes : 0,
      category : 4,
      isRemoved : false,curimg : 0,
    },
    {
      image : ["Diodes-Inc.-1N4728A-T.jpg"],
      id : 24,
      name : "1N4728A",
      price : 1,
      description : "Zener diode 3.3V",
      rating : 5,
      likes : 0,
      category : 4,
      isRemoved : false,curimg : 0,
    },
  ];
