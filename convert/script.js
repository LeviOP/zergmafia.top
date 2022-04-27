const lexLang = {
    "a": "⍋",
    "b": "ᛒ",
    "c": "ᛣ",
    "d": "中",
    "e": "Ψ",
    "f": "⎎",
    "g": "ᛝ",
    "h": "⊑",
    "i": "ꔌ",
    "j": "ᛃ",
    "k": "ᔑ",
    "l": "⌰",
    "m": "ㅁ",
    "n": "人",
    "o": "⍛",
    "p": "ᛔ",
    "q": "ᛩ",
    "r": "χ",
    "s": "Ⲝ",
    "t": "ਠ",
    "u": "ᛮ",
    "v": "⍚",
    "w": "⍙",
    "x": "ꕕ",
    "y": "∀",
    "z": "⋉",
    " ": "ᚠ",
    "!": "！",
    "?": "？",
    ",": "，",
    ".": "。"
};

const lexLangA = {
    "qu": "µ",
    "sh": "Σ",
    "th": "ß",
    "ch": "ч",
    "ph": "क",
    "wh": "᛭",
    "ing": "פ",
    "er": "尺",
    "! ": "！",
    "? ": "？",
    ", ": "，",
    ". ": "。"
};

const firstChars = Object.keys(lexLangA).map(c => c[0]);

const eng = document.getElementById("eng");
const lex = document.getElementById("lex");

eng.addEventListener("input", () => {
    let output = "";
    const chars = eng.value.split("").map(c => c.toLowerCase());
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        if (firstChars.includes(char)) {
            const a = Object.keys(lexLangA)[firstChars.indexOf(char)].split("");
            const b = chars.slice(i, i+a.length);
            if(a.length === b.length && a.every((value, index) => value === b[index])) {
                output += lexLangA[Object.keys(lexLangA)[firstChars.indexOf(char)]];
                i += a.length - 1;
            } else {
                output += lexLang[char] || char;
            }
        } else {
            output += lexLang[char] || char;
        }
    }
    lex.value = output;
})

lex.addEventListener("input", () => {
    let output = "";
    const chars = lex.value.split("");
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        if (Object.values(lexLangA).includes(char)) output += Object.keys(lexLangA)[Object.values(lexLangA).indexOf(char)];
        else output += Object.keys(lexLang)[Object.values(lexLang).indexOf(char)] || char;
    }
    eng.value = output;
})
