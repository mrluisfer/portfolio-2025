import Content from './content';

function TerminalDot({ color }: { color: string }) {
  return <div className={`h-3 w-3 rounded-full ${color}`}></div>;
}

export default function Terminal() {
  return (
    <div className="py-[250px]">
      <div className="mx-auto w-[600px]">
        <div className="relative flex items-center rounded-t-lg bg-gray-300 px-4 py-2">
          <div className="absolute flex items-center gap-2">
            <TerminalDot color="bg-red-400" />
            <TerminalDot color="bg-yellow-400" />
            <TerminalDot color="bg-green-400" />
          </div>
          <p className="mx-auto font-mono opacity-50">Terminal</p>
        </div>
        <div className="rounded-b-lg bg-gray-100 px-4 py-4">
          <Content />
        </div>
      </div>
    </div>
  );
}
