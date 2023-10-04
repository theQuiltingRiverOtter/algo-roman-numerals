const { toRoman, toRomanLazy} = require("./romanNumerals.js");

describe("Tests toRomanLazy for small numbers", () => {
    test("tests toRomanLazy(4) = 'IIII'", () => {
        expect(toRomanLazy(4)).toBe('IIII');
    })
    test("tests toRomanLazy(15) = XV", () => {
        expect(toRoman(15)).toBe('XV');
    })
    test("tests toRomanLazy(21) = XXI", () => {
        expect(toRomanLazy(21)).toBe("XXI");
    })
})

describe("Tests toRomanLazy for large numbers", () => {
    test("tests toRomanLazy(356) = CCCLVI", () => {
        expect(toRomanLazy(356)).toBe('CCCLVI');
    })
    test("tests toRomanLazy(1984) = MDCCCCLXXXIIII", () => {
        expect(toRomanLazy(1984)).toBe('MDCCCCLXXXIIII');
    })
    test("tests toRomanLazy(4521) = MMMMDXXI", () => {
        expect(toRomanLazy(4521)).toBe("MMMMDXXI");
    })
})

describe("Tests toRoman for small numbers", () => {
    test("tests toRoman(4) = IV", () => {
        expect(toRoman(4)).toBe('IV');
    })
    test("tests toRoman(9) = IX", () => {
        expect(toRoman(9)).toBe("IX");
    })
    test("tests toRoman(19) = XIX", () => {
        expect(toRoman(19)).toBe("XIX");
    })

})

describe("Tests toRoman for large numbers", () => {
    test("tests toRoman(456) = CDLVI", () => {
        expect(toRoman(456)).toBe("CDLVI");
    })
    test("tests toRoman(944) = CMXLIV", () => {
        expect(toRoman(944)).toBe("CMXLIV");
    })
    test("tests toRoman(3999) = MMMCMXCIX", () => {
        expect(toRoman(3999)).toBe("MMMCMXCIX");
    })
})