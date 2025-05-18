import '@src/pages/landpage/LandPage.css';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LandPage() {
const [contador, setContador] = useState(10)
const navigate = useNavigate();  // <-- Definir navigate


  useEffect(() => {
    if (contador === 0) {
      navigate('/home');
    }
    const timeout = setTimeout(() => {
    setContador(contador-1)
    console.log("Faltan:" + contador + "segundos")
    }, 1000);
    return () => clearTimeout(timeout);    
  }, [contador]);

return (
    <div>
        <header className="landing-header">
          <h1>📚 Relatos de Papel</h1>
          <p>Explora cientos de libros digitales</p>
        </header>            
        <div className="hero">
            <p>Serás redirigido automáticamente en {contador} segundos...</p>          
        </div>          
    </div>

)
}
export default LandPage;