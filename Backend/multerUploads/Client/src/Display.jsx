import { useState, useEffect } from "react";
import axios from "axios";

const Display = () => {
  const [mydata, setMydata] = useState([]);
  const [hoveredImage, setHoveredImage] = useState(null);

  const loadData = async () => {
    let api = "http://localhost:8000/display";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  const imagehover = (image) => {
    setHoveredImage(image);
  };

  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td> {key.rollno}</td>
          <td> {key.name}</td>
          <td> {key.address}</td>
          <td>
            {" "}
            <img src={key.defaultImage} width="300" height="200" />
            <br /> <br />
            {key.images.map((key1) => {
              return (
                <>
                  <img
                    src={key1}
                    width="40"
                    height="40"
                    onClick={() => imagehover(key1)}
                  />
                </>
              );
            })}
          </td>
        </tr>
      </>
    );
  });
  return (
    <>
      <h1> User Display </h1>
      <table>
        <tr>
          <th>Roll No</th>
          <th>Name</th>
          <th>Address</th>
          <th>Images</th>
        </tr>
        {ans}
      </table>
      {hoveredImage && (
        <div style={{ marginTop: '20px' }}>
          <h2>Hovered Image</h2>
          <img src={hoveredImage} width="300" height="200" alt="Hovered" />
        </div>
      )}
    </>
  );
};

export default Display;
