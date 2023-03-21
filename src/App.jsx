import { Post } from "../Post"
import { Header } from "./components/Header"

import styles from './App.module.css';

import './global.css';
import { Sidebar } from "./components/Sidebar";

function App() {
  return (

    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
        <Post 
          author='Jessica Guedes'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus inventore quo laudantium nulla officiis, dicta maiores voluptatibus qui a harum, et dignissimos molestias sunt. Quibusdam et quam adipisci. Ad, quaerat!'
        />

        <Post 
          author='Leticia Melo'
          content='Um novo post muito legal'
        />
        </main>
      </div>
    </div>
  )
}
export default App
