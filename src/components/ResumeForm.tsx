import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Plus, Save, Sparkles, X } from "lucide-react";

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

interface ResumeFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

const ResumeForm = ({ data, onChange }: ResumeFormProps) => {
  const [newSkill, setNewSkill] = useState("");

  const updateField = (section: keyof ResumeData, field: any, value: any) => {
    onChange({
      ...data,
      [section]: typeof data[section] === 'object' && !Array.isArray(data[section])
        ? { ...data[section], [field]: value }
        : value
    });
  };

  const addArrayItem = (section: keyof ResumeData, item: any) => {
    onChange({
      ...data,
      [section]: [...(data[section] as any[]), item]
    });
  };

  const removeArrayItem = (section: keyof ResumeData, index: number) => {
    onChange({
      ...data,
      [section]: (data[section] as any[]).filter((_, i) => i !== index)
    });
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      addArrayItem('skills', newSkill.trim());
      setNewSkill("");
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Enter Your Information</h2>
        <p className="text-muted-foreground">Fill out the sections below to build your professional resume</p>
      </div>

      <Accordion type="multiple" defaultValue={["personal", "summary"]} className="space-y-4">
        {/* Personal Details */}
        <AccordionItem value="personal">
          <AccordionTrigger>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Personal Details</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={data.personalDetails.name}
                      onChange={(e) => updateField('personalDetails', 'name', e.target.value)}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={data.personalDetails.email}
                      onChange={(e) => updateField('personalDetails', 'email', e.target.value)}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={data.personalDetails.phone}
                      onChange={(e) => updateField('personalDetails', 'phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input
                      id="linkedin"
                      value={data.personalDetails.linkedin}
                      onChange={(e) => updateField('personalDetails', 'linkedin', e.target.value)}
                      placeholder="linkedin.com/in/johndoe"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="github">GitHub (Optional)</Label>
                    <Input
                      id="github"
                      value={data.personalDetails.github}
                      onChange={(e) => updateField('personalDetails', 'github', e.target.value)}
                      placeholder="github.com/johndoe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={data.personalDetails.address}
                      onChange={(e) => updateField('personalDetails', 'address', e.target.value)}
                      placeholder="City, State, Country"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        {/* Professional Summary */}
        <AccordionItem value="summary">
          <AccordionTrigger>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Professional Summary</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="p-6">
                <Label htmlFor="summary">Summary</Label>
                <Textarea
                  id="summary"
                  value={data.summary}
                  onChange={(e) => updateField('summary', null, e.target.value)}
                  placeholder="Write a compelling professional summary that highlights your key achievements and career goals..."
                  rows={4}
                  className="mt-2"
                />
                <Button variant="outline" size="sm" className="mt-2">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI Enhance
                </Button>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        {/* Skills */}
        <AccordionItem value="skills">
          <AccordionTrigger>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Skills</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="p-6">
                <div className="flex space-x-2 mb-4">
                  <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill..."
                    onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                  />
                  <Button onClick={addSkill} size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                      <span>{skill}</span>
                      <button onClick={() => removeArrayItem('skills', index)}>
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Action Buttons */}
      <div className="flex space-x-4 mt-8">
        <Button variant="outline" className="flex-1">
          <Save className="w-4 h-4 mr-2" />
          Save Draft
        </Button>
        <Button variant="default" className="flex-1">
          Generate Resume
        </Button>
      </div>
    </div>
  );
};

export default ResumeForm;