import React from 'react';
import SEO from '../components/SEO';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy | Your Data Matters | Spin the Wheels"
        description="Read the privacy policy for Spin the Wheels. Learn how we protect your data and privacy while you use our free online spinning wheel tools."
        keywords="privacy policy, data protection, user privacy, spin the wheels, online wheel, decision maker"
        canonical="/privacy-policy"
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy matters to us. Discover how Spin the Wheels keeps your data safe and ensures your experience is secure and anonymous.
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200/50">
            <div className="prose prose-lg max-w-none text-gray-700">
              
              {/* Introduction */}
              <div className="mb-8 p-6 bg-indigo-50 rounded-xl border-l-4 border-indigo-500">
                <h2 className="text-2xl font-bold text-indigo-900 mb-3">Our Privacy Promise</h2>
                <p className="text-indigo-800">
                  At Spin the Wheels, we're not just another tech company that collects your data. We're a team that believes privacy should be the default, not an afterthought. We've built our tool from the ground up to work without knowing anything about you - and we're proud of that.
                </p>
              </div>

              {/* Information We Don't Collect */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Don't Collect</h2>
                <p className="mb-4">
                  Here's the refreshing truth: Spin the Wheels operates with a <strong>zero-data collection</strong> approach. While other apps track your every move, we deliberately don't collect:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li><strong>Personal Information:</strong> No names, emails, phone numbers, or addresses</li>
                  <li><strong>Usage Data:</strong> No tracking of your wheel spins or decisions</li>
                  <li><strong>Device Information:</strong> No IP addresses, browser data, or device identifiers</li>
                  <li><strong>Location Data:</strong> No GPS or location tracking</li>
                  <li><strong>Cookies:</strong> No tracking cookies or persistent identifiers</li>
                </ul>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-800 font-medium">
                    ✅ <strong>Here's the honest truth:</strong> We genuinely don't know who you are, what you're deciding, or how you use our tool. And honestly? We prefer it that way. Your decisions are yours alone.
                  </p>
                </div>
              </section>

              {/* How Our Tool Works */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How Spin the Wheels Works</h2>
                <p className="mb-4">
                  Ever wondered how our spinning wheel actually works? It's beautifully simple - everything happens right in your browser. Here's the magic behind the scenes:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">🎯 Your Decisions Stay Local</h3>
                    <p className="text-blue-800 text-sm">
                      All wheel customizations and spins happen on your device. Nothing is sent to our servers.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-900 mb-2">🔒 No Server Storage</h3>
                    <p className="text-purple-800 text-sm">
                      We don't have databases storing user information. Your data never reaches our servers.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-2">⚡ Instant Results</h3>
                    <p className="text-green-800 text-sm">
                      Random results are generated locally using your device's built-in random number generator.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-900 mb-2">🔄 Temporary Storage</h3>
                    <p className="text-orange-800 text-sm">
                      Any wheel settings are stored temporarily in your browser and cleared when you close the tab.
                    </p>
                  </div>
                </div>
              </section>

              {/* Third-Party Services */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
                <p className="mb-4">
                  We keep things lean and clean. Here are the minimal third-party services we use to keep Spin the Wheels running smoothly:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li><strong>Hosting Provider:</strong> Our website is hosted on reliable cloud infrastructure</li>
                  <li><strong>Analytics:</strong> We may use basic analytics to understand website performance (no personal data)</li>
                  <li><strong>No Advertising:</strong> We don't use advertising networks or tracking pixels</li>
                </ul>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-yellow-800">
                    <strong>Note:</strong> While we don't collect data, third-party services may have their own privacy policies. We choose partners who respect user privacy.
                  </p>
                </div>
              </section>

              {/* Children's Privacy */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                <p className="mb-4">
                  Spin the Wheels is designed to be safe for users of all ages - from kids to grandparents. Since we don't collect personal information, we don't knowingly collect data from children under 13.
                </p>
                <p>
                  Parents and guardians can breathe easy knowing their children can use our tool safely. No data collection means no worries about what information might be gathered.
                </p>
              </section>

              {/* Your Rights */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
                <p className="mb-4">
                  Even though we don't collect your data (and never will), you still have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li><strong>Access:</strong> Request information about any data we might have (spoiler: none)</li>
                  <li><strong>Deletion:</strong> Ask us to delete any data (spoiler: nothing to delete)</li>
                  <li><strong>Correction:</strong> Request corrections to any data (spoiler: no data to correct)</li>
                  <li><strong>Portability:</strong> Request data transfer (spoiler: no data to transfer)</li>
                </ul>
                <p>
                  To exercise these rights, contact us at <a href="mailto:infospinthewheels@gmail.com" className="text-indigo-600 hover:text-indigo-800">infospinthewheels@gmail.com</a>
                </p>
              </section>

              {/* Changes to Policy */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                <p className="mb-4">
                  We may update this privacy policy from time to time. Any changes will be posted on this page with an updated "Last updated" date.
                </p>
                <p>
                  We encourage you to review this policy periodically. Your continued use of Spin the Wheels after any changes constitutes acceptance of the updated policy.
                </p>
              </section>

              {/* Contact Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this privacy policy or our privacy practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>Email:</strong> <a href="mailto:infospinthewheels@gmail.com" className="text-indigo-600 hover:text-indigo-800">infospinthewheels@gmail.com</a></p>
                  <p className="mb-2"><strong>Website:</strong> <a href="/" className="text-indigo-600 hover:text-indigo-800">spinthewheels.com</a></p>
                  <p><strong>Response Time:</strong> We typically respond within 24 hours</p>
                </div>
              </section>

              {/* Final Note */}
              <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200">
                <h2 className="text-xl font-bold text-indigo-900 mb-3">Our Commitment to You</h2>
                <p className="text-indigo-800">
                  We built Spin the Wheels with privacy as a core feature, not an afterthought. Your trust means everything to us, and we're committed to maintaining the highest standards of privacy protection. Thank you for choosing a tool that actually respects your privacy - it's refreshing, isn't it?
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage; 