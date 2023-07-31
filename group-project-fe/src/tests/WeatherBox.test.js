import React from 'react';
import { create } from 'react-test-renderer';
import WeatherBox from '../Components/WeatherBox';

describe("Weather Box Test Suite", ()=>{
    test("it should render the correct day from props when a day prop is supplied", ()=>{
        const testDay = "Monday"
        const testRenderer = create(<WeatherBox day={testDay}/>)
        const testInstance = testRenderer.root
        expect(testInstance.findByType('h5').children).toContain(testDay)    
    })
    
    test("it should render the correct precipitation from props when a precipitation prop is supplied", ()=>{
        const testPrec = 35
        const testRenderer = create(<WeatherBox precipitation={testPrec}/>)
        const testInstance = testRenderer.root
        expect(testInstance.findAllByType("div")[2].children).toContain(testPrec.toString())    
    })    
})




// // jest.mock("../Components/utils/Todo.model", () => {
// //     // return class TodoModel {
// //     //     constructor() {
// //     //         this.todoDescription = `Test Todo`;
// //     //         this.todoDateCreated = `2019-05-04T15:30:00.000Z`;
// //     //         this.todoCompleted = true;
// //     //     }
// //     // };
// // });


// describe(`Todo test suite`, () => {

//     describe(`Test conditional render if props.todo.todoCompleted is true`, () => {

//         test(`it should render 2 tds with className completed if props.todo.todoCompleted is true`, () => {
//             // const testTodo = new TodoModel();

//             // const testRenderer = create(<Todo todo={testTodo} />);
//             // const testInstance = testRenderer.root;

//             // const cells = testInstance.findAllByType(`td`);

//             // for (let i = 0, j = cells.length - 1; i < j; i++) {
//             //     expect(cells[i].props.className).toBe(`completed`);
//             // }
//         });

//         // test(`it should render 'N/A' in the final td of the row if props.todo.todoCompleted is true`, () => {
//         //     const testTodo = new TodoModel();

//         //     const testRenderer = create(<Todo todo={testTodo} />);
//         //     const testInstance = testRenderer.root;

//         //     const cells = testInstance.findAllByType(`td`);

//         //     expect(cells[cells.length - 1].children).toContain(`N/A`);

//         // });

//     });

//     test(`it should render 2 tds with no className if props.todo.todoCompleted is false`, () => {
//         // const testTodo = new TodoModel();
//         // testTodo.todoCompleted = false;

//         // const testRenderer = create(<Todo todo={testTodo} />);
//         // const testInstance = testRenderer.root;

//         // const cells = testInstance.findAllByType(`td`);

//         // for (let i = 0, j = cells.length - 1; i < j; i++) {
//         //     expect(cells[i].props.className).toBeFalsy();
//         // }
//     });


//     // describe(`Test conditional render if props.todo.todoCompleted is false`, () => {
//     //     test(`it should render 'Edit' in the final td of the row if props.todo.todoCompleted is false`, () => {
//     //         const testTodo = new TodoModel();
//     //         testTodo.todoCompleted = false;

//     //         const testRenderer = create(<Todo todo={testTodo} />);
//     //         const testInstance = testRenderer.root;

//     //         const links = testInstance.findByType(`a`);

//     //         expect(links.children).toContain(`Edit`);

//     //     });
//     // });
// });