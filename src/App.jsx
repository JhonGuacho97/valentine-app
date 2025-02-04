import { useState } from 'react'
import Swal from 'sweetalert2'
import './App.css'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleYes = () => {
    setIsOpen(true)
    setTimeout(() => setShowConfetti(true), 2000)
  }

  const handleNo = () => {
    // Mueve el botón "No"
    const button = document.querySelector('.no-button')

    // Muestra el toast de SweetAlert2
    Swal.fire({
      title: '¡Di que sí, por favor!',
      icon: 'error',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-red-600 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Título principal */}
      <h1 className="text-5xl text-center md:text-6xl font-dancing text-white mb-8 animate-pulse">
        ❤️Quieres ser mi Valentin?❤️
      </h1>

      {/* Carta */}
      <div className={`transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-80 h-150 flex flex-col items-center justify-center">
          <div className={`transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl font-dancing text-pink-600 mb-4">Para mi amor...</h2>
            <p className="text-gray-700 mb-4">
              Desde el momento en que entraste en mi vida, todo ha sido mas bonito.<br />
              Eres mi razón para sonreír, eres quien devolvio el brillo a mis ojos<br />
              y la persona que ilumina cada uno de mis días.<br />
              <br />
              Contigo he descubierto que cuando se quiere a alguien la persona cambia para bien,<br />
              y que con amor y respeto se logran muchas cosas.<br />
              <br />
              Por eso hoy, con todo mi corazón, te pregunto:<br />
              <span className="text-pink-600 font-bold">¿Diana, Quieres ser mi Valentín?</span>
              <span className="text-pink-600 font-bold">Atentamente <p className='text-gray-500'>Jhon David 🐹🧑‍💻</p></span>
            </p>
            <div className="flex gap-4 mt-6">
              <span className="text-2xl">💌</span>
              <span className="text-2xl">🌹</span>
              <span className="text-2xl">💖</span>
            </div>
          </div>
        </div>
      </div>

      {/* Botones */}
      {!isOpen && (
        <div className="mt-8 flex gap-4">
          <button
            onClick={handleYes}
            className="bg-green-400 shadow-2xl hover:bg-green-600 text-white px-8 py-4 rounded-full text-2xl transition-all duration-300 hover:scale-110"
          >
            ¡Sí!
          </button>
          <button
            onClick={handleNo}
            onMouseOver={handleNo}
            className="no-button bg-red-500 shadow-2xl hover:bg-red-600 text-white px-8 py-4 rounded-full text-2xl transition-all duration-300"
          >
            No
          </button>
        </div>
      )}

      {/* Efectos especiales */}
      {showConfetti && (
        <>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute confetti"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 2 + 's'
              }}
            >
              {i % 2 === 0 ? '💐' : '💖'}
            </div>
          ))}
        </>
      )}
    </div>
  )
}