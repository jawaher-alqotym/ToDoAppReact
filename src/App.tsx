// import { useTranslation } from "react-i18next";


// function App() {

//   const {t} = useTranslation();

//   return (
//     <div className="App">
  
//     </div>
//   );
// }

// export default App;

import Layout from "./components/user/laoyt";
import HomeContainer from "./containers/user/home-continer";


function App() {
  return (
    <Layout >
      <HomeContainer />
    </Layout>
  );
}

export default App;
