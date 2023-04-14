import Navibar from "./Navibar"
import Posts from "./Posts"
import Stories from "./Stories"
import Sidebar from "./Sidebar"
import FundoMobile from "./FundoMobile"

function App() {

  return (
    <div class="root">
      <Navibar />

      <div class="corpo">
        <div class="esquerda">
          <Stories />

          <Posts />
        </div>

        <Sidebar />
      </div>

      <FundoMobile />
    </div>
  )
}

export default App