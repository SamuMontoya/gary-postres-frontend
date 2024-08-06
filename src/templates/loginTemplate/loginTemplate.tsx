import { Images } from '../../interfaces'

export const LoginTemplate = () => {
  return (
    <section className="bg-[#F5E8DF] w-full h-[100vh] flex">
      <div className="bg-[#D91B5E] flex-1 flex">
        <img
          src={Images.LOGO_BACKGROUND_RED}
          alt="gary_postres_logo"
          className="w-full self-center p-5"
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-[#D91B5E] font-extrabold text-3xl p-5 text-center">
          ¡Bienvenido de nuevo!
        </h1>
        <p className="max-w-56 text-center py-5">
          Ingresa tu correo y contraseña para iniciar
        </p>
        <p>Input Correo</p>
        <p>Input Contraseña</p>
        <p>Botón Iniciar sesión</p>
        <p className="p-5">O continúa con:</p>
        <div className="flex gap-5">
          <p>Botón Google</p>
          <p>Botón Apple</p>
          <p>Botón Facebook</p>
        </div>
        <div className="text-center p-5">
          <p>No tengo una cuenta, ir a</p>
          <p className="text-[#D91B5E] font-bold">Registrarme</p>
        </div>
      </div>
    </section>
  )
}
