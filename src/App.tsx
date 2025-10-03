// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx"
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Card from "./components/Card.tsx";
import Layout from "./components/Layout.tsx";
// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import NameChangerWithEffect from "./components/NameChangerWithEffect.tsx";
// import {useEffect} from "react";
import Timer from "./components/Timer.tsx";

function App() {

  // useEffect(() => {
  //   const id  = setInterval(()=> console.log(id),1000)
  //   return() => clearInterval(id);
  // },[]);

  // useEffect(()=> {
  //   let counter: number = 1;
  //   const id: number = setInterval(()=>{
  //     console.log(counter++);
  //   },1000)
  //   return () => clearInterval(id);
  // }, [])

  return (
    <>
      {/*<ViteIntro />*/}
      {/*<ClassComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<ArrowFunctionalComponent />*/}
      {/*<ArrowFunctionalComponentWithProps title="Is a Arrow Functional Component With Props" />*/}
      {/*<ArrowFunctionalComponentWithProps title="2nd Title" />*/}
      {/*<ArrowFunctionalComponentWithPropsType*/}
      {/*  title="Is a Arrow Functional Component With 2 Props"*/}
      {/*  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, veniam."*/}
      {/*/>*/}
      {/*<Card title="Card">*/}
      {/*  <ArrowFunctionalComponentWithPropsType*/}
      {/*    title="Is a Arrow Functional Component With 2 Props"*/}
      {/*    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, veniam."*/}
      {/*  />*/}
      {/*</Card>*/}

      <Layout>
          {/*<ArrowFunctionalComponentWithPropsType*/}
          {/*  title="Is a Arrow Functional Component With 2 Props"*/}
          {/*  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, veniam."*/}
          {/*/>*/}

        {/*<FunctionalComponentWithState />*/}
        {/*<ClassComponentWithState />*/}
        {/*<Counter />*/}
        {/*<NameChanger/>*/}
        {/*<CounterWithMoreStates/>*/}
        {/*<CounterAdvanced/>*/}

        {/*<CounterWithCustomHook/>*/}
        {/*<NameChangerWithEffect />*/}

        <Timer/>

      </Layout>
    </>
  )
}

export default App
