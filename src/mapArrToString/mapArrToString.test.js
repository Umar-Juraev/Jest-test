const mapArrToString = require('./mapArrToString')

describe('mapArrToString',()=>{
    test('correct value',()=>{
        expect(mapArrToString([1,2,3])).toStrictEqual(['1','2','3'])
    })
    test('mixed value',()=>{
        expect(mapArrToString([1,2,3,null,true,undefined,'string'])).toStrictEqual(['1','2','3'])
    })
    test('empty value',()=>{
        expect(mapArrToString([])).toStrictEqual([])
    })

    test('negative value',()=>{
        expect(mapArrToString([1,2,3])).not.toStrictEqual([1,2,3,4])
    })
})