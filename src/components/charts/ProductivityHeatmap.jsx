export default function ProductivityHeatmap({ data }) {
    // data is expected to be an array of objects: { line: 'Line 1', s1: [colors], s2: [colors], s3: [colors] }

    // A helper to render a row of blocks for a shift
    const renderBlocks = (colors) => (
        <div className="flex gap-[2px]">
            {colors.map((color, i) => (
                <div
                    key={i}
                    className="w-4 h-3 rounded-[1px]"
                    style={{ backgroundColor: color }}
                />
            ))}
        </div>
    );

    return (
        <div className="w-full text-xs overflow-x-auto mt-2 pb-2">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="text-left w-12"></th>
                        <th className="text-center font-normal text-[#64748b] text-[10px] pb-2">Shift 1</th>
                        <th className="text-center font-normal text-[#64748b] text-[10px] pb-2">Shift 2</th>
                        <th className="text-center font-normal text-[#64748b] text-[10px] pb-2">Shift 3</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i}>
                            <td className="text-[#94a3b8] text-[10px] py-1 pr-2 text-right whitespace-nowrap">{row.line}</td>
                            <td className="px-1"><div className="flex justify-center">{renderBlocks(row.s1)}</div></td>
                            <td className="px-1"><div className="flex justify-center">{renderBlocks(row.s2)}</div></td>
                            <td className="px-1"><div className="flex justify-center">{renderBlocks(row.s3)}</div></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td className="text-center text-[#64748b] text-[9px] pt-1">Shift 1</td>
                        <td className="text-center text-[#64748b] text-[9px] pt-1">Shift 2</td>
                        <td className="text-center text-[#64748b] text-[9px] pt-1">Shift 3</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}
