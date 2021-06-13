// import React from 'react'
// import axios from 'axios'
// import {Button} from '@material-ui/core'


// function Gallery() {
//     const [person,setPerson]= React.useState({})
//     const [photo,setPhoto] = React.useState() 
//     const users = () => {
//         const token  = 'bearer ' + document.cookie.split("=")[1];
//         axios.get('http://localhost:5000/login/users', {
//             headers:{ 'Authorization' : token}
//         }, { withCredentials: true })
//             .then(res => {
//                 console.log(res.data.info)
//                 // res.data.info.map((result)=>{
//                 //     console.log(result)
//                 //     // setPerson(...result)
//                 // })
//                 console.log(person)
//             })
//     }
//     function handleUpload(){
//         //console.log(photo)
//         let formdata  = new FormData()
//         formdata.append('galleryImage',photo);
//         formdata.append('category',"type2")
//         axios({
//             url: 'http://localhost:5000/gallery',
//             method:'POST',
//             headers: { 'Authorization' : "token"},
//             data:formdata
//         }).then((res)=>{
//             console.log('Image Uploaded')
//         })
//     }
//     return (
//         <div>
//             <Button variant="contained" color="primary" onClick={() => users()}>
//                 users
//             </Button>
//             <br></br>
//             <br></br>
//             <br></br>
//             <from>
//                 <label>Select File :</label>
//                 <input type="file" name="file" onChange={(e) =>{
//                     setPhoto(e.target.files[0])
//                 }}/>
//                 <button onClick={handleUpload}>Upload</button>
//             </from>
//         </div>
//     )
// }

// export default Gallery
import { GridList, GridListTile } from '@material-ui/core'
import React from 'react'
import GList from './GalleryData.json'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

function Gallery(props) {

    const getGridListCols=()=>{

        if(isWidthUp('xl',props.width)){
            return 6 ;
            
        }
        if(isWidthUp('lg',props.width)){
            return 4 ;
            
        }
        if(isWidthUp('md',props.width)){
            return 2 ;
        }
        if(isWidthUp('sm',props.width)){
            return 1 ;
        }
        console.log(props.width)

    }

    return (
        <div>
            <h2>Gallery</h2>

        <GridList spacing={20} cellHeight={400}  cols={getGridListCols()}>

        {GList.map((data)=>(
            <GridListTile key={data.id} cols={data.cols ||1} >
                <img src={data.image} alt={data.tittle}  />

            </GridListTile>
        ))}

        </GridList>


        </div>
    )
}

export default withWidth()(Gallery)