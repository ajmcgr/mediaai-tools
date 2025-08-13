import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { Menu, Star } from "lucide-react";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "About", path: "/about" },
    { name: "Documentation", path: "/documentation" },
    { name: "Sign In", path: "/signin" },
  ];

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="p-2">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px]">
          <div className="flex flex-col space-y-6 mt-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 text-primary fill-primary" />
              <span className="text-xl font-bold text-foreground">media</span>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <Button asChild className="btn-primary">
              <a 
                href="https://trymedia.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Open Media AI
              </a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;