import { Main } from "./components/main";
import { Header } from "./components/header";

const App = () => {
  return (
    <body>
      <div className= 'w-full h-full fixed top-0 left-0 overflow-y-scroll bg-cover bg-center bg-[url(./assets/images/fundo.jpg)]' >
      <Header></Header>
      <Main></Main>
      </div>
    </body>
)
}

export default App;