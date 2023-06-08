import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddData } from '../services/api';
import { BackBtn } from '../Componentes/Buttons';
import VerifyCheck from './Auth/VerifyCheck';

export default function AddPlayer() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        playername: '',
        teamname: '',
        assists: '',
        goals: '',
        playerimg: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await AddData(product);
            alert('Player added!');
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='dashboard-content'>
            <VerifyCheck/>
            <div className='cardx form-data-align'>
                <form onSubmit={handleSubmit} className='form-data-card '>
                    <input type='text' placeholder='Player Name' name='playername' value={product.playername} onChange={handleInputChange} className='product-input' required/>
                    <input type='text' placeholder='Team Name' name='teamname' value={product.teamname} onChange={handleInputChange} className='product-input' required />
                    <input type='number' placeholder='Assists' name='assists' value={product.assists} onChange={handleInputChange} className='product-input' required />
                    <input type='number' placeholder='Goals' name='goals' value={product.goals} onChange={handleInputChange} className='product-input' required />
                    <input type='text' placeholder='Player img URL' name='playerimg' value={product.playerimg} onChange={handleInputChange} className='product-input' required />
                    <button type='submit' className='button2'>Add Player</button>
                </form>
            </div>
            <BackBtn />
        </div>
    );
}
