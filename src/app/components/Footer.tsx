export function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 py-12 px-6 border-t border-blue-500/20 relative overflow-hidden">
      {/* Tech background elements */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl mb-4 flex items-center gap-2">
              <span className="text-blue-400">Stahl</span> Systems Group
            </h3>
            <p className="text-sm leading-relaxed">
              Making complex digital solutions simple and accessible for businesses of all sizes.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Website Design & Hosting</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Call Management</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Social Media & Ads</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Database Integration</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Custom Software</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">SEO Optimization</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 transition-colors">kevin@stahlsystemsgroup.com</li>
              <li className="hover:text-blue-400 transition-colors">956-878-8083</li>
              <li>Serving Businesses Nationwide</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-500/20 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Stahl Systems Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
