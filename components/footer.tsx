import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#e0e0e0] py-12">
      <div className="container mx-auto px-8 md:px-12">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-light tracking-wider text-[#222222] mb-4">HERVIN</h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Creative studio specializing in digital experiences
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium text-[#222222] mb-4 tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/servicios", label: "Services" },
                { href: "/sobre-mi", label: "About" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#666666] hover:text-[#00adb5] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-[#222222] mb-4 tracking-wider uppercase">Contact</h4>
            <ul className="space-y-2 text-sm text-[#666666]">
              <li>
                <a href="mailto:hola@hervin.com" className="hover:text-[#00adb5] transition-colors">
                  hola@hervin.com
                </a>
              </li>
              <li>
                <a href="tel:+34123456789" className="hover:text-[#00adb5] transition-colors">
                  +34 123 456 789
                </a>
              </li>
              <li>Madrid, España</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-medium text-[#222222] mb-4 tracking-wider uppercase">Follow</h4>
            <div className="flex flex-col gap-2">
              {["LinkedIn", "Instagram", "Twitter", "Dribbble"].map((social) => (
                <a key={social} href="#" className="text-sm text-[#666666] hover:text-[#00adb5] transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#e0e0e0] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#666666]">© 2025 Hervin Creative Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/aviso-legal" className="text-sm text-[#666666] hover:text-[#00adb5] transition-colors">
              Legal Notice
            </Link>
            <Link href="/aviso-legal" className="text-sm text-[#666666] hover:text-[#00adb5] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
