import { useState } from "react";
import Adat from "./haromszog.json";

function Haromszogek() {

    const [adat, setAdat] = useState({});
    const [aold, setAold] = useState(null);
    const [boldal, setBoldal] = useState(null);
    const [cold, setCold] = useState(null);
    const [ki, setKi] = useState(null);

    const send = () => {
        setAdat(Adat.push({ aold: aold, boldal: boldal, cold: cold }));
    };

    function kerulet(aold, boldal, cold) {
        
        let ker = aold + boldal + cold;
        return ker;
        
    };

    function terulet(aold, boldal, cold) {
        let ker = aold + boldal + cold;
        let s = ker / 2
        let ter = Math.sqrt(s * (s - aold) * (s - boldal) * (s - cold));
        return ter;
        
    };   

    function vizsgal() {
        
            if (aold + boldal > cold && aold + cold > boldal && boldal + cold > aold) {
                let ker = aold + boldal + cold
                let s = ker / 2
                let ter = Math.sqrt(s * (s - aold) * (s - boldal) * (s - cold))
                return send();
            } else
                setKi("Nem megfelelőek a háromszög adatai, vagy nem adtad meg valamelyiket !")

        
    }


    return (
        
            <div id="harom">
                <h1>Háromszögek</h1>     

                <div id="beker">   

            
                <label>Az "a" oldal:
                    <input
                        type="number"
                        onChange={(e) => setAold(e.target.valueAsNumber)}
                    />
                </label>
                <label>  A "b" oldal:
                    <input
                        type="number"
                        onChange={(e) => setBoldal(e.target.valueAsNumber)}
                    />
                </label>
                <label>  A "c" oldal:
                    <input
                        type="number"
                        onChange={(e) => setCold(e.target.valueAsNumber)}
                    />
                </label>
                <button onClick={() => vizsgal()}>Beküld</button>
                </div>

                <div id="uzenet">{ki}</div>
            

            <div id="kiharom">
                <table>
                    <tbody>
                        <tr>
                            <th>A oldal</th>
                            <th>B oldal</th>
                            <th>C oldal</th>
                            <th>Kerület</th>
                            <th>Terület</th>
                        </tr>

                        {Adat.map((item, index) => (
                            <tr key={index}>
                                <td>{item.aold} cm</td>
                                <td>{item.boldal} cm</td>
                                <td>{item.cold} cm</td>
                                <td>{kerulet(item.aold, item.boldal, item.cold).toFixed(2)} cm</td>
                                <td>{terulet(item.aold, item.boldal, item.cold).toFixed(2)} cm<sup>2</sup></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>

        
    )
};

export default Haromszogek;