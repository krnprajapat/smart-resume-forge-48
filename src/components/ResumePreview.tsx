import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Download, Share, Printer, Eye, CheckCircle, AlertTriangle } from "lucide-react";

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

interface ResumePreviewProps {
  data: ResumeData;
  selectedTemplate: string;
  onTemplateChange: (template: string) => void;
}

const ResumePreview = ({ data, selectedTemplate, onTemplateChange }: ResumePreviewProps) => {
  const atsScore = 85; // Mock ATS score

  return (
    <div className="w-full max-w-2xl">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Live Preview</h2>
            <p className="text-muted-foreground">See your resume update in real-time</p>
          </div>
          <div className="flex items-center space-x-2">
            <Eye className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Auto-updating</span>
          </div>
        </div>

        {/* Template Selector */}
        <div className="flex items-center space-x-4 mb-4">
          <label className="text-sm font-medium text-foreground">Template:</label>
          <Select value={selectedTemplate} onValueChange={onTemplateChange}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="modern">Modern</SelectItem>
              <SelectItem value="classic">Classic</SelectItem>
              <SelectItem value="minimal">Minimal</SelectItem>
              <SelectItem value="creative">Creative</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* ATS Score */}
        <div className="bg-success-light border border-success/20 rounded-lg p-3 mb-4">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-success">ATS Score: {atsScore}%</span>
            <Badge variant="outline" className="text-xs">
              Excellent
            </Badge>
          </div>
          <p className="text-xs text-success mt-1">Your resume is optimized for Applicant Tracking Systems</p>
        </div>
      </div>

      {/* Resume Preview */}
      <Card className="mb-6 shadow-medium">
        <CardContent className="p-8">
          {/* Header */}
          <div className="text-center mb-6 pb-4 border-b border-border">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {data.personalDetails.name || "Your Name"}
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              {data.personalDetails.email && <span>{data.personalDetails.email}</span>}
              {data.personalDetails.phone && <span>{data.personalDetails.phone}</span>}
              {data.personalDetails.address && <span>{data.personalDetails.address}</span>}
            </div>
            {(data.personalDetails.linkedin || data.personalDetails.github) && (
              <div className="flex flex-wrap justify-center gap-4 text-sm text-primary mt-2">
                {data.personalDetails.linkedin && <span>{data.personalDetails.linkedin}</span>}
                {data.personalDetails.github && <span>{data.personalDetails.github}</span>}
              </div>
            )}
          </div>

          {/* Summary */}
          {data.summary && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-foreground mb-2 text-primary">Professional Summary</h2>
              <p className="text-sm text-foreground leading-relaxed">{data.summary}</p>
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-foreground mb-3 text-primary">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Work Experience */}
          {data.workExperience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-foreground mb-3 text-primary">Work Experience</h2>
              <div className="space-y-4">
                {data.workExperience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium text-foreground">{exp.role || "Position Title"}</h3>
                      <span className="text-xs text-muted-foreground">{exp.duration}</span>
                    </div>
                    <p className="text-sm text-primary font-medium mb-2">{exp.company || "Company Name"}</p>
                    <p className="text-sm text-foreground">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-foreground mb-3 text-primary">Education</h2>
              <div className="space-y-3">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium text-foreground">{edu.degree || "Degree"}</h3>
                      <span className="text-xs text-muted-foreground">{edu.year}</span>
                    </div>
                    <p className="text-sm text-primary">{edu.institution || "Institution"}</p>
                    {edu.description && <p className="text-sm text-foreground mt-1">{edu.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {!data.personalDetails.name && !data.summary && data.skills.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">Start Building Your Resume</h3>
              <p className="text-muted-foreground">Fill out the form on the left to see your resume come to life</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Button variant="outline" className="w-full">
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
        <Button variant="outline" className="w-full">
          <Share className="w-4 h-4 mr-2" />
          Share Link
        </Button>
        <Button variant="outline" className="w-full">
          <Printer className="w-4 h-4 mr-2" />
          Print
        </Button>
      </div>

      {/* ATS Tips */}
      <Card className="mt-6 bg-accent-light border-accent/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm text-accent flex items-center">
            <AlertTriangle className="w-4 h-4 mr-2" />
            ATS Optimization Tips
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <ul className="text-xs text-accent space-y-1">
            <li>• Use standard section headings like "Work Experience" and "Education"</li>
            <li>• Include relevant keywords from the job description</li>
            <li>• Use simple, clean formatting without complex layouts</li>
            <li>• Save as PDF to preserve formatting</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumePreview;