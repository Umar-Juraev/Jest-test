const validateValue = require('./validateValue')

test('Validation value',()=>{
    expect(validateValue(50)).toBe(true)
})


describe( 'validateValue',()=>{
    test('Correct value',()=>{
        expect(validateValue(50)).toBe(true)
    })
    test('Lest then correct  value',()=>{
        expect(validateValue(-1)).toBe(false)
    })

    test('more then correct value',()=>{
        expect(validateValue(101)).toBe(false)
    })
    test('paddinal  value from bottom',()=>{
        expect(validateValue(0)).toBe(true)
    })

    test('paddinal  value from up',()=>{
        expect(validateValue(100)).toBe(true)
    })
})