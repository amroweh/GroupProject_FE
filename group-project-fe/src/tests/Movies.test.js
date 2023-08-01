import React from "react";
import { act, create, renderer } from "react-test-renderer";
import Movies from "../Components/Movies";

describe("Movies component Test Suite", () => {
  test("it should render a div with loading when loading set to true and no data available", () => {
    const testData = [
      { movie_id: 1, title: "movie 1" },
      { movie_id: 2, title: "movie 2" },
    ];

    const testRenderer = create(<Movies loading={true} movieData={testData} />);

    // the loading variable is causing issues and the test component has loading set to true

    const testInstance = testRenderer.root;
    expect(testInstance.findByType("div").children).toContain("Loading...");
  });

  test("should test a movies component renders a nested div properly when loading is false", () => {
    const testData = [
      { movie_id: 1, title: "movie 1" },
      { movie_id: 2, title: "movie 2" },
    ];

    const testRenderer = create(<Movies loading={true} movieData={testData} />);
    const testInstance = testRenderer.root;

    const movieComp = shallow(<Movies />);
    movieComp.setState({ loading: false });

    // TODO: work out how to install additional libraries I may need to test a component, such as shallow
    // expect(testInstance.props.loading).toBeFalsy;
  });
});
