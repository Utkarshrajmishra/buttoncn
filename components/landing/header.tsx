import Wrapper from "./wrapper";

const Header = () => {
  return (
    <header className="h-12 border-b border-neutral-200 flex items-center justify-center">
      <Wrapper className="flex items-center justify-between">
        <p className="text-neutral-800 tracking-tight text-lg font-semibold">
          Fluxera
        </p>

        <nav className="flex gap-6 text-sm text-neutral-700">
          <p className="cursor-pointer hover:text-neutral-900">Docs</p>
          <p className="cursor-pointer hover:text-neutral-900">Installation</p>
          <p className="cursor-pointer hover:text-neutral-900">Components</p>
        </nav>
      </Wrapper>
    </header>
  );
};

export default Header;
