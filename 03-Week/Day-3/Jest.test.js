// const myFunction = require("./myFunction");

const { default: test } = require('node:test');

// test ('two plus two is four', () => {
//     expect(2 + 2).toBe(4)

//  })
                        //test addition with expect function
// test ('object assignment', () => {

//     const data = {one: 1}
//     data ['two'] = 2
//     expect(data).toEqual({one: 1, two: 2})

// }) 
                //test assignment to an object

// test ('object assignment', () => {

//     const data = {one: 1}
//     data ['two'] = 2
//     expect(data).toBeFalsy({one: 1, two: 2})

// })

// test ('null is falsy', () => {
//     const n = null
//     expect(n).toBeFalsy()

// })
 
// test('one is truthy', () => {
//     const n = 1;
//     expect(n).toBeTruthy();
//     console.log('Test Success!');
//   });

     //falsy test
// test("throws on invalid input", () => {
//   expect(() => {
//     myFunction("dsadsa");
//   }).toThrow();
// });

//Asynchronous Testing
fetchData = require('./Jest');

// test('the data is Mertcan', done => {
//     function callback(data) {
//        try { 
//         expect(data).toBe('Mertcan');
//          done();

//        }
//        catch (error) {
//            done(error);
//        }
//     }

//     fetchData(callback);
// })

const fetchPromise = require('./Jest');
const exp = require('constants');

// test('the data is Mertcan', () => {
//     return expect (fetchPromise()).resolves.toBe('Mertcan');

// })
// test ('the fetch fails with an error', () => {
//     return expect(fetchPromise()).rejects.toThrow('error');
// })

//  test('the data is Mertcan', async () => {
//     const data = await fetchPromise();
//     expect(data).toBe('Mertcan');
//  });

/////////////
// Mock Functions and Spies
// const mockCallback = jest.fn(x => 42 + x);
// mockCallback(0);
// mockCallback(1);

// test('mock implementation of a basic function', () => {

//     const mock = jest.fn(x=> x + 42);
//         expect(mock(1)).toBe(43);
//         expect(mock(2)).toBe(44);
//         expect(mock).toHaveBeenCalledWith(2);

// });

test('method of an object', () => {
    const video = {
        play: () => {
            console.log('play');
        }
    };
    const spy = jest.spyOn(video, 'play');
    video.play();
    expect(spy).toHaveBeenCalled(); 
    spy.mockRestore();
});
