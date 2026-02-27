import { AlertTriangle, Pin } from 'lucide-react';
import { useState } from 'react';

export default function AlertPanel({ alerts }) {
    const [dismissed, setDismissed] = useState(false);

    if (dismissed) {
        return (
            <div className="dashboard-card p-4 flex flex-col items-center justify-center">
                <p className="text-xs text-[#64748b]">No active alerts</p>
            </div>
        );
    }

    return (
        <div className="dashboard-card border border-[rgba(100,116,139,0.2)]">
            <div className="p-3 border-b border-[rgba(100,116,139,0.1)] flex items-center justify-between">
                <h3 className="text-[13px] font-semibold text-white tracking-wide">Alerts</h3>
                <div className="flex gap-1">
                    <span className="w-1 h-1 rounded-full bg-[#64748b]" />
                    <span className="w-1 h-1 rounded-full bg-[#64748b]" />
                    <span className="w-1 h-1 rounded-full bg-[#64748b]" />
                </div>
            </div>

            <div className="p-4 space-y-4">
                {alerts.map((alert, i) => (
                    <div key={i} className="flex gap-3">
                        <div className="mt-0.5">
                            <AlertTriangle size={15} strokeWidth={2.5} className="text-[#ff9100]" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[13px] font-bold text-[#ff9100] tracking-wide">{alert.title}</p>
                            <p className="text-[11px] text-[#94a3b8] mt-1">{alert.message}</p>
                            <p className="text-[10px] text-[#00d084] mt-1">{alert.time}</p>
                        </div>
                        <Pin size={13} className="text-[#64748b] mt-1 shrink-0" />
                    </div>
                ))}
            </div>

            <div className="px-4 pb-4 mt-2">
                <button
                    onClick={() => setDismissed(true)}
                    className="w-full py-2 text-[11px] font-bold text-white tracking-wider bg-[#141e30] border border-[rgba(100,116,139,0.3)] rounded hover:bg-[#1e2c45] transition-colors uppercase"
                >
                    RESET
                </button>
            </div>
        </div>
    );
}
