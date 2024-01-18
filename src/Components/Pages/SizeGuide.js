
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const SizeGuid = () => {
  return (
    <div className="container mt-4">
      <h2>SIZE CHART</h2>
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>Size</th>
            <th>XS</th>
            <th>S</th>
            <th>M</th>
            <th>L</th>
            <th>XL</th>
            <th>XXL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>UK</td>
            <td>6</td>
            <td>8</td>
            <td>10</td>
            <td>12</td>
            <td>14</td>
            <td>16</td>
          </tr>

          <tr>
          <td>US</td>
          <td>2</td>
          <td>4</td>
          <td>6</td>
          <td>8</td>
          <td>10</td>
          <td>12</td>
        </tr>
        <tr>
          <td>EU</td>
          <td>36</td>
          <td>38</td>
          <td>40</td>
          <td>42</td>
          <td>44</td>
          <td>46</td>
        </tr>
        <tr>
          <td>Bust</td>
          <td>33"</td>
          <td>34.5"</td>
          <td>36"</td>
          <td>37.5"</td>
          <td>39"</td>
          <td>41"</td>
        </tr>
        <tr>
          <td>Waist</td>
          <td>25"</td>
          <td>27"</td>
          <td>29"</td>
          <td>31"</td>
          <td>33"</td>
          <td>35"</td>
        </tr>
        <tr>
          <td>Hip</td>
          <td>36"</td>
          <td>37.5"</td>
          <td>39"</td>
          <td>41"</td>
          <td>43"</td>
          <td>45"</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SizeGuid;
