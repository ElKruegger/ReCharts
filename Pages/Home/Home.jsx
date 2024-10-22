import React, { useState } from 'react'; // Incluindo o useState aqui
import NavBarElement from "../../Components/NavBar/NavBar";
import AreaChartComponent from "../../Components/AreaCharts";
import './Home.scss';

function Home() {
    const [selectedReport, setSelectedReport] = useState(null);

    const handleReportClick = (report) => {
        setSelectedReport(report); // Atualiza o relatório selecionado
    };
    return (
        <div className="Background-Div">
            <NavBarElement></NavBarElement>

            <div>
                <NavBarElement onReportClick={handleReportClick} />

                <div className="Chart-Container">
                    {selectedReport === 'A' && <AreaChartComponent />}
                    {selectedReport === 'B' && <AreaChartComponent />}
                    {selectedReport === 'C' && <AreaChartComponent />}
                    {selectedReport === 'D' && <AreaChartComponent />}
                    {selectedReport === 'E' && <AreaChartComponent />}
                </div>
            </div>
        </div>
    )
}

export default Home;