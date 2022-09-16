const square = require('./square')


describe( 'square',()=>{
    let mockValue

    // before every test
    beforeEach(()=>{
        // mockValue = Math.floor(Math.random() * 10)
        // jest.clearAllMocks()
        // add something to database 
    })
    // one time before all tests
    beforeAll(()=>{

    })
    test('Correct value',()=>{
        // expect(square(2)).toBe(4)
        // expect(square(2)).toBeLessThan(5)
        // expect(square(2)).toBeGreaterThan(3)
        // expect(square(2)).not.toBeUndefined()
        const spyMathPow = jest.spyOn(Math,'pow')
        square(2)
        expect(spyMathPow).toBeCalledTimes(1)
    })
    test('incorect  value',()=>{
        const spyMathPow = jest.spyOn(Math,'pow')
        square(1)
        expect(spyMathPow).toBeCalledTimes(0)
    })

    // after every test
    afterEach(()=>{
        // delete data from database
        jest.clearAllMocks()

    })

    // one time after all tests
    afterAll(()=>{

        // clean database
    })
})