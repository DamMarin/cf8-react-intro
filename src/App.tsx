// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx"
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

function App() {
  return (
    <>
      {/*<ViteIntro />*/}
      {/*<ClassComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<ArrowFunctionalComponent />*/}
      {/*<ArrowFunctionalComponentWithProps title="Is a Arrow Functional Component With Props" />*/}
      {/*<ArrowFunctionalComponentWithProps title="2nd Title" />*/}
      <ArrowFunctionalComponentWithPropsType
        title="Is a Arrow Functional Component With 2 Props"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, veniam."
      />
    </>
  )
}

export default App
