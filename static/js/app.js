const PS = PlotSimple;
const _database = "mongodb";

function main() {
    attendanceBarChart(2001);
    attendanceLineChart(2001);
    salaryBarChart('sweenmi01');
    salaryLineChart('sweenmi01', 'tuckemi01');
    salaryTable('ATL', 2015);
}

main();
