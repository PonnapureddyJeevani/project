import React,{useState} from 'react'
//import FormRow from './FormRow';
import { useNavigate } from 'react-router-dom';
import Hero from '../assets/4164095.jpg';
import '../assets/loginform.css';
import SelectTextFields from '../components/Textfields';
const Buynowform = () => {
    const n=useNavigate()
       let Gosuccess=()=> {
          n('/success')
        }
        /*if(password==" " || email==" "){
    
        alert("fill the empty fields")
      }*/
      let[name, setName]=useState(''); 
      let[email, setEmail] = useState('');
      let [password, setPassword] = useState('');
      let [mobileno, setMobileno] = useState('');
      let[address, setAddress] = useState('');
      
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Handle login logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('mobileno:', mobileno);
        console.log('address:',address);
       /* // Reset form fields
        setName('');
        setEmail('');
        setPassword('');  */
      }
    
  return (
    <main>
         <div className='hero'>
        <img src={Hero} alt='Hero image' className='hero_img' />
      </div>
      <div className='overlay1'>
      <div className='back'>
      <form class="form" onSubmit={handleSubmit} action=" " style={{borderWidth:'2mm',backgroundColor:'lightgray', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
         <h2>Signup</h2><hr></hr>
         <div class="div3" style={{paddingBottom:'20px'}}>
          <label style={{backgroundColor:'lightgrey'}}>Name:</label><br></br>
          <input  required  class="c5" type="name"  color='white' placeholder='enter name' value={name} onChange={(e) => setName(e.target.value)}/><br></br>
        </div >
        <div class="div2"style={{paddingBottom:'10px'}}>
          <label style={{backgroundColor:'lightgrey'}}>Email:</label><br></br>
          <input   required  class="c4"   type="email"  color='white' placeholder='enter email' value={email}  onChange={(e)=>setEmail(e.target.value)}/><br></br>
        </div>
        <div class="div3" style={{paddingBottom:'20px'}}>
          <label style={{backgroundColor:'lightgrey'}}>Password:</label><br></br>
          <input  required  class="c5" type="password"  color='white' placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)}/><br></br>
        </div >
        <div class="div3" style={{paddingBottom:'20px'}}>
          <label style={{backgroundColor:'lightgrey'}}>Mobile no:</label><br></br>
          <input  required  class="c5" type="mobile no"  color='white' placeholder='enter mobile no' value={mobileno} onChange={(e) => setMobileno(e.target.value)}/><br></br>
        </div >
        <div class="div3" style={{paddingBottom:'20px'}}>
          <label style={{backgroundColor:'lightgrey'}}>Address:</label><br></br>
          <input  required  class="c5" type="address"  color='white' placeholder='enter address' value={address} onChange={(e) => setAddress(e.target.value)}/><br></br>
        </div >
        <SelectTextFields/>
        <button class="btn" type="submit"  onClick={Gosuccess}>Continue</button>
        
      </form>
     </div>
        </div>
        </main>
  )
}
export default Buynowform;