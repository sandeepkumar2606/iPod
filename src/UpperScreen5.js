import React from "react";

const UpperScreen5 = (props) => {
    const {playlistvalue} = props;


    return (

        <img style={styles.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Settings_%28iOS%29.png/800px-Settings_%28iOS%29.png"></img>
        
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


export default UpperScreen5;