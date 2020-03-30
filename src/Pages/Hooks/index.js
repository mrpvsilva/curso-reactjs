import React, { useState } from 'react'
import faker from 'faker';

const Hooks = () => {
    const [nome, setNome] = useState(faker.name.firstName());
    return (
        <div className="row">
            <div className="col">
                <p>Nome: {nome}</p>
                <button className="btn btn-primary" onClick={() => setNome(faker.name.firstName())}>Alterar</button>
            </div>
        </div>
    )
}
export default Hooks;