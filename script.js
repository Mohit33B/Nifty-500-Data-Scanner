const apiUrl =
  "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjt_91UJBvAV1SdbhNJYvzG93XXrkxtckDDq7scEuHmVdrzilO3N82rPt8Ir02Ik6w9Tmm7dBL7niIHNg5XchiYwVnWBnoAPEcg1xg21D5WzDVJgu3sylPm-q5IZHnFNUj53u5o1MibDKgYxZ0pXzCiZZ3gCTDU8QSPJfnXhTm_PK1dvPaJF5ETjKBeaE8XB4GYWogFTjRG_29AsxpnHto6n6sozD_dMMMbfuhM8_--otn55LuWXAR4xkphekP2nY77RXr4foMFuY-NhT38hqEIHP-tgxUXz9I-So9M&lib=ML2LcMjEc3GZulfR9_B4nqOPpR5wKCXZT"; // अपने Apps Script Web App का URL डालें

function fetchData() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const openHighList = document.getElementById("openHighList");
      const openHighTwoToFivePercent = document.getElementById(
        "openHighTwoToFivePercent"
      );
      const openLowTwoToFivePercent = document.getElementById(
        "openLowTwoToFivePercent"
      );
      const gapUpTowToFivePercent = document.getElementById(
        "gapUpTowToFivePercent"
      );
      const gapDownTowToFivePercent = document.getElementById(
        "gapDownTowToFivePercent"
      );
      const gapUpMinusTwoToMinusFivePercent = document.getElementById(
        "gapUpMinusTwoToMinusFivePercent"
      );
      const gapDownMinusTwoToMinusFivePercent = document.getElementById(
        "gapDownMinusTwoToMinusFivePercent"
      );
      const openHighMinusTwoToMinusFivePercent = document.getElementById(
        "openHighMinusTwoToMinusFivePercent"
      );
      const openLowMinusTwoToMinusFivePercent = document.getElementById(
        "openLowMinusTwoToMinusFivePercent"
      );
      const openLowList = document.getElementById("openLowList");
      const gapUpList = document.getElementById("gapUpList");
      const gapDownList = document.getElementById("gapDownList");
      const ChangeOfPercent = document.getElementById("ChangeOfPercent");
      const twoToFivePercentList = document.getElementById("twoToFivePercent");
      const minusTwoToMinusFivePercent = document.getElementById(
        "minusTwoToMinusFivePercent"
      );
      const fiveToUpperDown = document.getElementById("fiveToUpperDown");
      const fiveToUpper = document.getElementById("fiveToUpper");
      const fiveToDown = document.getElementById("fiveToDown");

      openHighList.innerHTML = "";
      openHighTwoToFivePercent.innerHTML = "";
      openLowTwoToFivePercent.innerHTML = "";
      gapUpTowToFivePercent.innerHTML = "";
      gapDownTowToFivePercent.innerHTML = "";
      gapUpMinusTwoToMinusFivePercent.innerHTML = "";
      gapDownMinusTwoToMinusFivePercent.innerHTML = "";
      openHighMinusTwoToMinusFivePercent.innerHTML = "";
      openLowMinusTwoToMinusFivePercent.innerHTML = "";
      openLowList.innerHTML = "";
      gapUpList.innerHTML = "";
      gapDownList.innerHTML = "";
      ChangeOfPercent.innerHTML = "";
      twoToFivePercentList.innerHTML = "";
      minusTwoToMinusFivePercent.innerHTML = "";
      fiveToUpperDown.innerHTML = "";
      fiveToUpper.innerHTML = "";
      fiveToDown.innerHTML = "";

      // Sort the data in descending order by Change
      data.sort((a, b) => b.Change - a.Change);
      data.forEach((company) => {
        const {
          Symbol,
          LTP,
          Change,
          HIGH,
          LOW,
          OPEN,
          pCLOSE,
          CLOSE,
          MARKET,
          Side,
          VOLUME,
          Status,
        } = company; // Adjust based on the actual fields

        // Open High Stocks
        if (OPEN === HIGH) {
          const openHighRow = document.createElement("tr");
          openHighRow.innerHTML = `
            <td>${Symbol}</td>
            <td><strong>₹${LTP.toFixed(2)}</strong></td>
            <td class="${Change >= 0 ? "green" : "red"}">${Change.toFixed(
            2
          )}%</td>
            <td>OpenHigh</td>
            <td> ${Status}</td>
        `;
          openHighList.appendChild(openHighRow);
        }
        // Open High Stocks (2% To 5%)
        if (OPEN === HIGH && Change >= 2 && Change <= 5) {
          const openHighTwoToFiveRow = document.createElement("tr");
          openHighTwoToFiveRow.innerHTML = `
            <td>${Symbol}</td>
            <td><strong>₹${LTP.toFixed(2)}</strong></td>
            <td class="${Change >= 0 ? "green" : "red"}">${Change.toFixed(
            2
          )}%</td>
            <td>OpenHigh</td>
            <td>${Status}</td>
        `;
          openHighTwoToFivePercent.appendChild(openHighTwoToFiveRow);
        }
        // Open High Stocks (-2% To -5%)
        if (OPEN === HIGH && Change <= -2 && Change >= -5) {
          const openHighMinusTwoToMinusFiveRow = document.createElement("tr");
          openHighMinusTwoToMinusFiveRow.innerHTML = `
            <td>${Symbol}</td>
            <td><strong>₹${LTP.toFixed(2)}</strong></td>
            <td class="${Change >= 0 ? "green" : "red"}">${Change.toFixed(
            2
          )}%</td>
            <td>OpenHigh</td>
            <td>${Status}</td>
        `;
          openHighMinusTwoToMinusFivePercent.appendChild(
            openHighMinusTwoToMinusFiveRow
          );
        }

        //  Open Low Stocks
        if (OPEN === LOW) {
          const openLowRow = document.createElement("tr");
          openLowRow.innerHTML = `
            <td>${Symbol}</td>
            <td><strong>₹${LTP.toFixed(2)}</strong></td>
            <td class="${Change >= 0 ? "green" : "red"}">${Change.toFixed(
            2
          )}%</td>
            <td>OpenLow</td>
            <td>${Status}</td>
        `;
          openLowList.appendChild(openLowRow);
        }
        // Open Low Stocks (2% To 5%)
        if (OPEN === LOW && Change >= 2 && Change <= 5) {
          const openLowTwoToFiveRow = document.createElement("tr");
          openLowTwoToFiveRow.innerHTML = `
            <td>${Symbol}</td>
            <td><strong>₹${LTP.toFixed(2)}</strong></td>
            <td class="${Change >= 0 ? "green" : "red"}">${Change.toFixed(
            2
          )}%</td>
            <td>OpenLow</td>
            <td>${Status}</td>
        `;
          openLowTwoToFivePercent.appendChild(openLowTwoToFiveRow);
        }
        // Open Low Stocks (-2% To -5%)
        if (OPEN === LOW && Change <= -2 && Change >= -5) {
          const openLowMinusTwoToMinusFiveRow = document.createElement("tr");
          openLowMinusTwoToMinusFiveRow.innerHTML = `
            <td>${Symbol}</td>
            <td><strong>₹${LTP.toFixed(2)}</strong></td>
            <td class="${Change >= 0 ? "green" : "red"}">${Change.toFixed(
            2
          )}%</td>
            <td>OpenLow</td>
            <td>${Status}</td>
        `;
          openLowMinusTwoToMinusFivePercent.appendChild(
            openLowMinusTwoToMinusFiveRow
          );
        }

        // Gap Up Stocks
        if (OPEN > pCLOSE) {
          const gapUpRow = document.createElement("tr");
          gapUpRow.innerHTML = `
            <td>${Symbol}</td>
            <td><strong>₹${LTP.toFixed(2)}</strong></td>
            <td class="${Change >= 0 ? "green" : "red"}">${Change.toFixed(
            2
          )}%</td>
            <td>GapUp</td>
            <td>${VOLUME}</td>
        `;
          gapUpList.appendChild(gapUpRow);
        }
        // Gap Up Stocks (-2% To -5%)
        if (OPEN > pCLOSE && Change >= 2 && Change <= 5) {
          const gapUpTowToFiveRow = document.createElement("tr");
          gapUpTowToFiveRow.innerHTML = `
            <td>${Symbol}</td>
            <td><strong>₹${LTP.toFixed(2)}</strong></td>
            <td class="${Change >= 0 ? "green" : "red"}">${Change.toFixed(
            2
          )}%</td>
            <td>GapUp</td>
             <td>${VOLUME}</td>
        `;
          gapUpTowToFivePercent.appendChild(gapUpTowToFiveRow);
        }
        // Gap Up Stocks (-2% To -5%)
        if (OPEN > pCLOSE && Change <= -2 && Change >= -5) {
          const gapUpMinusTwoToMinusFiveRow = document.createElement("tr");
          gapUpMinusTwoToMinusFiveRow.innerHTML = `
            <td>${Symbol}</td>
            <td><strong>₹${LTP.toFixed(2)}</strong></td>
            <td class="${Change >= 0 ? "green" : "red"}">${Change.toFixed(
            2
          )}%</td>
            <td>GapUp</td>
             <td>${VOLUME}</td>
        `;
          gapUpMinusTwoToMinusFivePercent.appendChild(
            gapUpMinusTwoToMinusFiveRow
          );
        }

        // Gap Down Stocks (if needed)
        if (OPEN < pCLOSE) {
          const gapDownRow = document.createElement("tr");
          gapDownRow.innerHTML = `
            <td>${Symbol}</td>
            <td><strong>₹${LTP.toFixed(2)}</strong></td>
            <td class="${Change >= 0 ? "green" : "red"}">${Change.toFixed(
            2
          )}%</td>
            <td>GapDown</td>
             <td>${VOLUME}</td>
        `;
          gapDownList.appendChild(gapDownRow);
        }
        // Gap Down Stocks (-2% To -5%)
        if (OPEN < pCLOSE && Change >= 2 && Change <= 5) {
          const gapDownTowToFiveRow = document.createElement("tr");
          gapDownTowToFiveRow.innerHTML = `
            <td>${Symbol}</td>
            <td><strong>₹${LTP.toFixed(2)}</strong></td>
            <td class="${Change >= 0 ? "green" : "red"}">${Change.toFixed(
            2
          )}%</td>
            <td>GapDown</td>
             <td>${VOLUME}</td>
        `;
          gapDownTowToFivePercent.appendChild(gapDownTowToFiveRow);
        }
        // Gap Down Stocks (-2% To -5%)
        if (OPEN < pCLOSE && Change <= -2 && Change >= -5) {
          const gapDownMinusTwoToMinusFiveRow = document.createElement("tr");
          gapDownMinusTwoToMinusFiveRow.innerHTML = `
            <td>${Symbol}</td>
            <td><strong>₹${LTP.toFixed(2)}</strong></td>
            <td class="${Change >= 0 ? "green" : "red"}">${Change.toFixed(
            2
          )}%</td>
            <td>GapDown</td>
             <td>${VOLUME}</td>
        `;
          gapDownMinusTwoToMinusFivePercent.appendChild(
            gapDownMinusTwoToMinusFiveRow
          );
        }
        // Stocks (%Change)
        if ((Change >= 2 && Change <= 5) || (Change <= -2 && Change >= -5)) {
          const ChangeOfRow = document.createElement("tr");
          ChangeOfRow.innerHTML = `
            <td>${Symbol}</td>
            <td><strong>₹${LTP.toFixed(2)}</strong></td>
            <td class="${Change >= 0 ? "green" : "red"}">${Change.toFixed(
            2
          )}%</td>
            <td>${VOLUME}</td>`;
          ChangeOfPercent.appendChild(ChangeOfRow);
        }
        // Stocks (+2% to +5%)
        if (Change >= 2 && Change <= 5) {
          const twoToFivePercentRow = document.createElement("tr");
          twoToFivePercentRow.innerHTML = `
            <td>${Symbol}</td>
            <td><strong>₹${LTP.toFixed(2)}</strong></td>
            <td class="${Change >= 0 ? "green" : "red"}">${Change.toFixed(
            2
          )}%</td>
            <td>${VOLUME}</td>`;
          twoToFivePercent.appendChild(twoToFivePercentRow);
        }
        // Stocks (-2% to -5%)
        if (Change <= -2 && Change >= -5) {
          const minusTwoToMinusFivePercentRow = document.createElement("tr");
          minusTwoToMinusFivePercentRow.innerHTML = `<td>${Symbol}</td>
            <td><strong>₹${LTP.toFixed(2)}</strong></td>
            <td class="${Change >= 0 ? "green" : "red"}">${Change.toFixed(
            2
          )}%</td>
            <td>${VOLUME}</td>`;
          minusTwoToMinusFivePercent.appendChild(minusTwoToMinusFivePercentRow);
        }
        // Stock N/P(2 To 5)%
        if (Change > 5 || Change < -5) {
          const fiveToUpperRow = document.createElement("tr");
          fiveToUpperRow.innerHTML = `<td>${Symbol}</td>
            <td><strong>₹${LTP.toFixed(2)}</strong></td>
            <td class="${Change >= 0 ? "green" : "red"}">${Change.toFixed(
            2
          )}%</td>
            <td>${VOLUME}</td>`;
          fiveToUpperDown.appendChild(fiveToUpperRow);
        }
        // Stocks (+5% to Upper)
        if (Change > 5) {
          const fiveToUpRow = document.createElement("tr");
          fiveToUpRow.innerHTML = `<td>${Symbol}</td>
           <td><strong>₹${LTP.toFixed(2)}</strong></td>
            <td class="${Change >= 0 ? "green" : "red"}">${Change.toFixed(
            2
          )}%</td>
            <td>${VOLUME}</td>`;
          fiveToUpper.appendChild(fiveToUpRow);
        }
        //         // Stocks (-5% to Down)
        if (Change < -5) {
          const fiveToDownRow = document.createElement("tr");
          fiveToDownRow.innerHTML = `<td>${Symbol}</td>
            <td><strong>₹${LTP.toFixed(2)}</strong></td>
            <td class="${Change >= 0 ? "green" : "red"}">${Change.toFixed(
            2
          )}%</td>
            <td>${VOLUME}</td>`;
          fiveToDown.appendChild(fiveToDownRow);
        }
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

fetchData();

setInterval(fetchData, 60000);
