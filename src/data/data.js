export const crimeTypes = [
  { crimeCode: "001", crimeType: "Cattle Theft" },
  { crimeCode: "002", crimeType: "Threats" },
  { crimeCode: "003", crimeType: "DELITOS_SEXUALES" },
  { crimeCode: "004", crimeType: "EXTORSIÓN" },
  { crimeCode: "005", crimeType: "HOMICIDIO" },
  { crimeCode: "006", crimeType: "Traffic Homicide" },
  { crimeCode: "007", crimeType: "Theft - Commercial Entities" },
  { crimeCode: "008", crimeType: "Theft - Financial Institutions" },
  { crimeCode: "009", crimeType: "Motorcycle Theft" },
  { crimeCode: "010", crimeType: "Vehicle Theft" },
  { crimeCode: "011", crimeType: "Residential Theft" },
  { crimeCode: "012", crimeType: "Personal Theft" },
  { crimeCode: "013", crimeType: "Traffic Accident Injuries" },
  { crimeCode: "014", crimeType: "Personal Injuries" },
  { crimeCode: "015", crimeType: "Highway Piracy" },
  { crimeCode: "016", crimeType: "Kidnapping" },
  { crimeCode: "017", crimeType: "TERRORISMO" },
  { crimeCode: "018", crimeType: "Domestic Violence" },
];

export const weaponTypes = [
  { weaponCode: "01", weaponType: "Bladed Weapon" },
  { weaponCode: "02", weaponType: "Firearm" },
  { weaponCode: "03", weaponType: "Belt/Straps" },
  { weaponCode: "04", weaponType: "Cutting Weapon" },
  { weaponCode: "05", weaponType: "Blunt Object" },
  { weaponCode: "06", weaponType: "Sharp-Pointed Weapon" },
  { weaponCode: "07", weaponType: "Scopolamine" },
  { weaponCode: "08", weaponType: "Handcuffs" },
  { weaponCode: "09", weaponType: "No Weapon" },
  { weaponCode: "10", weaponType: "Not Reported" },
  { weaponCode: "11", weaponType: "Syringe" },
  { weaponCode: "12", weaponType: "Adulterated Liquor" },
  { weaponCode: "13", weaponType: "Phone Call" },
  { weaponCode: "14", weaponType: "Master Key" },
  { weaponCode: "15", weaponType: "Crowbar" },
  { weaponCode: "16", weaponType: "Stabbing Weapon" },
  { weaponCode: "17", weaponType: "Extortion Letter" },
  { weaponCode: "18", weaponType: "In-person Threat" },
  { weaponCode: "19", weaponType: "Social Media" },
  { weaponCode: "20", weaponType: "Mixed Means" },
];

export const ViectimGender = [
  { gendercode: "01", genderType: "Femenino" },
  { gendercode: "02", genderType: "Masculino" },
  { gendercode: "03", genderType: "Otro" },
];

export const AgeGroup = [
  { agecode: "01", ageType: "Minors", limit: "12" },
  { agecode: "02", ageType: "Teenagers", limit: "12-17" },
  { agecode: "03", ageType: "Adults", limit: "18-older" },
];

// data.js

export const getYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = 2010; year <= currentYear; year++) {
    years.push(year);
  }
  return years;
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const DepartmentData = [
  {
    code: "91",
    Department: "AMAZONAS",
    municipalities: [
      "LETICIA",
      "EL ENCANTO",
      "LA CHORRERA",
      "LA PEDRERA",
      "LA VICTORIA",
      "MIRITÍ - PARANÁ",
      "PUERTO ALEGRÍA",
      "PUERTO ARICA",
      "PUERTO NARIÑO",
      "PUERTO SANTANDER",
      "TARAPACÁ",
    ],
  },
  {
    code: "05",
    Department: "ANTIOQUIA",
    municipalities: [
      "MEDELLÍN",
      "ABEJORRAL",
      "ABRIAQUÍ",
      "ALEJANDRÍA",
      "AMAGÁ",
      "AMALFI",
      "ANDES",
      "ANGELÓPOLIS",
      "ANGOSTURA",
      "ANORÍ",
      "SANTA FÉ DE ANTIOQUIA",
      "ANZÁ",
      "APARTADÓ",
      "ARBOLETES",
      "ARGELIA",
      "ARMENIA",
      "BARBOSA",
      "BELMIRA",
      "BELLO",
      "BETANIA",
      "BETULIA",
      "CIUDAD BOLÍVAR",
      "BRICEÑO",
      "BURITICÁ",
      "CÁCERES",
      "CAICEDO",
      "CALDAS",
      "CAMPAMENTO",
      "CAÑASGORDAS",
      "CARACOLÍ",
      "CARAMANTA",
      "CAREPA",
      "EL CARMEN DE VIBORAL",
      "CAROLINA",
      "CAUCASIA",
      "CHIGORODÓ",
      "CISNEROS",
      "COCORNÁ",
      "CONCEPCIÓN",
      "CONCORDIA",
      "COPACABANA",
      "DABEIBA",
      "DONMATÍAS",
      "EBÉJICO",
      "EL BAGRE",
      "ENTRERRÍOS",
      "ENVIGADO",
      "FREDONIA",
      "FRONTINO",
      "GIRALDO",
      "GIRARDOTA",
      "GÓMEZ PLATA",
      "GRANADA",
      "GUADALUPE",
      "GUARNE",
      "GUATAPÉ",
      "HELICONIA",
      "HISPANIA",
      "ITAGÜÍ",
      "ITUANGO",
      "JARDÍN",
      "JERICÓ",
      "LA CEJA",
      "LA ESTRELLA",
      "LA PINTADA",
      "LA UNIÓN",
      "LIBORINA",
      "MACEO",
      "MARINILLA",
      "MONTEBELLO",
      "MURINDÓ",
      "MUTATÁ",
      "NARIÑO",
      "NECOCLÍ",
      "NECHÍ",
      "OLAYA",
      "PEÑOL",
      "PEQUE",
      "PUEBLORRICO",
      "PUERTO BERRÍO",
      "PUERTO NARE",
      "PUERTO TRIUNFO",
      "REMEDIOS",
      "RETIRO",
      "RIONEGRO",
      "SABANALARGA",
      "SABANETA",
      "SALGAR",
      "SAN ANDRÉS DE CUERQUÍA",
      "SAN CARLOS",
      "SAN FRANCISCO",
      "SAN JERÓNIMO",
      "SAN JOSÉ DE LA MONTAÑA",
      "SAN JUAN DE URABÁ",
      "SAN LUIS",
      "SAN PEDRO DE LOS MILAGROS",
      "SAN PEDRO DE URABÁ",
      "SAN RAFAEL",
      "SAN ROQUE",
      "SAN VICENTE FERRER",
      "SANTA BÁRBARA",
      "SANTA ROSA DE OSOS",
      "SANTO DOMINGO",
      "EL SANTUARIO",
      "SEGOVIA",
      "SONSÓN",
      "SOPETRÁN",
      "TÁMESIS",
      "TARAZÁ",
      "TARSO",
      "TITIRIBÍ",
      "TOLEDO",
      "TURBO",
      "URAMITA",
      "URRAO",
      "VALDIVIA",
      "VALPARAÍSO",
      "VEGACHÍ",
      "VENECIA",
      "VIGÍA DEL FUERTE",
      "YALÍ",
      "YARUMAL",
      "YOLOMBÓ",
      "YONDÓ",
      "ZARAGOZA",
    ],
  },
  {
    code: "81",
    Department: "ARAUCA",
    municipalities: [
      "ARAUCA",
      "ARAUQUITA",
      "CRAVO NORTE",
      "FORTUL",
      "PUERTO RONDÓN",
      "SARAVENA",
      "TAME",
    ],
  },
  {
    code: "88",
    Department: "ARCHIPIÉLAGO DE SAN ANDRÉS, PROVIDENCIA Y SANTA CATALINA",
    municipalities: ["SAN ANDRÉS", "PROVIDENCIA"],
  },
  {
    code: "08",
    Department: "ATLÁNTICO",
    municipalities: [
      "BARRANQUILLA",
      "BARANOA",
      "CAMPO DE LA CRUZ",
      "CANDELARIA",
      "GALAPA",
      "JUAN DE ACOSTA",
      "LURUACO",
      "MALAMBO",
      "MANATÍ",
      "PALMAR DE VARELA",
      "PIOJÓ",
      "POLONUEVO",
      "PONEDERA",
      "PUERTO COLOMBIA",
      "REPELÓN",
      "SABANAGRANDE",
      "SABANALARGA",
      "SANTA LUCÍA",
      "SANTO TOMÁS",
      "SOLEDAD",
      "SUAN",
      "TUBARÁ",
      "USIACURÍ",
    ],
  },
  {
    code: "11",
    Department: "BOGOTÁ, D.C.",
    municipalities: ["BOGOTÁ, D.C."],
  },
  {
    code: "13",
    Department: "BOLÍVAR",
    municipalities: [
      "CARTAGENA DE INDIAS",
      "ACHÍ",
      "ALTOS DEL ROSARIO",
      "ARENAL",
      "ARJONA",
      "ARROYOHONDO",
      "BARRANCO DE LOBA",
      "CALAMAR",
      "CANTAGALLO",
      "CICUCO",
      "CÓRDOBA",
      "CLEMENCIA",
      "EL CARMEN DE BOLÍVAR",
      "EL GUAMO",
      "EL PEÑÓN",
      "HATILLO DE LOBA",
      "MAGANGUÉ",
      "MAHATES",
      "MARGARITA",
      "MARÍA LA BAJA",
      "MONTECRISTO",
      "SANTA CRUZ DE MOMPOX",
      "MORALES",
      "NOROSÍ",
      "PINILLOS",
      "REGIDOR",
      "RÍO VIEJO",
      "SAN CRISTÓBAL",
      "SAN ESTANISLAO",
      "SAN FERNANDO",
      "SAN JACINTO",
      "SAN JACINTO DEL CAUCA",
      "SAN JUAN NEPOMUCENO",
      "SAN MARTÍN DE LOBA",
      "SAN PABLO",
      "SANTA CATALINA",
      "SANTA ROSA",
      "SANTA ROSA DEL SUR",
      "SIMITÍ",
      "SOPLAVIENTO",
      "TALAIGUA NUEVO",
      "TIQUISIO",
      "TURBACO",
      "TURBANÁ",
      "VILLANUEVA",
      "ZAMBRANO",
    ],
  },
  {
    code: "15",
    Department: "BOYACÁ",
    municipalities: [
      "TUNJA",
      "ALMEIDA",
      "AQUITANIA",
      "ARCABUCO",
      "BELÉN",
      "BERBEO",
      "BETÉITIVA",
      "BOAVITA",
      "BOYACÁ",
      "BRICEÑO",
      "BUENAVISTA",
      "BUSBANZÁ",
      "CALDAS",
      "CAMPOHERMOSO",
      "CERINZA",
      "CHINAVITA",
      "CHIQUINQUIRÁ",
      "CHISCAS",
      "CHITA",
      "CHITARAQUE",
      "CHIVATÁ",
      "CIÉNEGA",
      "CÓMBITA",
      "COPER",
      "CORRALES",
      "COVARACHÍA",
      "CUBARÁ",
      "CUCAITA",
      "CUÍTIVA",
      "CHÍQUIZA",
      "CHIVOR",
      "DUITAMA",
      "EL COCUY",
      "EL ESPINO",
      "FIRAVITOBA",
      "FLORESTA",
      "GACHANTIVÁ",
      "GÁMEZA",
      "GARAGOA",
      "GUACAMAYAS",
      "GUATEQUE",
      "GUAYATÁ",
      "GÜICÁN DE LA SIERRA",
      "IZA",
      "JENESANO",
      "JERICÓ",
      "LABRANZAGRANDE",
      "LA CAPILLA",
      "LA VICTORIA",
      "LA UVITA",
      "VILLA DE LEYVA",
      "MACANAL",
      "MARIPÍ",
      "MIRAFLORES",
      "MONGUA",
      "MONGUÍ",
      "MONIQUIRÁ",
      "MOTAVITA",
      "MUZO",
      "NOBSA",
      "NUEVO COLÓN",
      "OICATÁ",
      "OTANCHE",
      "PACHAVITA",
      "PÁEZ",
      "PAIPA",
      "PAJARITO",
      "PANQUEBA",
      "PAUNA",
      "PAYA",
      "PAZ DE RÍO",
      "PESCA",
      "PISBA",
      "PUERTO BOYACÁ",
      "QUÍPAMA",
      "RAMIRIQUÍ",
      "RÁQUIRA",
      "RONDÓN",
      "SABOYÁ",
      "SÁCHICA",
      "SAMACÁ",
      "SAN EDUARDO",
      "SAN JOSÉ DE PARE",
      "SAN LUIS DE GACENO",
      "SAN MATEO",
      "SAN MIGUEL DE SEMA",
      "SAN PABLO DE BORBUR",
      "SANTANA",
      "SANTA MARÍA",
      "SANTA ROSA DE VITERBO",
      "SANTA SOFÍA",
      "SATIVANORTE",
      "SATIVASUR",
      "SIACHOQUE",
      "SOATÁ",
      "SOCOTÁ",
      "SOCHA",
      "SOGAMOSO",
      "SOMONDOCO",
      "SORA",
      "SOTAQUIRÁ",
      "SORACÁ",
      "SUSACÓN",
      "SUTAMARCHÁN",
      "SUTATENZA",
      "TASCO",
      "TENZA",
      "TIBANÁ",
      "TIBASOSA",
      "TINJACÁ",
      "TIPACOQUE",
      "TOCA",
      "TOGÜÍ",
      "TÓPAGA",
      "TOTA",
      "TUNUNGUÁ",
      "TURMEQUÉ",
      "TUTA",
      "TUTAZÁ",
      "ÚMBITA",
      "VENTAQUEMADA",
      "VIRACACHÁ",
      "ZETAQUIRA",
    ],
  },
  {
    code: "17",
    Department: "CALDAS",
    municipalities: [
      "MANIZALES",
      "AGUADAS",
      "ANSERMA",
      "ARANZAZU",
      "BELALCÁZAR",
      "CHINCHINÁ",
      "FILADELFIA",
      "LA DORADA",
      "LA MERCED",
      "MANZANARES",
      "MARMATO",
      "MARQUETALIA",
      "MARULANDA",
      "NEIRA",
      "NORCASIA",
      "PÁCORA",
      "PALESTINA",
      "PENSILVANIA",
      "RIOSUCIO",
      "RISARALDA",
      "SALAMINA",
      "SAMANÁ",
      "SAN JOSÉ",
      "SUPÍA",
      "VICTORIA",
      "VILLAMARÍA",
      "VITERBO",
    ],
  },
  {
    code: "18",
    Department: "CAQUETÁ",
    municipalities: [
      "FLORENCIA",
      "ALBANIA",
      "BELÉN DE LOS ANDAQUÍES",
      "CARTAGENA DEL CHAIRÁ",
      "CURILLO",
      "EL DONCELLO",
      "EL PAUJÍL",
      "LA MONTAÑITA",
      "MILÁN",
      "MORELIA",
      "PUERTO RICO",
      "SAN JOSÉ DEL FRAGUA",
      "SAN VICENTE DEL CAGUÁN",
      "SOLANO",
      "SOLITA",
      "VALPARAÍSO",
    ],
  },
  {
    code: "085",
    Department: "CASANARE",
    municipalities: [
      "YOPAL",
      "AGUAZUL",
      "CHÁMEZA",
      "HATO COROZAL",
      "LA SALINA",
      "MANÍ",
      "MONTERREY",
      "NUNCHÍA",
      "OROCUÉ",
      "PAZ DE ARIPORO",
      "PORE",
      "RECETOR",
      "SABANALARGA",
      "SÁCAMA",
      "SAN LUIS DE PALENQUE",
      "TÁMARA",
      "TAURAMENA",
      "TRINIDAD",
      "VILLANUEVA",
    ],
  },
  {
    code: "19",
    Department: "CAUCA",
    municipalities: [
      "POPAYÁN",
      "ALMAGUER",
      "ARGELIA",
      "BALBOA",
      "BOLÍVAR",
      "BUENOS AIRES",
      "CAJIBÍO",
      "CALDONO",
      "CALOTO",
      "CORINTO",
      "EL TAMBO",
      "FLORENCIA",
      "GUACHENÉ",
      "GUAPI",
      "INZÁ",
      "JAMBALÓ",
      "LA SIERRA",
      "LA VEGA",
      "LÓPEZ DE MICAY",
      "MERCADERES",
      "MIRANDA",
      "MORALES",
      "PADILLA",
      "PÁEZ",
      "PATÍA",
      "PIAMONTE",
      "PIENDAMÓ - TUNÍA",
      "PUERTO TEJADA",
      "PURACÉ",
      "ROSAS",
      "SAN SEBASTIÁN",
      "SANTANDER DE QUILICHAO",
      "SANTA ROSA",
      "SILVIA",
      "SOTARÁ - PAISPAMBA",
      "SUÁREZ",
      "SUCRE",
      "TIMBÍO",
      "TIMBIQUÍ",
      "TORIBÍO",
      "TOTORÓ",
      "VILLA RICA",
    ],
  },
  {
    code: "20",
    Department: "CESAR",
    municipalities: [
      "VALLEDUPAR",
      "AGUACHICA",
      "AGUSTÍN CODAZZI",
      "ASTREA",
      "BECERRIL",
      "BOSCONIA",
      "CHIMICHAGUA",
      "CHIRIGUANÁ",
      "CURUMANÍ",
      "EL COPEY",
      "EL PASO",
      "GAMARRA",
      "GONZÁLEZ",
      "LA GLORIA",
      "LA JAGUA DE IBIRICO",
      "MANAURE BALCÓN DEL CESAR",
      "PAILITAS",
      "PELAYA",
      "PUEBLO BELLO",
      "RÍO DE ORO",
      "LA PAZ",
      "SAN ALBERTO",
      "SAN DIEGO",
      "SAN MARTÍN",
      "TAMALAMEQUE",
    ],
  },
  {
    code: "27",
    Department: "CHOCÓ",
    municipalities: [
      "QUIBDÓ",
      "ACANDÍ",
      "ALTO BAUDÓ",
      "ATRATO",
      "BAGADÓ",
      "BAHÍA SOLANO",
      "BAJO BAUDÓ",
      "BOJAYÁ",
      "EL CANTÓN DEL SAN PABLO",
      "CARMEN DEL DARIÉN",
      "CÉRTEGUI",
      "CONDOTO",
      "EL CARMEN DE ATRATO",
      "EL LITORAL DEL SAN JUAN",
      "ISTMINA",
      "JURADÓ",
      "LLORÓ",
      "MEDIO ATRATO",
      "MEDIO BAUDÓ",
      "MEDIO SAN JUAN",
      "NÓVITA",
      "NUEVO BELÉN DE BAJIRÁ",
      "NUQUÍ",
      "RÍO IRÓ",
      "RÍO QUITO",
      "RIOSUCIO",
      "SAN JOSÉ DEL PALMAR",
      "SIPÍ",
      "TADÓ",
      "UNGUÍA",
      "UNIÓN PANAMERICANA",
    ],
  },
  {
    code: "25",
    Department: "CUNDINAMARCA",
    municipalities: [
      "AGUA DE DIOS",
      "ALBÁN",
      "ANAPOIMA",
      "ANOLAIMA",
      "ARBELÁEZ",
      "BELTRÁN",
      "BITUIMA",
      "BOJACÁ",
      "CABRERA",
      "CACHIPAY",
      "CAJICÁ",
      "CAPARRAPÍ",
      "CÁQUEZA",
      "CARMEN DE CARUPA",
      "CHAGUANÍ",
      "CHÍA",
      "CHIPAQUE",
      "CHOACHÍ",
      "CHOCONTÁ",
      "COGUA",
      "COTA",
      "CUCUNUBÁ",
      "EL COLEGIO",
      "EL PEÑÓN",
      "EL ROSAL",
      "FACATATIVÁ",
      "FÓMEQUE",
      "FOSCA",
      "FUNZA",
      "FÚQUENE",
      "FUSAGASUGÁ",
      "GACHALÁ",
      "GACHANCIPÁ",
      "GACHETÁ",
      "GAMA",
      "GIRARDOT",
      "GRANADA",
      "GUACHETÁ",
      "GUADUAS",
      "GUASCA",
      "GUATAQUÍ",
      "GUATAVITA",
      "GUAYABAL DE SÍQUIMA",
      "GUAYABETAL",
      "GUTIÉRREZ",
      "JERUSALÉN",
      "JUNÍN",
      "LA CALERA",
      "LA MESA",
      "LA PALMA",
      "LA PEÑA",
      "LA VEGA",
      "LENGUAZAQUE",
      "MACHETÁ",
      "MADRID",
      "MANTA",
      "MEDINA",
      "MOSQUERA",
      "NARIÑO",
      "NEMOCÓN",
      "NILO",
      "NIMAIMA",
      "NOCAIMA",
      "VENECIA",
      "PACHO",
      "PAIME",
      "PANDI",
      "PARATEBUENO",
      "PASCA",
      "PUERTO SALGAR",
      "PULÍ",
      "QUEBRADANEGRA",
      "QUETAME",
      "QUIPILE",
      "APULO",
      "RICAURTE",
      "SAN ANTONIO DEL TEQUENDAMA",
      "SAN BERNARDO",
      "SAN CAYETANO",
      "SAN FRANCISCO",
      "SAN JUAN DE RIOSECO",
      "SASAIMA",
      "SESQUILÉ",
      "SIBATÉ",
      "SILVANIA",
      "SIMIJACA",
      "SOACHA",
      "SOPÓ",
      "SUBACHOQUE",
      "SUESCA",
      "SUPATÁ",
      "SUSA",
      "SUTATAUSA",
      "TABIO",
      "TAUSA",
      "TENA",
      "TENJO",
      "TIBACUY",
      "TIBIRITA",
      "TOCAIMA",
      "TOCANCIPÁ",
      "TOPAIPÍ",
      "UBALÁ",
      "UBAQUE",
      "VILLA DE SAN DIEGO DE UBATÉ",
      "UNE",
      "ÚTICA",
      "VERGARA",
      "VIANÍ",
      "VILLAGÓMEZ",
      "VILLAPINZÓN",
      "VILLETA",
      "VIOTÁ",
      "YACOPÍ",
      "ZIPACÓN",
      "ZIPAQUIRÁ",
    ],
  },
  {
    code: "23",
    Department: "CÓRDOBA",
    municipalities: [
      "MONTERÍA",
      "AYAPEL",
      "BUENAVISTA",
      "CANALETE",
      "CERETÉ",
      "CHIMÁ",
      "CHINÚ",
      "CIÉNAGA DE ORO",
      "COTORRA",
      "LA APARTADA",
      "LORICA",
      "LOS CÓRDOBAS",
      "MOMIL",
      "MONTELÍBANO",
      "MOÑITOS",
      "PLANETA RICA",
      "PUEBLO NUEVO",
      "PUERTO ESCONDIDO",
      "PUERTO LIBERTADOR",
      "PURÍSIMA DE LA CONCEPCIÓN",
      "SAHAGÚN",
      "SAN ANDRÉS DE SOTAVENTO",
      "SAN ANTERO",
      "SAN BERNARDO DEL VIENTO",
      "SAN CARLOS",
      "SAN JOSÉ DE URÉ",
      "SAN PELAYO",
      "TIERRALTA",
      "TUCHÍN",
      "VALENCIA",
    ],
  },
  {
    code: "94",
    Department: "GUAINÍA",
    municipalities: [
      "INÍRIDA",
      "BARRANCOMINAS",
      "SAN FELIPE",
      "PUERTO COLOMBIA",
      "LA GUADALUPE",
      "CACAHUAL",
      "PANA PANA",
      "MORICHAL",
    ],
  },
  {
    code: "95",
    Department: "GUAVIARE",
    municipalities: [
      "SAN JOSÉ DEL GUAVIARE",
      "CALAMAR",
      "EL RETORNO",
      "MIRAFLORES",
    ],
  },
  {
    code: "41",
    Department: "HUILA",
    municipalities: [
      "NEIVA",
      "ACEVEDO",
      "AGRADO",
      "AIPE",
      "ALGECIRAS",
      "ALTAMIRA",
      "BARAYA",
      "CAMPOALEGRE",
      "COLOMBIA",
      "ELÍAS",
      "GARZÓN",
      "GIGANTE",
      "GUADALUPE",
      "HOBO",
      "ÍQUIRA",
      "ISNOS",
      "LA ARGENTINA",
      "LA PLATA",
      "NÁTAGA",
      "OPORAPA",
      "PAICOL",
      "PALERMO",
      "PALESTINA",
      "PITAL",
      "PITALITO",
      "RIVERA",
      "SALADOBLANCO",
      "SAN AGUSTÍN",
      "SANTA MARÍA",
      "SUAZA",
      "TARQUI",
      "TESALIA",
      "TELLO",
      "TERUEL",
      "TIMANÁ",
      "VILLAVIEJA",
      "YAGUARÁ",
    ],
  },
  {
    code: "44",
    Department: "LA GUAJIRA",
    municipalities: [
      "RIOHACHA",
      "ALBANIA",
      "BARRANCAS",
      "DIBULLA",
      "DISTRACCIÓN",
      "EL MOLINO",
      "FONSECA",
      "HATONUEVO",
      "LA JAGUA DEL PILAR",
      "MAICAO",
      "MANAURE",
      "SAN JUAN DEL CESAR",
      "URIBIA",
      "URUMITA",
      "VILLANUEVA",
    ],
  },
  {
    code: "47",
    Department: "MAGDALENA",
    municipalities: [
      "SANTA MARTA",
      "ALGARROBO",
      "ARACATACA",
      "ARIGUANÍ",
      "CERRO DE SAN ANTONIO",
      "CHIVOLO",
      "CIÉNAGA",
      "CONCORDIA",
      "EL BANCO",
      "EL PIÑÓN",
      "EL RETÉN",
      "FUNDACIÓN",
      "GUAMAL",
      "NUEVA GRANADA",
      "PEDRAZA",
      "PIJIÑO DEL CARMEN",
      "PIVIJAY",
      "PLATO",
      "PUEBLOVIEJO",
      "REMOLINO",
      "SABANAS DE SAN ÁNGEL",
      "SALAMINA",
      "SAN SEBASTIÁN DE BUENAVISTA",
      "SAN ZENÓN",
      "SANTA ANA",
      "SANTA BÁRBARA DE PINTO",
      "SITIONUEVO",
      "TENERIFE",
      "ZAPAYÁN",
      "ZONA BANANERA",
    ],
  },
  {
    code: "50",
    Department: "META",
    municipalities: [
      "VILLAVICENCIO",
      "ACACÍAS",
      "BARRANCA DE UPÍA",
      "CABUYARO",
      "CASTILLA LA NUEVA",
      "CUBARRAL",
      "CUMARAL",
      "EL CALVARIO",
      "EL CASTILLO",
      "EL DORADO",
      "FUENTE DE ORO",
      "GRANADA",
      "GUAMAL",
      "MAPIRIPÁN",
      "MESETAS",
      "LA MACARENA",
      "URIBE",
      "LEJANÍAS",
      "PUERTO CONCORDIA",
      "PUERTO GAITÁN",
      "PUERTO LÓPEZ",
      "PUERTO LLERAS",
      "PUERTO RICO",
      "RESTREPO",
      "SAN CARLOS DE GUAROA",
      "SAN JUAN DE ARAMA",
      "SAN JUANITO",
      "SAN MARTÍN",
      "VISTAHERMOSA",
    ],
  },
  {
    code: "52",
    Department: "NARIÑO",
    municipalities: [
      "PASTO",
      "ALBÁN",
      "ALDANA",
      "ANCUYA",
      "ARBOLEDA",
      "BARBACOAS",
      "BELÉN",
      "BUESACO",
      "COLÓN",
      "CONSACÁ",
      "CONTADERO",
      "CÓRDOBA",
      "CUASPUD CARLOSAMA",
      "CUMBAL",
      "CUMBITARA",
      "CHACHAGÜÍ",
      "EL CHARCO",
      "EL PEÑOL",
      "EL ROSARIO",
      "EL TABLÓN DE GÓMEZ",
      "EL TAMBO",
      "FUNES",
      "GUACHUCAL",
      "GUAITARILLA",
      "GUALMATÁN",
      "ILES",
      "IMUÉS",
      "IPIALES",
      "LA CRUZ",
      "LA FLORIDA",
      "LA LLANADA",
      "LA TOLA",
      "LA UNIÓN",
      "LEIVA",
      "LINARES",
      "LOS ANDES",
      "MAGÜÍ",
      "MALLAMA",
      "MOSQUERA",
      "NARIÑO",
      "OLAYA HERRERA",
      "OSPINA",
      "FRANCISCO PIZARRO",
      "POLICARPA",
      "POTOSÍ",
      "PROVIDENCIA",
      "PUERRES",
      "PUPIALES",
      "RICAURTE",
      "ROBERTO PAYÁN",
      "SAMANIEGO",
      "SANDONÁ",
      "SAN BERNARDO",
      "SAN LORENZO",
      "SAN PABLO",
      "SAN PEDRO DE CARTAGO",
      "SANTA BÁRBARA",
      "SANTACRUZ",
      "SAPUYES",
      "TAMINANGO",
      "TANGUA",
      "SAN ANDRÉS DE TUMACO",
      "TÚQUERRES",
      "YACUANQUER",
    ],
  },
  {
    code: "54",
    Department: "NORTE DE SANTANDER",
    municipalities: [
      "SAN JOSÉ DE CÚCUTA",
      "ÁBREGO",
      "ARBOLEDAS",
      "BOCHALEMA",
      "BUCARASICA",
      "CÁCOTA",
      "CÁCHIRA",
      "CHINÁCOTA",
      "CHITAGÁ",
      "CONVENCIÓN",
      "CUCUTILLA",
      "DURANIA",
      "EL CARMEN",
      "EL TARRA",
      "EL ZULIA",
      "GRAMALOTE",
      "HACARÍ",
      "HERRÁN",
      "LABATECA",
      "LA ESPERANZA",
      "LA PLAYA",
      "LOS PATIOS",
      "LOURDES",
      "MUTISCUA",
      "OCAÑA",
      "PAMPLONA",
      "PAMPLONITA",
      "PUERTO SANTANDER",
      "RAGONVALIA",
      "SALAZAR",
      "SAN CALIXTO",
      "SAN CAYETANO",
      "SANTIAGO",
      "SARDINATA",
      "SILOS",
      "TEORAMA",
      "TIBÚ",
      "TOLEDO",
      "VILLA CARO",
      "VILLA DEL ROSARIO",
    ],
  },
  {
    code: "86",
    Department: "PUTUMAYO",
    municipalities: [
      "MOCOA",
      "COLÓN",
      "ORITO",
      "PUERTO ASÍS",
      "PUERTO CAICEDO",
      "PUERTO GUZMÁN",
      "PUERTO LEGUÍZAMO",
      "SIBUNDOY",
      "SAN FRANCISCO",
      "SAN MIGUEL",
      "SANTIAGO",
      "VALLE DEL GUAMUEZ",
      "VILLAGARZÓN",
    ],
  },
  {
    code: "63",
    Department: "QUINDÍO",
    municipalities: [
      "ARMENIA",
      "BUENAVISTA",
      "CALARCÁ",
      "CIRCASIA",
      "CÓRDOBA",
      "FILANDIA",
      "GÉNOVA",
      "LA TEBAIDA",
      "MONTENEGRO",
      "PIJAO",
      "QUIMBAYA",
      "SALENTO",
    ],
  },
  {
    code: "66",
    Department: "RISARALDA",
    municipalities: [
      "PEREIRA",
      "APÍA",
      "BALBOA",
      "BELÉN DE UMBRÍA",
      "DOSQUEBRADAS",
      "GUÁTICA",
      "LA CELIA",
      "LA VIRGINIA",
      "MARSELLA",
      "MISTRATÓ",
      "PUEBLO RICO",
      "QUINCHÍA",
      "SANTA ROSA DE CABAL",
      "SANTUARIO",
    ],
  },
  {
    code: "68",
    Department: "SANTANDER",
    municipalities: [
      "BUCARAMANGA",
      "AGUADA",
      "ALBANIA",
      "ARATOCA",
      "BARBOSA",
      "BARICHARA",
      "BARRANCABERMEJA",
      "BETULIA",
      "BOLÍVAR",
      "CABRERA",
      "CALIFORNIA",
      "CAPITANEJO",
      "CARCASÍ",
      "CEPITÁ",
      "CERRITO",
      "CHARALÁ",
      "CHARTA",
      "CHIMA",
      "CHIPATÁ",
      "CIMITARRA",
      "CONCEPCIÓN",
      "CONFINES",
      "CONTRATACIÓN",
      "COROMORO",
      "CURITÍ",
      "EL CARMEN DE CHUCURÍ",
      "EL GUACAMAYO",
      "EL PEÑÓN",
      "EL PLAYÓN",
      "ENCINO",
      "ENCISO",
      "FLORIÁN",
      "FLORIDABLANCA",
      "GALÁN",
      "GÁMBITA",
      "GIRÓN",
      "GUACA",
      "GUADALUPE",
      "GUAPOTÁ",
      "GUAVATÁ",
      "GÜEPSA",
      "HATO",
      "JESÚS MARÍA",
      "JORDÁN",
      "LA BELLEZA",
      "LANDÁZURI",
      "LA PAZ",
      "LEBRIJA",
      "LOS SANTOS",
      "MACARAVITA",
      "MÁLAGA",
      "MATANZA",
      "MOGOTES",
      "MOLAGAVITA",
      "OCAMONTE",
      "OIBA",
      "ONZAGA",
      "PALMAR",
      "PALMAS DEL SOCORRO",
      "PÁRAMO",
      "PIEDECUESTA",
      "PINCHOTE",
      "PUENTE NACIONAL",
      "PUERTO PARRA",
      "PUERTO WILCHES",
      "RIONEGRO",
      "SABANA DE TORRES",
      "SAN ANDRÉS",
      "SAN BENITO",
      "SAN GIL",
      "SAN JOAQUÍN",
      "SAN JOSÉ DE MIRANDA",
      "SAN MIGUEL",
      "SAN VICENTE DE CHUCURÍ",
      "SANTA BÁRBARA",
      "SANTA HELENA DEL OPÓN",
      "SIMACOTA",
      "SOCORRO",
      "SUAITA",
      "SUCRE",
      "SURATÁ",
      "TONA",
      "VALLE DE SAN JOSÉ",
      "VÉLEZ",
      "VETAS",
      "VILLANUEVA",
      "ZAPATOCA",
    ],
  },
  {
    code: "70",
    Department: "SUCRE",
    municipalities: [
      "SINCELEJO",
      "BUENAVISTA",
      "CAIMITO",
      "COLOSÓ",
      "COROZAL",
      "COVEÑAS",
      "CHALÁN",
      "EL ROBLE",
      "GALERAS",
      "GUARANDA",
      "LA UNIÓN",
      "LOS PALMITOS",
      "MAJAGUAL",
      "MORROA",
      "OVEJAS",
      "PALMITO",
      "SAMPUÉS",
      "SAN BENITO ABAD",
      "SAN JUAN DE BETULIA",
      "SAN MARCOS",
      "SAN ONOFRE",
      "SAN PEDRO",
      "SAN LUIS DE SINCÉ",
      "SUCRE",
      "SANTIAGO DE TOLÚ",
      "SAN JOSÉ DE TOLUVIEJO",
    ],
  },
  {
    code: "73",
    Department: "TOLIMA",
    municipalities: [
      "IBAGUÉ",
      "ALPUJARRA",
      "ALVARADO",
      "AMBALEMA",
      "ANZOÁTEGUI",
      "ARMERO",
      "ATACO",
      "CAJAMARCA",
      "CARMEN DE APICALÁ",
      "CASABIANCA",
      "CHAPARRAL",
      "COELLO",
      "COYAIMA",
      "CUNDAY",
      "DOLORES",
      "ESPINAL",
      "FALAN",
      "FLANDES",
      "FRESNO",
      "GUAMO",
      "HERVEO",
      "HONDA",
      "ICONONZO",
      "LÉRIDA",
      "LÍBANO",
      "SAN SEBASTIÁN DE MARIQUITA",
      "MELGAR",
      "MURILLO",
      "NATAGAIMA",
      "ORTEGA",
      "PALOCABILDO",
      "PIEDRAS",
      "PLANADAS",
      "PRADO",
      "PURIFICACIÓN",
      "RIOBLANCO",
      "RONCESVALLES",
      "ROVIRA",
      "SALDAÑA",
      "SAN ANTONIO",
      "SAN LUIS",
      "SANTA ISABEL",
      "SUÁREZ",
      "VALLE DE SAN JUAN",
      "VENADILLO",
      "VILLAHERMOSA",
      "VILLARRICA",
    ],
  },
  {
    code: "76",
    Department: "VALLE DEL CAUCA",
    municipalities: [
      "SANTIAGO DE CALI",
      "ALCALÁ",
      "ANDALUCÍA",
      "ANSERMANUEVO",
      "ARGELIA",
      "BOLÍVAR",
      "BUENAVENTURA",
      "GUADALAJARA DE BUGA",
      "BUGALAGRANDE",
      "CAICEDONIA",
      "CALIMA",
      "CANDELARIA",
      "CARTAGO",
      "DAGUA",
      "EL ÁGUILA",
      "EL CAIRO",
      "EL CERRITO",
      "EL DOVIO",
      "FLORIDA",
      "GINEBRA",
      "GUACARÍ",
      "JAMUNDÍ",
      "LA CUMBRE",
      "LA UNIÓN",
      "LA VICTORIA",
      "OBANDO",
      "PALMIRA",
      "PRADERA",
      "RESTREPO",
      "RIOFRÍO",
      "ROLDANILLO",
      "SAN PEDRO",
      "SEVILLA",
      "TORO",
      "TRUJILLO",
      "TULUÁ",
      "ULLOA",
      "VERSALLES",
      "VIJES",
      "YOTOCO",
      "YUMBO",
      "ZARZAL",
    ],
  },
  {
    code: "97",
    Department: "VAUPÉS",
    municipalities: [
      "MITÚ",
      "CARURÚ",
      "PACOA",
      "TARAIRA",
      "PAPUNAHUA",
      "YAVARATÉ",
    ],
  },
  {
    code: "99",
    Department: "VICHADA",
    municipalities: [
      "PUERTO CARREÑO",
      "LA PRIMAVERA",
      "SANTA ROSALÍA",
      "CUMARIBO",
    ],
  },
];

export const CodeDetailedData = [
  {
    code: 5,
    Department: "ANTIOQUIA",
    municipalities: [
      { code: 5001, name: "MEDELLÍN" },
      { code: 5002, name: "ABEJORRAL" },
      { code: 5004, name: "ABRIAQUÍ" },
      { code: 5021, name: "ALEJANDRÍA" },
      { code: 5030, name: "AMAGÁ" },
      { code: 5031, name: "AMALFI" },
      { code: 5034, name: "ANDES" },
      { code: 5036, name: "ANGELÓPOLIS" },
      { code: 5038, name: "ANGOSTURA" },
      { code: 5040, name: "ANORÍ" },
      { code: 5042, name: "SANTA FÉ DE ANTIOQUIA" },
      { code: 5044, name: "ANZÁ" },
      { code: 5045, name: "APARTADÓ" },
      { code: 5051, name: "ARBOLETES" },
      { code: 5055, name: "ARGELIA" },
      { code: 5059, name: "ARMENIA" },
      { code: 5079, name: "BARBOSA" },
      { code: 5086, name: "BELMIRA" },
      { code: 5088, name: "BELLO" },
      { code: 5091, name: "BETANIA" },
      { code: 5093, name: "BETULIA" },
      { code: 5101, name: "CIUDAD BOLÍVAR" },
      { code: 5107, name: "BRICEÑO" },
      { code: 5113, name: "BURITICÁ" },
      { code: 5120, name: "CÁCERES" },
      { code: 5125, name: "CAICEDO" },
      { code: 5129, name: "CALDAS" },
      { code: 5134, name: "CAMPAMENTO" },
      { code: 5138, name: "CAÑASGORDAS" },
      { code: 5142, name: "CARACOLÍ" },
      { code: 5145, name: "CARAMANTA" },
      { code: 5147, name: "CAREPA" },
      { code: 5148, name: "EL CARMEN DE VIBORAL" },
      { code: 5150, name: "CAROLINA" },
      { code: 5154, name: "CAUCASIA" },
      { code: 5172, name: "CHIGORODÓ" },
      { code: 5190, name: "CISNEROS" },
      { code: 5197, name: "COCORNÁ" },
      { code: 5206, name: "CONCEPCIÓN" },
      { code: 5209, name: "CONCORDIA" },
      { code: 5212, name: "COPACABANA" },
      { code: 5234, name: "DABEIBA" },
      { code: 5237, name: "DONMATÍAS" },
      { code: 5240, name: "EBÉJICO" },
      { code: 5250, name: "EL BAGRE" },
      { code: 5264, name: "ENTRERRÍOS" },
      { code: 5266, name: "ENVIGADO" },
      { code: 5282, name: "FREDONIA" },
      { code: 5284, name: "FRONTINO" },
      { code: 5306, name: "GIRALDO" },
      { code: 5308, name: "GIRARDOTA" },
      { code: 5310, name: "GÓMEZ PLATA" },
      { code: 5313, name: "GRANADA" },
      { code: 5315, name: "GUADALUPE" },
      { code: 5318, name: "GUARNE" },
      { code: 5321, name: "GUATAPÉ" },
      { code: 5347, name: "HELICONIA" },
      { code: 5353, name: "HISPANIA" },
      { code: 5360, name: "ITAGÜÍ" },
      { code: 5361, name: "ITUANGO" },
      { code: 5364, name: "JARDÍN" },
      { code: 5368, name: "JERICÓ" },
      { code: 5376, name: "LA CEJA" },
      { code: 5380, name: "LA ESTRELLA" },
      { code: 5390, name: "LA PINTADA" },
      { code: 5400, name: "LA UNIÓN" },
      { code: 5411, name: "LIBORINA" },
      { code: 5425, name: "MACEO" },
      { code: 5440, name: "MARINILLA" },
      { code: 5467, name: "MONTEBELLO" },
      { code: 5475, name: "MURINDÓ" },
      { code: 5480, name: "MUTATÁ" },
      { code: 5483, name: "NARIÑO" },
      { code: 5490, name: "NECOCLÍ" },
      { code: 5495, name: "NECHÍ" },
      { code: 5501, name: "OLAYA" },
      { code: 5541, name: "PEÑOL" },
      { code: 5543, name: "PEQUE" },
      { code: 5576, name: "PUEBLORRICO" },
      { code: 5579, name: "PUERTO BERRÍO" },
      { code: 5585, name: "PUERTO NARE" },
      { code: 5591, name: "PUERTO TRIUNFO" },
      { code: 5604, name: "REMEDIOS" },
      { code: 5607, name: "RETIRO" },
      { code: 5615, name: "RIONEGRO" },
      { code: 5628, name: "SABANALARGA" },
      { code: 5631, name: "SABANETA" },
      { code: 5642, name: "SALGAR" },
      { code: 5647, name: "SAN ANDRÉS DE CUERQUÍA" },
      { code: 5649, name: "SAN CARLOS" },
      { code: 5652, name: "SAN FRANCISCO" },
      { code: 5656, name: "SAN JERÓNIMO" },
      { code: 5658, name: "SAN JOSÉ DE LA MONTAÑA" },
      { code: 5659, name: "SAN JUAN DE URABÁ" },
      { code: 5660, name: "SAN LUIS" },
      { code: 5664, name: "SAN PEDRO DE LOS MILAGROS" },
      { code: 5665, name: "SAN PEDRO DE URABÁ" },
      { code: 5667, name: "SAN RAFAEL" },
      { code: 5670, name: "SAN ROQUE" },
      { code: 5674, name: "SAN VICENTE FERRER" },
      { code: 5679, name: "SANTA BÁRBARA" },
      { code: 5686, name: "SANTA ROSA DE OSOS" },
      { code: 5690, name: "SANTO DOMINGO" },
      { code: 5697, name: "EL SANTUARIO" },
      { code: 5736, name: "SEGOVIA" },
      { code: 5756, name: "SONSÓN" },
      { code: 5761, name: "SOPETRÁN" },
      { code: 5789, name: "TÁMESIS" },
      { code: 5790, name: "TARAZÁ" },
      { code: 5792, name: "TARSO" },
      { code: 5809, name: "TITIRIBÍ" },
      { code: 5819, name: "TOLEDO" },
      { code: 5837, name: "TURBO" },
      { code: 5842, name: "URAMITA" },
      { code: 5847, name: "URRAO" },
      { code: 5854, name: "VALDIVIA" },
      { code: 5856, name: "VALPARAÍSO" },
      { code: 5858, name: "VEGACHÍ" },
      { code: 5861, name: "VENECIA" },
      { code: 5873, name: "VIGÍA DEL FUERTE" },
      { code: 5885, name: "YALÍ" },
      { code: 5887, name: "YARUMAL" },
      { code: 5890, name: "YOLOMBÓ" },
      { code: 5893, name: "YONDÓ" },
      { code: 5895, name: "ZARAGOZA" },
    ],
  },
  {
    code: 91,
    Department: "AMAZONAS",
    municipalities: [
      { code: 91001, name: "LETICIA" },
      { code: 91263, name: "EL ENCANTO" },
      { code: 91405, name: "LA CHORRERA" },
      { code: 91407, name: "LA PEDRERA" },
      { code: 91430, name: "LA VICTORIA" },
      { code: 91460, name: "MIRITÍ - PARANÁ" },
      { code: 91530, name: "PUERTO ALEGRÍA" },
      { code: 91536, name: "PUERTO ARICA" },
      { code: 91540, name: "PUERTO NARIÑO" },
      { code: 91669, name: "PUERTO SANTANDER" },
      { code: 91798, name: "TARAPACÁ" },
    ],
  },
  {
    code: 81,
    Department: "ARAUCA",
    municipalities: [
      { code: 81001, name: "ARAUCA" },
      { code: 81065, name: "ARAUQUITA" },
      { code: 81220, name: "CRAVO NORTE" },
      { code: 81300, name: "FORTUL" },
      { code: 81591, name: "PUERTO RONDÓN" },
      { code: 81736, name: "SARAVENA" },
      { code: 81794, name: "TAME" },
    ],
  },
  {
    code: 88,
    Department: "ARCHIPIÉLAGO...", // Full official name preserved
    municipalities: [
      { code: 88001, name: "SAN ANDRÉS" },
      { code: 88564, name: "PROVIDENCIA" },
    ],
  },
  {
    code: 11,
    Department: "BOGOTÁ, D.C.",
    municipalities: [{ code: 11001, name: "BOGOTÁ D.C." }],
  },
  {
    code: 88,
    Department: "ARCHIPIÉLAGO DE SAN ANDRÉS, PROVIDENCIA Y SANTA CATALINA",
    municipalities: [
      { code: 88001, name: "SAN ANDRÉS" },
      { code: 88564, name: "PROVIDENCIA" },
    ],
  },
  {
    code: 13,
    Department: "BOLÍVAR",
    municipalities: [
      { code: 13001, name: "CARTAGENA DE INDIAS" },
      { code: 13006, name: "ACHÍ" },
      { code: 13030, name: "ALTOS DEL ROSARIO" },
      { code: 13042, name: "ARENAL" },
      { code: 13052, name: "ARJONA" },
      { code: 13062, name: "ARROYOHONDO" },
      { code: 13074, name: "BARRANCO DE LOBA" },
      { code: 13140, name: "CALAMAR" },
      { code: 13160, name: "CANTAGALLO" },
      { code: 13188, name: "CICUCO" },
      { code: 13212, name: "CÓRDOBA" },
      { code: 13222, name: "CLEMENCIA" },
      { code: 13244, name: "EL CARMEN DE BOLÍVAR" },
      { code: 13248, name: "EL GUAMO" },
      { code: 13268, name: "EL PEÑÓN" },
      { code: 13300, name: "HATILLO DE LOBA" },
      { code: 13430, name: "MAGANGUÉ" },
      { code: 13433, name: "MAHATES" },
      { code: 13440, name: "MARGARITA" },
      { code: 13442, name: "MARÍA LA BAJA" },
      { code: 13458, name: "MONTECRISTO" },
      { code: 13468, name: "SANTA CRUZ DE MOMPOX" },
      { code: 13473, name: "MORALES" },
      { code: 13490, name: "NOROSÍ" },
      { code: 13549, name: "PINILLOS" },
      { code: 13580, name: "REGIDOR" },
      { code: 13600, name: "RÍO VIEJO" },
      { code: 13620, name: "SAN CRISTÓBAL" },
      { code: 13647, name: "SAN ESTANISLAO" },
      { code: 13650, name: "SAN FERNANDO" },
      { code: 13654, name: "SAN JACINTO" },
      { code: 13655, name: "SAN JACINTO DEL CAUCA" },
      { code: 13657, name: "SAN JUAN NEPOMUCENO" },
      { code: 13667, name: "SAN MARTÍN DE LOBA" },
      { code: 13670, name: "SAN PABLO" },
      { code: 13673, name: "SANTA CATALINA" },
      { code: 13683, name: "SANTA ROSA" },
      { code: 13688, name: "SANTA ROSA DEL SUR" },
      { code: 13744, name: "SIMITÍ" },
      { code: 13760, name: "SOPLAVIENTO" },
      { code: 13780, name: "TALAIGUA NUEVO" },
      { code: 13810, name: "TIQUISIO" },
      { code: 13836, name: "TURBACO" },
      { code: 13838, name: "TURBANÁ" },
      { code: 13873, name: "VILLANUEVA" },
      { code: 13894, name: "ZAMBRANO" },
    ],
  },
  {
    code: 15,
    Department: "BOYACÁ",
    municipalities: [
      { code: 15001, name: "TUNJA" },
      { code: 15022, name: "ALMEIDA" },
      { code: 15047, name: "AQUITANIA" },
      { code: 15051, name: "ARCABUCO" },
      { code: 15087, name: "BELÉN" },
      { code: 15090, name: "BERBEO" },
      { code: 15092, name: "BETÉITIVA" },
      { code: 15097, name: "BOAVITA" },
      { code: 15104, name: "BOYACÁ" },
      { code: 15106, name: "BRICEÑO" },
      { code: 15109, name: "BUENAVISTA" },
      { code: 15114, name: "BUSBANZÁ" },
      { code: 15131, name: "CALDAS" },
      { code: 15135, name: "CAMPOHERMOSO" },
      { code: 15162, name: "CERINZA" },
      { code: 15172, name: "CHINAVITA" },
      { code: 15176, name: "CHIQUINQUIRÁ" },
      { code: 15180, name: "CHISCAS" },
      { code: 15183, name: "CHITA" },
      { code: 15185, name: "CHITARAQUE" },
      { code: 15187, name: "CHIVATÁ" },
      { code: 15189, name: "CIÉNEGA" },
      { code: 15204, name: "CÓMBITA" },
      { code: 15212, name: "COPER" },
      { code: 15215, name: "CORRALES" },
      { code: 15218, name: "COVARACHÍA" },
      { code: 15223, name: "CUBARÁ" },
      { code: 15224, name: "CUCAITA" },
      { code: 15226, name: "CUÍTIVA" },
      { code: 15232, name: "CHÍQUIZA" },
      { code: 15236, name: "CHIVOR" },
      { code: 15238, name: "DUITAMA" },
      { code: 15244, name: "EL COCUY" },
      { code: 15248, name: "EL ESPINO" },
      { code: 15272, name: "FIRAVITOBA" },
      { code: 15276, name: "FLORESTA" },
      { code: 15293, name: "GACHANTIVÁ" },
      { code: 15296, name: "GÁMEZA" },
      { code: 15299, name: "GARAGOA" },
      { code: 15317, name: "GUACAMAYAS" },
      { code: 15322, name: "GUATEQUE" },
      { code: 15325, name: "GUAYATÁ" },
      { code: 15332, name: "GÜICÁN DE LA SIERRA" },
      { code: 15362, name: "IZA" },
      { code: 15367, name: "JENESANO" },
      { code: 15368, name: "JERICÓ" },
      { code: 15377, name: "LABRANZAGRANDE" },
      { code: 15380, name: "LA CAPILLA" },
      { code: 15401, name: "LA VICTORIA" },
      { code: 15403, name: "LA UVITA" },
      { code: 15407, name: "VILLA DE LEYVA" },
      { code: 15425, name: "MACANAL" },
      { code: 15442, name: "MARIPÍ" },
      { code: 15455, name: "MIRAFLORES" },
      { code: 15464, name: "MONGUA" },
      { code: 15466, name: "MONGUÍ" },
      { code: 15469, name: "MONIQUIRÁ" },
      { code: 15476, name: "MOTAVITA" },
      { code: 15480, name: "MUZO" },
      { code: 15491, name: "NOBSA" },
      { code: 15494, name: "NUEVO COLÓN" },
      { code: 15500, name: "OICATÁ" },
      { code: 15507, name: "OTANCHE" },
      { code: 15511, name: "PACHAVITA" },
      { code: 15514, name: "PÁEZ" },
      { code: 15516, name: "PAIPA" },
      { code: 15518, name: "PAJARITO" },
      { code: 15522, name: "PANQUEBA" },
      { code: 15531, name: "PAUNA" },
      { code: 15533, name: "PAYA" },
      { code: 15537, name: "PAZ DE RÍO" },
      { code: 15542, name: "PESCA" },
      { code: 15550, name: "PISBA" },
      { code: 15572, name: "PUERTO BOYACÁ" },
      { code: 15580, name: "QUÍPAMA" },
      { code: 15599, name: "RAMIRIQUÍ" },
      { code: 15600, name: "RÁQUIRA" },
      { code: 15621, name: "RONDÓN" },
      { code: 15632, name: "SABOYÁ" },
      { code: 15638, name: "SÁCHICA" },
      { code: 15646, name: "SAMACÁ" },
      { code: 15660, name: "SAN EDUARDO" },
      { code: 15664, name: "SAN JOSÉ DE PARE" },
      { code: 15667, name: "SAN LUIS DE GACENO" },
      { code: 15673, name: "SAN MATEO" },
      { code: 15676, name: "SAN MIGUEL DE SEMA" },
      { code: 15681, name: "SAN PABLO DE BORBUR" },
      { code: 15686, name: "SANTANA" },
      { code: 15690, name: "SANTA MARÍA" },
      { code: 15693, name: "SANTA ROSA DE VITERBO" },
      { code: 15696, name: "SANTA SOFÍA" },
      { code: 15720, name: "SATIVANORTE" },
      { code: 15723, name: "SATIVASUR" },
      { code: 15740, name: "SIACHOQUE" },
      { code: 15753, name: "SOATÁ" },
      { code: 15755, name: "SOCOTÁ" },
      { code: 15757, name: "SOCHA" },
      { code: 15759, name: "SOGAMOSO" },
      { code: 15761, name: "SOMONDOCO" },
      { code: 15762, name: "SORA" },
      { code: 15763, name: "SOTAQUIRÁ" },
      { code: 15764, name: "SORACÁ" },
      { code: 15774, name: "SUSACÓN" },
      { code: 15776, name: "SUTAMARCHÁN" },
      { code: 15778, name: "SUTATENZA" },
      { code: 15790, name: "TASCO" },
      { code: 15798, name: "TENZA" },
      { code: 15804, name: "TIBANÁ" },
      { code: 15806, name: "TIBASOSA" },
      { code: 15808, name: "TINJACÁ" },
      { code: 15810, name: "TIPACOQUE" },
      { code: 15814, name: "TOCA" },
      { code: 15816, name: "TOGÜÍ" },
      { code: 15820, name: "TÓPAGA" },
      { code: 15822, name: "TOTA" },
      { code: 15832, name: "TUNUNGUÁ" },
      { code: 15835, name: "TURMEQUÉ" },
      { code: 15837, name: "TUTA" },
      { code: 15839, name: "TUTAZÁ" },
      { code: 15842, name: "ÚMBITA" },
      { code: 15861, name: "VENTAQUEMADA" },
      { code: 15879, name: "VIRACACHÁ" },
      { code: 15897, name: "ZETAQUIRA" },
    ],
  },
  {
    code: 17,
    Department: "CALDAS",
    municipalities: [
      { code: 17001, name: "MANIZALES" },
      { code: 17013, name: "AGUADAS" },
      { code: 17042, name: "ANSERMA" },
      { code: 17050, name: "ARANZAZU" },
      { code: 17088, name: "BELALCÁZAR" },
      { code: 17174, name: "CHINCHINÁ" },
      { code: 17272, name: "FILADELFIA" },
      { code: 17380, name: "LA DORADA" },
      { code: 17388, name: "LA MERCED" },
      { code: 17433, name: "MANZANARES" },
      { code: 17442, name: "MARMATO" },
      { code: 17444, name: "MARQUETALIA" },
      { code: 17446, name: "MARULANDA" },
      { code: 17486, name: "NEIRA" },
      { code: 17495, name: "NORCASIA" },
      { code: 17513, name: "PÁCORA" },
      { code: 17524, name: "PALESTINA" },
      { code: 17541, name: "PENSILVANIA" },
      { code: 17614, name: "RIOSUCIO" },
      { code: 17616, name: "RISARALDA" },
      { code: 17653, name: "SALAMINA" },
      { code: 17662, name: "SAMANÁ" },
      { code: 17665, name: "SAN JOSÉ" },
      { code: 17777, name: "SUPÍA" },
      { code: 17867, name: "VICTORIA" },
      { code: 17873, name: "VILLAMARÍA" },
      { code: 17877, name: "VITERBO" },
    ],
  },
  {
    code: 18,
    Department: "CAQUETÁ",
    municipalities: [
      { code: 18001, name: "FLORENCIA" },
      { code: 18029, name: "ALBANIA" },
      { code: 18094, name: "BELÉN DE LOS ANDAQUÍES" },
      { code: 18150, name: "CARTAGENA DEL CHAIRÁ" },
      { code: 18205, name: "CURILLO" },
      { code: 18247, name: "EL DONCELLO" },
      { code: 18256, name: "EL PAUJÍL" },
      { code: 18410, name: "LA MONTAÑITA" },
      { code: 18460, name: "MILÁN" },
      { code: 18479, name: "MORELIA" },
      { code: 18592, name: "PUERTO RICO" },
      { code: 18610, name: "SAN JOSÉ DEL FRAGUA" },
      { code: 18753, name: "SAN VICENTE DEL CAGUÁN" },
      { code: 18756, name: "SOLANO" },
      { code: 18785, name: "SOLITA" },
      { code: 18860, name: "VALPARAÍSO" },
    ],
  },
  {
    code: 19,
    Department: "CAUCA",
    municipalities: [
      { code: 19001, name: "POPAYÁN" },
      { code: 19022, name: "ALMAGUER" },
      { code: 19050, name: "ARGELIA" },
      { code: 19075, name: "BALBOA" },
      { code: 19100, name: "BOLÍVAR" },
      { code: 19110, name: "BUENOS AIRES" },
      { code: 19130, name: "CAJIBÍO" },
      { code: 19137, name: "CALDONO" },
      { code: 19142, name: "CALOTO" },
      { code: 19212, name: "CORINTO" },
      { code: 19256, name: "EL TAMBO" },
      { code: 19290, name: "FLORENCIA" },
      { code: 19300, name: "GUACHENÉ" },
      { code: 19318, name: "GUAPI" },
      { code: 19355, name: "INZÁ" },
      { code: 19364, name: "JAMBALÓ" },
      { code: 19392, name: "LA SIERRA" },
      { code: 19397, name: "LA VEGA" },
      { code: 19418, name: "LÓPEZ DE MICAY" },
      { code: 19450, name: "MERCADERES" },
      { code: 19455, name: "MIRANDA" },
      { code: 19473, name: "MORALES" },
      { code: 19513, name: "PADILLA" },
      { code: 19517, name: "PÁEZ" },
      { code: 19532, name: "PATÍA" },
      { code: 19533, name: "PIAMONTE" },
      { code: 19548, name: "PIENDAMÓ - TUNÍA" },
      { code: 19573, name: "PUERTO TEJADA" },
      { code: 19585, name: "PURACÉ" },
      { code: 19622, name: "ROSAS" },
      { code: 19693, name: "SAN SEBASTIÁN" },
      { code: 19698, name: "SANTANDER DE QUILICHAO" },
      { code: 19701, name: "SANTA ROSA" },
      { code: 19743, name: "SILVIA" },
      { code: 19760, name: "SOTARÁ - PAISPAMBA" },
      { code: 19780, name: "SUÁREZ" },
      { code: 19785, name: "SUCRE" },
      { code: 19807, name: "TIMBÍO" },
      { code: 19809, name: "TIMBIQUÍ" },
      { code: 19821, name: "TORIBÍO" },
      { code: 19824, name: "TOTORÓ" },
      { code: 19845, name: "VILLA RICA" },
    ],
  },
  {
    code: 20,
    Department: "CESAR",
    municipalities: [
      { code: 20001, name: "VALLEDUPAR" },
      { code: 20011, name: "AGUACHICA" },
      { code: 20013, name: "AGUSTÍN CODAZZI" },
      { code: 20032, name: "ASTREA" },
      { code: 20045, name: "BECERRIL" },
      { code: 20060, name: "BOSCONIA" },
      { code: 20175, name: "CHIMICHAGUA" },
      { code: 20178, name: "CHIRIGUANÁ" },
      { code: 20228, name: "CURUMANÍ" },
      { code: 20238, name: "EL COPEY" },
      { code: 20250, name: "EL PASO" },
      { code: 20295, name: "GAMARRA" },
      { code: 20310, name: "GONZÁLEZ" },
      { code: 20383, name: "LA GLORIA" },
      { code: 20400, name: "LA JAGUA DE IBIRICO" },
      { code: 20443, name: "MANAURE BALCÓN DEL CESAR" },
      { code: 20517, name: "PAILITAS" },
      { code: 20550, name: "PELAYA" },
      { code: 20570, name: "PUEBLO BELLO" },
      { code: 20614, name: "RÍO DE ORO" },
      { code: 20621, name: "LA PAZ" },
      { code: 20710, name: "SAN ALBERTO" },
      { code: 20750, name: "SAN DIEGO" },
      { code: 20770, name: "SAN MARTÍN" },
      { code: 20787, name: "TAMALAMEQUE" },
    ],
  },
  {
    code: 27,
    Department: "CHOCÓ",
    municipalities: [
      { code: 27001, name: "QUIBDÓ" },
      { code: 27006, name: "ACANDÍ" },
      { code: 27025, name: "ALTO BAUDÓ" },
      { code: 27050, name: "ATRATO" },
      { code: 27073, name: "BAGADÓ" },
      { code: 27075, name: "BAHÍA SOLANO" },
      { code: 27077, name: "BAJO BAUDÓ" },
      { code: 27099, name: "BOJAYÁ" },
      { code: 27135, name: "EL CANTÓN DEL SAN PABLO" },
      { code: 27150, name: "CARMEN DEL DARIÉN" },
      { code: 27160, name: "CÉRTEGUI" },
      { code: 27205, name: "CONDOTO" },
      { code: 27245, name: "EL CARMEN DE ATRATO" },
      { code: 27250, name: "EL LITORAL DEL SAN JUAN" },
      { code: 27361, name: "ISTMINA" },
      { code: 27372, name: "JURADÓ" },
      { code: 27413, name: "LLORÓ" },
      { code: 27425, name: "MEDIO ATRATO" },
      { code: 27430, name: "MEDIO BAUDÓ" },
      { code: 27450, name: "MEDIO SAN JUAN" },
      { code: 27491, name: "NÓVITA" },
      { code: 27493, name: "NUEVO BELÉN DE BAJIRÁ" },
      { code: 27495, name: "NUQUÍ" },
      { code: 27580, name: "RÍO IRÓ" },
      { code: 27600, name: "RÍO QUITO" },
      { code: 27615, name: "RIOSUCIO" },
      { code: 27660, name: "SAN JOSÉ DEL PALMAR" },
      { code: 27745, name: "SIPÍ" },
      { code: 27787, name: "TADÓ" },
      { code: 27800, name: "UNGUÍA" },
      { code: 27810, name: "UNIÓN PANAMERICANA" },
    ],
  },
  {
    code: 25,
    Department: "CUNDINAMARCA",
    municipalities: [
      { code: 25001, name: "AGUA DE DIOS" },
      { code: 25019, name: "ALBÁN" },
      { code: 25035, name: "ANAPOIMA" },
      { code: 25040, name: "ANOLAIMA" },
      { code: 25053, name: "ARBELÁEZ" },
      { code: 25086, name: "BELTRÁN" },
      { code: 25095, name: "BITUIMA" },
      { code: 25099, name: "BOJACÁ" },
      { code: 25120, name: "CABRERA" },
      { code: 25123, name: "CACHIPAY" },
      { code: 25126, name: "CAJICÁ" },
      { code: 25148, name: "CAPARRAPÍ" },
      { code: 25151, name: "CÁQUEZA" },
      { code: 25154, name: "CARMEN DE CARUPA" },
      { code: 25168, name: "CHAGUANÍ" },
      { code: 25175, name: "CHÍA" },
      { code: 25178, name: "CHIPAQUE" },
      { code: 25181, name: "CHOACHÍ" },
      { code: 25183, name: "CHOCONTÁ" },
      { code: 25200, name: "COGUA" },
      { code: 25214, name: "COTA" },
      { code: 25224, name: "CUCUNUBÁ" },
      { code: 25245, name: "EL COLEGIO" },
      { code: 25258, name: "EL PEÑÓN" },
      { code: 25260, name: "EL ROSAL" },
      { code: 25269, name: "FACATATIVÁ" },
      { code: 25279, name: "FÓMEQUE" },
      { code: 25281, name: "FOSCA" },
      { code: 25286, name: "FUNZA" },
      { code: 25288, name: "FÚQUENE" },
      { code: 25290, name: "FUSAGASUGÁ" },
      { code: 25293, name: "GACHALÁ" },
      { code: 25295, name: "GACHANCIPÁ" },
      { code: 25297, name: "GACHETÁ" },
      { code: 25299, name: "GAMA" },
      { code: 25307, name: "GIRARDOT" },
      { code: 25312, name: "GRANADA" },
      { code: 25317, name: "GUACHETÁ" },
      { code: 25320, name: "GUADUAS" },
      { code: 25322, name: "GUASCA" },
      { code: 25324, name: "GUATAQUÍ" },
      { code: 25326, name: "GUATAVITA" },
      { code: 25328, name: "GUAYABAL DE SÍQUIMA" },
      { code: 25335, name: "GUAYABETAL" },
      { code: 25339, name: "GUTIÉRREZ" },
      { code: 25368, name: "JERUSALÉN" },
      { code: 25372, name: "JUNÍN" },
      { code: 25377, name: "LA CALERA" },
      { code: 25386, name: "LA MESA" },
      { code: 25394, name: "LA PALMA" },
      { code: 25398, name: "LA PEÑA" },
      { code: 25402, name: "LA VEGA" },
      { code: 25407, name: "LENGUAZAQUE" },
      { code: 25426, name: "MACHETÁ" },
      { code: 25430, name: "MADRID" },
      { code: 25436, name: "MANTA" },
      { code: 25438, name: "MEDINA" },
      { code: 25473, name: "MOSQUERA" },
      { code: 25483, name: "NARIÑO" },
      { code: 25486, name: "NEMOCÓN" },
      { code: 25488, name: "NILO" },
      { code: 25489, name: "NIMAIMA" },
      { code: 25491, name: "NOCAIMA" },
      { code: 25506, name: "VENECIA" },
      { code: 25513, name: "PACHO" },
      { code: 25518, name: "PAIME" },
      { code: 25524, name: "PANDI" },
      { code: 25530, name: "PARATEBUENO" },
      { code: 25535, name: "PASCA" },
      { code: 25572, name: "PUERTO SALGAR" },
      { code: 25580, name: "PULÍ" },
      { code: 25592, name: "QUEBRADANEGRA" },
      { code: 25594, name: "QUETAME" },
      { code: 25596, name: "QUIPILE" },
      { code: 25599, name: "APULO" },
      { code: 25612, name: "RICAURTE" },
      { code: 25645, name: "SAN ANTONIO DEL TEQUENDAMA" },
      { code: 25649, name: "SAN BERNARDO" },
      { code: 25653, name: "SAN CAYETANO" },
      { code: 25658, name: "SAN FRANCISCO" },
      { code: 25662, name: "SAN JUAN DE RIOSECO" },
      { code: 25718, name: "SASAIMA" },
      { code: 25736, name: "SESQUILÉ" },
      { code: 25740, name: "SIBATÉ" },
      { code: 25743, name: "SILVANIA" },
      { code: 25745, name: "SIMIJACA" },
      { code: 25754, name: "SOACHA" },
      { code: 25758, name: "SOPÓ" },
      { code: 25769, name: "SUBACHOQUE" },
      { code: 25772, name: "SUESCA" },
      { code: 25777, name: "SUPATÁ" },
      { code: 25779, name: "SUSA" },
      { code: 25781, name: "SUTATAUSA" },
      { code: 25785, name: "TABIO" },
      { code: 25793, name: "TAUSA" },
      { code: 25797, name: "TENA" },
      { code: 25799, name: "TENJO" },
      { code: 25805, name: "TIBACUY" },
      { code: 25807, name: "TIBIRITA" },
      { code: 25815, name: "TOCAIMA" },
      { code: 25817, name: "TOCANCIPÁ" },
      { code: 25823, name: "TOPAIPÍ" },
      { code: 25839, name: "UBALÁ" },
      { code: 25841, name: "UBAQUE" },
      { code: 25843, name: "VILLA DE SAN DIEGO DE UBATÉ" },
      { code: 25845, name: "UNE" },
      { code: 25851, name: "ÚTICA" },
      { code: 25862, name: "VERGARA" },
      { code: 25867, name: "VIANÍ" },
      { code: 25871, name: "VILLAGÓMEZ" },
      { code: 25873, name: "VILLAPINZÓN" },
      { code: 25875, name: "VILLETA" },
      { code: 25878, name: "VIOTÁ" },
      { code: 25885, name: "YACOPÍ" },
      { code: 25898, name: "ZIPACÓN" },
      { code: 25899, name: "ZIPAQUIRÁ" },
    ],
  },
  {
    code: 23,
    Department: "CÓRDOBA",
    municipalities: [
      { code: 23001, name: "MONTERÍA" },
      { code: 23068, name: "AYAPEL" },
      { code: 23079, name: "BUENAVISTA" },
      { code: 23090, name: "CANALETE" },
      { code: 23162, name: "CERETÉ" },
      { code: 23168, name: "CHIMÁ" },
      { code: 23182, name: "CHINÚ" },
      { code: 23189, name: "CIÉNAGA DE ORO" },
      { code: 23300, name: "COTORRA" },
      { code: 23350, name: "LA APARTADA" },
      { code: 23417, name: "LORICA" },
      { code: 23419, name: "LOS CÓRDOBAS" },
      { code: 23464, name: "MOMIL" },
      { code: 23466, name: "MONTELÍBANO" },
      { code: 23500, name: "MOÑITOS" },
      { code: 23555, name: "PLANETA RICA" },
      { code: 23570, name: "PUEBLO NUEVO" },
      { code: 23574, name: "PUERTO ESCONDIDO" },
      { code: 23580, name: "PUERTO LIBERTADOR" },
      { code: 23586, name: "PURÍSIMA DE LA CONCEPCIÓN" },
      { code: 23660, name: "SAHAGÚN" },
      { code: 23670, name: "SAN ANDRÉS DE SOTAVENTO" },
      { code: 23672, name: "SAN ANTERO" },
      { code: 23675, name: "SAN BERNARDO DEL VIENTO" },
      { code: 23678, name: "SAN CARLOS" },
      { code: 23682, name: "SAN JOSÉ DE URÉ" },
      { code: 23686, name: "SAN PELAYO" },
      { code: 23807, name: "TIERRALTA" },
      { code: 23815, name: "TUCHÍN" },
      { code: 23855, name: "VALENCIA" },
    ],
  },
  {
    code: 94,
    Department: "GUAINÍA",
    municipalities: [
      { code: 94001, name: "INÍRIDA" },
      { code: 94343, name: "BARRANCOMINAS" },
      { code: 94883, name: "SAN FELIPE" },
      { code: 94884, name: "PUERTO COLOMBIA" },
      { code: 94885, name: "LA GUADALUPE" },
      { code: 94886, name: "CACAHUAL" },
      { code: 94887, name: "PANA PANA" },
      { code: 94888, name: "MORICHAL" },
    ],
  },
  {
    code: 95,
    Department: "GUAVIARE",
    municipalities: [
      { code: 95001, name: "SAN JOSÉ DEL GUAVIARE" },
      { code: 95015, name: "CALAMAR" },
      { code: 95025, name: "EL RETORNO" },
      { code: 95200, name: "MIRAFLORES" },
    ],
  },
  {
    code: 41,
    Department: "HUILA",
    municipalities: [
      { code: 41001, name: "NEIVA" },
      { code: 41006, name: "ACEVEDO" },
      { code: 41013, name: "AGRADO" },
      { code: 41016, name: "AIPE" },
      { code: 41020, name: "ALGECIRAS" },
      { code: 41026, name: "ALTAMIRA" },
      { code: 41078, name: "BARAYA" },
      { code: 41132, name: "CAMPOALEGRE" },
      { code: 41206, name: "COLOMBIA" },
      { code: 41244, name: "ELÍAS" },
      { code: 41298, name: "GARZÓN" },
      { code: 41306, name: "GIGANTE" },
      { code: 41319, name: "GUADALUPE" },
      { code: 41349, name: "HOBO" },
      { code: 41357, name: "ÍQUIRA" },
      { code: 41359, name: "ISNOS" },
      { code: 41378, name: "LA ARGENTINA" },
      { code: 41396, name: "LA PLATA" },
      { code: 41483, name: "NÁTAGA" },
      { code: 41503, name: "OPORAPA" },
      { code: 41518, name: "PAICOL" },
      { code: 41524, name: "PALERMO" },
      { code: 41530, name: "PALESTINA" },
      { code: 41548, name: "PITAL" },
      { code: 41551, name: "PITALITO" },
      { code: 41615, name: "RIVERA" },
      { code: 41660, name: "SALADOBLANCO" },
      { code: 41668, name: "SAN AGUSTÍN" },
      { code: 41676, name: "SANTA MARÍA" },
      { code: 41770, name: "SUAZA" },
      { code: 41791, name: "TARQUI" },
      { code: 41797, name: "TESALIA" },
      { code: 41799, name: "TELLO" },
      { code: 41801, name: "TERUEL" },
      { code: 41807, name: "TIMANÁ" },
      { code: 41872, name: "VILLAVIEJA" },
      { code: 41885, name: "YAGUARÁ" },
    ],
  },
  {
    code: 44,
    Department: "LA GUAJIRA",
    municipalities: [
      { code: 44001, name: "RIOHACHA" },
      { code: 44035, name: "ALBANIA" },
      { code: 44078, name: "BARRANCAS" },
      { code: 44090, name: "DIBULLA" },
      { code: 44098, name: "DISTRACCIÓN" },
      { code: 44110, name: "EL MOLINO" },
      { code: 44279, name: "FONSECA" },
      { code: 44378, name: "HATONUEVO" },
      { code: 44420, name: "LA JAGUA DEL PILAR" },
      { code: 44430, name: "MAICAO" },
      { code: 44560, name: "MANAURE" },
      { code: 44650, name: "SAN JUAN DEL CESAR" },
      { code: 44847, name: "URIBIA" },
      { code: 44855, name: "URUMITA" },
      { code: 44874, name: "VILLANUEVA" },
    ],
  },
  {
    code: 47,
    Department: "MAGDALENA",
    municipalities: [
      { code: 47001, name: "SANTA MARTA" },
      { code: 47030, name: "ALGARROBO" },
      { code: 47053, name: "ARACATACA" },
      { code: 47058, name: "ARIGUANÍ" },
      { code: 47161, name: "CERRO DE SAN ANTONIO" },
      { code: 47170, name: "CHIVOLO" },
      { code: 47189, name: "CIÉNAGA" },
      { code: 47205, name: "CONCORDIA" },
      { code: 47245, name: "EL BANCO" },
      { code: 47258, name: "EL PIÑÓN" },
      { code: 47268, name: "EL RETÉN" },
      { code: 47288, name: "FUNDACIÓN" },
      { code: 47318, name: "GUAMAL" },
      { code: 47460, name: "NUEVA GRANADA" },
      { code: 47541, name: "PEDRAZA" },
      { code: 47545, name: "PIJIÑO DEL CARMEN" },
      { code: 47551, name: "PIVIJAY" },
      { code: 47555, name: "PLATO" },
      { code: 47570, name: "PUEBLOVIEJO" },
      { code: 47605, name: "REMOLINO" },
      { code: 47660, name: "SABANAS DE SAN ÁNGEL" },
      { code: 47675, name: "SALAMINA" },
      { code: 47692, name: "SAN SEBASTIÁN DE BUENAVISTA" },
      { code: 47703, name: "SAN ZENÓN" },
      { code: 47707, name: "SANTA ANA" },
      { code: 47720, name: "SANTA BÁRBARA DE PINTO" },
      { code: 47745, name: "SITIONUEVO" },
      { code: 47798, name: "TENERIFE" },
      { code: 47960, name: "ZAPAYÁN" },
      { code: 47980, name: "ZONA BANANERA" },
    ],
  },
  {
    code: 50,
    Department: "META",
    municipalities: [
      { code: 50001, name: "VILLAVICENCIO" },
      { code: 50006, name: "ACACÍAS" },
      { code: 50110, name: "BARRANCA DE UPÍA" },
      { code: 50124, name: "CABUYARO" },
      { code: 50150, name: "CASTILLA LA NUEVA" },
      { code: 50223, name: "CUBARRAL" },
      { code: 50226, name: "CUMARAL" },
      { code: 50245, name: "EL CALVARIO" },
      { code: 50251, name: "EL CASTILLO" },
      { code: 50270, name: "EL DORADO" },
      { code: 50287, name: "FUENTE DE ORO" },
      { code: 50313, name: "GRANADA" },
      { code: 50318, name: "GUAMAL" },
      { code: 50325, name: "MAPIRIPÁN" },
      { code: 50330, name: "MESETAS" },
      { code: 50350, name: "LA MACARENA" },
      { code: 50370, name: "URIBE" },
      { code: 50400, name: "LEJANÍAS" },
      { code: 50450, name: "PUERTO CONCORDIA" },
      { code: 50568, name: "PUERTO GAITÁN" },
      { code: 50573, name: "PUERTO LÓPEZ" },
      { code: 50577, name: "PUERTO LLERAS" },
      { code: 50590, name: "PUERTO RICO" },
      { code: 50606, name: "RESTREPO" },
      { code: 50680, name: "SAN CARLOS DE GUAROA" },
      { code: 50683, name: "SAN JUAN DE ARAMA" },
      { code: 50686, name: "SAN JUANITO" },
      { code: 50689, name: "SAN MARTÍN" },
      { code: 50711, name: "VISTAHERMOSA" },
    ],
  },
  {
    code: 52,
    Department: "NARIÑO",
    municipalities: [
      { code: 52001, name: "PASTO" },
      { code: 52019, name: "ALBÁN" },
      { code: 52022, name: "ALDANA" },
      { code: 52036, name: "ANCUYA" },
      { code: 52051, name: "ARBOLEDA" },
      { code: 52079, name: "BARBACOAS" },
      { code: 52083, name: "BELÉN" },
      { code: 52110, name: "BUESACO" },
      { code: 52203, name: "COLÓN" },
      { code: 52207, name: "CONSACÁ" },
      { code: 52210, name: "CONTADERO" },
      { code: 52215, name: "CÓRDOBA" },
      { code: 52224, name: "CUASPUD CARLOSAMA" },
      { code: 52227, name: "CUMBAL" },
      { code: 52233, name: "CUMBITARA" },
      { code: 52240, name: "CHACHAGÜÍ" },
      { code: 52250, name: "EL CHARCO" },
      { code: 52254, name: "EL PEÑOL" },
      { code: 52256, name: "EL ROSARIO" },
      { code: 52258, name: "EL TABLÓN DE GÓMEZ" },
      { code: 52260, name: "EL TAMBO" },
      { code: 52287, name: "FUNES" },
      { code: 52317, name: "GUACHUCAL" },
      { code: 52320, name: "GUAITARILLA" },
      { code: 52323, name: "GUALMATÁN" },
      { code: 52352, name: "ILES" },
      { code: 52354, name: "IMUÉS" },
      { code: 52356, name: "IPIALES" },
      { code: 52378, name: "LA CRUZ" },
      { code: 52381, name: "LA FLORIDA" },
      { code: 52385, name: "LA LLANADA" },
      { code: 52390, name: "LA TOLA" },
      { code: 52399, name: "LA UNIÓN" },
      { code: 52405, name: "LEIVA" },
      { code: 52411, name: "LINARES" },
      { code: 52418, name: "LOS ANDES" },
      { code: 52427, name: "MAGÜÍ" },
      { code: 52435, name: "MALLAMA" },
      { code: 52473, name: "MOSQUERA" },
      { code: 52480, name: "NARIÑO" },
      { code: 52490, name: "OLAYA HERRERA" },
      { code: 52506, name: "OSPINA" },
      { code: 52520, name: "FRANCISCO PIZARRO" },
      { code: 52540, name: "POLICARPA" },
      { code: 52560, name: "POTOSÍ" },
      { code: 52565, name: "PROVIDENCIA" },
      { code: 52573, name: "PUERRES" },
      { code: 52585, name: "PUPIALES" },
      { code: 52612, name: "RICAURTE" },
      { code: 52621, name: "ROBERTO PAYÁN" },
      { code: 52678, name: "SAMANIEGO" },
      { code: 52683, name: "SANDONÁ" },
      { code: 52685, name: "SAN BERNARDO" },
      { code: 52687, name: "SAN LORENZO" },
      { code: 52693, name: "SAN PABLO" },
      { code: 52694, name: "SAN PEDRO DE CARTAGO" },
      { code: 52696, name: "SANTA BÁRBARA" },
      { code: 52699, name: "SANTACRUZ" },
      { code: 52720, name: "SAPUYES" },
      { code: 52786, name: "TAMINANGO" },
      { code: 52788, name: "TANGUA" },
      { code: 52835, name: "SAN ANDRÉS DE TUMACO" },
      { code: 52838, name: "TÚQUERRES" },
      { code: 52885, name: "YACUANQUER" },
    ],
  },
  {
    code: 54,
    Department: "NORTE DE SANTANDER",
    municipalities: [
      { code: 54001, name: "SAN JOSÉ DE CÚCUTA" },
      { code: 54003, name: "ÁBREGO" },
      { code: 54051, name: "ARBOLEDAS" },
      { code: 54099, name: "BOCHALEMA" },
      { code: 54109, name: "BUCARASICA" },
      { code: 54125, name: "CÁCOTA" },
      { code: 54128, name: "CÁCHIRA" },
      { code: 54172, name: "CHINÁCOTA" },
      { code: 54174, name: "CHITAGÁ" },
      { code: 54206, name: "CONVENCIÓN" },
      { code: 54223, name: "CUCUTILLA" },
      { code: 54239, name: "DURANIA" },
      { code: 54245, name: "EL CARMEN" },
      { code: 54250, name: "EL TARRA" },
      { code: 54261, name: "EL ZULIA" },
      { code: 54313, name: "GRAMALOTE" },
      { code: 54344, name: "HACARÍ" },
      { code: 54347, name: "HERRÁN" },
      { code: 54377, name: "LABATECA" },
      { code: 54385, name: "LA ESPERANZA" },
      { code: 54398, name: "LA PLAYA" },
      { code: 54405, name: "LOS PATIOS" },
      { code: 54418, name: "LOURDES" },
      { code: 54480, name: "MUTISCUA" },
      { code: 54498, name: "OCAÑA" },
      { code: 54518, name: "PAMPLONA" },
      { code: 54520, name: "PAMPLONITA" },
      { code: 54553, name: "PUERTO SANTANDER" },
      { code: 54599, name: "RAGONVALIA" },
      { code: 54660, name: "SALAZAR" },
      { code: 54670, name: "SAN CALIXTO" },
      { code: 54673, name: "SAN CAYETANO" },
      { code: 54680, name: "SANTIAGO" },
      { code: 54720, name: "SARDINATA" },
      { code: 54743, name: "SILOS" },
      { code: 54800, name: "TEORAMA" },
      { code: 54810, name: "TIBÚ" },
      { code: 54820, name: "TOLEDO" },
      { code: 54871, name: "VILLA CARO" },
      { code: 54874, name: "VILLA DEL ROSARIO" },
    ],
  },
  {
    code: 86,
    Department: "PUTUMAYO",
    municipalities: [
      { code: 86001, name: "MOCOA" },
      { code: 86219, name: "COLÓN" },
      { code: 86320, name: "ORITO" },
      { code: 86568, name: "PUERTO ASÍS" },
      { code: 86569, name: "PUERTO CAICEDO" },
      { code: 86571, name: "PUERTO GUZMÁN" },
      { code: 86573, name: "PUERTO LEGUÍZAMO" },
      { code: 86749, name: "SIBUNDOY" },
      { code: 86755, name: "SAN FRANCISCO" },
      { code: 86757, name: "SAN MIGUEL" },
      { code: 86760, name: "SANTIAGO" },
      { code: 86865, name: "VALLE DEL GUAMUEZ" },
      { code: 86885, name: "VILLAGARZÓN" },
    ],
  },
  {
    code: 63,
    Department: "QUINDÍO",
    municipalities: [
      { code: 63001, name: "ARMENIA" },
      { code: 63111, name: "BUENAVISTA" },
      { code: 63130, name: "CALARCÁ" },
      { code: 63190, name: "CIRCASIA" },
      { code: 63212, name: "CÓRDOBA" },
      { code: 63272, name: "FILANDIA" },
      { code: 63302, name: "GÉNOVA" },
      { code: 63401, name: "LA TEBAIDA" },
      { code: 63470, name: "MONTENEGRO" },
      { code: 63548, name: "PIJAO" },
      { code: 63594, name: "QUIMBAYA" },
      { code: 63690, name: "SALENTO" },
    ],
  },
  {
    code: 66,
    Department: "RISARALDA",
    municipalities: [
      { code: 66001, name: "PEREIRA" },
      { code: 66045, name: "APÍA" },
      { code: 66075, name: "BALBOA" },
      { code: 66088, name: "BELÉN DE UMBRÍA" },
      { code: 66170, name: "DOSQUEBRADAS" },
      { code: 66318, name: "GUÁTICA" },
      { code: 66383, name: "LA CELIA" },
      { code: 66400, name: "LA VIRGINIA" },
      { code: 66440, name: "MARSELLA" },
      { code: 66456, name: "MISTRATÓ" },
      { code: 66572, name: "PUEBLO RICO" },
      { code: 66594, name: "QUINCHÍA" },
      { code: 66682, name: "SANTA ROSA DE CABAL" },
      { code: 66687, name: "SANTUARIO" },
    ],
  },
  {
    code: 68,
    Department: "SANTANDER",
    municipalities: [
      { code: 68001, name: "BUCARAMANGA" },
      { code: 68013, name: "AGUADA" },
      { code: 68020, name: "ALBANIA" },
      { code: 68051, name: "ARATOCA" },
      { code: 68077, name: "BARBOSA" },
      { code: 68079, name: "BARICHARA" },
      { code: 68081, name: "BARRANCABERMEJA" },
      { code: 68092, name: "BETULIA" },
      { code: 68101, name: "BOLÍVAR" },
      { code: 68121, name: "CABRERA" },
      { code: 68132, name: "CALIFORNIA" },
      { code: 68147, name: "CAPITANEJO" },
      { code: 68152, name: "CARCASÍ" },
      { code: 68160, name: "CEPITÁ" },
      { code: 68162, name: "CERRITO" },
      { code: 68167, name: "CHARALÁ" },
      { code: 68169, name: "CHARTA" },
      { code: 68176, name: "CHIMA" },
      { code: 68179, name: "CHIPATÁ" },
      { code: 68190, name: "CIMITARRA" },
      { code: 68207, name: "CONCEPCIÓN" },
      { code: 68209, name: "CONFINES" },
      { code: 68211, name: "CONTRATACIÓN" },
      { code: 68217, name: "COROMORO" },
      { code: 68229, name: "CURITÍ" },
      { code: 68235, name: "EL CARMEN DE CHUCURÍ" },
      { code: 68245, name: "EL GUACAMAYO" },
      { code: 68250, name: "EL PEÑÓN" },
      { code: 68255, name: "EL PLAYÓN" },
      { code: 68264, name: "ENCINO" },
      { code: 68266, name: "ENCISO" },
      { code: 68271, name: "FLORIÁN" },
      { code: 68276, name: "FLORIDABLANCA" },
      { code: 68296, name: "GALÁN" },
      { code: 68298, name: "GÁMBITA" },
      { code: 68307, name: "GIRÓN" },
      { code: 68318, name: "GUACA" },
      { code: 68320, name: "GUADALUPE" },
      { code: 68322, name: "GUAPOTÁ" },
      { code: 68324, name: "GUAVATÁ" },
      { code: 68327, name: "GÜEPSA" },
      { code: 68344, name: "HATO" },
      { code: 68368, name: "JESÚS MARÍA" },
      { code: 68370, name: "JORDÁN" },
      { code: 68377, name: "LA BELLEZA" },
      { code: 68385, name: "LANDÁZURI" },
      { code: 68397, name: "LA PAZ" },
      { code: 68406, name: "LEBRIJA" },
      { code: 68418, name: "LOS SANTOS" },
      { code: 68425, name: "MACARAVITA" },
      { code: 68432, name: "MÁLAGA" },
      { code: 68444, name: "MATANZA" },
      { code: 68464, name: "MOGOTES" },
      { code: 68468, name: "MOLAGAVITA" },
      { code: 68498, name: "OCAMONTE" },
      { code: 68500, name: "OIBA" },
      { code: 68502, name: "ONZAGA" },
      { code: 68522, name: "PALMAR" },
      { code: 68524, name: "PALMAS DEL SOCORRO" },
      { code: 68533, name: "PÁRAMO" },
      { code: 68547, name: "PIEDECUESTA" },
      { code: 68549, name: "PINCHOTE" },
      { code: 68572, name: "PUENTE NACIONAL" },
      { code: 68573, name: "PUERTO PARRA" },
      { code: 68575, name: "PUERTO WILCHES" },
      { code: 68615, name: "RIONEGRO" },
      { code: 68655, name: "SABANA DE TORRES" },
      { code: 68669, name: "SAN ANDRÉS" },
      { code: 68673, name: "SAN BENITO" },
      { code: 68679, name: "SAN GIL" },
      { code: 68682, name: "SAN JOAQUÍN" },
      { code: 68684, name: "SAN JOSÉ DE MIRANDA" },
      { code: 68686, name: "SAN MIGUEL" },
      { code: 68689, name: "SAN VICENTE DE CHUCURÍ" },
      { code: 68705, name: "SANTA BÁRBARA" },
      { code: 68720, name: "SANTA HELENA DEL OPÓN" },
      { code: 68745, name: "SIMACOTA" },
      { code: 68755, name: "SOCORRO" },
      { code: 68770, name: "SUAITA" },
      { code: 68773, name: "SUCRE" },
      { code: 68780, name: "SURATÁ" },
      { code: 68820, name: "TONA" },
      { code: 68855, name: "VALLE DE SAN JOSÉ" },
      { code: 68861, name: "VÉLEZ" },
      { code: 68867, name: "VETAS" },
      { code: 68872, name: "VILLANUEVA" },
      { code: 68895, name: "ZAPATOCA" },
    ],
  },
  {
    code: 70,
    Department: "SUCRE",
    municipalities: [
      { code: 70001, name: "SINCELEJO" },
      { code: 70110, name: "BUENAVISTA" },
      { code: 70124, name: "CAIMITO" },
      { code: 70204, name: "COLOSÓ" },
      { code: 70215, name: "COROZAL" },
      { code: 70221, name: "COVEÑAS" },
      { code: 70230, name: "CHALÁN" },
      { code: 70233, name: "EL ROBLE" },
      { code: 70235, name: "GALERAS" },
      { code: 70265, name: "GUARANDA" },
      { code: 70400, name: "LA UNIÓN" },
      { code: 70418, name: "LOS PALMITOS" },
      { code: 70429, name: "MAJAGUAL" },
      { code: 70473, name: "MORROA" },
      { code: 70508, name: "OVEJAS" },
      { code: 70523, name: "PALMITO" },
      { code: 70670, name: "SAMPUÉS" },
      { code: 70678, name: "SAN BENITO ABAD" },
      { code: 70702, name: "SAN JUAN DE BETULIA" },
      { code: 70708, name: "SAN MARCOS" },
      { code: 70713, name: "SAN ONOFRE" },
      { code: 70717, name: "SAN PEDRO" },
      { code: 70742, name: "SAN LUIS DE SINCÉ" },
      { code: 70771, name: "SUCRE" },
      { code: 70820, name: "SANTIAGO DE TOLÚ" },
      { code: 70823, name: "SAN JOSÉ DE TOLUVIEJO" },
    ],
  },
  {
    code: 73,
    Department: "TOLIMA",
    municipalities: [
      { code: 73001, name: "IBAGUÉ" },
      { code: 73024, name: "ALPUJARRA" },
      { code: 73026, name: "ALVARADO" },
      { code: 73030, name: "AMBALEMA" },
      { code: 73043, name: "ANZOÁTEGUI" },
      { code: 73055, name: "ARMERO" },
      { code: 73067, name: "ATACO" },
      { code: 73124, name: "CAJAMARCA" },
      { code: 73148, name: "CARMEN DE APICALÁ" },
      { code: 73152, name: "CASABIANCA" },
      { code: 73168, name: "CHAPARRAL" },
      { code: 73200, name: "COELLO" },
      { code: 73217, name: "COYAIMA" },
      { code: 73226, name: "CUNDAY" },
      { code: 73236, name: "DOLORES" },
      { code: 73268, name: "ESPINAL" },
      { code: 73270, name: "FALAN" },
      { code: 73275, name: "FLANDES" },
      { code: 73283, name: "FRESNO" },
      { code: 73319, name: "GUAMO" },
      { code: 73347, name: "HERVEO" },
      { code: 73349, name: "HONDA" },
      { code: 73352, name: "ICONONZO" },
      { code: 73408, name: "LÉRIDA" },
      { code: 73411, name: "LÍBANO" },
      { code: 73443, name: "SAN SEBASTIÁN DE MARIQUITA" },
      { code: 73449, name: "MELGAR" },
      { code: 73461, name: "MURILLO" },
      { code: 73483, name: "NATAGAIMA" },
      { code: 73504, name: "ORTEGA" },
      { code: 73520, name: "PALOCABILDO" },
      { code: 73547, name: "PIEDRAS" },
      { code: 73555, name: "PLANADAS" },
      { code: 73563, name: "PRADO" },
      { code: 73585, name: "PURIFICACIÓN" },
      { code: 73616, name: "RIOBLANCO" },
      { code: 73622, name: "RONCESVALLES" },
      { code: 73624, name: "ROVIRA" },
      { code: 73671, name: "SALDAÑA" },
      { code: 73675, name: "SAN ANTONIO" },
      { code: 73678, name: "SAN LUIS" },
      { code: 73686, name: "SANTA ISABEL" },
      { code: 73770, name: "SUÁREZ" },
      { code: 73854, name: "VALLE DE SAN JUAN" },
      { code: 73861, name: "VENADILLO" },
      { code: 73870, name: "VILLAHERMOSA" },
      { code: 73873, name: "VILLARRICA" },
    ],
  },
  {
    code: 76,
    Department: "VALLE DEL CAUCA",
    municipalities: [
      { code: 76001, name: "SANTIAGO DE CALI" },
      { code: 76020, name: "ALCALÁ" },
      { code: 76036, name: "ANDALUCÍA" },
      { code: 76041, name: "ANSERMANUEVO" },
      { code: 76054, name: "ARGELIA" },
      { code: 76100, name: "BOLÍVAR" },
      { code: 76109, name: "BUENAVENTURA" },
      { code: 76111, name: "GUADALAJARA DE BUGA" },
      { code: 76113, name: "BUGALAGRANDE" },
      { code: 76122, name: "CAICEDONIA" },
      { code: 76126, name: "CALIMA" },
      { code: 76130, name: "CANDELARIA" },
      { code: 76147, name: "CARTAGO" },
      { code: 76233, name: "DAGUA" },
      { code: 76243, name: "EL ÁGUILA" },
      { code: 76246, name: "EL CAIRO" },
      { code: 76248, name: "EL CERRITO" },
      { code: 76250, name: "EL DOVIO" },
      { code: 76275, name: "FLORIDA" },
      { code: 76306, name: "GINEBRA" },
      { code: 76318, name: "GUACARÍ" },
      { code: 76364, name: "JAMUNDÍ" },
      { code: 76377, name: "LA CUMBRE" },
      { code: 76400, name: "LA UNIÓN" },
      { code: 76403, name: "LA VICTORIA" },
      { code: 76497, name: "OBANDO" },
      { code: 76520, name: "PALMIRA" },
      { code: 76563, name: "PRADERA" },
      { code: 76606, name: "RESTREPO" },
      { code: 76616, name: "RIOFRÍO" },
      { code: 76622, name: "ROLDANILLO" },
      { code: 76670, name: "SAN PEDRO" },
      { code: 76736, name: "SEVILLA" },
      { code: 76823, name: "TORO" },
      { code: 76828, name: "TRUJILLO" },
      { code: 76834, name: "TULUÁ" },
      { code: 76845, name: "ULLOA" },
      { code: 76863, name: "VERSALLES" },
      { code: 76869, name: "VIJES" },
      { code: 76890, name: "YOTOCO" },
      { code: 76892, name: "YUMBO" },
      { code: 76895, name: "ZARZAL" },
    ],
  },
  {
    code: 97,
    Department: "VAUPÉS",
    municipalities: [
      { code: 97001, name: "MITÚ" },
      { code: 97161, name: "CARURÚ" },
      { code: 97511, name: "PACOA" },
      { code: 97666, name: "TARAIRA" },
      { code: 97777, name: "PAPUNAHUA" },
      { code: 97889, name: "YAVARATÉ" },
    ],
  },
  {
    code: 99,
    Department: "VICHADA",
    municipalities: [
      { code: 99001, name: "PUERTO CARREÑO" },
      { code: 99524, name: "LA PRIMAVERA" },
      { code: 99624, name: "SANTA ROSALÍA" },
      { code: 99773, name: "CUMARIBO" },
    ],
  },
];

export const crimeDatabyYear = {
    "crime_type": "HURTO_PERSONAS",
    "variable": "gender",
    "data": [
        {
            "year": 2010,
            "total": 61442,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 21660
                },
                {
                    "gender": "MASCULINO",
                    "total": 39757
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 25
                }
            ]
        },
        {
            "year": 2011,
            "total": 67866,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 24112
                },
                {
                    "gender": "MASCULINO",
                    "total": 43701
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 53
                }
            ]
        },
        {
            "year": 2012,
            "total": 82656,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 30362
                },
                {
                    "gender": "MASCULINO",
                    "total": 52271
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 23
                }
            ]
        },
        {
            "year": 2013,
            "total": 93455,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 35009
                },
                {
                    "gender": "MASCULINO",
                    "total": 58432
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 14
                }
            ]
        },
        {
            "year": 2014,
            "total": 94427,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 37085
                },
                {
                    "gender": "MASCULINO",
                    "total": 57340
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 2
                }
            ]
        },
        {
            "year": 2015,
            "total": 101449,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 40544
                },
                {
                    "gender": "MASCULINO",
                    "total": 60899
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 6
                }
            ]
        },
        {
            "year": 2016,
            "total": 146866,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 59884
                },
                {
                    "gender": "MASCULINO",
                    "total": 86982
                }
            ]
        },
        {
            "year": 2017,
            "total": 209784,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 89293
                },
                {
                    "gender": "MASCULINO",
                    "total": 120491
                }
            ]
        },
        {
            "year": 2018,
            "total": 257072,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 112560
                },
                {
                    "gender": "MASCULINO",
                    "total": 144509
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 3
                }
            ]
        },
        {
            "year": 2019,
            "total": 306847,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 134684
                },
                {
                    "gender": "MASCULINO",
                    "total": 172126
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 37
                }
            ]
        },
        {
            "year": 2020,
            "total": 208037,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 82633
                },
                {
                    "gender": "MASCULINO",
                    "total": 125387
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 17
                }
            ]
        },
        {
            "year": 2021,
            "total": 280126,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 112867
                },
                {
                    "gender": "MASCULINO",
                    "total": 167258
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 1
                }
            ]
        },
        {
            "year": 2022,
            "total": 351370,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 143794
                },
                {
                    "gender": "MASCULINO",
                    "total": 207567
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 9
                }
            ]
        },
        {
            "year": 2023,
            "total": 391042,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 163828
                },
                {
                    "gender": "MASCULINO",
                    "total": 226624
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 590
                }
            ]
        },
        {
            "year": 2024,
            "total": 140445,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 58661
                },
                {
                    "gender": "MASCULINO",
                    "total": 81624
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 160
                }
            ]
        },
        {
            "year": 2025,
            "total": 0,
            "breakdown": []
        }
    ]
}

export const CrimDataByMonth ={
    "crime_type": "HURTO_PERSONAS",
    "variable": "gender",
    "year": 2022,
    "data": [
        {
            "month": 1,
            "total": 23804,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 9493
                },
                {
                    "gender": "MASCULINO",
                    "total": 14311
                }
            ]
        },
        {
            "month": 2,
            "total": 24389,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 9837
                },
                {
                    "gender": "MASCULINO",
                    "total": 14549
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 3
                }
            ]
        },
        {
            "month": 3,
            "total": 29581,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 12031
                },
                {
                    "gender": "MASCULINO",
                    "total": 17546
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 4
                }
            ]
        },
        {
            "month": 4,
            "total": 26815,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 10960
                },
                {
                    "gender": "MASCULINO",
                    "total": 15855
                }
            ]
        },
        {
            "month": 5,
            "total": 25708,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 10348
                },
                {
                    "gender": "MASCULINO",
                    "total": 15360
                }
            ]
        },
        {
            "month": 6,
            "total": 24092,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 9864
                },
                {
                    "gender": "MASCULINO",
                    "total": 14228
                }
            ]
        },
        {
            "month": 7,
            "total": 24835,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 9557
                },
                {
                    "gender": "MASCULINO",
                    "total": 15277
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 1
                }
            ]
        },
        {
            "month": 8,
            "total": 30985,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 12315
                },
                {
                    "gender": "MASCULINO",
                    "total": 18670
                }
            ]
        },
        {
            "month": 9,
            "total": 35550,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 15009
                },
                {
                    "gender": "MASCULINO",
                    "total": 20541
                }
            ]
        },
        {
            "month": 10,
            "total": 37296,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 15740
                },
                {
                    "gender": "MASCULINO",
                    "total": 21556
                }
            ]
        },
        {
            "month": 11,
            "total": 33120,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 13884
                },
                {
                    "gender": "MASCULINO",
                    "total": 19235
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 1
                }
            ]
        },
        {
            "month": 12,
            "total": 35195,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 14756
                },
                {
                    "gender": "MASCULINO",
                    "total": 20439
                }
            ]
        }
    ]
}

export const CrimeDataByDepartment = {
    "crime_type": "HURTO_PERSONAS",
    "variable": "gender",
    "data": [
        {
            "department": "AMAZONAS",
            "department_code": 91,
            "total": 1359,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 614
                },
                {
                    "gender": "MASCULINO",
                    "total": 745
                }
            ]
        },
        {
            "department": "ANTIOQUIA",
            "department_code": 5,
            "total": 316199,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 127765
                },
                {
                    "gender": "MASCULINO",
                    "total": 188364
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 70
                }
            ]
        },
        {
            "department": "ARAUCA",
            "department_code": 81,
            "total": 4522,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 1983
                },
                {
                    "gender": "MASCULINO",
                    "total": 2539
                }
            ]
        },
        {
            "department": "ATLÁNTICO",
            "department_code": 8,
            "total": 144982,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 51892
                },
                {
                    "gender": "MASCULINO",
                    "total": 93046
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 44
                }
            ]
        },
        {
            "department": "BOLÍVAR",
            "department_code": 13,
            "total": 61857,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 23920
                },
                {
                    "gender": "MASCULINO",
                    "total": 37903
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 34
                }
            ]
        },
        {
            "department": "BOYACÁ",
            "department_code": 15,
            "total": 36895,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 14947
                },
                {
                    "gender": "MASCULINO",
                    "total": 21946
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 2
                }
            ]
        },
        {
            "department": "CALDAS",
            "department_code": 17,
            "total": 31445,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 12784
                },
                {
                    "gender": "MASCULINO",
                    "total": 18660
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 1
                }
            ]
        },
        {
            "department": "CAQUETÁ",
            "department_code": 18,
            "total": 14331,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 7009
                },
                {
                    "gender": "MASCULINO",
                    "total": 7321
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 1
                }
            ]
        },
        {
            "department": "CASANARE",
            "department_code": 85,
            "total": 16762,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 7829
                },
                {
                    "gender": "MASCULINO",
                    "total": 8927
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 6
                }
            ]
        },
        {
            "department": "CAUCA",
            "department_code": 19,
            "total": 44380,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 19473
                },
                {
                    "gender": "MASCULINO",
                    "total": 24902
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 5
                }
            ]
        },
        {
            "department": "CESAR",
            "department_code": 20,
            "total": 39546,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 15393
                },
                {
                    "gender": "MASCULINO",
                    "total": 24143
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 10
                }
            ]
        },
        {
            "department": "CHOCÓ",
            "department_code": 27,
            "total": 8566,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 3713
                },
                {
                    "gender": "MASCULINO",
                    "total": 4852
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 1
                }
            ]
        },
        {
            "department": "CÓRDOBA",
            "department_code": 23,
            "total": 25164,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 11125
                },
                {
                    "gender": "MASCULINO",
                    "total": 14038
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 1
                }
            ]
        },
        {
            "department": "CUNDINAMARCA",
            "department_code": 11,
            "total": 1168397,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 472769
                },
                {
                    "gender": "MASCULINO",
                    "total": 695008
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 620
                }
            ]
        },
        {
            "department": "GUAINÍA",
            "department_code": 94,
            "total": 712,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 270
                },
                {
                    "gender": "MASCULINO",
                    "total": 442
                }
            ]
        },
        {
            "department": "GUAJIRA",
            "department_code": 44,
            "total": 17597,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 7379
                },
                {
                    "gender": "MASCULINO",
                    "total": 10203
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 15
                }
            ]
        },
        {
            "department": "GUAVIARE",
            "department_code": 95,
            "total": 989,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 407
                },
                {
                    "gender": "MASCULINO",
                    "total": 582
                }
            ]
        },
        {
            "department": "HUILA",
            "department_code": 41,
            "total": 60116,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 27158
                },
                {
                    "gender": "MASCULINO",
                    "total": 32953
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 5
                }
            ]
        },
        {
            "department": "MAGDALENA",
            "department_code": 47,
            "total": 41688,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 17519
                },
                {
                    "gender": "MASCULINO",
                    "total": 24154
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 15
                }
            ]
        },
        {
            "department": "META",
            "department_code": 50,
            "total": 65284,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 28711
                },
                {
                    "gender": "MASCULINO",
                    "total": 36569
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 4
                }
            ]
        },
        {
            "department": "NARIÑO",
            "department_code": 52,
            "total": 65459,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 30438
                },
                {
                    "gender": "MASCULINO",
                    "total": 34974
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 47
                }
            ]
        },
        {
            "department": "NORTE DE SANTANDER",
            "department_code": 54,
            "total": 41713,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 18557
                },
                {
                    "gender": "MASCULINO",
                    "total": 23153
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 3
                }
            ]
        },
        {
            "department": "PUTUMAYO",
            "department_code": 86,
            "total": 3861,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 1661
                },
                {
                    "gender": "MASCULINO",
                    "total": 2197
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 3
                }
            ]
        },
        {
            "department": "QUINDÍO",
            "department_code": 63,
            "total": 29935,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 12533
                },
                {
                    "gender": "MASCULINO",
                    "total": 17398
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 4
                }
            ]
        },
        {
            "department": "RISARALDA",
            "department_code": 19,
            "total": 47075,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 19922
                },
                {
                    "gender": "MASCULINO",
                    "total": 27149
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 4
                }
            ]
        },
        {
            "department": "SAN ANDRÉS",
            "department_code": 88,
            "total": 4219,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 1784
                },
                {
                    "gender": "MASCULINO",
                    "total": 2423
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 12
                }
            ]
        },
        {
            "department": "SANTANDER",
            "department_code": 5,
            "total": 128389,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 57368
                },
                {
                    "gender": "MASCULINO",
                    "total": 71002
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 19
                }
            ]
        },
        {
            "department": "SUCRE",
            "department_code": 70,
            "total": 29239,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 11609
                },
                {
                    "gender": "MASCULINO",
                    "total": 17630
                }
            ]
        },
        {
            "department": "TOLIMA",
            "department_code": 73,
            "total": 70320,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 29346
                },
                {
                    "gender": "MASCULINO",
                    "total": 40971
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 3
                }
            ]
        },
        {
            "department": "VALLE",
            "department_code": 76,
            "total": 271055,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 110783
                },
                {
                    "gender": "MASCULINO",
                    "total": 160263
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 9
                }
            ]
        },
        {
            "department": "VAUPÉS",
            "department_code": 97,
            "total": 227,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 67
                },
                {
                    "gender": "MASCULINO",
                    "total": 160
                }
            ]
        },
        {
            "department": "VICHADA",
            "department_code": 99,
            "total": 601,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 248
                },
                {
                    "gender": "MASCULINO",
                    "total": 351
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 2
                }
            ]
        }
    ]
}

export const CrimeDataByMunicipality = {
    "crime_type": "HURTO_PERSONAS",
    "variable": "gender",
    "department_code": 5,
    "data": [
        {
            "municipality": "Abejorral",
            "municipality_code": 2,
            "total": 51,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 13
                },
                {
                    "gender": "MASCULINO",
                    "total": 38
                }
            ]
        },
        {
            "municipality": "ABEJORRAL",
            "municipality_code": 2,
            "total": 120,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 36
                },
                {
                    "gender": "MASCULINO",
                    "total": 84
                }
            ]
        },
        {
            "municipality": "ABRIAQUÍ",
            "municipality_code": 4,
            "total": 12,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 2
                },
                {
                    "gender": "MASCULINO",
                    "total": 10
                }
            ]
        },
        {
            "municipality": "Alejandría",
            "municipality_code": 21,
            "total": 7,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 2
                },
                {
                    "gender": "MASCULINO",
                    "total": 5
                }
            ]
        },
        {
            "municipality": "ALEJANDRÍA",
            "municipality_code": 21,
            "total": 27,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 10
                },
                {
                    "gender": "MASCULINO",
                    "total": 17
                }
            ]
        },
        {
            "municipality": "Amagá",
            "municipality_code": 30,
            "total": 114,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 33
                },
                {
                    "gender": "MASCULINO",
                    "total": 81
                }
            ]
        },
        {
            "municipality": "AMAGÁ",
            "municipality_code": 30,
            "total": 267,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 107
                },
                {
                    "gender": "MASCULINO",
                    "total": 160
                }
            ]
        },
        {
            "municipality": "Amalfi",
            "municipality_code": 31,
            "total": 31,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 12
                },
                {
                    "gender": "MASCULINO",
                    "total": 19
                }
            ]
        },
        {
            "municipality": "AMALFI",
            "municipality_code": 31,
            "total": 228,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 87
                },
                {
                    "gender": "MASCULINO",
                    "total": 141
                }
            ]
        },
        {
            "municipality": "Andes",
            "municipality_code": 34,
            "total": 120,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 39
                },
                {
                    "gender": "MASCULINO",
                    "total": 81
                }
            ]
        },
        {
            "municipality": "ANDES",
            "municipality_code": 34,
            "total": 296,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 117
                },
                {
                    "gender": "MASCULINO",
                    "total": 179
                }
            ]
        },
        {
            "municipality": "Angelópolis",
            "municipality_code": 36,
            "total": 14,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 4
                },
                {
                    "gender": "MASCULINO",
                    "total": 10
                }
            ]
        },
        {
            "municipality": "ANGELÓPOLIS",
            "municipality_code": 36,
            "total": 35,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 15
                },
                {
                    "gender": "MASCULINO",
                    "total": 20
                }
            ]
        },
        {
            "municipality": "Angostura",
            "municipality_code": 38,
            "total": 13,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 4
                },
                {
                    "gender": "MASCULINO",
                    "total": 9
                }
            ]
        },
        {
            "municipality": "ANGOSTURA",
            "municipality_code": 38,
            "total": 57,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 22
                },
                {
                    "gender": "MASCULINO",
                    "total": 35
                }
            ]
        },
        {
            "municipality": "Anorí",
            "municipality_code": 40,
            "total": 21,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 3
                },
                {
                    "gender": "MASCULINO",
                    "total": 18
                }
            ]
        },
        {
            "municipality": "ANORÍ",
            "municipality_code": 40,
            "total": 97,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 39
                },
                {
                    "gender": "MASCULINO",
                    "total": 58
                }
            ]
        },
        {
            "municipality": "Anza",
            "municipality_code": 44,
            "total": 20,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 8
                },
                {
                    "gender": "MASCULINO",
                    "total": 12
                }
            ]
        },
        {
            "municipality": "ANZA",
            "municipality_code": 44,
            "total": 34,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 10
                },
                {
                    "gender": "MASCULINO",
                    "total": 24
                }
            ]
        },
        {
            "municipality": "Apartadó",
            "municipality_code": 45,
            "total": 892,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 340
                },
                {
                    "gender": "MASCULINO",
                    "total": 552
                }
            ]
        },
        {
            "municipality": "APARTADÓ",
            "municipality_code": 37,
            "total": 2837,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 1341
                },
                {
                    "gender": "MASCULINO",
                    "total": 1496
                }
            ]
        },
        {
            "municipality": "Arboletes",
            "municipality_code": 51,
            "total": 52,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 18
                },
                {
                    "gender": "MASCULINO",
                    "total": 34
                }
            ]
        },
        {
            "municipality": "ARBOLETES",
            "municipality_code": 51,
            "total": 127,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 56
                },
                {
                    "gender": "MASCULINO",
                    "total": 71
                }
            ]
        },
        {
            "municipality": "ARGELIA",
            "municipality_code": 55,
            "total": 101,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 28
                },
                {
                    "gender": "MASCULINO",
                    "total": 73
                }
            ]
        },
        {
            "municipality": "Armenia",
            "municipality_code": 59,
            "total": 12,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 6
                },
                {
                    "gender": "MASCULINO",
                    "total": 6
                }
            ]
        },
        {
            "municipality": "ARMENIA",
            "municipality_code": 59,
            "total": 25,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 5
                },
                {
                    "gender": "MASCULINO",
                    "total": 20
                }
            ]
        },
        {
            "municipality": "Barbosa",
            "municipality_code": 79,
            "total": 608,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 229
                },
                {
                    "gender": "MASCULINO",
                    "total": 379
                }
            ]
        },
        {
            "municipality": "BARBOSA",
            "municipality_code": 79,
            "total": 1982,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 751
                },
                {
                    "gender": "MASCULINO",
                    "total": 1228
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 3
                }
            ]
        },
        {
            "municipality": "Bello",
            "municipality_code": 88,
            "total": 6395,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 2444
                },
                {
                    "gender": "MASCULINO",
                    "total": 3947
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 4
                }
            ]
        },
        {
            "municipality": "BELLO",
            "municipality_code": 88,
            "total": 11964,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 4644
                },
                {
                    "gender": "MASCULINO",
                    "total": 7320
                }
            ]
        },
        {
            "municipality": "Belmira",
            "municipality_code": 86,
            "total": 14,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 5
                },
                {
                    "gender": "MASCULINO",
                    "total": 9
                }
            ]
        },
        {
            "municipality": "BELMIRA",
            "municipality_code": 86,
            "total": 17,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 5
                },
                {
                    "gender": "MASCULINO",
                    "total": 12
                }
            ]
        },
        {
            "municipality": "Betania",
            "municipality_code": 91,
            "total": 24,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 9
                },
                {
                    "gender": "MASCULINO",
                    "total": 15
                }
            ]
        },
        {
            "municipality": "BETANIA",
            "municipality_code": 91,
            "total": 22,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 7
                },
                {
                    "gender": "MASCULINO",
                    "total": 15
                }
            ]
        },
        {
            "municipality": "Betulia",
            "municipality_code": 93,
            "total": 30,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 12
                },
                {
                    "gender": "MASCULINO",
                    "total": 18
                }
            ]
        },
        {
            "municipality": "BETULIA",
            "municipality_code": 93,
            "total": 116,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 31
                },
                {
                    "gender": "MASCULINO",
                    "total": 85
                }
            ]
        },
        {
            "municipality": "Briceño",
            "municipality_code": 107,
            "total": 15,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 2
                },
                {
                    "gender": "MASCULINO",
                    "total": 13
                }
            ]
        },
        {
            "municipality": "Buriticá",
            "municipality_code": 113,
            "total": 22,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 11
                },
                {
                    "gender": "MASCULINO",
                    "total": 11
                }
            ]
        },
        {
            "municipality": "BURITICÁ",
            "municipality_code": 113,
            "total": 53,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 14
                },
                {
                    "gender": "MASCULINO",
                    "total": 39
                }
            ]
        },
        {
            "municipality": "Cáceres",
            "municipality_code": 120,
            "total": 34,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 8
                },
                {
                    "gender": "MASCULINO",
                    "total": 26
                }
            ]
        },
        {
            "municipality": "CÁCERES",
            "municipality_code": 120,
            "total": 61,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 12
                },
                {
                    "gender": "MASCULINO",
                    "total": 49
                }
            ]
        },
        {
            "municipality": "Caicedo",
            "municipality_code": 125,
            "total": 14,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 6
                },
                {
                    "gender": "MASCULINO",
                    "total": 8
                }
            ]
        },
        {
            "municipality": "CAICEDO",
            "municipality_code": 125,
            "total": 38,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 13
                },
                {
                    "gender": "MASCULINO",
                    "total": 25
                }
            ]
        },
        {
            "municipality": "Caldas",
            "municipality_code": 129,
            "total": 901,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 334
                },
                {
                    "gender": "MASCULINO",
                    "total": 564
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 3
                }
            ]
        },
        {
            "municipality": "CALDAS",
            "municipality_code": 129,
            "total": 1586,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 571
                },
                {
                    "gender": "MASCULINO",
                    "total": 1015
                }
            ]
        },
        {
            "municipality": "Campamento",
            "municipality_code": 134,
            "total": 6,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 1
                },
                {
                    "gender": "MASCULINO",
                    "total": 5
                }
            ]
        },
        {
            "municipality": "CAMPAMENTO",
            "municipality_code": 134,
            "total": 16,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 4
                },
                {
                    "gender": "MASCULINO",
                    "total": 12
                }
            ]
        },
        {
            "municipality": "Cañasgordas",
            "municipality_code": 138,
            "total": 24,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 6
                },
                {
                    "gender": "MASCULINO",
                    "total": 18
                }
            ]
        },
        {
            "municipality": "CAÑASGORDAS",
            "municipality_code": 138,
            "total": 41,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 12
                },
                {
                    "gender": "MASCULINO",
                    "total": 29
                }
            ]
        },
        {
            "municipality": "Caracolí",
            "municipality_code": 142,
            "total": 10,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 1
                },
                {
                    "gender": "MASCULINO",
                    "total": 9
                }
            ]
        },
        {
            "municipality": "CARACOLÍ",
            "municipality_code": 142,
            "total": 38,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 15
                },
                {
                    "gender": "MASCULINO",
                    "total": 23
                }
            ]
        },
        {
            "municipality": "Caramanta",
            "municipality_code": 145,
            "total": 15,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 9
                },
                {
                    "gender": "MASCULINO",
                    "total": 6
                }
            ]
        },
        {
            "municipality": "CARAMANTA",
            "municipality_code": 145,
            "total": 7,
            "breakdown": [
                {
                    "gender": "MASCULINO",
                    "total": 7
                }
            ]
        },
        {
            "municipality": "Carepa",
            "municipality_code": 147,
            "total": 229,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 81
                },
                {
                    "gender": "MASCULINO",
                    "total": 148
                }
            ]
        },
        {
            "municipality": "CAREPA",
            "municipality_code": 147,
            "total": 598,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 273
                },
                {
                    "gender": "MASCULINO",
                    "total": 325
                }
            ]
        },
        {
            "municipality": "Carolina",
            "municipality_code": 150,
            "total": 6,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 1
                },
                {
                    "gender": "MASCULINO",
                    "total": 5
                }
            ]
        },
        {
            "municipality": "CAROLINA",
            "municipality_code": 150,
            "total": 17,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 5
                },
                {
                    "gender": "MASCULINO",
                    "total": 12
                }
            ]
        },
        {
            "municipality": "Caucasia",
            "municipality_code": 154,
            "total": 457,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 201
                },
                {
                    "gender": "MASCULINO",
                    "total": 256
                }
            ]
        },
        {
            "municipality": "CAUCASIA",
            "municipality_code": 154,
            "total": 1070,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 521
                },
                {
                    "gender": "MASCULINO",
                    "total": 549
                }
            ]
        },
        {
            "municipality": "Chigorodó",
            "municipality_code": 172,
            "total": 172,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 62
                },
                {
                    "gender": "MASCULINO",
                    "total": 110
                }
            ]
        },
        {
            "municipality": "CHIGORODÓ",
            "municipality_code": 172,
            "total": 593,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 316
                },
                {
                    "gender": "MASCULINO",
                    "total": 277
                }
            ]
        },
        {
            "municipality": "Cisneros",
            "municipality_code": 190,
            "total": 71,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 23
                },
                {
                    "gender": "MASCULINO",
                    "total": 48
                }
            ]
        },
        {
            "municipality": "CISNEROS",
            "municipality_code": 190,
            "total": 141,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 49
                },
                {
                    "gender": "MASCULINO",
                    "total": 92
                }
            ]
        },
        {
            "municipality": "Ciudad Bolívar",
            "municipality_code": 101,
            "total": 63,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 24
                },
                {
                    "gender": "MASCULINO",
                    "total": 39
                }
            ]
        },
        {
            "municipality": "CIUDAD BOLÍVAR",
            "municipality_code": 101,
            "total": 142,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 58
                },
                {
                    "gender": "MASCULINO",
                    "total": 84
                }
            ]
        },
        {
            "municipality": "Cocorná",
            "municipality_code": 197,
            "total": 64,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 15
                },
                {
                    "gender": "MASCULINO",
                    "total": 49
                }
            ]
        },
        {
            "municipality": "COCORNÁ",
            "municipality_code": 197,
            "total": 129,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 36
                },
                {
                    "gender": "MASCULINO",
                    "total": 93
                }
            ]
        },
        {
            "municipality": "CONCEPCIÓN",
            "municipality_code": 206,
            "total": 44,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 18
                },
                {
                    "gender": "MASCULINO",
                    "total": 26
                }
            ]
        },
        {
            "municipality": "Concordia",
            "municipality_code": 209,
            "total": 25,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 9
                },
                {
                    "gender": "MASCULINO",
                    "total": 16
                }
            ]
        },
        {
            "municipality": "CONCORDIA",
            "municipality_code": 209,
            "total": 163,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 61
                },
                {
                    "gender": "MASCULINO",
                    "total": 102
                }
            ]
        },
        {
            "municipality": "Copacabana",
            "municipality_code": 212,
            "total": 1146,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 433
                },
                {
                    "gender": "MASCULINO",
                    "total": 713
                }
            ]
        },
        {
            "municipality": "COPACABANA",
            "municipality_code": 212,
            "total": 2101,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 716
                },
                {
                    "gender": "MASCULINO",
                    "total": 1385
                }
            ]
        },
        {
            "municipality": "Dabeiba",
            "municipality_code": 234,
            "total": 56,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 11
                },
                {
                    "gender": "MASCULINO",
                    "total": 45
                }
            ]
        },
        {
            "municipality": "DABEIBA",
            "municipality_code": 234,
            "total": 98,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 28
                },
                {
                    "gender": "MASCULINO",
                    "total": 70
                }
            ]
        },
        {
            "municipality": "Don Matías",
            "municipality_code": 237,
            "total": 79,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 32
                },
                {
                    "gender": "MASCULINO",
                    "total": 47
                }
            ]
        },
        {
            "municipality": "DON MATÍAS",
            "municipality_code": 237,
            "total": 192,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 74
                },
                {
                    "gender": "MASCULINO",
                    "total": 118
                }
            ]
        },
        {
            "municipality": "Ebéjico",
            "municipality_code": 240,
            "total": 10,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 6
                },
                {
                    "gender": "MASCULINO",
                    "total": 4
                }
            ]
        },
        {
            "municipality": "EBÉJICO",
            "municipality_code": 240,
            "total": 40,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 18
                },
                {
                    "gender": "MASCULINO",
                    "total": 22
                }
            ]
        },
        {
            "municipality": "El Bagre",
            "municipality_code": 250,
            "total": 39,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 14
                },
                {
                    "gender": "MASCULINO",
                    "total": 25
                }
            ]
        },
        {
            "municipality": "EL BAGRE",
            "municipality_code": 250,
            "total": 91,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 33
                },
                {
                    "gender": "MASCULINO",
                    "total": 58
                }
            ]
        },
        {
            "municipality": "El Carmen de Viboral",
            "municipality_code": 148,
            "total": 302,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 119
                },
                {
                    "gender": "MASCULINO",
                    "total": 183
                }
            ]
        },
        {
            "municipality": "EL CARMEN DE VIBORAL",
            "municipality_code": 148,
            "total": 641,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 261
                },
                {
                    "gender": "MASCULINO",
                    "total": 380
                }
            ]
        },
        {
            "municipality": "El Santuario",
            "municipality_code": 697,
            "total": 157,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 56
                },
                {
                    "gender": "MASCULINO",
                    "total": 101
                }
            ]
        },
        {
            "municipality": "EL SANTUARIO",
            "municipality_code": 697,
            "total": 338,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 134
                },
                {
                    "gender": "MASCULINO",
                    "total": 204
                }
            ]
        },
        {
            "municipality": "Entrerrios",
            "municipality_code": 264,
            "total": 43,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 15
                },
                {
                    "gender": "MASCULINO",
                    "total": 28
                }
            ]
        },
        {
            "municipality": "ENTRERRIOS",
            "municipality_code": 264,
            "total": 63,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 22
                },
                {
                    "gender": "MASCULINO",
                    "total": 41
                }
            ]
        },
        {
            "municipality": "Envigado",
            "municipality_code": 266,
            "total": 3759,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 1639
                },
                {
                    "gender": "MASCULINO",
                    "total": 2115
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 5
                }
            ]
        },
        {
            "municipality": "ENVIGADO",
            "municipality_code": 266,
            "total": 9503,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 4078
                },
                {
                    "gender": "MASCULINO",
                    "total": 5425
                }
            ]
        },
        {
            "municipality": "Fredonia",
            "municipality_code": 282,
            "total": 43,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 14
                },
                {
                    "gender": "MASCULINO",
                    "total": 29
                }
            ]
        },
        {
            "municipality": "FREDONIA",
            "municipality_code": 282,
            "total": 150,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 61
                },
                {
                    "gender": "MASCULINO",
                    "total": 89
                }
            ]
        },
        {
            "municipality": "Frontino",
            "municipality_code": 284,
            "total": 28,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 13
                },
                {
                    "gender": "MASCULINO",
                    "total": 15
                }
            ]
        },
        {
            "municipality": "FRONTINO",
            "municipality_code": 284,
            "total": 43,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 17
                },
                {
                    "gender": "MASCULINO",
                    "total": 26
                }
            ]
        },
        {
            "municipality": "Giraldo",
            "municipality_code": 306,
            "total": 7,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 4
                },
                {
                    "gender": "MASCULINO",
                    "total": 3
                }
            ]
        },
        {
            "municipality": "GIRALDO",
            "municipality_code": 306,
            "total": 32,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 13
                },
                {
                    "gender": "MASCULINO",
                    "total": 19
                }
            ]
        },
        {
            "municipality": "Girardota",
            "municipality_code": 308,
            "total": 428,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 157
                },
                {
                    "gender": "MASCULINO",
                    "total": 271
                }
            ]
        },
        {
            "municipality": "GIRARDOTA",
            "municipality_code": 308,
            "total": 832,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 297
                },
                {
                    "gender": "MASCULINO",
                    "total": 535
                }
            ]
        },
        {
            "municipality": "Gómez Plata",
            "municipality_code": 310,
            "total": 25,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 7
                },
                {
                    "gender": "MASCULINO",
                    "total": 18
                }
            ]
        },
        {
            "municipality": "GÓMEZ PLATA",
            "municipality_code": 310,
            "total": 57,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 21
                },
                {
                    "gender": "MASCULINO",
                    "total": 36
                }
            ]
        },
        {
            "municipality": "Guarne",
            "municipality_code": 318,
            "total": 676,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 259
                },
                {
                    "gender": "MASCULINO",
                    "total": 417
                }
            ]
        },
        {
            "municipality": "GUARNE",
            "municipality_code": 318,
            "total": 1262,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 439
                },
                {
                    "gender": "MASCULINO",
                    "total": 823
                }
            ]
        },
        {
            "municipality": "Guatapé",
            "municipality_code": 321,
            "total": 147,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 67
                },
                {
                    "gender": "MASCULINO",
                    "total": 80
                }
            ]
        },
        {
            "municipality": "GUATAPÉ",
            "municipality_code": 321,
            "total": 181,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 81
                },
                {
                    "gender": "MASCULINO",
                    "total": 100
                }
            ]
        },
        {
            "municipality": "Heliconia",
            "municipality_code": 347,
            "total": 20,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 4
                },
                {
                    "gender": "MASCULINO",
                    "total": 16
                }
            ]
        },
        {
            "municipality": "HELICONIA",
            "municipality_code": 347,
            "total": 36,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 9
                },
                {
                    "gender": "MASCULINO",
                    "total": 27
                }
            ]
        },
        {
            "municipality": "Hispania",
            "municipality_code": 353,
            "total": 13,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 4
                },
                {
                    "gender": "MASCULINO",
                    "total": 9
                }
            ]
        },
        {
            "municipality": "HISPANIA",
            "municipality_code": 353,
            "total": 32,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 8
                },
                {
                    "gender": "MASCULINO",
                    "total": 24
                }
            ]
        },
        {
            "municipality": "Itagui",
            "municipality_code": 360,
            "total": 4245,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 1593
                },
                {
                    "gender": "MASCULINO",
                    "total": 2648
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 4
                }
            ]
        },
        {
            "municipality": "ITAGUI",
            "municipality_code": 360,
            "total": 10585,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 3961
                },
                {
                    "gender": "MASCULINO",
                    "total": 6624
                }
            ]
        },
        {
            "municipality": "Ituango",
            "municipality_code": 361,
            "total": 33,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 9
                },
                {
                    "gender": "MASCULINO",
                    "total": 24
                }
            ]
        },
        {
            "municipality": "ITUANGO",
            "municipality_code": 361,
            "total": 82,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 18
                },
                {
                    "gender": "MASCULINO",
                    "total": 64
                }
            ]
        },
        {
            "municipality": "Jardín",
            "municipality_code": 364,
            "total": 64,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 24
                },
                {
                    "gender": "MASCULINO",
                    "total": 40
                }
            ]
        },
        {
            "municipality": "JARDÍN",
            "municipality_code": 364,
            "total": 65,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 32
                },
                {
                    "gender": "MASCULINO",
                    "total": 33
                }
            ]
        },
        {
            "municipality": "Jericó",
            "municipality_code": 368,
            "total": 42,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 22
                },
                {
                    "gender": "MASCULINO",
                    "total": 20
                }
            ]
        },
        {
            "municipality": "JERICÓ",
            "municipality_code": 368,
            "total": 75,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 25
                },
                {
                    "gender": "MASCULINO",
                    "total": 50
                }
            ]
        },
        {
            "municipality": "La Ceja",
            "municipality_code": 376,
            "total": 595,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 223
                },
                {
                    "gender": "MASCULINO",
                    "total": 372
                }
            ]
        },
        {
            "municipality": "LA CEJA",
            "municipality_code": 376,
            "total": 1485,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 602
                },
                {
                    "gender": "MASCULINO",
                    "total": 883
                }
            ]
        },
        {
            "municipality": "La Estrella",
            "municipality_code": 380,
            "total": 848,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 336
                },
                {
                    "gender": "MASCULINO",
                    "total": 509
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 3
                }
            ]
        },
        {
            "municipality": "LA ESTRELLA",
            "municipality_code": 380,
            "total": 1850,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 659
                },
                {
                    "gender": "MASCULINO",
                    "total": 1191
                }
            ]
        },
        {
            "municipality": "La Pintada",
            "municipality_code": 390,
            "total": 82,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 22
                },
                {
                    "gender": "MASCULINO",
                    "total": 60
                }
            ]
        },
        {
            "municipality": "LA PINTADA",
            "municipality_code": 390,
            "total": 120,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 27
                },
                {
                    "gender": "MASCULINO",
                    "total": 93
                }
            ]
        },
        {
            "municipality": "LA UNIÓN",
            "municipality_code": 400,
            "total": 843,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 343
                },
                {
                    "gender": "MASCULINO",
                    "total": 500
                }
            ]
        },
        {
            "municipality": "Liborina",
            "municipality_code": 411,
            "total": 9,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 6
                },
                {
                    "gender": "MASCULINO",
                    "total": 3
                }
            ]
        },
        {
            "municipality": "LIBORINA",
            "municipality_code": 411,
            "total": 24,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 8
                },
                {
                    "gender": "MASCULINO",
                    "total": 16
                }
            ]
        },
        {
            "municipality": "Maceo",
            "municipality_code": 425,
            "total": 21,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 4
                },
                {
                    "gender": "MASCULINO",
                    "total": 17
                }
            ]
        },
        {
            "municipality": "MACEO",
            "municipality_code": 425,
            "total": 37,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 15
                },
                {
                    "gender": "MASCULINO",
                    "total": 22
                }
            ]
        },
        {
            "municipality": "Marinilla",
            "municipality_code": 440,
            "total": 653,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 257
                },
                {
                    "gender": "MASCULINO",
                    "total": 396
                }
            ]
        },
        {
            "municipality": "MARINILLA",
            "municipality_code": 440,
            "total": 1060,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 430
                },
                {
                    "gender": "MASCULINO",
                    "total": 630
                }
            ]
        },
        {
            "municipality": "Medellín (CT)",
            "municipality_code": 1,
            "total": 71884,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 28402
                },
                {
                    "gender": "MASCULINO",
                    "total": 43434
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 48
                }
            ]
        },
        {
            "municipality": "MEDELLÍN (CT)",
            "municipality_code": 1,
            "total": 143774,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 60006
                },
                {
                    "gender": "MASCULINO",
                    "total": 83766
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 2
                }
            ]
        },
        {
            "municipality": "Montebello",
            "municipality_code": 467,
            "total": 15,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 2
                },
                {
                    "gender": "MASCULINO",
                    "total": 13
                }
            ]
        },
        {
            "municipality": "MONTEBELLO",
            "municipality_code": 467,
            "total": 33,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 8
                },
                {
                    "gender": "MASCULINO",
                    "total": 25
                }
            ]
        },
        {
            "municipality": "Murindó",
            "municipality_code": 475,
            "total": 6,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 1
                },
                {
                    "gender": "MASCULINO",
                    "total": 5
                }
            ]
        },
        {
            "municipality": "MURINDÓ",
            "municipality_code": 475,
            "total": 12,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 1
                },
                {
                    "gender": "MASCULINO",
                    "total": 11
                }
            ]
        },
        {
            "municipality": "Mutatá",
            "municipality_code": 480,
            "total": 31,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 11
                },
                {
                    "gender": "MASCULINO",
                    "total": 20
                }
            ]
        },
        {
            "municipality": "MUTATÁ",
            "municipality_code": 480,
            "total": 95,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 29
                },
                {
                    "gender": "MASCULINO",
                    "total": 66
                }
            ]
        },
        {
            "municipality": "Nechí",
            "municipality_code": 495,
            "total": 18,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 6
                },
                {
                    "gender": "MASCULINO",
                    "total": 12
                }
            ]
        },
        {
            "municipality": "NECHÍ",
            "municipality_code": 495,
            "total": 30,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 8
                },
                {
                    "gender": "MASCULINO",
                    "total": 22
                }
            ]
        },
        {
            "municipality": "Necoclí",
            "municipality_code": 490,
            "total": 97,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 38
                },
                {
                    "gender": "MASCULINO",
                    "total": 59
                }
            ]
        },
        {
            "municipality": "NECOCLÍ",
            "municipality_code": 490,
            "total": 209,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 85
                },
                {
                    "gender": "MASCULINO",
                    "total": 124
                }
            ]
        },
        {
            "municipality": "Olaya",
            "municipality_code": 501,
            "total": 2,
            "breakdown": [
                {
                    "gender": "MASCULINO",
                    "total": 2
                }
            ]
        },
        {
            "municipality": "OLAYA",
            "municipality_code": 501,
            "total": 12,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 3
                },
                {
                    "gender": "MASCULINO",
                    "total": 9
                }
            ]
        },
        {
            "municipality": "Peñol",
            "municipality_code": 541,
            "total": 113,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 46
                },
                {
                    "gender": "MASCULINO",
                    "total": 67
                }
            ]
        },
        {
            "municipality": "PEÑOL",
            "municipality_code": 541,
            "total": 168,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 46
                },
                {
                    "gender": "MASCULINO",
                    "total": 122
                }
            ]
        },
        {
            "municipality": "Peque",
            "municipality_code": 543,
            "total": 3,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 3
                }
            ]
        },
        {
            "municipality": "PEQUE",
            "municipality_code": 543,
            "total": 9,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 5
                },
                {
                    "gender": "MASCULINO",
                    "total": 4
                }
            ]
        },
        {
            "municipality": "Pueblorrico",
            "municipality_code": 576,
            "total": 6,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 2
                },
                {
                    "gender": "MASCULINO",
                    "total": 4
                }
            ]
        },
        {
            "municipality": "PUEBLORRICO",
            "municipality_code": 576,
            "total": 20,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 9
                },
                {
                    "gender": "MASCULINO",
                    "total": 11
                }
            ]
        },
        {
            "municipality": "Puerto Berrío",
            "municipality_code": 579,
            "total": 232,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 70
                },
                {
                    "gender": "MASCULINO",
                    "total": 162
                }
            ]
        },
        {
            "municipality": "PUERTO BERRÍO",
            "municipality_code": 579,
            "total": 709,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 269
                },
                {
                    "gender": "MASCULINO",
                    "total": 440
                }
            ]
        },
        {
            "municipality": "Puerto Nare",
            "municipality_code": 585,
            "total": 15,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 9
                },
                {
                    "gender": "MASCULINO",
                    "total": 6
                }
            ]
        },
        {
            "municipality": "PUERTO NARE",
            "municipality_code": 585,
            "total": 82,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 26
                },
                {
                    "gender": "MASCULINO",
                    "total": 56
                }
            ]
        },
        {
            "municipality": "Puerto Triunfo",
            "municipality_code": 591,
            "total": 139,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 50
                },
                {
                    "gender": "MASCULINO",
                    "total": 89
                }
            ]
        },
        {
            "municipality": "PUERTO TRIUNFO",
            "municipality_code": 591,
            "total": 309,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 88
                },
                {
                    "gender": "MASCULINO",
                    "total": 221
                }
            ]
        },
        {
            "municipality": "Remedios",
            "municipality_code": 604,
            "total": 51,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 11
                },
                {
                    "gender": "MASCULINO",
                    "total": 40
                }
            ]
        },
        {
            "municipality": "REMEDIOS",
            "municipality_code": 604,
            "total": 106,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 32
                },
                {
                    "gender": "MASCULINO",
                    "total": 74
                }
            ]
        },
        {
            "municipality": "Retiro",
            "municipality_code": 607,
            "total": 181,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 63
                },
                {
                    "gender": "MASCULINO",
                    "total": 118
                }
            ]
        },
        {
            "municipality": "RETIRO",
            "municipality_code": 607,
            "total": 567,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 227
                },
                {
                    "gender": "MASCULINO",
                    "total": 340
                }
            ]
        },
        {
            "municipality": "Rionegro",
            "municipality_code": 615,
            "total": 2543,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 1006
                },
                {
                    "gender": "MASCULINO",
                    "total": 1537
                }
            ]
        },
        {
            "municipality": "RIONEGRO",
            "municipality_code": 615,
            "total": 4858,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 1990
                },
                {
                    "gender": "MASCULINO",
                    "total": 2868
                }
            ]
        },
        {
            "municipality": "Sabaneta",
            "municipality_code": 631,
            "total": 1724,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 718
                },
                {
                    "gender": "MASCULINO",
                    "total": 1005
                },
                {
                    "gender": "NO REPORTADO",
                    "total": 1
                }
            ]
        },
        {
            "municipality": "SABANETA",
            "municipality_code": 631,
            "total": 3685,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 1560
                },
                {
                    "gender": "MASCULINO",
                    "total": 2125
                }
            ]
        },
        {
            "municipality": "Salgar",
            "municipality_code": 642,
            "total": 18,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 9
                },
                {
                    "gender": "MASCULINO",
                    "total": 9
                }
            ]
        },
        {
            "municipality": "SALGAR",
            "municipality_code": 642,
            "total": 74,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 15
                },
                {
                    "gender": "MASCULINO",
                    "total": 59
                }
            ]
        },
        {
            "municipality": "San Andrés de Cuerquía",
            "municipality_code": 647,
            "total": 12,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 8
                },
                {
                    "gender": "MASCULINO",
                    "total": 4
                }
            ]
        },
        {
            "municipality": "SAN ANDRÉS DE CUERQUÍA",
            "municipality_code": 647,
            "total": 38,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 10
                },
                {
                    "gender": "MASCULINO",
                    "total": 28
                }
            ]
        },
        {
            "municipality": "San Francisco",
            "municipality_code": 652,
            "total": 86,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 21
                },
                {
                    "gender": "MASCULINO",
                    "total": 65
                }
            ]
        },
        {
            "municipality": "San Jerónimo",
            "municipality_code": 656,
            "total": 106,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 44
                },
                {
                    "gender": "MASCULINO",
                    "total": 62
                }
            ]
        },
        {
            "municipality": "SAN JERÓNIMO",
            "municipality_code": 656,
            "total": 184,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 64
                },
                {
                    "gender": "MASCULINO",
                    "total": 120
                }
            ]
        },
        {
            "municipality": "San José de La Montaña",
            "municipality_code": 658,
            "total": 5,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 3
                },
                {
                    "gender": "MASCULINO",
                    "total": 2
                }
            ]
        },
        {
            "municipality": "SAN JOSÉ DE LA MONTAÑA",
            "municipality_code": 658,
            "total": 15,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 6
                },
                {
                    "gender": "MASCULINO",
                    "total": 9
                }
            ]
        },
        {
            "municipality": "San Juan de Urabá",
            "municipality_code": 659,
            "total": 9,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 3
                },
                {
                    "gender": "MASCULINO",
                    "total": 6
                }
            ]
        },
        {
            "municipality": "SAN JUAN DE URABÁ",
            "municipality_code": 659,
            "total": 18,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 7
                },
                {
                    "gender": "MASCULINO",
                    "total": 11
                }
            ]
        },
        {
            "municipality": "San Luis",
            "municipality_code": 660,
            "total": 135,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 41
                },
                {
                    "gender": "MASCULINO",
                    "total": 94
                }
            ]
        },
        {
            "municipality": "SAN LUIS",
            "municipality_code": 660,
            "total": 239,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 71
                },
                {
                    "gender": "MASCULINO",
                    "total": 168
                }
            ]
        },
        {
            "municipality": "San Pedro",
            "municipality_code": 664,
            "total": 238,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 87
                },
                {
                    "gender": "MASCULINO",
                    "total": 151
                }
            ]
        },
        {
            "municipality": "San Pedro de Urabá",
            "municipality_code": 665,
            "total": 15,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 7
                },
                {
                    "gender": "MASCULINO",
                    "total": 8
                }
            ]
        },
        {
            "municipality": "SAN PEDRO DE URABÁ",
            "municipality_code": 665,
            "total": 69,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 31
                },
                {
                    "gender": "MASCULINO",
                    "total": 38
                }
            ]
        },
        {
            "municipality": "San Rafael",
            "municipality_code": 667,
            "total": 39,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 18
                },
                {
                    "gender": "MASCULINO",
                    "total": 21
                }
            ]
        },
        {
            "municipality": "SAN RAFAEL",
            "municipality_code": 667,
            "total": 122,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 43
                },
                {
                    "gender": "MASCULINO",
                    "total": 79
                }
            ]
        },
        {
            "municipality": "San Roque",
            "municipality_code": 670,
            "total": 40,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 10
                },
                {
                    "gender": "MASCULINO",
                    "total": 30
                }
            ]
        },
        {
            "municipality": "SAN ROQUE",
            "municipality_code": 670,
            "total": 98,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 42
                },
                {
                    "gender": "MASCULINO",
                    "total": 56
                }
            ]
        },
        {
            "municipality": "Santa Bárbara",
            "municipality_code": 679,
            "total": 58,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 30
                },
                {
                    "gender": "MASCULINO",
                    "total": 28
                }
            ]
        },
        {
            "municipality": "SANTA BÁRBARA",
            "municipality_code": 679,
            "total": 236,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 65
                },
                {
                    "gender": "MASCULINO",
                    "total": 171
                }
            ]
        },
        {
            "municipality": "Santafé de Antioquia",
            "municipality_code": 42,
            "total": 261,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 96
                },
                {
                    "gender": "MASCULINO",
                    "total": 165
                }
            ]
        },
        {
            "municipality": "SANTAFÉ DE ANTIOQUIA",
            "municipality_code": 42,
            "total": 394,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 150
                },
                {
                    "gender": "MASCULINO",
                    "total": 244
                }
            ]
        },
        {
            "municipality": "Santa Rosa de Osos",
            "municipality_code": 686,
            "total": 173,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 65
                },
                {
                    "gender": "MASCULINO",
                    "total": 108
                }
            ]
        },
        {
            "municipality": "SANTA ROSA DE OSOS",
            "municipality_code": 686,
            "total": 446,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 170
                },
                {
                    "gender": "MASCULINO",
                    "total": 276
                }
            ]
        },
        {
            "municipality": "Santo Domingo",
            "municipality_code": 690,
            "total": 44,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 15
                },
                {
                    "gender": "MASCULINO",
                    "total": 29
                }
            ]
        },
        {
            "municipality": "SANTO DOMINGO",
            "municipality_code": 690,
            "total": 96,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 20
                },
                {
                    "gender": "MASCULINO",
                    "total": 76
                }
            ]
        },
        {
            "municipality": "San Vicente",
            "municipality_code": 674,
            "total": 58,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 14
                },
                {
                    "gender": "MASCULINO",
                    "total": 44
                }
            ]
        },
        {
            "municipality": "SAN VICENTE",
            "municipality_code": 674,
            "total": 128,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 48
                },
                {
                    "gender": "MASCULINO",
                    "total": 80
                }
            ]
        },
        {
            "municipality": "Segovia",
            "municipality_code": 736,
            "total": 77,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 31
                },
                {
                    "gender": "MASCULINO",
                    "total": 46
                }
            ]
        },
        {
            "municipality": "SEGOVIA",
            "municipality_code": 736,
            "total": 158,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 61
                },
                {
                    "gender": "MASCULINO",
                    "total": 97
                }
            ]
        },
        {
            "municipality": "Sonson",
            "municipality_code": 756,
            "total": 92,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 29
                },
                {
                    "gender": "MASCULINO",
                    "total": 63
                }
            ]
        },
        {
            "municipality": "SONSON",
            "municipality_code": 756,
            "total": 240,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 81
                },
                {
                    "gender": "MASCULINO",
                    "total": 159
                }
            ]
        },
        {
            "municipality": "Sopetrán",
            "municipality_code": 761,
            "total": 105,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 38
                },
                {
                    "gender": "MASCULINO",
                    "total": 67
                }
            ]
        },
        {
            "municipality": "SOPETRÁN",
            "municipality_code": 761,
            "total": 156,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 56
                },
                {
                    "gender": "MASCULINO",
                    "total": 100
                }
            ]
        },
        {
            "municipality": "Támesis",
            "municipality_code": 789,
            "total": 19,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 4
                },
                {
                    "gender": "MASCULINO",
                    "total": 15
                }
            ]
        },
        {
            "municipality": "TÁMESIS",
            "municipality_code": 789,
            "total": 86,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 34
                },
                {
                    "gender": "MASCULINO",
                    "total": 52
                }
            ]
        },
        {
            "municipality": "Tarazá",
            "municipality_code": 790,
            "total": 43,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 13
                },
                {
                    "gender": "MASCULINO",
                    "total": 30
                }
            ]
        },
        {
            "municipality": "TARAZÁ",
            "municipality_code": 790,
            "total": 87,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 27
                },
                {
                    "gender": "MASCULINO",
                    "total": 60
                }
            ]
        },
        {
            "municipality": "Tarso",
            "municipality_code": 792,
            "total": 8,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 4
                },
                {
                    "gender": "MASCULINO",
                    "total": 4
                }
            ]
        },
        {
            "municipality": "TARSO",
            "municipality_code": 792,
            "total": 27,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 7
                },
                {
                    "gender": "MASCULINO",
                    "total": 20
                }
            ]
        },
        {
            "municipality": "Titiribí",
            "municipality_code": 809,
            "total": 26,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 8
                },
                {
                    "gender": "MASCULINO",
                    "total": 18
                }
            ]
        },
        {
            "municipality": "TITIRIBÍ",
            "municipality_code": 809,
            "total": 62,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 21
                },
                {
                    "gender": "MASCULINO",
                    "total": 41
                }
            ]
        },
        {
            "municipality": "TOLEDO",
            "municipality_code": 819,
            "total": 51,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 11
                },
                {
                    "gender": "MASCULINO",
                    "total": 40
                }
            ]
        },
        {
            "municipality": "Turbo",
            "municipality_code": 837,
            "total": 339,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 123
                },
                {
                    "gender": "MASCULINO",
                    "total": 216
                }
            ]
        },
        {
            "municipality": "TURBO",
            "municipality_code": 837,
            "total": 1021,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 472
                },
                {
                    "gender": "MASCULINO",
                    "total": 549
                }
            ]
        },
        {
            "municipality": "Uramita",
            "municipality_code": 842,
            "total": 15,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 3
                },
                {
                    "gender": "MASCULINO",
                    "total": 12
                }
            ]
        },
        {
            "municipality": "URAMITA",
            "municipality_code": 842,
            "total": 30,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 13
                },
                {
                    "gender": "MASCULINO",
                    "total": 17
                }
            ]
        },
        {
            "municipality": "Urrao",
            "municipality_code": 847,
            "total": 52,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 19
                },
                {
                    "gender": "MASCULINO",
                    "total": 33
                }
            ]
        },
        {
            "municipality": "URRAO",
            "municipality_code": 847,
            "total": 145,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 54
                },
                {
                    "gender": "MASCULINO",
                    "total": 91
                }
            ]
        },
        {
            "municipality": "Valdivia",
            "municipality_code": 854,
            "total": 29,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 2
                },
                {
                    "gender": "MASCULINO",
                    "total": 27
                }
            ]
        },
        {
            "municipality": "VALDIVIA",
            "municipality_code": 854,
            "total": 84,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 16
                },
                {
                    "gender": "MASCULINO",
                    "total": 68
                }
            ]
        },
        {
            "municipality": "Valparaíso",
            "municipality_code": 856,
            "total": 25,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 11
                },
                {
                    "gender": "MASCULINO",
                    "total": 14
                }
            ]
        },
        {
            "municipality": "Vegachí",
            "municipality_code": 858,
            "total": 49,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 13
                },
                {
                    "gender": "MASCULINO",
                    "total": 36
                }
            ]
        },
        {
            "municipality": "VEGACHÍ",
            "municipality_code": 858,
            "total": 39,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 15
                },
                {
                    "gender": "MASCULINO",
                    "total": 24
                }
            ]
        },
        {
            "municipality": "VENECIA",
            "municipality_code": 861,
            "total": 136,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 36
                },
                {
                    "gender": "MASCULINO",
                    "total": 100
                }
            ]
        },
        {
            "municipality": "Vigía del Fuerte",
            "municipality_code": 873,
            "total": 6,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 2
                },
                {
                    "gender": "MASCULINO",
                    "total": 4
                }
            ]
        },
        {
            "municipality": "VIGÍA DEL FUERTE",
            "municipality_code": 873,
            "total": 26,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 11
                },
                {
                    "gender": "MASCULINO",
                    "total": 15
                }
            ]
        },
        {
            "municipality": "Yalí",
            "municipality_code": 885,
            "total": 16,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 3
                },
                {
                    "gender": "MASCULINO",
                    "total": 13
                }
            ]
        },
        {
            "municipality": "YALÍ",
            "municipality_code": 885,
            "total": 36,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 7
                },
                {
                    "gender": "MASCULINO",
                    "total": 29
                }
            ]
        },
        {
            "municipality": "Yarumal",
            "municipality_code": 887,
            "total": 128,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 56
                },
                {
                    "gender": "MASCULINO",
                    "total": 72
                }
            ]
        },
        {
            "municipality": "YARUMAL",
            "municipality_code": 887,
            "total": 357,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 152
                },
                {
                    "gender": "MASCULINO",
                    "total": 205
                }
            ]
        },
        {
            "municipality": "Yolombó",
            "municipality_code": 890,
            "total": 59,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 11
                },
                {
                    "gender": "MASCULINO",
                    "total": 48
                }
            ]
        },
        {
            "municipality": "YOLOMBÓ",
            "municipality_code": 890,
            "total": 165,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 47
                },
                {
                    "gender": "MASCULINO",
                    "total": 118
                }
            ]
        },
        {
            "municipality": "Yondó",
            "municipality_code": 893,
            "total": 88,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 27
                },
                {
                    "gender": "MASCULINO",
                    "total": 61
                }
            ]
        },
        {
            "municipality": "YONDÓ",
            "municipality_code": 893,
            "total": 203,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 59
                },
                {
                    "gender": "MASCULINO",
                    "total": 144
                }
            ]
        },
        {
            "municipality": "Zaragoza",
            "municipality_code": 895,
            "total": 32,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 16
                },
                {
                    "gender": "MASCULINO",
                    "total": 16
                }
            ]
        },
        {
            "municipality": "ZARAGOZA",
            "municipality_code": 895,
            "total": 74,
            "breakdown": [
                {
                    "gender": "FEMENINO",
                    "total": 26
                },
                {
                    "gender": "MASCULINO",
                    "total": 48
                }
            ]
        }
    ]
}