export function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/15 mt-16 py-8 text-sm text-center text-foreground/70">
      <div className="container flex flex-col gap-2 items-center">
        <p>&copy; {new Date().getFullYear()} nAItronS. All rights reserved.</p>
        <p className="flex gap-3">
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/terms" className="hover:underline">Terms</a>
        </p>
      </div>
    </footer>
  );
}
