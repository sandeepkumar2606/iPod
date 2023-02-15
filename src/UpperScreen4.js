import React from "react";

const UpperScreen4 = (props) => {
    const {songsvalue} = props;


    return (

        <img style={styles.image} src="https://pyxis.nymag.com/v1/imgs/c55/6f1/15b2999563b50acafe392ca65f0b7b571e-20-spotify-playlist-crush-note.rsquare.w330.jpg"></img>
        
    );
}

const styles = {
    image:
    {
        height:250,
        width:180,
        backgroundColor:'white',
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        // borderWidth: 1,  
        // borderStyle: 'solid'
        
    }
}


export default UpperScreen4;