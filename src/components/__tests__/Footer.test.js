import "@testing-library/jest-dom";
import { Footer } from "../Footer";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";


test("footer is present", ()=> {
  // Load Header
  const footer = render(
    <StaticRouter>
      <Provider store={store}>
        <Footer />
      </Provider>
    </StaticRouter>
  );

 
  const myfooter = footer.getByTestId("footer");

  expect(myfooter).toBeInTheDocument();
});
