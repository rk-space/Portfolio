export default function Footer() {
  return (
    <footer className="py-12 px-8 text-center border-t border-border text-secondary-foreground">
      <div className="mb-4">
        © {new Date().getFullYear()}{' '}
        <span className="font-semibold text-primary">Rushikesh Kharode</span>. All rights reserved.
      </div>
      <div className="text-sm">
        Designed & Built with ❤️ using Spring Boot & Angular
      </div>
    </footer>
  );
}
