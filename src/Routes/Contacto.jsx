    import '../styles/Contacto.css';
    import react, {useState} from 'react';


    const Contacto = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        comment: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Pronto nos estaremos comunicando!');
    };

    return (
        <div className="formulario">
        <form className="registration-form" onSubmit={handleSubmit}>
            <h2>Contactate con nosotros</h2>
            <div className="form-group">
            <input
                type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder='Ingrese su Nombre' required
            />
            </div>
            <div className="form-group">
            <input
                type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Ingrese su Apellido' required
            />
            </div>
            <div className="form-group">
            <input
                type="email" id="email" name="email"
                value={formData.email} onChange={handleChange} placeholder='Ingrese su Correo Electronico' required
            />
            </div>
            <div className="form-group">
            <input
                type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder='Ingrese su Contraseña' required
            />
            </div>
            <div className="form-group">
            <textarea
                id="comment" name="comment" value={formData.comment} onChange={handleChange} placeholder='Escribinos sobre tu consulta...'
            />
            </div>
            <div className="mandar">
            <button type="submit">Enviar</button>
            </div>
        </form>
        </div>
    );
    };

    export default Contacto;
