const  arrayFn = require("../array.js") ;

test('verify if all elements from an array are distincts',()=>{
    expect(arrayFn.allElementsDistincts(["2", 2, 9,"aaa"])).toBe(true)
    expect(arrayFn.allElementsDistincts(["v", 2, 2,"aaa"])).toBe(false)
    expect(arrayFn.allElementsDistincts(["2", 2, {"e":2},"aaa"])).toBe(true)
})
test('recuperate lower character index',()=>{
    expect(arrayFn.lowerCaseCharacterIndex("a")).toBe(0)
    // expect(arrayFn.lowerCaseCharacterIndex(['e'])).toBe(4)
    // expect(arrayFn.lowerCaseCharacterIndex(456)).toBe(false)
    // expect(arrayFn.lowerCaseCharacterIndex([{a:"e"}])).toBe(false)
    // expect(arrayFn.lowerCaseCharacterIndex("A")).toBe(false)
})

