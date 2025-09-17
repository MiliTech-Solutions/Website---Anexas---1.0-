import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 md:px-6">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-foreground">
          <span className="bg-gradient-to-r from-accent to-primary text-transparent bg-clip-text">Anexas</span>
        </Link>
        <p className="text-sm text-muted-foreground text-center md:text-right">
          &copy; {new Date().getFullYear()} Anexas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
