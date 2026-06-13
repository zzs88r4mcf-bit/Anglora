'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Accueil', icon: HomeIcon },
  { href: '/program', label: 'Programme', icon: GridIcon },
  { href: '/stats', label: 'Stats', icon: ChartIcon },
];

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function GridIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function ChartIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" strokeWidth={active ? 3 : 2} />
      <line x1="12" y1="20" x2="12" y2="4" strokeWidth={active ? 3 : 2} />
      <line x1="6" y1="20" x2="6" y2="14" strokeWidth={active ? 3 : 2} />
    </svg>
  );
}

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-brand-gray-border">
      <div className="max-w-lg mx-auto flex">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex-1 flex flex-col items-center justify-center py-3 gap-0.5 transition-colors ${
                active ? 'text-brand-green' : 'text-brand-gray'
              }`}
            >
              <Icon active={active} />
              <span className={`text-[10px] font-medium ${active ? 'text-brand-green' : 'text-brand-gray'}`}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
      {/* iPhone safe area */}
      <div className="h-safe-area-inset-bottom" />
    </nav>
  );
}
