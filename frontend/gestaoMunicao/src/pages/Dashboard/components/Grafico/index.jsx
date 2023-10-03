import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { Container } from './Grafico.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

function Grafico() {

    const [entradas, setEntradas] = useState(null);
    const [saidas, setSaidas] = useState(null);

    useEffect(() => {
        async function fetchEntrada() {
            try {
                const response = await fetch('http://localhost:8080/entradaestoque/total');
                const data = await response.json();
                setEntradas(data);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        }

        async function fetchSaida() {
            try {
                const response = await fetch('http://localhost:8080/estoquesaida/total');
                const data = await response.json();
                setSaidas(data);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        }

        fetchEntrada();
        fetchSaida();
    }, []);
    

    const data = {    

        labels: [`${entradas} Estrada`, `${saidas} Saídas`],
            datasets: [
                {
                    label: 'Quantidade: ',
                    data: [entradas, saidas],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 2,
                },
            ],
        };

   

    return (
        <Container>
            <p>Fluxo de Estoque</p>
            <Doughnut data={data} />
        </Container>
    );
}

export default Grafico;