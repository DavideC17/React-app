import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import ButtonsHome from './components/ButtonsHome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetPage from './components/GetPage';
import PostPage from './components/PostPage';
import UpdatePage from './components/UpdatePage';
import DeletePage from './components/DeletePage';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/get" element={<Get/>} />
          <Route path="/post" element={<Post/>} />
          <Route path="/update" element={<Update/>} />
          <Route path="/delete" element={<Delete/>} />
      </Routes>
    </BrowserRouter>
  );
}

const Home = () => {
  return(
    <div>
      <ButtonsHome></ButtonsHome>
  </div>
  )
};
const Get = () => {
  return(
    <div>
      <GetPage></GetPage>
    </div>
  )
};
const Post = () => {
  return(
    <div>
      <PostPage></PostPage>
    </div>
  )
};
const Update = () => {
  return(
    <div>
      <UpdatePage></UpdatePage>
    </div>
  )
};
const Delete = () => {
  return(
    <div>
      <DeletePage></DeletePage>
    </div>
  )
};
export default App;
