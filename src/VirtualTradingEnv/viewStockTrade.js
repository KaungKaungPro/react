import { useEffect, useState } from "react"
import $ from 'jquery'
import LineChart from "./LineChart";
import { useParams } from "react-router-dom";
import RouteNav from "../components/RouteNav";

function ViewStockTrade(props) {

    const [stockTrades, setStockTrade] = useState([]);
    const [timeLabels, setTimeLabels] = useState([]);

    const { stockCode } = useParams();

    useEffect(() => {
        
        return () => { 
            $.ajax({
                url: `http://localhost:8080/api/vt/viewStock/${stockCode}`,
                method: "GET",
                success: (res) => { 
                    console.log(res);
                    if (res.length > 0) { 
                        setStockTrade(res.map(t => t.price));
                        setTimeLabels(res.map(t => t.timeTraded))
                    }
                },
                error: (err) => { 
                    console.log(`Error during load stock trades`)
                }
            })
        }

     }, [stockCode]);

    return (
        <div>
            <RouteNav/>
            <div className="p-4">
                <h1>Stock Trades</h1>
            </div>
            <LineChart chartData={{
                labels: timeLabels,
                datasets: [
                    {
                        label: "Price",
                        data: stockTrades,
                        tension: 0.1
                    }
                ]
            }} title={`Stock ${stockCode}`} options={{
                elements: {
                    point: {
                        pointStyle: false
                    },
                    line: {
                        // backgroundColor: 'black',
                        borderWidth: 1.5
                    }
                }
            }} />
            
        </div>
    )
}

export default ViewStockTrade
