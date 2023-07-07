import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // COSAS PARA INICIAR SESION ALE
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // REGISTRO FLACO
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h1>Iniciar Sesión</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-rosa-pastel">
              Iniciar Sesión
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <h1>Registrarse</h1>
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label htmlFor="register-email" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="register-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="register-password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="register-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-rosa-pastel">
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
