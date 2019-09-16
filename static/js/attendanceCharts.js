function attendanceBarChart(year) {
    var url = `/api/${_database}/query`;
    var query = {
        mysql: {
            query: `SELECT teamID AS x0, attendance AS y0 FROM teams WHERE yearID="${year}"`,
        },
        mongodb: {
            fields: {'teamID':'x0', 'attendance':'y0'},
            collection: ['teams'],
            where: {'yearID': `${year}`}
        }
    };
    jQuery.post(url, query[_database]).then(str => {
        let resultset = JSON.parse(str);
        console.log(resultset);
        let teamData = PS.sqlToArray(resultset);
        PS.barChart('teamBar', teamData, { svgHeight: 250, svgWidth: 1000, xLabel: "Team", yLabel: `Attendance - ${year}` });
    });
}

function attendanceLineChart(year) {
    var url = `/api/${_database}/query`;
    var data = {
        mysql: {
            query: `SELECT teamID AS x0, attendance AS y0 FROM teams WHERE yearID="${year}"`,
        },
        mongodb: {
            fields: {'teamID':'x0', 'attendance':'y0'},
            collection: ['teams'],
            where: {'yearID': `${year}`}
        }
    };
    jQuery.post(url, data[_database]).then(str => {
        let resultset = JSON.parse(str);
        console.log(resultset);
        let teamData = PS.sqlToArray(resultset);
        PS.lineChart('teamLine', teamData, { legend: ["Attendance"], svgHeight: 250, svgWidth: 1000, xLabel: "Team", yLabel: `Attendance - ${year}`, curve: 'CatmullRom', points: true });
    });
}
