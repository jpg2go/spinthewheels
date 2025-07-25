import React from 'react';
import SEO from '../components/SEO';

const TermsOfServicePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Terms of Service | User Agreement | Spin the Wheels"
        description="Read the terms of service for Spin the Wheels. Understand your rights and responsibilities when using our free online spinning wheel tools."
        keywords="terms of service, user agreement, spin the wheels, online wheel, decision maker"
        canonical="/terms-of-service"
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Terms of Service
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our terms are designed to be clear and user-friendly, so you can enjoy Spin the Wheels with confidence and peace of mind.
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200/50">
            <div className="prose prose-lg max-w-none text-gray-700">
              
              {/* Introduction */}
              <div className="mb-8 p-6 bg-green-50 rounded-xl border-l-4 border-green-500">
                <h2 className="text-2xl font-bold text-green-900 mb-3">Welcome to Spin the Wheels</h2>
                <p className="text-green-800">
                  These terms govern your use of Spin the Wheels, our free online spinning wheel tool. By using our service, you agree to these terms. We've written them in plain English - no lawyer speak, no hidden surprises, just straightforward guidelines.
                </p>
              </div>

              {/* Acceptance of Terms */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing or using Spin the Wheels, you agree to these terms. If you don't agree with any part of them, please don't use our service - it's that simple.
                </p>
                <p>
                  These terms apply to everyone who uses our service - whether you're just browsing, creating wheels, or sharing them with friends.
                </p>
              </section>

              {/* Description of Service */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Provide</h2>
                <p className="mb-4">
                  Spin the Wheels is a free online tool that helps you make decisions through an interactive spinning wheel. Think of it as your digital decision-maker. Here's what we provide:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li><strong>Custom Wheel Creation:</strong> Build personalized spinning wheels with your own options</li>
                  <li><strong>Random Selection:</strong> Fair, unbiased random selection from your choices</li>
                  <li><strong>Pre-built Templates:</strong> Ready-to-use wheels for common scenarios</li>
                  <li><strong>Mobile Compatibility:</strong> Works on all devices and screen sizes</li>
                  <li><strong>No Registration Required:</strong> Start using immediately without creating accounts</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-blue-800 font-medium">
                    💡 <strong>Keep this in mind:</strong> Spin the Wheels is designed for entertainment and decision-making assistance. We don't guarantee the accuracy of results for critical life decisions.
                  </p>
                </div>
              </section>

              {/* User Responsibilities */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Responsibilities</h2>
                <p className="mb-4">
                  When using Spin the Wheels, we ask that you:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li><strong>Use Responsibly:</strong> Don't use our tool for illegal activities or harmful purposes</li>
                  <li><strong>Respect Others:</strong> Don't create content that's offensive, discriminatory, or inappropriate</li>
                  <li><strong>No Spam:</strong> Don't use our service to send spam or unsolicited content</li>
                  <li><strong>No Abuse:</strong> Don't attempt to overload our servers or interfere with service operation</li>
                  <li><strong>Legal Compliance:</strong> Use our service in compliance with applicable laws and regulations</li>
                </ul>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-yellow-800">
                    <strong>Prohibited Uses:</strong> Creating wheels with harmful, illegal, or inappropriate content is not allowed. We reserve the right to remove such content.
                  </p>
                </div>
              </section>

              {/* Intellectual Property */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-900 mb-2">🎨 Our Rights</h3>
                    <p className="text-purple-800 text-sm">
                      Spin the Wheels, including its design, code, and branding, is owned by us. You can use our service, but you can't copy or reproduce our tool.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-2">✨ Your Content</h3>
                    <p className="text-green-800 text-sm">
                      The wheel options and content you create belong to you. We don't claim ownership of your custom wheels or decisions.
                    </p>
                  </div>
                </div>
                <p className="mb-4">
                  You retain ownership of any content you create using our tool. However, you grant us a limited license to display and process your content solely for the purpose of providing our service.
                </p>
              </section>

              {/* Privacy and Data */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy and Data Protection</h2>
                <p className="mb-4">
                  Your privacy is important to us. Our privacy practices are detailed in our <a href="/privacy-policy" className="text-indigo-600 hover:text-indigo-800 font-semibold">Privacy Policy</a>, which is incorporated into these terms by reference.
                </p>
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <p className="text-indigo-800">
                    <strong>Key Point:</strong> We don't collect, store, or track your personal information or wheel decisions. Your data stays on your device.
                  </p>
                </div>
              </section>

              {/* Disclaimers */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimers and Limitations</h2>
                <p className="mb-4">
                  Spin the Wheels is provided "as is" without any warranties. Here's the honest truth about what you should expect:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li><strong>No Guarantees:</strong> We don't guarantee that our service will be uninterrupted or error-free</li>
                  <li><strong>Random Results:</strong> While we strive for fairness, we don't guarantee specific outcomes</li>
                  <li><strong>Use at Your Own Risk:</strong> You use our service at your own risk and discretion</li>
                  <li><strong>No Professional Advice:</strong> Our tool is for entertainment and assistance, not professional decision-making</li>
                </ul>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-red-800 font-medium">
                    ⚠️ <strong>Important:</strong> Don't rely on our tool for critical life decisions, financial choices, or medical decisions. Use common sense and professional advice when needed.
                  </p>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="mb-4">
                  To the maximum extent permitted by law, Spin the Wheels and its creators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Loss of profits, data, or use</li>
                  <li>Business interruption</li>
                  <li>Personal injury or property damage</li>
                  <li>Decisions made based on our tool's results</li>
                </ul>
                <p>
                  Our total liability to you for any claims arising from your use of our service shall not exceed the amount you paid for our service (which is $0, since our service is free).
                </p>
              </section>

              {/* Service Availability */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Availability</h2>
                <p className="mb-4">
                  We do our best to keep Spin the Wheels available 24/7, but like any online service, we can't guarantee it'll never go down. Sometimes we need to:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Perform maintenance or updates</li>
                  <li>Fix technical issues</li>
                  <li>Respond to security concerns</li>
                  <li>Make improvements to our service</li>
                </ul>
                <p>
                  We'll try to minimize downtime and provide notice when possible, but some interruptions may be unavoidable.
                </p>
              </section>

              {/* Termination */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                <p className="mb-4">
                  You can stop using our service anytime you want. We may also need to suspend access if you:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Violate these terms of service</li>
                  <li>Use our service for illegal or harmful purposes</li>
                  <li>Attempt to interfere with our service operation</li>
                  <li>Create content that violates our guidelines</li>
                </ul>
                <p>
                  Upon termination, your right to use our service will cease immediately.
                </p>
              </section>

              {/* Changes to Terms */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to These Terms</h2>
                <p className="mb-4">
                  We might update these terms from time to time. When we do, we'll update the "Last updated" date at the top of this page.
                </p>
                <p className="mb-4">
                  We encourage you to check back occasionally. If you keep using Spin the Wheels after we make changes, that means you're okay with the new terms.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <p className="text-orange-800">
                    <strong>Notification:</strong> For significant changes, we may notify users through our website or other means.
                  </p>
                </div>
              </section>

              {/* Governing Law */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <p className="mb-4">
                  These terms of service are governed by and construed in accordance with the laws of the jurisdiction where Spin the Wheels operates.
                </p>
                <p>
                  Any disputes arising from these terms or your use of our service shall be resolved through appropriate legal channels in the applicable jurisdiction.
                </p>
              </section>

              {/* Contact Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about these terms of service, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>Email:</strong> <a href="mailto:infospinthewheels@gmail.com" className="text-indigo-600 hover:text-indigo-800">infospinthewheels@gmail.com</a></p>
                  <p className="mb-2"><strong>Website:</strong> <a href="/" className="text-indigo-600 hover:text-indigo-800">spinthewheels.com</a></p>
                  <p><strong>Response Time:</strong> We typically respond within 24 hours</p>
                </div>
              </section>

              {/* Final Note */}
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h2 className="text-xl font-bold text-green-900 mb-3">Thank You for Using Spin the Wheels</h2>
                <p className="text-green-800">
                  We've written these terms to be fair, transparent, and actually readable. Our goal is to provide a great tool while protecting both you and us. If you have any questions or suggestions about these terms, we'd love to hear from you - we're always open to making things better.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfServicePage; 