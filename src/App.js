import React from "react";
import UpperScreen1 from "./UpperScreen1";
import UpperScreen2 from "./UpperScreen2";
import UpperScreen3 from "./UpperScreen3";
import UpperScreen4 from "./UpperScreen4";
import UpperScreen5 from "./UpperScreen5";


class App extends React.Component {
    
    constructor() {
      super();
      this.state = {
          settingsvalue: false,
          playlistvalue : false,
          songsvalue : false,
          artistsvalue: false,
          albumsvalue: false,
          totalcount :0
      }
  }

  addImages5 = () => 
  {

    this.setState({
      settingsvalue:true,
      playlistvalue : false,
      songsvalue : false,
      artistsvalue: false,
      albumsvalue: false,
      totalcount:5
    })

  }

  addImages4 = () => 
  {

    this.setState({
      settingsvalue: false,
      playlistvalue : true,
      songsvalue : false,
      artistsvalue: false,
      albumsvalue: false,
      totalcount:4
    })

  }

  addImages3 = () => 
  {

    this.setState({
      settingsvalue: false,
      playlistvalue : false,
      songsvalue : false,
      artistsvalue: true,
      albumsvalue: false,
      totalcount:3
    })

  }

  addImages2 = () => 
  {

    this.setState({
      settingsvalue: false,
      playlistvalue : false,
      songsvalue : false,
      artistsvalue: false,
      albumsvalue: true,
      totalcount:2
    })

  }

  addImages1 = () => 
  {
    this.setState({
      settingsvalue: false,
      playlistvalue : false,
      songsvalue : true,
      artistsvalue: false,
      albumsvalue: false,
      totalcount:1
      
    })

  }

  addImages0 = () => 
  {
    
    this.setState({
      settingsvalue: false,
      playlistvalue : false,
      songsvalue : false,
      artistsvalue: false,
      albumsvalue: false,
      totalcount:0
      
    })

  }

  incCount = () => 
  {
    
    this.state.totalcount = (this.state.totalcount + 1)%6;

    if(this.state.totalcount === 0)
    {
      this.setState({
        settingsvalue: false,
        playlistvalue : false,
        songsvalue : false,
        artistsvalue: false,
        albumsvalue: false,
        totalcount: this.state.totalcount
        
      })
  
    }
    else if(this.state.totalcount === 1)
    {
      this.setState({
        settingsvalue: false,
        playlistvalue : false,
        songsvalue : true,
        artistsvalue: false,
        albumsvalue: false,
        totalcount: this.state.totalcount
        
      })
  
    }
    else if(this.state.totalcount === 2)
    {
      this.setState({
        settingsvalue: false,
        playlistvalue : false,
        songsvalue : false,
        artistsvalue: false,
        albumsvalue: true,
        totalcount: this.state.totalcount
        
      })
  
    }
    else if(this.state.totalcount === 3)
    {
      this.setState({
        settingsvalue: false,
        playlistvalue : false,
        songsvalue : false,
        artistsvalue: true,
        albumsvalue: false,
        totalcount: this.state.totalcount
        
      })
  
    }
    else if(this.state.totalcount === 4)
    {
      this.setState({
        settingsvalue: false,
        playlistvalue : true,
        songsvalue : false,
        artistsvalue: false,
        albumsvalue: false,
        totalcount: this.state.totalcount
        
      })
  
    }
    else if(this.state.totalcount === 5)
    {
      this.setState({
        settingsvalue: true,
        playlistvalue : false,
        songsvalue : false,
        artistsvalue: false,
        albumsvalue: false,
        totalcount: this.state.totalcount
        
      })
  
    }

  }

  decCount = () => 
  {

    this.state.totalcount = (this.state.totalcount - 1 + 6)%6;

    if(this.state.totalcount === 0)
    {
      this.setState({
        settingsvalue: false,
        playlistvalue : false,
        songsvalue : false,
        artistsvalue: false,
        albumsvalue: false,
        totalcount: this.state.totalcount
        
      })
  
    }
    else if(this.state.totalcount === 1)
    {
      this.setState({
        settingsvalue: false,
        playlistvalue : false,
        songsvalue : true,
        artistsvalue: false,
        albumsvalue: false,
        totalcount: this.state.totalcount
        
      })
  
    }
    else if(this.state.totalcount === 2)
    {
      this.setState({
        settingsvalue: false,
        playlistvalue : false,
        songsvalue : false,
        artistsvalue: false,
        albumsvalue: true,
        totalcount: this.state.totalcount
        
      })
  
    }
    else if(this.state.totalcount === 3)
    {
      this.setState({
        settingsvalue: false,
        playlistvalue : false,
        songsvalue : false,
        artistsvalue: true,
        albumsvalue: false,
        totalcount: this.state.totalcount
        
      })
  
    }
    else if(this.state.totalcount === 4)
    {
      this.setState({
        settingsvalue: false,
        playlistvalue : true,
        songsvalue : false,
        artistsvalue: false,
        albumsvalue: false,
        totalcount: this.state.totalcount
        
      })
  
    }
    else if(this.state.totalcount === 5)
    {
      this.setState({
        settingsvalue: true,
        playlistvalue : false,
        songsvalue : false,
        artistsvalue: false,
        albumsvalue: false,
        totalcount: this.state.totalcount
        
      })
  
    }

  }

  toHome = () => 
  {

    this.setState({
      settingsvalue: false,
      playlistvalue : false,
      songsvalue : false,
      artistsvalue: false,
      albumsvalue: false
      
    })

  }

  toSettings = () =>
  {
    this.setState({
      settingsvalue: true,
      playlistvalue : false,
      songsvalue : false,
      artistsvalue: false,
      albumsvalue: false
    })
  }

  render()
  {
    const {settingsvalue, artistsvalue, albumsvalue, songsvalue, playlistvalue, totalcount} = this.state;

    return (
        
      <div className="App">
        {/* < UpperScreen /> */}

        <div className="ipodcontainer" style={styles.maincontainer}>
          <div style = {styles.firstscreen}>
            
            <div style={styles.firstscreenleftdiv}>
                
                <h2 style={{padding:4}}>iPod.js</h2>
                <ul className="list" style={styles.mainlist}>
                <div className="firstdiv" style={{marginLeft:-25, background:'#AABBAA',marginRight:3,cursor: 'pointer'}}><li onClick={this.addImages0}>Home </li></div> 
                <div style={{marginLeft:-25,marginRight:3,cursor: 'pointer'}}><li onClick={this.addImages1}>Songs </li></div>
                <div style={{marginLeft:-25,marginRight:3,cursor: 'pointer'}}><li onClick={this.addImages2}>Albums </li></div>
                <div style={{marginLeft:-25,marginRight:3,cursor: 'pointer'}}><li onClick={this.addImages3}>Artists </li></div>
                <div style={{marginLeft:-25,marginRight:3,cursor: 'pointer'}}><li onClick={this.addImages4}>Playlists </li></div>
                <div style={{marginLeft:-25,marginRight:3,cursor: 'pointer'}}><li  onClick={this.addImages5} >Settings </li></div>
                </ul>

            </div>

            <div className="rightscreen" style= {styles.firstscreenrightdiv}>
                                
                 {songsvalue && <UpperScreen1 />}
                 {albumsvalue && <UpperScreen2 />}
                 {artistsvalue && <UpperScreen3 />}
                 {playlistvalue && <UpperScreen4 />}
                 {settingsvalue && <UpperScreen5 />} 

            </div>
              
          </div>

          <div className="buttons" style={styles.imagecontainer}>
          <img src="https://i.stack.imgur.com/Jy07H.png" style={styles.disc}></img>
          <img className="button1" src="https://cdn-icons-png.flaticon.com/512/7960/7960808.png" style={styles.down} onClick={this.toSettings.bind(this)}></img>
          <img className="button2" src="https://cdn-icons-png.flaticon.com/512/1/1824.png" style={styles.right} onClick={this.incCount.bind(this)}></img>
          <img className="button3" src="https://cdn-icons-png.flaticon.com/512/25/25616.png" style={styles.left} onClick={this.decCount.bind(this)}></img>
          <img className="button4" src="https://cdn-icons-png.flaticon.com/512/8867/8867520.png" style={styles.menu} onClick={this.toHome.bind(this)}></img>

        </div>
        </div>
        
      </div>
      );
  }
  
}


const styles = {
  maincontainer:{
    display:'flex',
    flexDirection:'column',
    background: '#CCCCCC',
    height:540,
    width:295,
    margin:120,
    marginLeft:400,
    alignItems: 'center',
    borderRadius:30,
    borderWidth:  2,  
    borderStyle:  'solid',
    // boxShadow: '4px 4px 20px #CCCCCC'
  },
  firstscreen:
  {
    height:250,
    width:280,
    display:'flex',
    flexDirection:'row',
    background:'white',
    margin:2,
    marginTop:5,
    borderWidth: 1,  
    borderStyle: 'solid',
    borderRadius:20

  },
  firstscreenleftdiv:{
    display:'flex',
    flexDirection:'column',
    height:240,
    width:100,
    // background:'#505080'
  },
  firstscreenrightdiv:{
    height:250,
    width:180,
    // background:'#1045'
  },
  mainlist:{
    listStyleType: 'none',
    marginTop:-5
  },
  imagecontainer:
  {
    display: 'flex',
    position: 'relative',
    // background: '#205090',
    height:'auto',
    width:280,
    marginTop:4,
    borderRadius:15
  },
  disc:{
    height:170,
    width: 170,
    padding:50,
    borderRadius:150,
    marginLeft:10
  },
  down:
  {
    position: 'absolute',
    height: 20,
    width: 20,
    top:188,
    left:134
  },
  right:
  {
    position: 'absolute',
    height: 20,
    width: 20,
    top:122,
    left:195
  },
  left:
  {
    position: 'absolute',
    height: 20,
    width: 20,
    top:122,
    left:75
  },
  menu:
  {
    position: 'absolute',
    height: 20,
    width: 20,
    top:65,
    left:134
  }
};


export default App;
