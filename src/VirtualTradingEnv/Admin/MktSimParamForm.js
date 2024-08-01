import RouteNav from "../../components/RouteNav"
import $ from "jquery"
import localStringify from "../../utils/localStringify"

function MktSimParamForm() {

    var data = {
        pme: new Date('2024-07-25'),
        a1PVRLwrBd: 1,
        a1PVRUprBd: 3,
        a2PVRLwrBd: 1,
        a2PVRUprBd: 5,
        a3PVRLwrBd: 1,
        a3PVRUprBd: 7,
        a1TVLwrBd: 1,
        a1TVUprBd: 2,
        a2TVLwrBd: 1,
        a2TVUprBd: 3,
        a3TVLwrBd: 1,
        a3TVUprBd: 4,
        a1TCCap: 1,
        a2TCCap: 1,
        a3TCCap: 3
     };

    function submitForm() {
         
        $.ajax({
            url: localStringify("http://localhost:8080/api/vta/saveMktSimParam", data), 
            method: "POST",
            success: (res) => { 
                console.log('Success!');
                console.dir(res);
            },
            error: (err) => { 
                console.log('Error!');
            }

        });
    }

    function editData(ev) { 
        var newVal = ev.target.value;
        data[ev.target.name] = newVal;
    }


    return (
        <div>
            <RouteNav/>
            <div className="container pt-3">
                <form className="form" action="#">
                <div className="form-group">
                    <label>Effective date</label>
                    <input name="pme" type="date" onChange={ editData} />
                </div>
                <div className="form-group">
                    <label>A1 Price variation lower bound (%)</label>
                    <input name="a1PVRLwrBd" type="number" onChange={ editData}  />
                </div>
                <div className="form-group">
                    <label>A1 Price variation upper bound (%)</label>
                    <input name="a1PVRUprBd" type="number" onChange={ editData} />
                </div>
                <div className="form-group">
                    <label>A2 Price variation lower bound (%)</label>
                    <input name="a2PVRLwrBd" type="number" onChange={ editData} />
                </div>
                <div className="form-group">
                    <label>A2 Price variation upper bound (%)</label>
                    <input name="a2PVRUprBd" type="number" onChange={ editData} />
                </div>
                <div className="form-group">
                    <label>A3 Price variation lower bound (%)</label>
                    <input name="a3PVRLwrBd" type="number" onChange={ editData} />
                </div>
                <div className="form-group">
                    <label>A3 Price variation upper bound (%)</label>
                    <input name="a3PVRUprBd" type="number" onChange={ editData} />
                </div>
        
                <div className="form-group">
                    <label>A1 Trade volume lower bound (%)</label>
                    <input name="a1TVLwrBd" type="number" onChange={ editData} />
                </div>
                <div className="form-group">
                    <label>A1 Trade volume upper bound (%)</label>
                    <input name="a1TVUprBd" type="number" onChange={ editData} />
                </div>
                <div className="form-group">
                    <label>A2 Trade volume lower bound (%)</label>
                    <input name="a2TVLwrBd" type="number" onChange={ editData} />
                </div>
                <div className="form-group">
                    <label>A2 Trade volume upper bound (%)</label>
                    <input name="a2TVUprBd" type="number" onChange={ editData} />
                </div>
                <div className="form-group">
                    <label>A3 Trade volume lower bound (%)</label>
                    <input name="a3TVLwrBd" type="number" onChange={ editData} />
                </div>
                <div className="form-group">
                    <label>A3 Trade volume upper bound (%)</label>
                    <input name="a3TVUprBd" type="number" onChange={ editData} />
                </div>

                <div className="form-group">
                    <label>A1 Trade count cap (#)</label>
                    <input name="a1TCCap" type="number" onChange={ editData} />
                </div>
                <div className="form-group">
                    <label>A2 Trade count cap (#)</label>
                    <input name="a2TCCap" type="number" onChange={ editData} />
                </div>
                <div className="form-group">
                    <label>A3 Trade count cap (#)</label>
                    <input name="a3TCCap" type="number" onChange={ editData} />
                </div>
                <button type="button" onClick={submitForm}>Save</button>
            </form>
            </div>
        </div>
    )
}

export default MktSimParamForm
