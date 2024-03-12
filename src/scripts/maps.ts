export type ConversionMap = {
  title: string;
  map: Record<string, string>;
};

// These are all maps from a basic letter to a unicode character
// The characters are copied over from Unicode Explorer (https://unicode-explorer.com/)
// If you are adding new maps, please add them either
//   1. In the order they are found in Unicode Explorer
//   2. At the bottom of their section (text goes just above numbers, etc.)

// Template for new maps
/*
// name of this map
const nameOfThisMap: ConversionMap = {
  title: "name of this map",
  map: {
    // Uppercase
    A: "A",

    // Lowercase
    a: "a",
  },
};
*/

// NOTE: Text

// Bold math text
const mathBoldSymbols: ConversionMap = {
  title: "Bold symbols",
  map: {
    // Uppercase
    A: "𝐀",
    B: "𝐁",
    C: "𝐂",
    D: "𝐃",
    E: "𝐄",
    F: "𝐅",
    G: "𝐆",
    H: "𝐇",
    I: "𝐈",
    J: "𝐉",
    K: "𝐊",
    L: "𝐋",
    M: "𝐌",
    N: "𝐍",
    O: "𝐎",
    P: "𝐏",
    Q: "𝐐",
    R: "𝐑",
    S: "𝐒",
    T: "𝐓",
    U: "𝐔",
    V: "𝐕",
    W: "𝐖",
    X: "𝐗",
    Y: "𝐘",
    Z: "𝐙",

    // Lowercase
    a: "𝐚",
    b: "𝐛",
    c: "𝐜",
    d: "𝐝",
    e: "𝐞",
    f: "𝐟",
    g: "𝐠",
    h: "𝐡",
    i: "𝐢",
    j: "𝐣",
    k: "𝐤",
    l: "𝐥",
    m: "𝐦",
    n: "𝐧",
    o: "𝐨",
    p: "𝐩",
    q: "𝐪",
    r: "𝐫",
    s: "𝐬",
    t: "𝐭",
    u: "𝐮",
    v: "𝐯",
    w: "𝐰",
    x: "𝐱",
    y: "𝐲",
    z: "𝐳",
  },
};

// Italic math text
const mathItalicSymbols: ConversionMap = {
  title: "Italic symbols",
  map: {
    // Uppercase
    A: "𝐴",
    B: "𝐵",
    C: "𝐶",
    D: "𝐷",
    E: "𝐸",
    F: "𝐹",
    G: "𝐺",
    H: "𝐻",
    I: "𝐼",
    J: "𝐽",
    K: "𝐾",
    L: "𝐿",
    M: "𝑀",
    N: "𝑁",
    O: "𝑂",
    P: "𝑃",
    Q: "𝑄",
    R: "𝑅",
    S: "𝑆",
    T: "𝑇",
    U: "𝑈",
    V: "𝑉",
    W: "𝑊",
    X: "𝑋",
    Y: "𝑌",
    Z: "𝑍",

    // Lowercase
    a: "𝑎",
    b: "𝑏",
    c: "𝑐",
    d: "𝑑",
    e: "𝑒",
    f: "𝑓",
    g: "𝑔",
    h: "ℎ", // Reserved, using alternate
    i: "𝑖",
    j: "𝑗",
    k: "𝑘",
    l: "𝑙",
    m: "𝑚",
    n: "𝑛",
    o: "𝑜",
    p: "𝑝",
    q: "𝑞",
    r: "𝑟",
    s: "𝑠",
    t: "𝑡",
    u: "𝑢",
    v: "𝑣",
    w: "𝑤",
    x: "𝑥",
    y: "𝑦",
    z: "𝑧",
  },
};

// Bold Italic math text
const mathBoldItalicSymbols: ConversionMap = {
  title: "Bold italic symbols",
  map: {
    // Uppercase
    A: "𝑨",
    B: "𝑩",
    C: "𝑪",
    D: "𝑫",
    E: "𝑬",
    F: "𝑭",
    G: "𝑮",
    H: "𝑯",
    I: "𝑰",
    J: "𝑱",
    K: "𝑲",
    L: "𝑳",
    M: "𝑴",
    N: "𝑵",
    O: "𝑶",
    P: "𝑷",
    Q: "𝑸",
    R: "𝑹",
    S: "𝑺",
    T: "𝑻",
    U: "𝑼",
    V: "𝑽",
    W: "𝑾",
    X: "𝑿",
    Y: "𝒀",
    Z: "𝒁",

    // Lowercase
    a: "𝒂",
    b: "𝒃",
    c: "𝒄",
    d: "𝒅",
    e: "𝒆",
    f: "𝒇",
    g: "𝒈",
    h: "𝒉",
    i: "𝒊",
    j: "𝒋",
    k: "𝒌",
    l: "𝒍",
    m: "𝒎",
    n: "𝒏",
    o: "𝒐",
    p: "𝒑",
    q: "𝒒",
    r: "𝒓",
    s: "𝒔",
    t: "𝒕",
    u: "𝒖",
    v: "𝒗",
    w: "𝒘",
    x: "𝒙",
    y: "𝒚",
    z: "𝒛",
  },
};

// Script symbols
const scriptSymbols: ConversionMap = {
  title: "Script symbols",
  map: {
    // Uppercase (many missing)
    A: "𝒜",
    B: "ℬ", // Reserved, using alternate
    C: "𝒞",
    D: "𝒟",
    E: "ℰ", // Reserved, using alternate
    F: "ℱ", // Reserved, using alternate
    G: "𝒢",
    H: "ℋ", // Reserved, using alternate
    I: "ℐ", // Reserved, using alternate
    J: "𝒥",
    K: "𝒦",
    L: "𝒧",
    M: "𝒨",
    N: "𝒩",
    O: "𝒪",
    Q: "𝒫",
    R: "ℛ", // Reserved, using alternate
    S: "𝒮",
    T: "𝒯",
    U: "𝒰",
    V: "𝒱",
    W: "𝒲",
    X: "𝒳",
    Y: "𝒴",
    Z: "𝒵",

    // Lowercase (many missing)
    a: "𝒶",
    b: "𝒷",
    c: "𝒸",
    d: "𝒹",
    e: "ℯ", // Reserved, using alternate
    f: "𝒻",
    g: "ℊ", // Reserved, using alternate
    h: "𝒽",
    i: "𝒾",
    j: "𝒿",
    k: "𝓀",
    l: "𝓁",
    m: "𝓂",
    n: "𝓃",
    o: "ℴ", // Reserved, using alternate
    p: "𝓅",
    q: "𝓆",
    r: "𝓇",
    s: "𝓈",
    t: "𝓉",
    u: "𝓊",
    v: "𝓋",
    w: "𝓌",
    x: "𝓍",
    y: "𝓎",
    z: "𝓏",
  },
};

// Bold script symbols
const boldScriptSymbols: ConversionMap = {
  title: "Bold script symbols",
  map: {
    // Uppercase
    A: "𝓐",
    B: "𝓑",
    C: "𝓒",
    D: "𝓓",
    E: "𝓔",
    F: "𝓕",
    G: "𝓖",
    H: "𝓗",
    I: "𝓘",
    J: "𝓙",
    K: "𝓚",
    L: "𝓛",
    M: "𝓜",
    N: "𝓝",
    O: "𝓞",
    P: "𝓟",
    Q: "𝓠",
    R: "𝓡",
    S: "𝓢",
    T: "𝓣",
    U: "𝓤",
    V: "𝓥",
    W: "𝓦",
    X: "𝓧",
    Y: "𝓨",
    Z: "𝓩",

    // Lowercase
    a: "𝓪",
    b: "𝓫",
    c: "𝓬",
    d: "𝓭",
    e: "𝓮",
    f: "𝓯",
    g: "𝓰",
    h: "𝓱",
    i: "𝓲",
    j: "𝓳",
    k: "𝓴",
    l: "𝓵",
    m: "𝓶",
    n: "𝓷",
    o: "𝓸",
    p: "𝓹",
    q: "𝓺",
    r: "𝓻",
    s: "𝓼",
    t: "𝓽",
    u: "𝓾",
    v: "𝓿",
    w: "𝔀",
    x: "𝔁",
    y: "𝔂",
    z: "𝔃",
  },
};

// Fraktur symbols
const frakturSymbols: ConversionMap = {
  title: "Fraktur symbols",
  map: {
    // Uppercase
    A: "𝔄",
    B: "𝔅",
    C: "ℭ", // Reserved, using alternate
    D: "𝔇",
    E: "𝔈",
    F: "𝔉",
    G: "𝔊",
    H: "ℌ", // Reserved, using alternate
    I: "ℑ", // Reserved, using alternate
    J: "𝔍",
    K: "𝔎",
    L: "𝔏",
    M: "𝔐",
    N: "𝔑",
    O: "𝔒",
    P: "𝔓",
    Q: "𝔔",
    R: "ℜ", // Reserved, using alternate
    S: "𝔖",
    T: "𝔗",
    U: "𝔘",
    V: "𝔙", // idk lmao
    W: "𝔚",
    X: "𝔛",
    Y: "𝔜",
    Z: "ℨ", // Reserved, using alternate

    // Lowercase
    a: "𝔞",
    b: "𝔟",
    c: "𝔠",
    d: "𝔡",
    e: "𝔢",
    f: "𝔣",
    g: "𝔤",
    h: "𝔥",
    i: "𝔦",
    j: "𝔧",
    k: "𝔨",
    l: "𝔩",
    m: "𝔪",
    n: "𝔫",
    o: "𝔬",
    p: "𝔭",
    q: "𝔮",
    r: "𝔯",
    s: "𝔰",
    t: "𝔱",
    u: "𝔲",
    v: "𝔳",
    w: "𝔴",
    x: "𝔵",
    y: "𝔶",
    z: "𝔷",
  },
};

// Double-struck symbols
const doubleStruckSymbols: ConversionMap = {
  title: "Double-struck symbols",
  map: {
    // Uppercase
    A: "𝔸",
    B: "𝔹",
    C: "ℂ", // Reserved, using alternate
    D: "𝔻",
    E: "𝔼",
    F: "𝔽",
    G: "𝔾",
    H: "ℍ", // Reserved, using alternate
    I: "𝕀",
    J: "𝕁",
    K: "𝕂",
    L: "𝕃",
    M: "𝕄",
    N: "ℕ", // Reserved, using alternate
    O: "𝕆",
    P: "ℙ", // Reserved, using alternate
    Q: "ℚ", // Reserved, using alternate
    R: "ℝ", // Reserved, using alternate
    S: "𝕊",
    T: "𝕋",
    U: "𝕌",
    V: "𝕍",
    W: "𝕎",
    X: "𝕏",
    Y: "𝕐",
    Z: "ℤ",

    // Lowercase
    a: "𝕒",
    b: "𝕓",
    c: "𝕔",
    d: "𝕕",
    e: "𝕖",
    f: "𝕗",
    g: "𝕘",
    h: "𝕙",
    i: "𝕚",
    j: "𝕛",
    k: "𝕜",
    l: "𝕝",
    m: "𝕞",
    n: "𝕟",
    o: "𝕠",
    p: "𝕡",
    q: "𝕢",
    r: "𝕣",
    s: "𝕤",
    t: "𝕥",
    u: "𝕦",
    v: "𝕧",
    w: "𝕨",
    x: "𝕩",
    y: "𝕪",
    z: "𝕫",
  },
};

// Circled Latin letters
const circledLatinLetters: ConversionMap = {
  title: "Circled Latin letters",
  map: {
    // Uppercase
    A: "Ⓐ",
    B: "Ⓑ",
    C: "Ⓒ",
    D: "Ⓓ",
    E: "Ⓔ",
    F: "Ⓕ",
    G: "Ⓖ",
    H: "Ⓗ",
    I: "Ⓘ",
    J: "Ⓙ",
    K: "Ⓚ",
    L: "Ⓛ",
    M: "Ⓜ",
    N: "Ⓝ",
    O: "Ⓞ",
    P: "Ⓟ",
    Q: "Ⓠ",
    R: "Ⓡ",
    S: "Ⓢ",
    T: "Ⓣ",
    U: "Ⓤ",
    V: "Ⓥ",
    W: "Ⓦ",
    X: "Ⓧ",
    Y: "Ⓨ",
    Z: "Ⓩ",

    // Lowercase
    a: "ⓐ",
    b: "ⓑ",
    c: "ⓒ",
    d: "ⓓ",
    e: "ⓔ",
    g: "ⓖ",
    h: "ⓗ",
    i: "ⓘ",
    j: "ⓙ",
    k: "ⓚ",
    l: "ⓛ",
    m: "ⓜ",
    n: "ⓝ",
    o: "ⓞ",
    p: "ⓟ",
    q: "ⓠ",
    r: "ⓡ",
    s: "ⓢ",
    t: "ⓣ",
    u: "ⓤ",
    v: "ⓥ",
    w: "ⓦ",
    x: "ⓧ",
    y: "ⓨ",
    z: "ⓩ",
  },
};

// NOTE: Digits

// Bold digits
const boldDigits: ConversionMap = {
  title: "Bold digits",
  map: {
    0: "𝟎",
    1: "𝟏",
    2: "𝟐",
    3: "𝟑",
    4: "𝟒",
    5: "𝟓",
    6: "𝟔",
    7: "𝟕",
    8: "𝟖",
    9: "𝟗",
  },
};

// Double-struck digits
const doubleStruckDigits: ConversionMap = {
  title: "Double-struck digits",
  map: {
    0: "𝟘",
    1: "𝟙",
    2: "𝟚",
    3: "𝟛",
    4: "𝟜",
    5: "𝟝",
    6: "𝟞",
    7: "𝟟",
    8: "𝟠",
    9: "𝟡",
  },
};

// Sans-serif digits
const sansSerifDigits: ConversionMap = {
  title: "Sans-serif digits",
  map: {
    0: "𝟢",
    1: "𝟣",
    2: "𝟤",
    3: "𝟥",
    4: "𝟦",
    5: "𝟧",
    6: "𝟨",
    7: "𝟩",
    8: "𝟪",
    9: "𝟫",
  },
};

// Sans-serif bold digits
const sansSerifBoldDigits: ConversionMap = {
  title: "Sans-serif bold digits",
  map: {
    0: "𝟬",
    1: "𝟭",
    2: "𝟮",
    3: "𝟯",
    4: "𝟰",
    5: "𝟱",
    6: "𝟲",
    7: "𝟳",
    8: "𝟴",
    9: "𝟵",
  },
};

// Monospace Digits
const monospaceDigits: ConversionMap = {
  title: "Monspace digits",
  map: {
    0: "𝟶",
    1: "𝟷",
    2: "𝟸",
    3: "𝟹",
    4: "𝟺",
    5: "𝟻",
    6: "𝟼",
    7: "𝟽",
    8: "𝟾",
    9: "𝟿",
  },
};

// Circled numbers
const circledNumbers: ConversionMap = {
  title: "Circled numbers",
  map: {
    0: "⓪", // From a differnt block
    1: "①",
    2: "②",
    3: "③",
    4: "④",
    5: "⑤",
    6: "⑥",
    7: "⑦",
    8: "⑧",
    9: "⑨",
    // Not doing over 10
  },
};

// Globbed
export const allConversionMaps = {
  text: [
    mathBoldSymbols,
    mathItalicSymbols,
    mathBoldItalicSymbols,
    scriptSymbols,
    boldScriptSymbols,
    frakturSymbols,
    doubleStruckSymbols,
    circledLatinLetters,
  ],
  numbers: [boldDigits, doubleStruckDigits, sansSerifDigits, sansSerifBoldDigits, monospaceDigits, circledNumbers],
};
