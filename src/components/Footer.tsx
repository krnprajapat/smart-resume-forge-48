const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-semibold text-foreground mb-4">Smart Resume Builder</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Create professional resumes that get you noticed. Our AI-powered platform helps you craft the perfect resume for any job.
            </p>
            <p className="text-xs text-muted-foreground">
              © 2024 Smart Resume Builder. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/templates" className="hover:text-primary transition-colors">Templates</a></li>
              <li><a href="/examples" className="hover:text-primary transition-colors">Examples</a></li>
              <li><a href="/pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="/features" className="hover:text-primary transition-colors">Features</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/help" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;