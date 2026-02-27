// ===================== COMMAND CENTER DATA =====================
export const commandCenterKPIs = [
    { label: 'Total Sheets Produced', value: '68,350', icon: 'sheets', color: 'cyan', sub: '' },
    { label: 'Total Power Consumption (kWh)', value: '10,580', icon: 'power', color: 'orange', sub: '' },
    { label: 'Overall Plant Utilization (%)', value: '87%', icon: 'utilization', color: 'green', sub: '' },
    { label: 'Total Hammer Strokes', value: '48,260', icon: 'hammer', color: 'cyan', sub: '' },
    { label: 'Average Conveyor Speed', value: '45.8', unit: 'm/min', icon: 'speed', color: 'cyan', sub: '' },
];

export const lineWiseData = [
    { line: 'Line 1', shift: 'Shift 1', produced1: 5256, produced2: 1371, hammer: 906, speed: '45.1', speedUnit: 'm/min', power: '55.6', powerUnit: 'kWh', status: 'Running', priority: 'Running', statusColor: 'green' },
    { line: 'Line 2', shift: 'Shift 2', produced1: 5356, produced2: 1911, hammer: 908, speed: '45.0', speedUnit: 'm/min', power: '53.3', powerUnit: 'kWh', status: 'Running', priority: 'Running', statusColor: 'green' },
    { line: 'Line 3', shift: 'Shift 1', produced1: 5864, produced2: 1637, hammer: 799, speed: '45.3', speedUnit: 'm/min', power: '55.2', powerUnit: 'kWh', status: 'Running', priority: 'Running', statusColor: 'green' },
    { line: 'Line 4', shift: 'Shift 1', produced1: 5356, produced2: 1847, hammer: 738, speed: '45.3', speedUnit: 'm/min', power: '59.3', powerUnit: 'kWh', status: 'Running', priority: 'Running', statusColor: 'green' },
    { line: 'Line 5', shift: 'Shift 3', produced1: 5410, produced2: 1730, hammer: 798, speed: '45.4', speedUnit: 'm/min', power: '59.5', powerUnit: 'kWh', status: 'Running', priority: 'Maintenance', statusColor: 'yellow' },
    { line: 'Line 6', shift: 'Shift 3', produced1: 5887, produced2: 1059, hammer: 696, speed: '49.3', speedUnit: 'm/min', power: '26.8', powerUnit: 'kWh', status: 'Running', priority: 'Maintenance', statusColor: 'yellow' },
    { line: 'Line 7', shift: 'Shift 3', produced1: 5629, produced2: 1586, hammer: 755, speed: '56.7', speedUnit: 'm/min', power: '59.3', powerUnit: 'kWh', status: 'Running', priority: 'Idle', statusColor: 'orange' },
];

export const productionComparison = [
    { name: '50', shift1: 23800, shift2: 0, shift3: 0 },
    { name: '25', shift1: 0, shift2: 21400, shift3: 0 },
    { name: '55', shift1: 0, shift2: 0, shift3: 23300 },
];

export const shiftPerformance = [
    { name: 'Shift 1', value: 23600 },
    { name: 'Shift 2', value: 21400 },
    { name: 'Shift 3', value: 21400 },
];

export const powerConsumptionShifts = [
    { time: '06:00', value: 30 },
    { time: '08:00', value: 32 },
    { time: '10:00', value: 35 },
    { time: '12:00', value: 38 },
    { time: '14:00', value: 36 },
    { time: '16:00', value: 34 },
    { time: '18:00', value: 33 },
    { time: '20:00', value: 31 },
    { time: '22:00', value: 29 },
];

export const heatmapData = [
    { line: 'Line 1', s1v1: 6.8, s1v2: 6.4, s2v1: 6.8, s2v2: 6.4, s3v1: 6.8, s3v2: 6.4 },
    { line: 'Line 2', s1v1: 6.2, s1v2: 6.4, s2v1: 6.2, s2v2: 6.4, s3v1: 6.2, s3v2: 6.4 },
    { line: 'Line 3', s1v1: 6.5, s1v2: 6.3, s2v1: 6.5, s2v2: 6.3, s3v1: 6.5, s3v2: 6.3 },
    { line: 'Line 4', s1v1: 6.7, s1v2: 6.1, s2v1: 6.7, s2v2: 6.1, s3v1: 6.7, s3v2: 6.1 },
    { line: 'Line 5', s1v1: 6.4, s1v2: 6.6, s2v1: 6.4, s2v2: 6.6, s3v1: 6.4, s3v2: 6.6 },
];

export const efficiencyData = [
    { label: 'Shift 1', val1: 6.83, val2: 6.84 },
    { label: 'Shift 2', val1: 6.23, val2: 6.44 },
    { label: 'Shift 3', val1: 6.23, val2: 6.44 },
];

export const efficiencyData2 = [
    { label: 'Shift 1', val1: 6.8, val2: 6.4 },
    { label: 'Shift 2', val1: 6.2, val2: 6.4 },
];

// ===================== ACTIVITY LOG DATA =====================
export const activityLogEntries = [
    { time: '15:03:52', event: 'Coil Loaded', sensor: 'Proximity Sensor', value: '75', status: 'In Progress' },
    { time: '15:02:18', event: 'Sheet Detected', sensor: 'Proximity Sensor', value: '908', status: 'Completed' },
    { time: '15:01:45', event: 'Hammer Stroke Cou', sensor: 'Proximity Sensor', value: '45.2', status: 'In Progress' },
    { time: '14:58:01', event: 'Coil Loaded', sensor: 'Proximity Sensor', value: '193', status: 'Completed' },
    { time: '14:56:33', event: 'Coil Unloaded', sensor: 'Conveyor Speed Sens', value: '34.10', valueUnit: 'm/min', status: 'Completed' },
    { time: '14:53:18', event: 'Hammer Stroke Cou', sensor: 'Proximity Sensor', value: '96', status: 'Completed' },
    { time: '14:52:05', event: 'Coil Loaded', sensor: 'Proximity Sensor', value: '193', status: 'Completed' },
    { time: '14:50:27', event: 'Coil Unloaded', sensor: 'Conveyor Speed Sens', value: '45.1', status: 'Completed' },
    { time: '14:48:00', event: 'Sheet Detected', sensor: 'Proximity Sensor', value: '86.5', valueUnit: 'm/min', status: 'Completed' },
];

export const productionSummary = {
    totalCoils: 82,
    totalSheets: 6240,
    avgSpeed: 45.1,
    totalEnergy: 1640,
};

export const activityTimelineData = (() => {
    const data = [];
    for (let h = 6; h <= 15; h++) {
        for (let m = 0; m < 60; m += 5) {
            const time = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
            const running = 30 + Math.floor(Math.random() * 15);
            const idle = Math.random() > 0.7 ? 5 + Math.floor(Math.random() * 10) : 0;
            data.push({ time, running, idle });
        }
    }
    return data;
})();

export const miniTimelineData = (() => {
    const data = [];
    for (let h = 6; h <= 15; h++) {
        for (let m = 0; m < 60; m += 10) {
            const time = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
            const running = 25 + Math.floor(Math.random() * 20);
            const idle = Math.random() > 0.6 ? 5 + Math.floor(Math.random() * 10) : 0;
            data.push({ time, running, idle });
        }
    }
    return data;
})();

// ===================== ROTARY OVERVIEW DATA =====================
export const rotaryKPIs = [
    { label: 'Total Sheets Processed', value: '12,450', sub: 'Proximity Sensor Count' },
    { label: 'Hammer Stroke Count', value: '8,920' },
    { label: 'Conveyor Belt Speed', value: '45.0', unit: 'm/min' },
    { label: 'Total Power Consumption', value: '3,280', unit: 'kWh' },
    { label: 'Machine Utilization', value: '86%', showBar: true, barPercent: 86 },
];

export const sheetCountData = (() => {
    const data = [];
    const baseValues = [1100, 1200, 1300, 1350, 1500, 1600, 1800, 2000, 2100, 1900, 1700, 1500, 1400, 1500, 1600, 1700, 1800, 1650, 1500, 1400];
    for (let i = 0; i < 20; i++) {
        const h = 6 + Math.floor(i * 0.5);
        const m = (i % 2) * 30;
        data.push({
            time: `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`,
            count: baseValues[i] + Math.floor(Math.random() * 200 - 100),
        });
    }
    return data;
})();

export const hourlyOutputData = [
    { hour: '07:00', sheets: 600 },
    { hour: '08:00', sheets: 750 },
    { hour: '09:00', sheets: 500 },
    { hour: '10:00', sheets: 850 },
    { hour: '11:00', sheets: 1200 },
    { hour: '12:00', sheets: 1000 },
    { hour: '13:00', sheets: 800 },
    { hour: '14:00', sheets: 650 },
    { hour: '15:00', sheets: 500 },
];

export const powerConsumptionData = (() => {
    const data = [];
    for (let h = 6; h <= 15; h++) {
        for (let m = 0; m < 60; m += 15) {
            const time = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
            const base = 300 + Math.sin((h - 6) * 0.5) * 50;
            data.push({
                time,
                kw: Math.floor(base + Math.random() * 40 - 20),
            });
        }
    }
    return data;
})();

// ===================== MACHINE ANALYTICS DATA =====================
export const machineAnalyticsKPIs = [
    { label: 'Hammer Strokes per Minute', value: '94', sub: 'HAMMER STROKES PER MINUTE' },
    { label: 'Efficiency', value: '87.4', icon: 'bulb', sub: 'OUTPUT PER KWH' },
    { label: 'Downtime', running: true, idle: true },
];

export const conveyorSpeedData = (() => {
    const data = [];
    for (let h = 6; h <= 15; h++) {
        for (let m = 0; m < 60; m += 10) {
            const time = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
            const base = 40 + Math.sin((h - 6) * 0.3 + m * 0.01) * 10;
            data.push({
                time,
                speed: Math.round((base + Math.random() * 8 - 4) * 10) / 10,
            });
        }
    }
    return data;
})();

export const scatterData = (() => {
    const data = [];
    for (let i = 0; i < 50; i++) {
        const power = 50 + Math.random() * 600;
        const strokes = power * 0.15 + Math.random() * 20 - 10;
        data.push({
            power: Math.round(power),
            strokes: Math.round(Math.max(10, strokes)),
        });
    }
    return data.sort((a, b) => a.power - b.power);
})();

export const alerts = [
    {
        type: 'warning',
        title: 'Overload Warning',
        message: 'High power load detected.',
        time: '14:35',
    },
    {
        type: 'warning',
        title: 'Low Speed Alert',
        message: 'Conveyor speed dropped below 10 m/min.',
        time: '08:20',
    },
];

export const conveyorSpeedVariation = (() => {
    const data = [];
    for (let h = 6; h <= 15; h++) {
        for (let m = 0; m < 60; m += 5) {
            const time = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
            const base = 42 + Math.sin((h - 6) * 0.4 + m * 0.02) * 8;
            data.push({
                time,
                speed: Math.round((base + Math.random() * 6 - 3) * 10) / 10,
                avg: Math.round((base) * 10) / 10,
            });
        }
    }
    return data;
})();
