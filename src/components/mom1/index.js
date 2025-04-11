import {
    ResponsiveContainer,
    ComposedChart,
    Bar,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    Brush,
} from "recharts";
import { Typography, Card } from "antd";

const { Title } = Typography;

const data = [
    { month: "W2436", unitsSoldPercent: 40, transactionsPercent: 40 },
    { month: "W2437", unitsSoldPercent: 52, transactionsPercent: 52 },
    { month: "W2438", unitsSoldPercent: 54, transactionsPercent: 54 },
    { month: "W2439", unitsSoldPercent: 54, transactionsPercent: 54 },
    { month: "W2440", unitsSoldPercent: 70, transactionsPercent: 70 },
    { month: "W2441", unitsSoldPercent: 35, transactionsPercent: 35 },
    { month: "W2442", unitsSoldPercent: 35, transactionsPercent: 35 },
    { month: "W2443", unitsSoldPercent: 35, transactionsPercent: 35 },
    { month: "W2444", unitsSoldPercent: 70, transactionsPercent: 70 },
    { month: "W2445", unitsSoldPercent: 54, transactionsPercent: 54 },
    { month: "W2446", unitsSoldPercent: 54, transactionsPercent: 54 },
    { month: "W2447", unitsSoldPercent: 54, transactionsPercent: 54 },
    { month: "W2448", unitsSoldPercent: 28, transactionsPercent: 28 },
    { month: "W2449", unitsSoldPercent: 53, transactionsPercent: 53 },
    { month: "W2450", unitsSoldPercent: 53, transactionsPercent: 53 },
    { month: "W2451", unitsSoldPercent: 63, transactionsPercent: 63 },
    { month: "W2452", unitsSoldPercent: 34, transactionsPercent: 34 },
    { month: "W2501", unitsSoldPercent: 19, transactionsPercent: 19 },
    { month: "W2502", unitsSoldPercent: 9, transactionsPercent: 9 },
    { month: "W2503", unitsSoldPercent: 13, transactionsPercent: 13 },
    { month: "W2506", unitsSoldPercent: 6, transactionsPercent: 6 },
    { month: "W2507", unitsSoldPercent: 19, transactionsPercent: 19 },
    { month: "W2508", unitsSoldPercent: 16, transactionsPercent: 16 },
    { month: "W2509", unitsSoldPercent: 19, transactionsPercent: 19 },
    { month: "W2510", unitsSoldPercent: 7, transactionsPercent: 7 },
    { month: "W2511", unitsSoldPercent: 6, transactionsPercent: 6 },
    { month: "W2512", unitsSoldPercent: 14, transactionsPercent: 14 },
    { month: "W2513", unitsSoldPercent: 19, transactionsPercent: 19 },
    { month: "W2514", unitsSoldPercent: 23, transactionsPercent: 23 },
];

const MySalesChart3Mom = () => {
    return (
        <Card
            style={{
                borderRadius: 16,
                padding: 24,
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                background: "#fff",
            }}
            styles={{ body: { padding: 0 } }}
        >
            <div style={{ padding: "16px 24px 0" }}>
                <Title
                    level={4}
                    style={{ marginBottom: 24, textAlign: "center", fontWeight: 600 }}
                >
                    📈 WK2426-WK2514仓库异常分析 (%)
                </Title>
            </div>

            {/* Scrollable container for wide charts */}
            <div style={{ width: "100%", overflowX: "auto" }}>
                <div style={{ width: Math.max(1000, data.length * 80) }}>
                    <ResponsiveContainer width="100%" height={400}>
                        <ComposedChart 
                        data={data}
                        // margin={{ top: 20, right: 20, bottom: 60, left: 20 }} // 👈 this is key
                        >
                            {/* Bolder Grid */}
                            <CartesianGrid stroke="#bfbfbf" strokeWidth={1.5} strokeDasharray="4 4" />

                            {/* X and Y Axis */}
                            <XAxis
                                dataKey="month"
                                style={{ fontSize: 12 }}
                                angle={-10}
                                dy={10}
                            />
                            <YAxis
                                tick={{ fontSize: 13 }}
                                label={{ value: "Percentage (%)", angle: -90, position: "insideLeft" }}
                                domain={[0, 100]}
                            />

                            {/* Tooltip & Legend */}
                            <Tooltip
                                contentStyle={{
                                    background: "#fff",
                                    border: "1px solid #e6f7ff",
                                    borderRadius: 8,
                                    fontSize: 13,
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                                }}
                                formatter={(value) => `${value}%`}
                            />
                            <Legend iconType="circle" verticalAlign="top" height={36} />

                            {/* Bar and Line Charts */}
                            <Bar
                                dataKey="unitsSoldPercent"
                                fill="url(#blueGradient)"
                                radius={[10, 10, 0, 0]}
                                barSize={36}
                                name="占比合计 %"
                                label={{ position: "top", fontSize: 12, fill: "#595959" }} // 👈 shows value
                            />

                            <Line
                                type="monotone"
                                dataKey="transactionsPercent"
                                stroke="#fa541c"
                                strokeWidth={3}
                                dot={{ r: 5, stroke: "#fff", strokeWidth: 2 }}
                                activeDot={{ r: 7 }}
                                name="占比合计 %"
                            />


                            {/* Zoom Brush */}
                            <Brush
                                dataKey="month"
                                height={30}
                                stroke="#1890ff"
                                travellerWidth={10}
                                tickFormatter={(tick) => tick}
                            />

                            {/* Gradient Fill */}
                            <defs>
                                <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#1890ff" stopOpacity={0.9} />
                                    <stop offset="95%" stopColor="#40a9ff" stopOpacity={0.6} />
                                </linearGradient>
                            </defs>
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Card>
    );
};

export default MySalesChart3Mom;
