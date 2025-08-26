import { Button } from "@/components/ui/button";
import { FileText, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <FileText className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Smart Resume Builder</h1>
              <p className="text-xs text-muted-foreground">Professional resumes made easy</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="/templates" className="text-muted-foreground hover:text-primary transition-colors">
              Templates
            </a>
            <a href="/my-resumes" className="text-muted-foreground hover:text-primary transition-colors">
              My Resumes
            </a>
            <a href="/profile" className="text-muted-foreground hover:text-primary transition-colors">
              Profile
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              Sign In
            </Button>
            <Button variant="default" size="sm">
              Get Started
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;