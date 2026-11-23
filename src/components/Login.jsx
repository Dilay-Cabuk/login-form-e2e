
import {useState} from 'react';

export default function Login() {

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[acceptedTerms, setAcceptedTerms] =useState(false);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 8;

    return (
<div>
    <h1>Giriş Yap</h1>
    
    <form>
        <label htmlFor="eposta">E-posta</label>
        <input 
        type="email" 
        id="eposta" 
        value={email} 
        onChange={(event) => setEmail(event.target.value)}
        />
          
        <label htmlFor="sifre">Şifre</label>
        <input 
        type="password" 
        id="sifre" 
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        />   

        <label htmlFor="check">Kullanım koşulları</label>
        <input 
        type="checkbox" 
        id="check" 
        checked={acceptedTerms}
        onChange={(event) => setAcceptedTerms(event.target.checked)}
        />   

        <button type="submit">Giriş Yap</button>
    </form>
    
</div>
    );
}