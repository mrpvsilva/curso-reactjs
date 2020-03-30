import React, { useState } from 'react'

const Hooks = () => {
    const [nome, setNome] = useState('Maria');
    return (
        <div className="row">
            <div className="col">
                <p>Nome: {nome}</p>
                <button className="btn btn-primary" onClick={() => setNome('João')}>Alterar</button>
            </div>
        </div>
    )
}
export default Hooks;