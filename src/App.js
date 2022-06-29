import "./App.css";
import Favourites from "./Favourites";
import Products from "./Products";
import Video from "./Video";

import left from "./public/left.png";
import profile from "./public/profile.png";
import verified from "./public/verified.png";
function App() {
  return (
    <div className="App">
      <h1 className="headi">
        <img src={left}i className="left" alt=""/>
        <img src={profile} className="profile" alt=""/>
Maitreyi Dutta

        <img src={verified} className="verified" alt=""/>
      </h1>
      <div className="app__videos">
        <Video />
        <Products productName="Tagged Products (2)" productCount={4} />
        <Products productName="Complete my look" productCount={4} />
        <Favourites />
      </div> 
    </div>
  );
}

export default App;
