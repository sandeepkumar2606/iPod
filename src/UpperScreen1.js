import React from "react";

const UpperScreen1 = (props) => {

    return (

        <img style={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0MSZ3Wf0zF4l0H4V-kje0P7jI1XPGPtBib2Fzda1GGMez4xwsSjyZh3xYM0HdmKKpnbA&usqp=CAU"></img>
        
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


export default UpperScreen1;