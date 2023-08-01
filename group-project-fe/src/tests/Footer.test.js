import React from 'react';
import { create } from 'react-test-renderer';
import Footer from '../Components/Footer'

describe("Footer matches snapshot ", ()=>{
    test("footer snapshot test", ()=>{
        const footer = create(<Footer />)
        expect(footer.toJSON()).toMatchSnapshot();
    })
})