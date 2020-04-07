import React from "react";
import renderer from "react-test-renderer";

import {AddReviewForm} from "./add-review-form";

it(`Is add review form rendered`, () => {
  const tree = renderer.create(<AddReviewForm
    onRateChange={jest.fn()}
    onTextareaChange={jest.fn()}
    onSubmit={jest.fn()}
    state={{
      errorMessage: ``,
      isFormDisable: false,
      isValid: true
    }}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
