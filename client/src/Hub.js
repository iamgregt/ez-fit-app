import './Hub.css'
import gallery from './assets/gallery.png'
import cloud from './assets/cloud.png'
import browse from './assets/browse.png'
import exclusion1 from './assets/exclusion1.png'
import settings from './assets/settings.png'


function Hub(){

    


    return (
        <div className='background-2'>
            <MenuBar
          gallery="gallery.png"
          cloud="cloud.png"
          browse="browse.png"
          exclusion1="exclusion-1.png"
          settings="settings.png"
          profile="PROFILE"
          rectangle383Props={menuBarData.rectangle383Props}
        />
        </div>
      );
    }
    
    function MenuBar(props) {
    
      return (
        <div className="menu-bar">
          <div className="overlap-group">
          <div className="rectangle-384"></div>
            <img className="gallery" src={gallery} alt="gallery" />
            <img className="icon-cloud" src={cloud} alt="icon-cloud" />
            <img className="browse" src={browse} alt="browse" />
            <div className="rectangle-383"></div>
            <img className="exclusion-1" src={exclusion1} alt="Exclusion 1" />
            <img className="icon-settings" src={settings} alt="icon-settings" />
            <div className="profile">
              PROFILE
            </div>
          </div>
        </div>
      );
    }
    
    // function Rectangle383() {
    
    //   return <div className="rectangle-383"></div>;
    // }
    
    const rectangle3832Data = {
      className: "rectangle-384",
    };
    
    const menuBarData = {
      rectangle383Props: rectangle3832Data,
}

export default Hub