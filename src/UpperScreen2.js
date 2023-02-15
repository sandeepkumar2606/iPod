import React from "react";

const UpperScreen2 = (props) => {
    let {artistsvalue} = props;

    return (

        <img style={styles.image} src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/104114794/original/559043e0ba5d6c17ad8a7c09f94a691c533163aa/make-2-different-covers-or-artworks-for-your-song-or-track.jpg"></img>
        
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


export default UpperScreen2;