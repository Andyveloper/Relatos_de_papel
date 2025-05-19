const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6 text-center flex flex-col items-center gap-2 text-sm opacity-80">
      <div className="flex gap-2 items-center text-base">
        Hecho con
        <span className="animate-pulse">💻</span>+<span className="animate-bounce">☕</span>
      </div>
      <div className="text-xs">
        © {new Date().getFullYear()} Relatos de papel. Universidad Internacional de La Rioja. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
