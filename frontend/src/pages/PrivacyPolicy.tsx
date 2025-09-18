import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Users, Database, Bell } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <Eye className="w-6 h-6 text-primary" />,
      title: "Information We Collect",
      content: [
        "Account information (name, email, student ID)",
        "Usage data and interaction patterns",
        "Location data for campus navigation (with permission)",
        "Academic preferences and study habits",
        "Communication within study groups and forums"
      ]
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "How We Use Your Information",
      content: [
        "Provide personalized AI assistance and recommendations",
        "Enable campus navigation and location services",
        "Facilitate connections with other students",
        "Improve our services and user experience",
        "Send important updates and notifications"
      ]
    },
    {
      icon: <Lock className="w-6 h-6 text-primary" />,
      title: "Data Security",
      content: [
        "End-to-end encryption for sensitive communications",
        "Secure cloud storage with industry-standard protection",
        "Regular security audits and vulnerability assessments",
        "Access controls and authentication protocols",
        "Data backup and recovery systems"
      ]
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Sharing and Disclosure",
      content: [
        "We do not sell your personal information to third parties",
        "Information shared only with your explicit consent",
        "Anonymous usage statistics for service improvement",
        "Required disclosures only when legally mandated",
        "Academic institutions may access basic academic data"
      ]
    },
    {
      icon: <Bell className="w-6 h-6 text-primary" />,
      title: "Your Rights and Controls",
      content: [
        "Access and download your personal data",
        "Request correction of inaccurate information",
        "Delete your account and associated data",
        "Control notification preferences and privacy settings",
        "Opt-out of data processing for certain purposes"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                  This privacy policy applies to all ASTRA services and applications.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Introduction */}
          <Card className="mb-8 border-accent/20 bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Introduction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                ASTRA ("we," "us," or "our") is committed to protecting your privacy and ensuring transparency 
                about our data practices. This Privacy Policy describes how we collect, use, share, and protect 
                information about you when you use our educational platform and services. By using ASTRA, you 
                agree to the collection and use of information in accordance with this policy.
              </p>
            </CardContent>
          </Card>

          {/* Privacy Sections */}
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
                <CardTitle className="text-xl">Data Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We retain your personal information for as long as necessary to provide our services and fulfill 
                  the purposes outlined in this privacy policy. Specifically:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Account data is retained while your account is active</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Usage data is typically retained for 2 years for analytics purposes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Communication data in study groups is retained for the duration of the group</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  ASTRA is designed for college students who are typically 18 years or older. We do not knowingly 
                  collect personal information from children under 13. If we become aware that we have collected 
                  personal information from a child under 13 without verification of parental consent, we take 
                  steps to remove that information from our servers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> privacy@astra.edu</p>
                  <p><strong>Address:</strong> Student Services Office, KIIT University</p>
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

export default PrivacyPolicy;