import React from 'react';
import { create } from 'react-test-renderer';
import WeatherSummary from '../Components/WeatherSummary';
import WeatherBox from '../Components/WeatherBox';

describe("Weather Summary Test Suite", ()=>{
    test("it should render the correct location from props when a location prop is supplied", ()=>{
        const testLocation = "Berlin, Germany"
        const testWeather = [
            {high:21, low: 17, day: "Mon", precipitation: "33", wind: "28"}, 
            {high:19, low: 11, day: "Tue", precipitation: "35", wind: "55"}
        ]
        const testRenderer = create(<WeatherSummary location={testLocation} weather={testWeather}/>)
        const testInstance = testRenderer.root
        expect(testInstance.findByType('h6').children).toContain(testLocation)    
    })

    test("it should render the correct number of WeatherBox components when a weather array is passed", ()=>{
        const testLocation = "Berlin, Germany"
        const testWeather = [
            {high:21, low: 17, day: "Mon", precipitation: "33", wind: "28"}, 
            {high:19, low: 11, day: "Tue", precipitation: "35", wind: "55"},
            {high:31, low: 21, day: "Wed", precipitation: "41", wind: "81"}, 
            {high:33, low: 21, day: "Thu", precipitation: "3", wind: "10"}
        ]
        const testRenderer = create(<WeatherSummary location={testLocation} weather={testWeather}/>)
        const testInstance = testRenderer.root
        console.log("---------------")
        console.log(testInstance.findAllByType(WeatherBox).length)
        expect(testInstance.findAllByType(WeatherBox).length).toBe(4)    
    })
    
    
})