import { useEffect, useState } from "react"
import $ from 'jquery'
import RouteNav from "../components/RouteNav";
import { Link } from "react-router-dom";


function TradeDashboard() {

    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        $.ajax({
            url: "http://localhost:8080/api/vt/getStocks",
            method: "GET",
            success: (res) => { 
                setStocks(res);
            },
            error: (err) => { 
            }
        });
    }, []);

    return (
        <>
            <RouteNav />
            <div className="container-fluid text-center">
                <div className="row pt-3">
                    <div className="col-3"></div>
                    <div className="col-6 overflow-y-scroll h-50">
                    <table className="table p-3">
                        <thead>
                            <tr>
                                <th className="col-1">Stock Code</th>
                                <th className="col-2">Stock Name</th>
                                <th className="col-1">Trd Currency</th>
                                <th className="col-1">Open</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                    stocks && stocks.map((s, i, _) =>
                                        <tr key={s.stockCode}>
                                                <td className="fs-8"><Link to={ `/viewStockTrade/${s.stockCode}` }>{s.stockCode}</Link></td>
                                                <td>{s.stockName}</td>
                                                <td>{s.currency}</td>
                                                <td>{s.openPrice.toFixed(2)}</td>
                                            </tr>
                                    )
                        }
                        </tbody>
                    </table>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </>
    )
}

export default TradeDashboard
