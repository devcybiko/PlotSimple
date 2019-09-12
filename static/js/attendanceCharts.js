function attendanceBarChart(year) {
    var url = "/api/mysql/query";
    var sql = `SELECT teamID AS x0, attendance AS y0 FROM teams WHERE yearID="${year}"`;
    var data = {
        query: sql,
    };
    jQuery.post(url, data).then(str => {
        let resultset = JSON.parse(str);
        console.log(resultset);
        let teamData = PS.sqlToArray(resultset);
        console.log(teamData);
        PS.barChart('teamBar', teamData, { svgHeight: 250, svgWidth: 1000, xLabel: "Team", yLabel: `Attendance - ${year}` });
    });
}

function attendanceLineChart(year) {
    var url = "/api/mysql/query";
    var sql = `SELECT teamID AS x0, attendance AS y0 FROM teams WHERE yearID="${year}"`;
    var data = {
        query: sql,
    };
    jQuery.post(url, data).then(str => {
        let resultset = JSON.parse(str);
        console.log(resultset);
        let teamData = PS.sqlToArray(resultset);
        console.log(teamData);
        PS.lineChart('teamLine', teamData, { legend: ["Attendance"], svgHeight: 250, svgWidth: 1000, xLabel: "Team", yLabel: `Attendance - ${year}`, curve: 'CatmullRom', points: true });
    });
}
