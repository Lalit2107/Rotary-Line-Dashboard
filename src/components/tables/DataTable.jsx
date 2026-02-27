export default function DataTable({ columns, data, className = '' }) {
    return (
        <div className={`overflow-x-auto ${className}`}>
            <table className="w-full text-sm">
                <thead>
                    <tr className="border-b border-[rgba(56,189,248,0.08)]">
                        {columns.map((col, i) => (
                            <th
                                key={i}
                                className="text-left px-3 py-2.5 text-[11px] font-medium text-slate-400 uppercase tracking-wider"
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIdx) => (
                        <tr
                            key={rowIdx}
                            className="border-b border-[rgba(56,189,248,0.04)] hover:bg-white/[0.02] transition-colors"
                        >
                            {columns.map((col, colIdx) => (
                                <td key={colIdx} className="px-3 py-2.5 text-slate-300 text-[13px]">
                                    {col.render ? col.render(row) : row[col.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
