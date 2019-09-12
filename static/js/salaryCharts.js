function salaryBarChart(playerID) {
    var salaries;
    var url = "/api/mysql/query";
    var data = {
        query: `SELECT yearID AS x0, salary AS y0 FROM salarys WHERE playerID="${playerID}"`,
    };
    jQuery.post(url, data).then(result => {
        let data = JSON.parse(result);
        let salaryData = PS.sqlToArray(data);
        PS.barChart('salaryBar', salaryData, { svgHeight: 250, svgWidth: 1000, xLabel: "Year", yLabel: "Sweenie Salary", barColor: "green" });
    });
}

function salaryLineChart(player1, player2) {
    var url = "/api/mysql/query";
    var sql =`SELECT t1.x0, y0, y1 FROM
        (SELECT yearID as x0, salary as y0 from salarys WHERE playerID = "${player1}") as t1
        LEFT JOIN
        (SELECT yearID as x0, salary as y1 from salarys WHERE playerID = "${player2}") as t2
        ON t1.x0 = t2.x0`    
    var data = {
        query: sql,
    };
    jQuery.post(url, data).then(result => {
        let data = JSON.parse(result);
        let salaryData = PS.sqlToArray(data);
        PS.lineChart('salaryLine', salaryData, { legend: ['Sweenie', 'Torred'], svgHeight: 250, svgWidth: 1000, xLabel: "Year", yLabel: "Sweenie vs Torred Salaries", lineColor: "orange", points: true });
    });
}