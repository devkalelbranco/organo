import ButtonDefault from "../ButtonDefault";
import DropDown from "../DropDown";
import InputText from "../InputText";
import { useState } from "react";
import "./FormDefault.css"

const FormDefault = (props) => {

    const onSave = (event) => {
        event.preventDefault();
        
        props.onAddEmployee({
            name, position, image, team
        })

        setName('')
        setPosition('')
        setImage('')
        setTeam(props.teams[0])
    }

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    return (
        <section className="form-default">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText required={true} label="Nome" placeholder="Digite seu nome" myValue={name} onMyChange={value => setName(value)} />
                <InputText required={true} label="Cargo" placeholder="Digite seu cargo" myValue={position} onMyChange={value => setPosition(value)} />
                <InputText label="Imagem" placeholder="Digite o caminho da imagem" myValue={image} onMyChange={value => setImage(value)} />
                <DropDown label="Time" items={props.teams} myValue={team} onMyChange={value => setTeam(value)} />
                <ButtonDefault>
                    Criar Card
                </ButtonDefault>
            </form>
        </section>
    )
}

export default FormDefault;