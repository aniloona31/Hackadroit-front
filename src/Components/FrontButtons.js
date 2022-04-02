import { React, useState } from 'react'
import Select from 'react-select';
import './FrontButtons.css'
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
// import { isDisabled } from '@testing-library/user-event/dist/utils';
import {useEffect} from 'react';
import { body } from '@mui/material/CssBaseline/CssBaseline';
import { useNavigate } from 'react-router-dom';

// const options = ["one", "Two", "Three"]
function FrontButtons({data}) {

    const [options2,setOptions2] = useState([
        {label:'Select City'},
    ]);
    let options1 = [
        {label:"Select State"},
        
    ];

    const navigate = useNavigate();

    const [selectedOption1, setSelectedOption1] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [flag1, setflag1] = useState(false);
    const [flag2, setflag2] = useState(false);  
    // const label = 'All';
    const handleOnClick1= async (selectedOption1) =>{
        setSelectedOption1(selectedOption1);
        // console.log(selectedOption1);  
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:8080/city/all/${selectedOption1.value}`,{
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            }
        })
        if(response.status === 200){
            const data1 = await response.json();
            let cities = [
                {label : "select"}
            ]
            for(let i=0;i<data1.length;i++){
                console.log(data1[i]);
                cities.push({label:data1[i].cityName,value:data1[i].cityName})
            }
            console.log(cities);
            setOptions2(cities);
        }
        else{
            //error
        }
        let vari = true; 
        setflag1(vari); 
    }

    const getPlaces = () =>{
        navigate("/place",{
            state : {
                State : selectedOption1.value,
                city : selectedOption2.value
            }
        })
    }

    useEffect(async()=>{
        for(let i=0;i<data.length;i++){
            options1.push({label:data[i].stateName,value:data[i].stateName})
        }
    })
    
    

    const handleOnClick2=async (selectedOption2)=>{
        
        setSelectedOption2(selectedOption2);  
        let vari = true; 
        setflag2(vari); 
    }
    return (
        <>
            <div className='flex'>
                <Select className='dropdown1'
                    defaultValue = {selectedOption1}
                    onChange={handleOnClick1}
                    options={options1}
                    name="All"

                />
                <Select className='dropdown2'
                    isDisabled = {!flag1}
                    defaultValue = {selectedOption2}
                    onChange={handleOnClick2}
                    options={options2}
                />

            </div>
            <div className="getplaces" style={{marginLeft:'650px'}}>
                <Button disabled= {!flag1 || !flag2} style = {{borderRadius:'25px'}}  variant="contained" onClick={getPlaces}><SearchIcon className = "searchicon"/>Search</Button>
            </div>
        </>
    )
}

export default FrontButtons