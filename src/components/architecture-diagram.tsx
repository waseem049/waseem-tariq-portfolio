export function ArchitectureDiagram() {
  return (
    <div className="w-full h-[420px] relative flex items-center justify-center p-[24px]">
      {/* Left box: Frontend Next.js */}
      <div
        className="absolute left-[8%] top-[28%] w-[100px] h-[100px] bg-[var(--surface-2)] border border-[var(--line)] rounded-[10px] shadow-sm flex flex-col items-center justify-center gap-3 p-3"
      >
        <div className="flex items-center gap-2 w-full mb-2">
          <div className="flex gap-1">
            <span className="w-[3px] h-[3px] rounded-full bg-[var(--ink-4)]" />
            <span className="w-[3px] h-[3px] rounded-full bg-[var(--ink-4)]" />
            <span className="w-[3px] h-[3px] rounded-full bg-[var(--ink-4)]" />
          </div>
          <span className="text-[10px] font-[500] text-[var(--ink-4)]">Frontend</span>
        </div>
        <div className="w-[24px] h-[24px] rounded-full bg-[var(--surface-3)] border border-[var(--line-2)] flex items-center justify-center">
          <span className="text-[8px]">N</span>
        </div>
        <span className="text-[9px] font-[500] text-[var(--ink)] leading-tight text-center">
          Next.js
        </span>
      </div>

      {/* Right-top box: API Gateway */}
      <div
        className="absolute right-[6%] top-[10%] w-[100px] h-[90px] bg-[var(--surface-2)] border border-[var(--line)] rounded-[10px] shadow-sm flex flex-col items-center justify-center p-3"
      >
        <div className="w-[32px] h-[32px] rounded-full bg-[var(--surface-3)] border border-[var(--line-2)] flex items-center justify-center mb-2">
          <span className="text-[10px] text-[var(--ink-4)]">⌘</span>
        </div>
        <span className="text-[9px] font-[500] text-[var(--ink)] text-center">
          API Gateway
        </span>
        <span className="text-[8px] font-[500] text-[var(--ink-4)] mt-[2px]">
          Spring Cloud
        </span>
      </div>

      {/* Micro-services stack (right side, vertical) */}
      <div className="absolute right-[6%] top-[28%] flex flex-col gap-[4px] items-center">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-[6px] border border-[var(--line-2)] bg-[var(--surface)]">
          <span className="w-[10px] h-[10px] rounded-full border border-[var(--ink-4)]" />
          <span className="text-[9px] font-[500] text-[var(--ink-3)]">Auth Service</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-[6px] border border-[var(--line-2)] bg-[var(--surface)]">
          <span className="w-[10px] h-[10px] rounded-full border border-[var(--ink-4)]" />
          <span className="text-[9px] font-[500] text-[var(--ink-3)]">User Service</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-[6px] border border-[var(--line-2)] bg-[var(--surface)]">
          <span className="w-[10px] h-[10px] rounded-full border border-[var(--ink-4)]" />
          <span className="text-[9px] font-[500] text-[var(--ink-3)]">Content Service</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-[6px] border border-[var(--line-2)] bg-[var(--surface)]">
          <span className="w-[10px] h-[10px] rounded-full border border-[var(--ink-4)]" />
          <span className="text-[9px] font-[500] text-[var(--ink-3)]">Learning Service</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-[6px] border border-[var(--line-2)] bg-[var(--surface)] opacity-50">
          <span className="w-[10px] h-[10px] rounded-full border border-[var(--ink-4)] opacity-50" />
          <span className="text-[9px] font-[500] text-[var(--ink-3)] opacity-50">…</span>
        </div>
      </div>

      {/* Database box */}
      <div
        className="absolute right-[4%] bottom-[12%] w-[70px] h-[70px] bg-[var(--surface-2)] border border-[var(--line)] rounded-full shadow-sm flex flex-col items-center justify-center p-2"
      >
        <div className="w-[24px] h-[24px] rounded-full bg-[var(--surface-3)] border border-[var(--line-2)] flex items-center justify-center mb-1">
          <span className="text-[10px] text-[var(--ink-4)]">⌂</span>
        </div>
        <span className="text-[9px] font-[500] text-[var(--ink)] text-center leading-tight">
          PostgreSQL
        </span>
        <span className="text-[8px] font-[500] text-[var(--ink-4)]">
          Database
        </span>
      </div>

      {/* Bottom row: Docker, Nginx, VPS */}
      <div className="absolute bottom-[10%] left-[20%] right-[20%] flex justify-center gap-[30px]">
        <div className="flex flex-col items-center gap-1">
          <div className="w-[24px] h-[24px] rounded-full bg-[var(--surface-3)] border border-[var(--line-2)] flex items-center justify-center">
            <span className="text-[10px] text-[var(--ink-4)]">🐳</span>
          </div>
          <span className="text-[9px] font-[500] text-[var(--ink)]">Docker</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-[24px] h-[24px] rounded-full bg-[var(--surface-3)] border border-[var(--line-2)] flex items-center justify-center">
            <span className="text-[10px] text-[var(--ink-4)]">N</span>
          </div>
          <span className="text-[9px] font-[500] text-[var(--ink)]">Nginx</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-[24px] h-[24px] rounded-full bg-[var(--surface-3)] border border-[var(--line-2)] flex items-center justify-center">
            <span className="text-[10px] text-[var(--ink-4)]">V</span>
          </div>
          <span className="text-[9px] font-[500] text-[var(--ink)]">VPS Deployment</span>
        </div>
      </div>

      {/* Connector lines */}
      <div
        className="absolute top-[38%] left-[20%] w-[30%] h-[1] bg-[var(--line-2)] opacity-50"
      />
      <div
        className="absolute top-[26%] left-[18%] w-[2] h-[34] bg-[var(--line-2)] opacity-50"
      />
      <div
        className="absolute top-[60%] right-[14%] w-[1] h-[30] bg-[var(--line-2)] opacity-50"
      />
      <div
        className="absolute top-[34%] right-[16%] w-[28%] h-[1] bg-[var(--line-2)] opacity-50"
      />
      <div
        className="absolute top-[82%] left-[48%] w-[1] h-[16] bg-[var(--line-2)] opacity-50"
      />
    </div>
  );
}
