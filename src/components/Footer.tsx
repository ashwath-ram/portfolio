const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-mono text-muted-foreground text-sm">
          &lt;/&gt; Built by{" "}
          <span className="text-primary">Ashwathram Murugan</span> · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
