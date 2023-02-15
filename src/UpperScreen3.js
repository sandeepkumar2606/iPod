import React from "react";

const UpperScreen3 = (props) => {
    const {albumsvalue} = props;


    return (

        <img style={styles.image} src="https://i.pinimg.com/originals/ff/28/57/ff2857da26b83188434687b896b4761c.jpg"></img>
        
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


export default UpperScreen3;