import React from "react";

const Blogs = () => {
  return (
    <div className="mt-10">
      <div className="collapse collapse-arrow bg-base-200 mb-5">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          When should you use context API?
        </div>
        <div className="collapse-content">
          <p>
            The Context API in React is used to manage state at the application
            level and make it available to any component that needs it without
            passing it explicitly through props. You might consider using the
            Context API in the following scenarios:br <br /> 1. **Sharing State
            Across Components:** - When you have state that needs to be shared
            by multiple components at different levels of the component tree. -
            Avoiding prop drilling, where you would otherwise need to pass the
            state down through several layers of components.
            <br /> 2. **Global Settings or Themes:** - When you have global
            settings or themes that need to be accessed by various components.{" "}
            <br />
            3. **Authentication and User Data:** - When dealing with user
            authentication and user-related data that needs to be available
            throughout the application.
            <br /> 4. **Localization:** - When implementing localization and you
            need to provide language-related information to various parts of
            your application. <br />
            5. **Reducing Component Coupling:** - When you want to reduce the
            coupling between components and make them more independent of each
            other.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>
            A custom hook in React is a JavaScript function that allows you to
            extract and reuse stateful logic from a component. It enables you to
            encapsulate complex logic and share it across multiple components,
            promoting code reusability and maintainability. Custom hooks
            typically start with the prefix "use" to adhere to the convention.
            Here's a brief explanation of key aspects: Encapsulation of Logic:
            Custom hooks encapsulate logic related to state, side effects, or
            other behaviors within a function. Prefix "use": By convention,
            custom hooks should be named with the "use" prefix (e.g.,
            useCustomHook). Reuse Across Components: Custom hooks are designed
            to be easily reused across different components, promoting a modular
            and composable code structure. State and Side Effects: Custom hooks
            can manage local state, effect hooks, or any other React feature,
            allowing you to abstract and share complex functionality.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
