import '@src/pages/landpage/LandPage.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LandPage() {
  const [contador, setContador] = useState(5)
  const navigate = useNavigate() // <-- Definir navigate

  useEffect(() => {
    if (contador === 0) {
      navigate('/home')
    }
    const timeout = setTimeout(() => {
      setContador(contador - 1)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [contador, navigate])

  return (
    <div>
      <header className="landing-header">
        <h1 className="landing-header">📚 Relatos de Papel</h1>
        <p>Explora cientos de libros como si estuvieras en tu tienda favorita</p>
      </header>
      <div className="landing-img">
        <p>Serás redirigido automáticamente en {contador} segundos...</p>
      </div>
    </div>
  )
}
export default LandPage
