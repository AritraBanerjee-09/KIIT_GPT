import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Shield, AlertTriangle, Scale, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  const sections = [
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "User Accounts and Eligibility",
      content: [
        "You must be a current college student to use ASTRA services",
        "Account registration requires a valid college email address (@kiit.ac.in)",
        "You are responsible for maintaining the security of your account",
        "One account per person; sharing accounts is prohibited",
        "You must provide accurate and current information during registration"
      ]
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Acceptable Use Policy",
      content: [
        "Use ASTRA only for educational and academic purposes",
        "Respect other users and maintain a positive community environment",
        "Do not share or distribute copyrighted materials without permission",
        "Prohibited: harassment, spam, harmful content, or illegal activities",
        "AI-generated content should be used as study assistance, not for cheating"
      ]
    },
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "Content and Intellectual Property",
      content: [
        "You retain ownership of content you create and share",
        "ASTRA has a license to use your content to provide and improve services",
        "Respect intellectual property rights of others",
        "Report any copyright infringement through our designated channels",
        "AI-generated content is provided for educational assistance only"
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-primary" />,
      title: "Service Availability and Limitations",
      content: [
        "ASTRA services are provided 'as is' without warranties",
        "We may modify, suspend, or discontinue services at any time",
        "Service availability may vary based on technical maintenance",
        "AI responses are generated automatically and may contain errors",
        "We are not responsible for academic decisions based on AI suggestions"
      ]
    },
    {
      icon: <Scale className="w-6 h-6 text-primary" />,
      title: "Liability and Disclaimers",
      content: [
        "ASTRA is not liable for any academic or personal decisions made using our platform",
        "We do not guarantee the accuracy of AI-generated content or recommendations",
        "Users are responsible for verifying information before acting on it",
        "Our total liability is limited to the amount paid for services (if any)",
        "We are not responsible for third-party content or external links"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Termination and Account Suspension",
      content: [
        "Either party may terminate the agreement at any time",
        "We may suspend accounts for violations of these terms",
        "Upon termination, your access to services will be discontinued",
        "You may download your data before account termination",
        "Certain provisions survive termination (privacy, intellectual property, etc.)"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Please read these terms carefully before using ASTRA. By using our services, you agree to these terms.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Last Updated */}
          <Card className="mb-8 border-accent/20 bg-background/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  <strong>Last Updated:</strong> December 15, 2024
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  These terms apply to all ASTRA services, including web and mobile applications.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Introduction */}
          <Card className="mb-8 border-accent/20 bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") govern your use of ASTRA, an AI-powered educational platform 
                designed for college students. By accessing or using our services, you agree to be bound by these 
                Terms. If you disagree with any part of these Terms, you may not access or use our services. 
                These Terms apply to all visitors, users, and others who access or use the service.
              </p>
            </CardContent>
          </Card>

          {/* Terms Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <Card key={index} className="border-accent/20 bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {section.icon}
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="mt-8 space-y-6">
            <Card className="border-accent/20 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Academic Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ASTRA is designed to assist with learning and study, not to facilitate academic dishonesty. Users must:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Use AI assistance as a learning tool, not for completing assignments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Follow their institution's academic integrity policies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Properly cite any sources or assistance received through ASTRA</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of any material 
                  changes via email or through a prominent notice on our platform. Your continued use of ASTRA 
                  after such modifications constitutes acceptance of the updated Terms. We recommend reviewing 
                  these Terms periodically for any changes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by and construed in accordance with the laws of India. Any disputes 
                  arising under these Terms shall be subject to the exclusive jurisdiction of the courts in 
                  Bhubaneswar, Odisha. If any provision of these Terms is found to be unenforceable, the 
                  remaining provisions will remain in full force and effect.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> legal@astra.edu</p>
                  <p><strong>Address:</strong> Legal Department, KIIT University, Bhubaneswar, Odisha, India</p>
                  <p><strong>Phone:</strong> +91 674 272 7777</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;