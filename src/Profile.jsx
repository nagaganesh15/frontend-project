import React, { useEffect, useState } from 'react'
import water from './assets/waterdrop.png'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
import editicon from './assets/edit.jpg'

export const Profile = () => {
    const [profilename,setprofilename]=useState()
    const [profileimage,setprofileimage]=useState()
    const email=localStorage.getItem('email')
    const [memoryscore,setmemoryscore]=useState()
    const [stonescore,setstonescore]=useState()
    const [guessscore,setguessscore]=useState()
    const [waterscore,setwaterscore]=useState()
    const [brickscore,setbrickscore]=useState()
    const [memoryproof,setmemoryproof]=useState()
    const [stoneproof,setstoneproof]=useState()
    const [guessproof,setguessproof]=useState()
    const [waterproof,setwaterproof]=useState()
    const [brickproof,setbrickproof]=useState()


    useEffect(()=>{
        const fetchuser=async()=>{
            try{
                const res=await axios.post("http://127.0.0.1:8000/getusername/",{
                    email
                })
                console.log(res.data.username)
                if(res.status==200){
                    setprofilename(res.data.username)
                    setmemoryscore(res.data.memoryscore)
                    setstonescore(res.data.stonescore)
                    setguessscore(res.data.guessscore)
                    setwaterscore(res.data.waterscore)
                    setbrickscore(res.data.brickscore)
                    if(res.data.profileimage!=null){
                        // setprofileimage(res.data.profileimage)
                        setprofileimage(`http://127.0.0.1:8000${res.data.profileimage}`);
                        // const url=URL.createObjectURL(res.data.profileimage)
                        // document.getElementById('profileimg').style.backgroundImage = `url(${res.data.profileimage})`;
                        // document.getElementById('profileimg').style.backgroundImage = `url(${url})`;
                    }
                    else{
                        
                    }
                }

            }
            catch(err){
                alert("something Went Wrong,Try Again")
            }
        }
        fetchuser()
    },[])


    const [edit,setedit]=useState(0)
    const [editimage,seteditimage]=useState(0)
    const tofile=()=>{
        document.getElementById('file').click();
        seteditimage(1)
    }

    const storeimage=async(e)=>{
        const imgfile=e.target.files[0]
        // if(imgfile){
        //     setprofileimage(imgfile)
        //     const url=URL.createObjectURL(imgfile)
        //     document.getElementById('profileimg').style.backgroundImage = `url(${url})`;
        // }
        if(imgfile){
            setprofileimage(imgfile)
            const formdata=new FormData
            formdata.append("email",email)
            formdata.append("profileimage",imgfile)
            try{
                const res=await axios.post("http://127.0.0.1:8000/updateprofileimage/",formdata,{
                    headers:{
                        'Content-Type': 'multipart/form-data',
                    }
                })
                if(res.status==200){
                    toast.success("Updated Successful")
                    const url=URL.createObjectURL(imgfile)
                    document.getElementById('profileimg').style.backgroundImage = `url(${url})`;
                    location.reload()
                }
            }
            catch(err){
                toast.error("something went wrong")
            }
        }
    }


    const changeprofilename=(e)=>{
        if(edit==1){
            setprofilename(e.target.value)
        }
    }
    const saveusername=async()=>{
        try{
            const res=await axios.post("http://127.0.0.1:8000/saveusername/",{
                email,
                profilename
            })
            if(res.status==200){
                toast.success("Updated Sucessfully")
                setedit(0)
            }
        }
        catch(err){
            if(err.status==400){
                alert("Username is alredy exists.please change the name")
            }
            else{
            alert("something Went Wrong,Try Again")
            }
        }
    }


    const memory=async()=>{
        const formData = new FormData();
        formData.append("email",email)
        formData.append("memoryscore", memoryscore);
        formData.append("memoryproof", memoryproof);
        try {
            const res = await axios.post("http://127.0.0.1:8000/updatememoryscore/", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            });
            if (res.status === 200) {
                toast.success("Updated Successful");
            }
        } catch (err) {
            if(err.status==400){
                alert("Upload the proof,Before Update");
            }
            else
            {
                toast.error("Something went wrong");
            }
        }
    }
    const stone=async()=>{
        const formData = new FormData();
        formData.append("email",email)
        formData.append("stonescore", stonescore);
        formData.append("stoneproof", stoneproof);
        try {
            const res = await axios.post("http://127.0.0.1:8000/updatestonescore/", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            });
            if (res.status === 200) {
                toast.success("Updated Successful");
            }
        } catch (err) {
            if(err.status==400){
                alert("Upload the proof,Before Update");
            }
            else
            {
                toast.error("Something went wrong");
            }
        }
    }
    const guess=async()=>{
        const formData = new FormData();
        formData.append("email",email)
        formData.append("guessscore", guessscore);
        formData.append("guessproof", guessproof);
        try {
            const res = await axios.post("http://127.0.0.1:8000/updateguessscore/", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            });
            if (res.status === 200) {
                toast.success("Updated Successful");
            }
        } catch (err) {
            if(err.status==400){
                alert("Upload the proof,Before Update");
            }
            else
            {
                toast.error("Something went wrong");
            }
        }
    }
    const water=async()=>{
        const formData = new FormData();
        formData.append("email",email)
        formData.append("waterscore", waterscore);
        formData.append("waterproof", waterproof);
        try {
            const res = await axios.post("http://127.0.0.1:8000/updatewaterscore/", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            });
            if (res.status === 200) {
                toast.success("Updated Successful");
            }
        } catch (err) {
            if(err.status==400){
                alert("Upload the proof,Before Update");
            }
            else
            {
                toast.error("Something went wrong");
            }
        }
    }
    const brick=async()=>{
        const formData = new FormData();
        formData.append("email",email)
        formData.append("brickscore", brickscore);
        formData.append("brickproof", brickproof);
        try {
            const res = await axios.post("http://127.0.0.1:8000/updatebrickscore/", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            });
            if (res.status === 200) {
                toast.success("Updated Successful");
            }
        } catch (err) {
            if(err.status==400){
                alert("Upload the proof,Before Update");
            }
            else
            {
                toast.error("Something went wrong");
            }
        }
    }
  return (
    <div id='profilebody'>
        <center>
            <br></br>
            <button id='profileimg' onClick={tofile} style={{ backgroundImage: `url(${profileimage})` }}></button><br></br>
            <input id='file' type='file' accept='image/*' style={{display:'none'}} onChange={storeimage}/><br></br>
            <label style={{fontSize:'20px'}}>Name:</label> <input type='text' value={profilename} onChange={changeprofilename}  style={{borderRight:'none',borderLeft:'none',borderTop:'none',marginBottom:'30px',fontSize:'19px'}}/> 
            <img onClick={(e)=>setedit(1)} src={editicon} style={{width:'25px',height:'25px',cursor:'pointer',marginLeft:'5px'}}/>
            <br></br>
            {edit==1?<div><button onClick={saveusername}>Save</button> <button onClick={(e)=>setedit(0)}>cancel</button></div>:<></>}
            <table id="profiletable">
                <tr>
                    <th>Game Title</th>
                    <th>Highest Score</th>  
                    <th>Upload Screenshort</th>
                </tr>
                <tr>
                    <td>Memory Card Game</td>
                    <td><input type='number' className='scorefield' value={memoryscore} onChange={(e)=>setmemoryscore(e.target.value)} required/></td>
                    <td><input type='file' onChange={(e)=>setmemoryproof(e.target.files[0])} required/></td>
                    <td><button onClick={memory}>Update</button></td>
                </tr>
                <tr>
                    <td>Stone Paper Scrissor Game</td>
                    <td><input type='number' value={stonescore} onChange={(e)=>setstonescore(e.target.value)} required/></td>
                    <td><input type='file' onChange={(e)=>setstoneproof(e.target.files[0])} required/></td>
                    <td><button onClick={stone}>Update</button></td>
                </tr>
                <tr>
                    <td>Guess the Number Game</td>
                    <td><input type='number' value={guessscore} onChange={(e)=>setguessscore(e.target.value)} required/></td>
                    <td><input type='file' onChange={(e)=>setguessproof(e.target.files[0])} required/></td>
                    <td><button onClick={guess}>Update</button></td>
                </tr>
                <tr>
                    <td>Catch the Water Drop Game</td>
                    <td><input type='number' value={waterscore} onChange={(e)=>setwaterscore(e.target.value)} required/></td>
                    <td><input type='file' onChange={(e)=>setwaterproof(e.target.files[0])} required/></td>
                    <td><button onClick={water}>Update</button></td>
                </tr>
                <tr>
                    <td>Break the Bricks Game</td>
                    <td><input type='number' value={brickscore} onChange={(e)=>setbrickscore(e.target.value)} required/></td>
                    <td><input type='file' onChange={(e)=>setbrickproof(e.target.files[0])} required/></td>
                    <td><button onClick={brick}>Update</button></td>
                </tr>
                {/* <tr>
                    <td colSpan={3}><center><button>Update</button></center></td>
                </tr> */}
            </table>
        </center>
        <ToastContainer/>
    </div>
  )
}
export default Profile