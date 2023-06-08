import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EditData, FindData } from '../services/api';
import { BackBtn } from '../Componentes/Buttons';
import VerifyCheck from './Auth/VerifyCheck';

export default function EditPlayer() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        playername: '',
        teamname: '',
        assists: '',
        goals: '',
        playerimg: '',
    });

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await FindData(productId);
            setProduct(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

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
            await EditData(productId, product);
            alert('Player Updated !');
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='dashboard-content'>
            <VerifyCheck/>
            <div className='cardx form-data-align'>
                <form onSubmit={handleSubmit} className='form-data-card'>
                    <label>Player Name</label>
                    <input type='text' placeholder='Player Name' name='playername' value={product.playername} onChange={handleInputChange} className='product-input' required />
                    <label>Team Name</label>
                    <input type='text' placeholder='Team Name' name='teamname' value={product.teamname} onChange={handleInputChange} className='product-input' required />
                    <label>Assists</label>
                    <input type='number' placeholder='Assists' name='assists' value={product.assists} onChange={handleInputChange} className='product-input' required />
                    <label>Goals</label>
                    <input type='number' placeholder='Goals' name='goals' value={product.goals} onChange={handleInputChange} className='product-input' required />
                    <label>Player Image URL</label>
                    <input type='text' placeholder='Player img URL' name='playerimg' value={product.playerimg} onChange={handleInputChange} className='product-input' required />
                    <button type='submit' className='button2'>Update Player</button>
                </form>
            </div>
            <BackBtn />
        </div>
    );
}
