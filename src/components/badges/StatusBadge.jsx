const statusClasses = {
    Running: 'badge-running',
    Idle: 'badge-idle',
    Maintenance: 'badge-maintenance',
    Completed: 'badge-completed',
    'In Progress': 'badge-in-progress',
    Critical: 'badge-critical',
};

export default function StatusBadge({ status }) {
    return (
        <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-medium ${statusClasses[status] || 'badge-running'}`}>
            {status}
        </span>
    );
}
