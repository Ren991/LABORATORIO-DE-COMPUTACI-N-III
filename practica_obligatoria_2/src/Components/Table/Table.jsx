import './table.css'; 

function Table({ netIncomes }) {
    const total = netIncomes.reduce((acc, item) => acc + item.income, 0);
    const promedio = total / netIncomes.length;
    return (

        <div className="table-container">
            <h1>TABLE</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Income</th>
                    </tr>
                </thead>
                <tbody>
                    {netIncomes.map((item, index) => (
                        <tr key={index}>
                            <td>{item.brand}</td>
                            <td>{item.income}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Promedio de Ingreso Neto: {promedio}</p>
        </div>

    )

}

export default Table
