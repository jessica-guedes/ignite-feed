import { Post } from "../Post"
import { Header } from "./components/Header"

import './global.css';

function App() {
  return (

    <div>
      <Header />
      <Post 
        author='Jessica Guedes'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus inventore quo laudantium nulla officiis, dicta maiores voluptatibus qui a harum, et dignissimos molestias sunt. Quibusdam et quam adipisci. Ad, quaerat!'
      />

      <Post 
        author='Leticia Melo'
        content='Um novo post muito legal'
      />
    </div>
  )
}
export default App
