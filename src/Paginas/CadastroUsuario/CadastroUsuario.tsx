/* eslint-disable @typescript-eslint/no-explicit-any */
import './CadastroUsuario.css';
import { useForm, useFieldArray } from 'react-hook-form';
import { CriarUsuario } from '../../Servicos/CadastroUsuarioAPI';

const UserForm = () => {
    const { register, handleSubmit, control } = useForm()
    const { fields, append, remove } = useFieldArray({
        control,
        name: "lstAddresses"
    });

    const onSubmit = (data: any) => {
        console.log(data);
        try {
            CriarUsuario(data);
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Dados de acesso do usuário</h2>
                    <div className='submenu'>
                        <div className='titulos'>
                            <label>Nome: </label>
                            <input className='campos' type="text" {...register("name")} required />
                        </div>
                        <div className='titulos'>
                            <label>Email: </label>
                            <input className='campos' type="email" {...register("email")} required />
                        </div>
                        <div className='titulos'>
                            <label>Senha: </label>
                            <input className='campos' type="password" {...register("senha")} required />
                        </div>
                        <div className='titulos'>
                            <label>Foto: </label>
                            <input className='campos' type="text" {...register("foto")} />
                        </div>
                        <div className='titulos'>
                            <label>Unidade: </label>
                            <input className='campos' type="text" {...register("unidade")} required />
                        </div>
                    </div>

                    <h2>Tipo de Perfil</h2>
                    <div className='submenu'>
                        <div className='titulos'>
                            <label>Tipo: </label>
                            <input className='campos' type="text" {...register("tipoPerfil.tipo")} required />
                        </div>
                        <div className='titulos'>
                            <label>Acesso: </label>
                            <input className='campos' type="text" {...register("tipoPerfil.nivelAcesso")} required />
                        </div>
                    </div>

                    <br />
                    <h2>Endereços</h2>
                    {fields.map((field, index) => (
                        <div className='menu' key={field.id}>
                            <div className='submenu'>
                                <div className='titulos'>
                                    <label>Rua: </label>
                                    <input className='campos2' type="text" {...register(`lstAddresses[${index}].street`)} required />
                                </div>
                                <div className='titulos'>
                                    <label>Número: </label>
                                    <input className='campos2' type="text" {...register(`lstAddresses[${index}].number`)} required />
                                </div>
                                <div className='titulos'>
                                    <label>Complemento: </label>
                                    <input className='campos2' type="text" {...register(`lstAddresses[${index}].complement`)} />
                                </div>
                                <div className='titulos'>
                                    <label>Bairro: </label>
                                    <input className='campos2' type="text" {...register(`lstAddresses[${index}].district`)} required />
                                </div>
                                <div className='titulos'>
                                    <label>Vizinhança: </label>
                                    <input className='campos2' type="text" {...register(`lstAddresses[${index}].neighborhood`)} required />
                                </div>
                                <div className='titulos'>
                                    <label>Cidade: </label>
                                    <input className='campos2' type="text" {...register(`lstAddresses[${index}].city`)} required />
                                </div>
                                <div className='titulos'>
                                    <label>Estado: </label>
                                    <input className='campos2' type="text" {...register(`lstAddresses[${index}].state`)} required />
                                </div>
                                <div className='titulos'>
                                    <label>País: </label>
                                    <input className='campos2' type="text" {...register(`lstAddresses[${index}].country`)} required />
                                </div>
                                <div className='titulos'>
                                    <label>CEP: </label>
                                    <input className='campos2' type="text" {...register(`lstAddresses[${index}].zipCode`)} required />
                                </div>
                            </div>
                            <button className='rm' type="button" onClick={() => remove(index)}>Remover Endereço</button>
                        </div>
                    ))}
                    <button className='add' type="button" onClick={() => append({})}>Adicionar Endereço</button>
                    <button className='send' type="submit">Enviar</button>
                </form>
            </div>
        </>
    );
};

export default UserForm;
