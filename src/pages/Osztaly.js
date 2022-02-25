import { useState } from "react";
import Data from "./oszt.json";

function Osztaly() {

  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [year, setYear] = useState(null);
  const [gender, setGender] = useState(null);
  const [college, setCollege] = useState(null);
  const [ki, setKi] = useState(null);

  const handleChange = (event) => {
    setCollege(event.target.value)
  }

  const nemValaszto = (event) => {
    setGender(event.target.value)
  }

  const send = () => {
    setData(Data.push({ name: name, year: year, gender: gender, college: college }));
    console.log(Data);
  };

  function ages(year) {
    const age = 2022 - year;
    return age;
  }

  function szines(item) {
    if (item.gender == "Nő")
      return "csaj";

    else {
      return "srac";
    }
  }
  function vizsgal() {
    if (name.length > 3 && (year > 1950 && year < 2016) && (gender == "Nő" || gender == "Férfi") && (college == "Igen" || college == "Nem")) {
      return send();
    } else {
      setKi("Nem jó adatot adtál meg, vagy hiányosan töltötted ki!")
    }

  }


  return (

    <div id="oszt">
      <div>
        <label>Név:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label><br></br>
        <label>Születési év:
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.valueAsNumber)}
          />
        </label><br></br>

        <form>
          Neme: <br></br>
          <input
            type="radio"
            value="Férfi"
            checked={gender === 'Férfi'}
            onChange={nemValaszto}
          /> Férfi
          <input
            type="radio"
            value="Nő"
            checked={gender === 'Nő'}
            onChange={nemValaszto}
          /> Nő
        </form><br></br>

        Kollégista:<select value={college} onChange={handleChange}>
          <option value="">Válassz!</option>
          <option value="Igen">Igen</option>
          <option value="Nem">Nem</option>
        </select>
        <br></br>

        <button onClick={() => vizsgal()}>Beküld</button>
        <div className="ki">{ki}</div>

      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Név:</th>
              <th>Kora:</th>
              <th>Neme:</th>
              <th>Kollégista:</th>
            </tr>
            {Data.map((item, index) => (
              <tr key={index} className={szines(item) === "csaj" ? "magenta" : "blue"}>
                <td>{item.name}</td>
                <td>{ages(item.year)} év</td>
                <td>{item.gender}</td>
                <td>{item.college}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
};

export default Osztaly;