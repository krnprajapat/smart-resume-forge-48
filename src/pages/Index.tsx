import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";

interface ResumeData {
  personalDetails: {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    address: string;
  };
  summary: string;
  workExperience: Array<{
    company: string;
    role: string;
    duration: string;
    description: string;
  }>;
  education: Array<{
    degree: string;
    institution: string;
    year: string;
    description: string;
  }>;
  skills: string[];
  projects: Array<{
    title: string;
    link: string;
    description: string;
  }>;
  achievements: Array<{
    title: string;
    year: string;
  }>;
}

const initialData: ResumeData = {
  personalDetails: {
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    address: "",
  },
  summary: "",
  workExperience: [],
  education: [],
  skills: [],
  projects: [],
  achievements: [],
};

const Index = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialData);
  const [selectedTemplate, setSelectedTemplate] = useState("modern");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-subtle">
      <Header />
      
      <main className="flex-1 container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Panel - Resume Form */}
          <div className="space-y-6">
            <ResumeForm 
              data={resumeData} 
              onChange={setResumeData}
            />
          </div>

          {/* Right Panel - Live Preview */}
          <div className="space-y-6">
            <div className="sticky top-24">
              <ResumePreview 
                data={resumeData}
                selectedTemplate={selectedTemplate}
                onTemplateChange={setSelectedTemplate}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
