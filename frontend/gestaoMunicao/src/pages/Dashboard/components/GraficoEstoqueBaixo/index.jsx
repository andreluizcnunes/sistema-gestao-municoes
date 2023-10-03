import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { Container } from './GraficoEstoqueBaixo.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

function GraficoEstoqueBaixo() {

    const [entradas, setEntradas] = useState(null);
    const [saidas, setSaidas] = useState(null);

    useEffect(() => {
        async function fetchEntrada() {
            try {
                const response = await fetch('http://localhost:8080/municao/estoqueBaixoUrgente');
                const data = await response.json();
                setEntradas(data);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        }

        async function fetchSaida() {
            try {
                const response = await fetch('http://localhost:8080/municao/estoqueBaixo');
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

        labels: [`${entradas} Urgente`, `${saidas} no limite`],
            datasets: [
                {
                    label: 'Quantidade: ',
                    data: [entradas, saidas],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 2,
                },
            ],
        };

   

    return (
        <Container>
            <p>Estoque Baixo</p>
            <Doughnut data={data} />
        </Container>
    );
}

export default GraficoEstoqueBaixo;