import 'reset-css';
import '../src/assets/style/style.scss';
import {Routes, Route} from "react-router-dom";
import Layout from './component/layout/Layout';
import Home from './component/home/Home';
import Comics from './component/comics/Comics';
import Characters from './component/characters/Characters';
import CharacterDetails from "./component/сharacterDetails/CharacterDetails";
import Stories from './component/stories/Stories';
import About from './component/about/About';
import Advertising from './component/advertising/Advertising';
import NotFound from './component/notFound/NotFound';


function App() {
  return (
      <Routes>
        <Route>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/comics' element={<Comics/>}/>
                <Route path='/characters' element={<Characters/>}/>
                <Route path='/characters/:id' element={<CharacterDetails/>}/>
                <Route path='/stories' element={<Stories/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/advertising' element={<Advertising/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>
        </Route>
      </Routes>
  );
}

export default App;

