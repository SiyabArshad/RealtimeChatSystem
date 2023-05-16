import React from 'react'
import "./styles.css"
import Switch from '@mui/material/Switch';
import http from '../../utils/http';
import Loading from '../../components/Loading';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
export default function SettingPage() {
    const [loading,setloading]=React.useState(false)
    const [bd,setbd]=React.useState(false)
    const getallcons=async()=>{
        setloading(true)
        try{
          const {data}=await http.get(`http://localhost:5000/api/user/companyinfo`)
            //   setconfidentiality(data?.confidentiality)
              setbd(data?.confidentiality==='indivisual'?false:true)
           }
        catch{
           }
        finally{
          setloading(false)
        }
      }
      const changeState=async(state)=>{
        if(state===false)
        {
            //set to all
            await http.put(`http://localhost:5000/api/user/companyinfo`,{confidentiality:"all"})
            setbd(true)
        }
        else
        {
            //set to indivisual
            await http.put(`http://localhost:5000/api/user/companyinfo`,{confidentiality:"indivisual"})
            setbd(false)
        }
      }
      React.useEffect(()=>{
        getallcons()
      },[])
  return (
    <div className='settinghm'>
          <Loading loading={loading}/>
        <div className='settingcard'>
            <div className='rowsetting'>
            <p className='head'>BroadCast</p>
            <Switch onChange={()=>changeState(bd)} {...label}  checked={bd} />
            </div>
            <div className='rowsetting'>
            <p className='head'>Current Status</p>
            <p className='nmtext'>{bd?"All":"Indivisual"}</p>
            </div>
        </div>
    </div>
  )
}
