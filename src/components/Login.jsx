
import {useState} from 'react';
import Success from './Success';


export default function Login() {

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[acceptedTerms, setAcceptedTerms] =useState(false);
  const[isSubmitted, setIsSubmitted] = useState(false);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = 
  password.length >= 8 && 
  /[A-Z]/.test(password) && 
  /[a-z]/.test(password) && 
  /[0-9]/.test(password) && 
  /[^A-Za-z0-9\s]/.test(password);

  const isFormValid =  isEmailValid && isPasswordValid && acceptedTerms


    function handleSubmit (event) {
        event.preventDefault();
        if (isFormValid) {
            setIsSubmitted(true);
        }
      } 
        if (isSubmitted) {
          return <Success />;
      }

    return (
<div>
    <h1>Giriş Yap</h1>
    
    <form onSubmit={handleSubmit}>
        <label htmlFor="eposta">E-posta</label>
        <input 
        type="email" 
        id="eposta" 
        value={email} 
        onChange={(event) => setEmail(event.target.value)}
        />
        {email.length > 0 && !isEmailValid && <p>Geçerli bir e-posta adresi giriniz.</p>}
          
        <label htmlFor="sifre">Şifre</label>
        <input 
        type="password" 
        id="sifre" 
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        />   
        {password.length > 0 && !isPasswordValid && <p>Şifre en az 8 karakter, bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir.</p>}

        <label htmlFor="check">Kullanım koşulları</label>
        <input 
        type="checkbox" 
        id="check" 
        checked={acceptedTerms}
        onChange={(event) => setAcceptedTerms(event.target.checked)}
        />   

        <button type="submit" disabled={!isFormValid}>Giriş Yap</button>
    </form>
    
</div>
    );
}