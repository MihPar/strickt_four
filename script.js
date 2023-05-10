// let globalResolve
// async function main() {
//     console.log('Start')
//     await new Promise(function(resolve) {
//         globalResolve = resolve
//     }) 
//     // await Promise.resolve()
//     console.log('End')
// }
// main()
// console.log('END')
// // console.log(globalResolve())

// for (let i = 1; i < 6; i++) {
//     setTimeout(function() {
//         let elem = document.createElement('span')
//         document.body.append(elem)
//         elem.innerText = i
//         elem.style.borderColor = 'red'
//         elem.style.borderStyle = 'solid'
//         elem.style.padding = '5px 10px'
//     }, 1000 * i)
// }
// window.onkeydown = function(event) {
//     if (event.key === ' ') {
//         for (let i = 1; i < 6; i++) {
//             clearTimeout(i)
//         }
//     }
// }

// function main() {
//     let obj = {
//         i: 1
//     }
//     let upperBound = 5
//     while (obj.i <= upperBound) {

//         let elem = document.createElement('span')
//         document.body.append(elem)
//         elem.innerText = obj.i
//         elem.style.borderColor = 'red'
//         elem.style.borderStyle = 'solid'
//         elem.style.padding = '5px 10px'
//         obj.i++

//     }
// }
// main()


async function func() {
    let result = new Promise(function(resolve) {
        setTimeout(function() {
            resolve('Ready')
        }, 1000)
    })
    let promise = await result
        console.log(promise)
}
func()